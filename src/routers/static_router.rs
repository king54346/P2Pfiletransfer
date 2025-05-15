use axum::{
    Router,
    routing::get,
    extract::Path,
    http::{StatusCode, header, HeaderMap},
    response::{IntoResponse, Response},
};
use axum::body::Body;
use axum::extract::Request;
use rust_embed::RustEmbed;
use tokio::net::TcpListener;
use mime_guess::from_path;
// 使用 RustEmbed 嵌入 frontend/dist 目录
#[derive(RustEmbed)]
#[folder = "$CARGO_MANIFEST_DIR/frontend/dist/"]
struct Assets;

// 处理 index.html 请求
pub async fn index_handler(req: Request) -> impl IntoResponse {
    // 获取完整的请求路径
    let path = req.uri().path().trim_start_matches('/');
    println!("收到请求: {}", path);

    // 空路径直接返回 index.html
    if path.is_empty() {
        return serve_file("index.html");
    }
    // 尝试查找是否存在匹配的静态资源
    // 1. 直接尝试完整路径
    if let Some(_) = Assets::get(path) {
        return serve_file(path);
    }
    // 2. 检查是否是资源文件（有文件扩展名）
    if path.contains('.') {
        // 如果请求包含扩展名但找不到对应文件，返回404
        println!("未找到静态资源: {}", path);
        return StatusCode::NOT_FOUND.into_response();
    }
    
    // 3. 所有其他请求（没有扩展名的路径）视为SPA路由
    println!("处理为SPA路由: {}", path);
    serve_file("index.html")
}
// 辅助函数：提供文件并设置正确的 MIME 类型
fn serve_file(path: &str) -> Response {
    match Assets::get(path) {
        Some(content) => {
            println!("提供文件: {}", path);
            let mime_type = if path.ends_with(".css") {
                "text/css".to_string()
            } else if path.ends_with(".js") {
                "application/javascript".to_string()
            } else if path.ends_with(".html") {
                "text/html; charset=utf-8".to_string()
            } else if path.ends_with(".svg") {
                "image/svg+xml".to_string()
            } else if path.ends_with(".png") {
                "image/png".to_string()
            } else if path.ends_with(".jpg") || path.ends_with(".jpeg") {
                "image/jpeg".to_string()
            } else if path.ends_with(".json") {
                "application/json".to_string()
            } else if path.ends_with(".woff") {
                "font/woff".to_string()
            } else if path.ends_with(".woff2") {
                "font/woff2".to_string()
            } else if path.ends_with(".ttf") {
                "font/ttf".to_string()
            } else if path.ends_with(".ico") {
                "image/x-icon".to_string()
            } else {
                from_path(path)
                    .first_or_octet_stream()
                    .to_string()
            };

            println!("MIME 类型: {}", mime_type);

            // 大多数静态资源可以缓存，但HTML应该每次都验证
            let cache_control = if path.ends_with(".html") {
                "no-cache"
            } else {
                "max-age=31536000, immutable"
            };

            Response::builder()
                .status(StatusCode::OK)
                .header(header::CONTENT_TYPE, mime_type)
                .header(header::CACHE_CONTROL, cache_control)
                .body(Body::from(content.data.to_vec()))
                .unwrap()
        }
        None => {
            println!("文件未找到: {}", path);
            StatusCode::NOT_FOUND.into_response()
        }
    }
    }
// 处理静态文件请求
pub async fn static_handler(path: &str) -> impl IntoResponse {
    println!("static_handler: {}", path);
    match Assets::get(&path) {
        Some(content) => {
            print!("sdfsdfsdf");
            let mime_type = from_path(path)
                .first_or_octet_stream()
                .to_string();

            Response::builder()
                .status(StatusCode::OK)
                .header(header::CONTENT_TYPE, mime_type)
                .body(axum::body::Body::from(content.data.to_vec()))
                .unwrap()
        }
        None => {
            StatusCode::NOT_FOUND.into_response()
        }
    }
}

// 对于未找到的静态文件请求，返回 index.html (SPA路由支持)
pub async fn fallback_handler(req: Request) -> impl IntoResponse {
    static_handler(req.uri().path().trim_start_matches('/')).await
}