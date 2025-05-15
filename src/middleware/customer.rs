
use std::task::{Context, Poll};
use http::{Request, Response};
use tower_layer::Layer;
use tower_service::Service;

// 定义一个中间件层
#[derive(Debug, Clone, Copy)]
pub struct LoggingLayer;

impl<S> Layer<S> for LoggingLayer {
    type Service = LoggingService<S>;

    fn layer(&self, service: S) -> Self::Service {
        LoggingService { inner: service }
    }
}

// 定义中间件逻辑
#[derive(Debug, Clone, Copy)]
pub struct LoggingService<S> {
    inner: S,
}

// Request 是传递给服务的请求类型。
// Response 是服务返回的响应类型
// S 是实现了 Tower 的 Service trait 的类型

impl<S, ReqBody, ResBody> Service<Request<ReqBody>> for LoggingService<S>
where
    S: Service<Request<ReqBody>, Response = Response<ResBody>>,
    ResBody: Default,
{

    type Response = S::Response;
    type Error = S::Error;
    type Future = S::Future;

    fn poll_ready(&mut self, cx: &mut Context<'_>) -> Poll<Result<(), Self::Error>> {
        self.inner.poll_ready(cx)
    }

    fn call(&mut self, req: Request<ReqBody>) -> Self::Future {
        println!("Request received: {:?}", req.headers());
        self.inner.call(req)
    }

}
