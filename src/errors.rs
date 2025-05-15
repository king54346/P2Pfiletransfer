use std::fmt;
use std::fmt::Debug;
use axum::Json;
use axum::response::{IntoResponse, Response};
use http::StatusCode;
use serde_json::json;

#[derive(Debug, PartialEq, Eq)]
pub enum Error {

    Authenticate(AuthenticateError),

    BadRequest,

    NotFound,

    Custom(String),
}

impl fmt::Display for Error {
    fn fmt(&self, f: &mut fmt::Formatter) -> fmt::Result {
        match self {
            Error::NotFound => write!(f, "Resource not found"),
            Error::BadRequest => write!(f, "Invalid input"),
            Error::Custom(message) => write!(f, "Error is: {}", message),
            _ => write!(f, "Invalid input")
        }
    }
}



impl IntoResponse for Error {
    fn into_response(self) -> Response {
        // 需要实现Display trait
        let message = self.to_string();
        let body = Json(json!({ "code": "200", "message": message }));
        // 定义不同的错误处理方式，json，xml，redirect等
        match self {
            Error::NotFound => {
                (StatusCode::NOT_FOUND, body).into_response()
            }
            Error::BadRequest => {
                (StatusCode::NOT_FOUND, body).into_response()
            }
            Error::Authenticate(_) => {
                (StatusCode::NOT_FOUND, body).into_response()
            }
            Error::Custom(_) => {
                (StatusCode::NOT_FOUND, body).into_response()
            }
        }
    }
}

#[derive(Clone, Debug, Eq, PartialEq)]
pub enum AuthenticateError {
    WrongCredentials,
    TokenCreation,
    InvalidToken,
    Locked,
}