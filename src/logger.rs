use std::env;


pub fn setup() {
    // ?? 获取当前的crate的名称
    let app_name = env::var("CARGO_PKG_NAME").unwrap();
    let level = "debug"; // todo setting中配置
    let env = format!("{app_name }={level},tower_http={level}");
    tracing_subscriber::fmt()
            .with_env_filter(env)
            .init();
}