use std::io::Write;
use wasm_bindgen::prelude::*;
use web_sys::{File, FileReader};
use serde_pickle::{from_slice, Value};
use flate2::write::GzEncoder;
use flate2::Compression;
use zstd::stream::encode_all as zstd_encode_all;
use snap::write::FrameEncoder;
use lz4::EncoderBuilder;
use std::io::prelude::*;
use std::io::Cursor;
#[wasm_bindgen]
extern "C" {
    fn alert(s: &str);
}

#[wasm_bindgen]
pub enum CompressionAlgorithm {
    Gzip,
    Zstd,
    Snappy,
    Lz4,
}

#[wasm_bindgen]
pub fn handle_file_upload(file: &File, algorithm: CompressionAlgorithm) -> Result<(), JsValue> {
    let file_reader = FileReader::new()?;

    let reader_clone = file_reader.clone();
    let onloadend_cb = Closure::wrap(Box::new(move |_event: web_sys::ProgressEvent| {
        let result = reader_clone.result().unwrap();
        let array = js_sys::Uint8Array::new(&result);
        let data = array.to_vec();
        // 根据选择的压缩算法压缩数据
        let compressed_data = match algorithm {
            CompressionAlgorithm::Gzip => compress_gzip(&data),
            CompressionAlgorithm::Zstd => compress_zstd(&data),
            CompressionAlgorithm::Snappy => compress_snappy(&data),
            CompressionAlgorithm::Lz4 => compress_lz4(&data),
        };
        // 使用 console.log 在浏览器的开发者工具中输出压缩后的文件内容
        web_sys::console::log_1(&format!("Compressed file content: {:?}", compressed_data).into());
    }) as Box<dyn FnMut(_)>);

    file_reader.set_onloadend(Some(onloadend_cb.as_ref().unchecked_ref()));
    file_reader.read_as_array_buffer(file)?;

    onloadend_cb.forget(); // Prevent closure from being dropped

    Ok(())
}

fn compress_gzip(data: &[u8]) -> Vec<u8> {
    let mut encoder = GzEncoder::new(Vec::new(), Compression::default());
    encoder.write_all(data).expect("Failed to write data");
    encoder.finish().expect("Failed to finish compression")
}

fn compress_zstd(data: &[u8]) -> Vec<u8> {
    zstd_encode_all(Cursor::new(data), 0).expect("Failed to compress with zstd")
}

fn compress_snappy(data: &[u8]) -> Vec<u8> {
    let mut encoder = FrameEncoder::new(Vec::new());
    encoder.write_all(data).expect("Failed to write data");
    encoder.into_inner().expect("Failed to finish compression")
}

fn compress_lz4(data: &[u8]) -> Vec<u8> {
    let mut encoder = EncoderBuilder::new().level(4).build(Vec::new()).expect("Failed to create LZ4 encoder");
    encoder.write_all(data).expect("Failed to write data");
    let (compressed_data, result) = encoder.finish();
    result.expect("Failed to finish compression");
    compressed_data
}

#[wasm_bindgen]
pub fn greet(name: &str) {
    alert(&format!("Hello, {}!", name));
}

#[cfg(test)]
mod tests {
    #[test]
    fn test_parse_pickle() {
        println!("Running test_parse_pickle...");
    }
}