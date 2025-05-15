use std::process::Command;
use std::env;
use std::path::Path;

fn main() {
    // 检查前端目录是否存在
    // env 如果是release模式则执行
    if !cfg!(debug_assertions) {
        let frontend_dir = Path::new("frontend"); // 调整为您的前端目录
        if frontend_dir.exists() {
            println!("cargo:warning=编译前端项目...");

            // 安装依赖
            let npm_install = Command::new("npm")
                .current_dir(frontend_dir)
                .arg("install")
                .status()
                .expect("无法执行npm install");

            if !npm_install.success() {
                panic!("npm install 失败");
            }

            // 构建前端
            let npm_build = Command::new("npm")
                .current_dir(frontend_dir)
                .arg("run")
                .arg("build")
                .status()
                .expect("无法执行npm build");

            if !npm_build.success() {
                panic!("npm build 失败");
            }

            println!("cargo:warning=前端构建完成");
        }
    }
 
}