use std::sync::Arc;
use axum::Router;
use axum::routing::post;
use crate::controller::channel::{create, destroy, fetch, ice, renew};
use crate::repository::channel::{get_or_create_channel_repo, ChannelRepo};

pub fn peer_router() -> Router<Arc<(dyn ChannelRepo + 'static)>> {
    Router::new()
        .route("/fetch", post(fetch))
        .route("/create", post(create))
        .route("/ice", post(ice))
        .route("/destroy", post(destroy))
        .route("/renew", post(renew))
        // .route("/authenticate", post(authenticate_user))
}

