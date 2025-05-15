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