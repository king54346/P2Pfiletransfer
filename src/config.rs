use std::fs::File;
use std::io::Read;
use std::path::Path;
use once_cell::sync::Lazy;
use serde::Deserialize;



#[derive(Debug, Deserialize)]
pub struct Configs {
    pub server: Server,
    pub log: Log,
    pub database: DataBase,
    pub cert: Cert,
    pub jwt: Jwt,
}

#[derive(Debug, Deserialize)]
pub struct DataBase {
    pub database_url: String,
}

#[derive(Debug, Deserialize)]
pub struct Server {
    pub name: String,
    pub address: String,
    pub cors_allow_origin: Vec<String>,
    pub ssl: bool,
}



#[derive(Debug, Deserialize)]
pub struct Log {
    pub filter_level: String,
    pub with_ansi: bool,
    pub to_stdout: bool,
    pub directory: String,
    pub file_name: String,
    pub rolling: String,
}


#[derive(Debug, Deserialize)]
pub struct Jwt {
    pub jwt_secret: String,
    pub jwt_exp: i64,
}

#[derive(Debug, Deserialize)]
pub struct Cert {
    /// cert
    pub cert: String,
    /// key
    pub key: String,
}


const CONFIG_FILE: &str = "config/config.yml";

pub static CFG: Lazy<Configs> = Lazy::new(self::Configs::init);

impl Configs {
    pub fn init() -> Self {
        let mut file = match File::open(CONFIG_FILE) {
            Ok(f) => f,
            Err(e) => panic!("config_error_no_exits {} {}", CONFIG_FILE, e),
        };
        let mut cfg_contents = String::new();
        match file.read_to_string(&mut cfg_contents) {
            Ok(s) => s,
            Err(e) => panic!("config_error_read {}", e),
        };
        match serde_yaml::from_str(&cfg_contents){
            Ok(c) => c,
            Err(e) => panic!("{}", e),
        }
    }
}

pub static CERT_KEY: Lazy<CertKey> = Lazy::new(get_cert_key);

pub struct CertKey {
    pub cert: Vec<u8>,
    pub key: Vec<u8>,
}

impl CertKey {
    pub fn new(cert: Vec<u8>, key: Vec<u8>) -> Self {
        Self { cert, key }
    }
}
fn get_cert_key() -> CertKey {
    let cert = get_string(&CFG.cert.cert);
    let key = get_string(&CFG.cert.key);
    CertKey::new(cert, key)
}

fn get_string<P: AsRef<Path>>(path: P) -> Vec<u8> {
    std::fs::read(path).expect("{{config_error_read_failed}}")
}