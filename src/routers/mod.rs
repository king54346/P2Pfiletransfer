use std::path::PathBuf;
use axum::Router;
use tower_http::services::{ServeDir, ServeFile};
use crate::routers::channel::peer_router;
use crate::repository::channel::get_or_create_channel_repo;

// pub mod user;
mod static_router;
mod channel;

use axum::{
    routing::get,
    extract::Path,
    http::{StatusCode, header, HeaderMap},
    response::{IntoResponse, Response},
};
use rust_embed::RustEmbed;
use tokio::net::TcpListener;
use crate::routers::static_router::{fallback_handler, index_handler, static_handler};

pub fn init_api_router() -> Router {
    // 创建仓库
    let channel_repo = get_or_create_channel_repo();

    // 应用dist目录路径
    let dist_dir = PathBuf::from("frontend/dist");

    // 创建API路由（带状态）
    let api_routes = Router::new()
        .nest("", peer_router()) // 注意这里没有添加前缀
        .with_state(channel_repo);
    // let static_routers = static_router::create_static_routers();
    // 未认证的路由
    let no_auth_routers =     // 顶级路由器
        Router::new()
            .nest("/api", api_routes)
            .fallback(index_handler); // SPA 应用通常将所有未匹配的路由重定向到 index.html
        
        
    // 需要认证的路由
    // let need_auth_routers = Router::new()
    //     .route("/users", get(user_list_page))
    //     .route("/api/users", get(get_users).post(post_add_user))
    //     .route("/api/users/:id", put(put_update_user).delete(delete_user))
    //     .layer(middleware::from_fn(jwt_middleware));


    Router::new()
        .merge(no_auth_routers)
        // .nest("/", need_auth_routers)
}



