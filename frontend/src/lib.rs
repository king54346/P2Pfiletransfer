use std::fmt;
use std::io::Write;
use wasm_bindgen::prelude::*;
use web_sys::{File, FileReader};
use serde_pickle::{from_slice, Value};
use flate2::write::GzEncoder;
use flate2::Compression;
use snap::write::FrameEncoder;
use lz4::{Decoder, EncoderBuilder};
use std::io::prelude::*;
use std::io::Cursor;
use flate2::bufread::GzDecoder;
use snap::read::FrameDecoder;
use zstd::{decode_all, encode_all};

#[wasm_bindgen]
extern "C" {
    fn alert(s: &str);
}

#[wasm_bindgen]
#[derive(Copy, Clone)]
pub enum CompressionAlgorithm {
    Gzip,
    Zstd,
    Snappy,
    Lz4,
}

// Define a custom error type for compression operations
#[derive(Debug)]
pub struct CompressionError {
    message: String,
}

impl fmt::Display for CompressionError {
    fn fmt(&self, f: &mut fmt::Formatter) -> fmt::Result {
        write!(f, "Compression error: {}", self.message)
    }
}

// Create a Result type alias for easier usage
type Result<T> = std::result::Result<T, CompressionError>;

// Public API functions
#[wasm_bindgen]
pub fn compress(data: &[u8], algorithm: CompressionAlgorithm) -> std::result::Result<Vec<u8>, String> {
    match algorithm {
        CompressionAlgorithm::Gzip => compress_gzip(data),
        CompressionAlgorithm::Zstd => compress_zstd(data),
        CompressionAlgorithm::Snappy => compress_snappy(data),
        CompressionAlgorithm::Lz4 => compress_lz4(data),
    }.map_err(|e| e.message)
}

#[wasm_bindgen]
pub fn decompress(data: &[u8], algorithm: CompressionAlgorithm) -> std::result::Result<Vec<u8>, String> {
    match algorithm {
        CompressionAlgorithm::Gzip => decompress_gzip(data),
        CompressionAlgorithm::Zstd => decompress_zstd(data),
        CompressionAlgorithm::Snappy => decompress_snappy(data),
        CompressionAlgorithm::Lz4 => decompress_lz4(data),
    }.map_err(|e| e.message)
}

// Helper function for creating errors
fn error(message: &str) -> CompressionError {
    CompressionError { message: message.to_string() }
}

// Internal implementation functions
fn compress_gzip(data: &[u8]) -> Result<Vec<u8>> {
    let mut encoder = GzEncoder::new(Vec::new(), Compression::default());
    encoder.write_all(data).map_err(|e| error(&format!("Gzip write error: {}", e)))?;
    encoder.finish().map_err(|e| error(&format!("Gzip finish error: {}", e)))
}

fn compress_zstd(data: &[u8]) -> Result<Vec<u8>> {
    encode_all(Cursor::new(data), 0)
        .map_err(|e| error(&format!("Zstd compression error: {}", e)))
}

fn compress_snappy(data: &[u8]) -> Result<Vec<u8>> {
    let mut encoder = FrameEncoder::new(Vec::new());
    encoder.write_all(data).map_err(|e| error(&format!("Snappy write error: {}", e)))?;
    encoder.into_inner().map_err(|e| error(&format!("Snappy finish error: {}", e)))
}

fn compress_lz4(data: &[u8]) -> Result<Vec<u8>> {
    let mut encoder = EncoderBuilder::new()
        .level(4)
        .build(Vec::new())
        .map_err(|e| error(&format!("LZ4 encoder creation error: {}", e)))?;

    encoder.write_all(data).map_err(|e| error(&format!("LZ4 write error: {}", e)))?;
    let (compressed_data, result) = encoder.finish();
    result.map_err(|e| error(&format!("LZ4 finish error: {}", e)))?;

    Ok(compressed_data)
}

fn decompress_gzip(data: &[u8]) -> Result<Vec<u8>> {
    let mut decoder = GzDecoder::new(data);
    let mut decompressed_data = Vec::new();
    decoder.read_to_end(&mut decompressed_data)
        .map_err(|e| error(&format!("Gzip decompress error: {}", e)))?;

    Ok(decompressed_data)
}

fn decompress_zstd(data: &[u8]) -> Result<Vec<u8>> {
    decode_all(Cursor::new(data))
        .map_err(|e| error(&format!("Zstd decompress error: {}", e)))
}

fn decompress_snappy(data: &[u8]) -> Result<Vec<u8>> {
    let mut decoder = FrameDecoder::new(Cursor::new(data));
    let mut decompressed_data = Vec::new();
    decoder.read_to_end(&mut decompressed_data)
        .map_err(|e| error(&format!("Snappy decompress error: {}", e)))?;

    Ok(decompressed_data)
}
fn decompress_lz4(data: &[u8]) -> Result<Vec<u8>> {
    let mut decoder = Decoder::new(data)
        .map_err(|e| error(&format!("LZ4 decoder creation error: {}", e)))?;

    let mut decompressed_data = Vec::new();
    decoder.read_to_end(&mut decompressed_data)
        .map_err(|e| error(&format!("LZ4 decompress error: {}", e)))?;

    Ok(decompressed_data)
}

// For more advanced usage with compression options
#[wasm_bindgen]
pub struct CompressionOptions {
    level: i32,
}

#[wasm_bindgen]
impl CompressionOptions {
    #[wasm_bindgen(constructor)]
    pub fn new() -> Self {
        Self { level: 0 }  // Default level
    }

    pub fn with_level(level: i32) -> Self {
        Self { level }
    }
}

// Enhanced version with compression options
#[wasm_bindgen]
pub fn compress_with_options(
    data: &[u8],
    algorithm: CompressionAlgorithm,
    options: CompressionOptions
) -> std::result::Result<Vec<u8>, String> {
    // Implement based on algorithm and options
    match algorithm {
        CompressionAlgorithm::Gzip => compress_gzip_with_level(data, options.level),
        CompressionAlgorithm::Zstd => compress_zstd_with_level(data, options.level),
        CompressionAlgorithm::Snappy => compress_snappy(data),  // Snappy doesn't use level
        CompressionAlgorithm::Lz4 => compress_lz4_with_level(data, options.level),
    }.map_err(|e| e.message)
}

// Additional implementations for level-based compression
fn compress_gzip_with_level(data: &[u8], level: i32) -> Result<Vec<u8>> {
    let level = if level <= 0 { Compression::default() }
    else { Compression::new(level as u32) };

    let mut encoder = GzEncoder::new(Vec::new(), level);
    encoder.write_all(data).map_err(|e| error(&format!("Gzip write error: {}", e)))?;
    encoder.finish().map_err(|e| error(&format!("Gzip finish error: {}", e)))
}

fn compress_zstd_with_level(data: &[u8], level: i32) -> Result<Vec<u8>> {
    encode_all(Cursor::new(data), level)
        .map_err(|e| error(&format!("Zstd compression error: {}", e)))
}

fn compress_lz4_with_level(data: &[u8], level: i32) -> Result<Vec<u8>> {
    let level = if level <= 0 { 4 } else { level as u32 };

    let mut encoder = EncoderBuilder::new()
        .level(level)
        .build(Vec::new())
        .map_err(|e| error(&format!("LZ4 encoder creation error: {}", e)))?;

    encoder.write_all(data).map_err(|e| error(&format!("LZ4 write error: {}", e)))?;
    let (compressed_data, result) = encoder.finish();
    result.map_err(|e| error(&format!("LZ4 finish error: {}", e)))?;

    Ok(compressed_data)
}

#[wasm_bindgen]
pub fn handle_file_upload(file: &File, algorithm: CompressionAlgorithm) -> std::result::Result<(), JsValue> {
    let file_reader = FileReader::new()?;

    let reader_clone = file_reader.clone();
    let onloadend_cb = Closure::wrap(Box::new(move |_event: web_sys::ProgressEvent| {
        let result = reader_clone.result().unwrap();
        let array = js_sys::Uint8Array::new(&result);
        let data = array.to_vec();
        // 根据选择的压缩算法压缩数据
        let compressed_data = match compress(&data, algorithm) {
            Ok(compressed_data) => compressed_data,
            Err(e) => {
                web_sys::console::error_1(&format!("Compression error: {}", e).into());
                return;
            }
        };
        // 使用 console.log 在浏览器的开发者工具中输出压缩后的文件内容
        web_sys::console::log_1(&format!("Compressed file content: {:?}", compressed_data).into());
    }) as Box<dyn FnMut(_)>);

    file_reader.set_onloadend(Some(onloadend_cb.as_ref().unchecked_ref()));
    file_reader.read_as_array_buffer(file)?;

    onloadend_cb.forget(); // Prevent closure from being dropped

    Ok(())
}



#[wasm_bindgen]
pub fn greet(name: &str) {
    alert(&format!("Hello, {}!", name));
}

#[cfg(test)]
mod tests {
    use std::fs::File;
    use crate::{handle_file_upload, CompressionAlgorithm};

    #[test]
    fn test_file_upload() {
        
    }
}