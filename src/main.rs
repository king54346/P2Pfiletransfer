mod middleware;
mod result;
mod custom_extractor;

// mod setting;
mod routers;
mod utils;
mod entities;
mod errors;
mod logger;
mod controller;
mod config;
mod dtos;
mod repository;
use std::any::Any;
use std::net::SocketAddr;
use std::sync::Arc;
use axum::response::{Html, IntoResponse, Response};
use axum::{Extension, Router};
use http::{header, StatusCode};
use serde::{Deserialize, Serialize};
use tokio::net::TcpListener;
use tokio::signal;
use tower_http::catch_panic::CatchPanicLayer;
use tower_http::compression::CompressionLayer;
use tower_http::cors::CorsLayer;
use tower_http::sensitive_headers::SetSensitiveHeadersLayer;
use tower_http::trace;
use tracing::info;
use crate::routers::init_api_router;
use crate::repository::channel::get_or_create_channel_repo;

#[tokio::main]
async fn main() -> Result<(), std::io::Error>{
    let port = 3000; // TODO: 从配置文件中读取端口
    // let addr = format!("0.0.0.0:{}", port);

    
    let address = SocketAddr::from(([127, 0, 0, 1], port));// TODO: 从配置文件中设置是否允许外部访问

    let app = create_app().await;

    let listener = TcpListener::bind(address).await?;
    info!("Server listening on {}", &address);
    axum::serve(listener, app).with_graceful_shutdown(shutdown_signal()).await
}

pub async fn create_app() -> Router {
    // 创建ChannelRepo

    logger::setup();
    Router::new()
        .merge(init_api_router())
        .layer(
            (
                trace::TraceLayer::new_for_http()
                    .make_span_with(trace::DefaultMakeSpan::new().include_headers(true))
                    // 设置request和response的日志级别
                    //on_request,on_failure(请求失败的日志),on_response(请求处理完成的日志)
                    .on_request(trace::DefaultOnRequest::new().level(tracing::Level::INFO))
                    .on_response(trace::DefaultOnResponse::new().level(tracing::Level::INFO)),
                //  标记Authorization 请求头为敏感头，因此在日志中不会记录该头的值
                SetSensitiveHeadersLayer::new(std::iter::once(
                    header::AUTHORIZATION,
                )),
                CompressionLayer::new(),// 压缩响应数据，以减少带宽使用
                CorsLayer::permissive(),// 配置CORS
                CatchPanicLayer::custom(|panic_info:Box<dyn Any + Send + 'static>| {
                    // 提取 panic 的信息
                    let panic_message = if let Some(s) = panic_info.downcast_ref::<&str>() {
                        s.to_string()
                    } else if let Some(s) = panic_info.downcast_ref::<String>() {
                        s.clone()
                    } else {
                        "Unknown panic occurred".to_string()
                    };

                    // 返回带有 panic 信息的自定义错误页面
                    (
                        StatusCode::INTERNAL_SERVER_ERROR,
                        Html(format!(
                            "<h1>500 - Internal Server Error</h1><p>Something went wrong!</p><p>Panic message: {}</p>",
                            panic_message,
                        )),
                    )
                        .into_response()
                }),
            )
        )
}


async fn shutdown_signal() {
    let ctrl_c = async {
        signal::ctrl_c()
            .await
            .expect("failed to install Ctrl+C handler");
    };

    #[cfg(unix)]
    let terminate = async {
        signal::unix::signal(signal::unix::SignalKind::terminate())
            .expect("failed to install signal handler")
            .recv()
            .await;
    };

    #[cfg(not(unix))]
    let terminate = std::future::pending::<()>();

    tokio::select! {
        _ = ctrl_c => {},
        _ = terminate => {},
    }
}


#[cfg(test)]
mod tests {
    use std::fs::File;
    use std::{env, io, thread};
    use std::io::{BufReader, BufWriter, Read, Write};
    use std::sync::Arc;
    use std::sync::atomic::{AtomicUsize, Ordering};
    use std::time::Duration;
    use tokio::test;
    use tokio::time::Instant;

    // 从标准输入压缩到标准输出
    fn compress(level: i32) {
        eprintln!("从标准输入压缩到标准输出 (级别: {})", level);

        // 使用zstd官方库的流式压缩
        match zstd::stream::copy_encode(io::stdin(), io::stdout(), level) {
            Ok(_) => {},
            Err(e) => eprintln!("压缩错误: {}", e)
        }
    }

    // 从标准输入解压到标准输出
    fn decompress() {
        eprintln!("从标准输入解压到标准输出");

        // 使用zstd官方库的流式解压
        match zstd::stream::copy_decode(io::stdin(), io::stdout()) {
            Ok(_) => {},
            Err(e) => eprintln!("解压错误: {}", e)
        }
    }
    
    #[tokio::test]
    async fn test() {
        // 计时
        let start = Instant::now();

        // 解析命令行参数
        let args: Vec<String> = env::args().collect();
        println!( "命令行参数: {:?}", args);
        match args[1].as_str() {
            "-d" => {
                decompress();
            },
            option => {
                // 压缩模式
                if option.starts_with('-') {
                    let level = match option[1..].parse::<i32>() {
                        Ok(level) => level,
                        Err(e) => {
                            eprintln!("错误: 无效的压缩级别 '{}': {}", option, e);
                            return;
                        }
                    };
                    compress(level);
                } else {
                    eprintln!("错误: 无效的选项 '{}'", option);
                }
            }
        }

        // 打印执行时间
        let duration = start.elapsed();
        eprintln!("完成! 耗时: {:.2}秒", duration.as_secs_f64());
    }

}










