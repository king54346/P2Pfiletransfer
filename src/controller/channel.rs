use std::sync::Arc;
use axum::extract::State;
use axum::Json;
use axum::response::IntoResponse;
use http::StatusCode;
use serde::{Deserialize, Serialize};
use tracing::log::error;
use crate::repository::channel::{Channel, ChannelRepo};

// 请求体结构
#[derive(Deserialize)]
pub struct ChannelRequest {
    token: Option<String>,
}
// 响应结构
#[derive(Serialize)]
pub struct ErrorResponse {
    error: String,
}
pub async fn fetch(State(repo): State<Arc<dyn ChannelRepo>>, Json(payload): Json<ChannelRequest>) -> impl IntoResponse {
    let token = match payload.token {
        Some(token) => token,
        None => {
            return (
                StatusCode::BAD_REQUEST,
                Json(ErrorResponse {
                    error: "token is required".to_string(),
                }),
            )
                .into_response()
        }
    };
    // 尝试获取频道
    match repo.fetch_channel(token).await {
        Ok(channel) => {
            // 成功找到频道
            (StatusCode::OK, Json(channel)).into_response()
        }
        Err(err) => {
            // 发生错误
            error!("Failed to fetch channel: {:?}", err);
            (
                StatusCode::INTERNAL_SERVER_ERROR,
                Json(ErrorResponse {
                    error: "Failed to fetch channel".to_string(),
                }),
            )
                .into_response()
        }
    }
}

// 请求体结构
#[derive(Deserialize)]
pub struct CreateChannelRequest {
    uploaderPeerID: Option<String>,
    algorithm: Option<usize>,
}
pub async fn create(
    State(repo): State<Arc<dyn ChannelRepo>>,
    Json(payload): Json<CreateChannelRequest>,
) -> impl IntoResponse {
    // 检查 uploaderPeerID 是否存在
    let uploader_peer_id = match payload.uploaderPeerID {
        Some(id) => id,
        None => {
            return (
                StatusCode::BAD_REQUEST,
                Json(ErrorResponse {
                    error: "Uploader peer ID is required".to_string(),
                }),
            )
                .into_response();
        }
    };
    
    let algorithm = match payload.algorithm {
        Some(id) => id,
        None => {
            return (
                StatusCode::BAD_REQUEST,
                Json(ErrorResponse {
                    error: "algorithm is required".to_string(),
                }),
            )
                .into_response();
        }
    };
    // 调用 createChannel 方法
    match repo.create_channel(uploader_peer_id,algorithm).await {
        Ok(channel) => {
            // 成功创建频道，直接返回
            (StatusCode::OK, Json(channel)).into_response()
        }
        Err(err) => {
            // 创建失败
            error!("Failed to create channel: {:?}", err);
            (
                StatusCode::INTERNAL_SERVER_ERROR,
                Json(ErrorResponse {
                    error: "Failed to create channel".to_string(),
                }),
            )
                .into_response()
        }
    }
}


// 请求体结构
#[derive(Deserialize)]
pub struct DestroyChannelRequest {
    token: Option<String>,
}

pub async fn destroy(
    State(repo): State<Arc<dyn ChannelRepo>>,
    Json(payload): Json<DestroyChannelRequest>,
) -> impl IntoResponse {
    let token = match payload.token {
        Some(token) => token,
        None => {
            return (
                StatusCode::BAD_REQUEST,
                Json(ErrorResponse {
                    error: "token is required".to_string(),
                }),
            )
                .into_response();
        }
    };

    // 调用 destroyChannel 方法
    match repo.destroy_channel(token).await {
        Ok(_) => {
            // 成功销毁频道
            (
                StatusCode::OK,
                Json(SuccessResponse { success: true }),
            )
                .into_response()
        }
        Err(err) => {
            // 销毁失败
            error!("Failed to destroy channel: {:?}", err);
            (
                StatusCode::INTERNAL_SERVER_ERROR,
                Json(ErrorResponse {
                    error: "Failed to destroy channel".to_string(),
                }),
            )
                .into_response()
        }
    }
}


// 请求体结构
#[derive(Deserialize)]
pub struct RenewChannelRequest {
    token: Option<String>,
}


// 响应体结构
#[derive(Serialize)]
pub struct SuccessResponse {
    success: bool,
}
pub async fn renew(
    State(repo): State<Arc<dyn ChannelRepo>>,
    Json(payload): Json<RenewChannelRequest>,
) -> impl IntoResponse {
    let token = match payload.token {
        Some(token) => token,
        None => {
            return (
                StatusCode::BAD_REQUEST,
                Json(ErrorResponse {
                    error: "token is required".to_string(),
                }),
            )
                .into_response();
        }
    };
    // 调用 renewChannel 方法
    let success = repo.renew_channel(token).await.unwrap_or_else(|err| {
        eprintln!("Failed to renew channel: {:?}", err);
        false
    });

    // 返回成功响应
    (StatusCode::OK, Json(SuccessResponse { success })).into_response()
}

#[derive(Serialize)]
pub struct IceServer {
    urls: Vec<String>,
    #[serde(skip_serializing_if = "Option::is_none")]
    username: Option<String>,
    #[serde(skip_serializing_if = "Option::is_none")]
    credential: Option<String>,
}

#[derive(Serialize)]
pub struct IceServersResponse {
    iceServers: Vec<IceServer>,
}

pub async fn ice()-> Json<IceServersResponse> {
    println!( "ice");
    // 默认 STUN 服务器
    let mut ice_servers = vec![
        IceServer {
            urls: vec!["stun:stun.l.google.com:19302".to_string()],
            username: None,
            credential: None,
        }
    ];
    
    Json(IceServersResponse { iceServers: ice_servers })
}