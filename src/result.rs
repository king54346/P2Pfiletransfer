use std::fmt::Display;
use axum::{
    response::{IntoResponse, IntoResponseParts, Response},
};

use serde::Serialize;
use crate::errors::Error;
pub type ResponseResult<T> = Result<ApiResponse<T>, Error>;


#[derive(Debug, Serialize, Default)]
pub struct ApiResponse<T: Serialize> {
    pub data: Option<T>,
    pub code: i32,
    pub msg: String,
}



impl<T: Serialize> ApiResponse<T> {
    pub fn with_data(data: T) -> Self {
        Self{
            code: 0,
            data:Some(data),
            msg: "success".to_string(),
        }
    }
}

impl<T: Serialize> IntoResponse for ApiResponse<T> {
    fn into_response(self) -> Response {
        axum::Json(self).into_response()
    }
}
impl< T: Serialize> Display for ApiResponse<T>{
    fn fmt(&self, f: &mut std::fmt::Formatter<'_>) -> std::fmt::Result {
        write!(f, "{}", serde_json::to_string(self).unwrap())
    }
}