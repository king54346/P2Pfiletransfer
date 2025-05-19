use rand::prelude::IndexedRandom;
use std::collections::HashMap;
use std::future::Future;
use std::sync::{Arc, RwLock};
use std::time::{Duration, Instant};
use axum::async_trait;
use serde::{Deserialize, Serialize};
use moka::future::Cache;
use std::sync::LazyLock;
use rand::{rng, Rng};

static CONFIG: LazyLock<Config> = LazyLock::new(|| {
    Config {
        token: Token {
            num_chars: 8,
            chars: "abcdefghijklmnopqrstuvwxyz0123456789".chars().collect(),
            max_attempts: 8,
        },
        channel_ttl: 60 * 60,
    }
});

#[derive(Clone)]
struct Token{
    num_chars: u8,
    chars: Vec<char>,
    max_attempts: u8,
}


#[derive(Clone)]
struct Config {
    token: Token,
    channel_ttl: usize
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct Channel {
    token: String,
    #[serde(rename = "uploaderPeerID")]
    uploader_peer_id: String,
    algorithm: usize,
}


// 生成token直到唯一（异步）
async fn generate_token_until_unique<F, Fut>(
    check_exists: F,  // 检查是否存在的回调函数
) -> anyhow::Result<String>
where
    F: Fn(String) -> Fut,
    Fut: Future<Output = bool>,
{
    for _ in 0..CONFIG.token.max_attempts {
        let token = generate_token();
        let exists = check_exists(token.clone()).await;
        if !exists {
            return Ok(token);
        }
    }
    Err(anyhow::anyhow!("达到token最大生成尝试次数".to_string()))  // 全部尝试后失败
}

// 生成token
pub fn generate_token() -> String {
    let mut rng = rng();
    (0..CONFIG.token.num_chars)
        .map(|_| CONFIG.token.chars.choose(&mut rng).unwrap().clone())
        .collect()
}


#[async_trait]
pub trait ChannelRepo: Send + Sync{
    async fn create_channel(&self, uploader_peer_id: String,algorithm:usize) -> anyhow::Result<Channel>;
    async fn fetch_channel(&self, token: String) -> anyhow::Result<Channel>;
    async fn renew_channel(&self, token:String) -> anyhow::Result<bool>;
    async fn destroy_channel(&self, token: String) -> anyhow::Result<()>;
}


// 内存存储实现
struct MemoryChannelRepo {
    config: Config,
    store: Cache<String,Channel>,
}

impl MemoryChannelRepo {
    fn new(config: Config) -> Self {
        let expires = Duration::from_secs((config.channel_ttl * 1000) as u64);
        let repo = Self {
            config,
            store:  Cache::builder().time_to_idle(expires).build(),
        };
        repo
    }
}

#[async_trait]
impl ChannelRepo for MemoryChannelRepo {
    async fn create_channel(&self, uploader_peer_id: String,algorithm:usize) -> anyhow::Result<Channel> {
        // 生成唯一的短标识符和长标识符
        let token = generate_token_until_unique(|token|async move  {
            self.store.contains_key(&token)
        }).await?;
        
        let channel = Channel {
            token: token.clone(),
            uploader_peer_id,
            algorithm,
        };

        self.store.insert(token, channel.clone()).await;
        
        Ok(channel)
    }

    
    async fn fetch_channel(&self, token: String) -> anyhow::Result<Channel> {
        if let Some(channel) = self.store.get(&token).await {
            Ok(channel)
        }else {
            // 处理未找到通道的情况
            Err(anyhow::anyhow!("Channel not found with token: {}", token))
        }
    }


    async fn renew_channel(&self, token: String) -> anyhow::Result<bool> {
        let result = self.fetch_channel(token).await;
        match result {
            Ok(value) => {
                self.store.insert(value.token.clone(), value).await;
                Ok(true)
            }
            Err(e) => {
               Err(anyhow::anyhow!(e.to_string()))
            }
        }
    }

    async fn destroy_channel(&self, toekn: String) -> anyhow::Result<()> {
        let result = self.fetch_channel(toekn.clone()).await;
        match result {
            Ok(value) => {
                self.store.invalidate(&value.token).await;
                Ok(())
            }
            Err(_) => {
                Err(anyhow::anyhow!("No channel exists for {}", toekn))
            }
        }
    }
}



pub fn get_or_create_channel_repo()->Arc<dyn ChannelRepo> {
    let config = CONFIG.clone();
    Arc::new(MemoryChannelRepo::new(config))
}

#[cfg(test)]
mod tests {
    use super::*;
    use tokio::test;

    #[tokio::test]
    async fn test_create_channel() {
        let config = CONFIG.clone();
        let repo = MemoryChannelRepo::new(config);

        let uploader_peer_id = "test_peer_id".to_string();
        let channel = repo.create_channel(uploader_peer_id.clone(),0).await.unwrap();

        assert_eq!(channel.uploader_peer_id, uploader_peer_id);
        print!("channel: {:?}", channel);
    }

    #[tokio::test]
    async fn test_fetch_channel() {
        let config = CONFIG.clone();
        let repo = MemoryChannelRepo::new(config);

        let uploader_peer_id = "test_peer_id".to_string();
        let channel = repo.create_channel(uploader_peer_id.clone(),0).await.unwrap();

        let fetched_channel = repo.fetch_channel(channel.token.clone()).await.unwrap();
        assert_eq!(fetched_channel.token, channel.token);

        let scrubbed_channel = repo.fetch_channel(channel.token.clone()).await.unwrap();
    }

    #[tokio::test]
    async fn test_renew_channel() {
        let config = CONFIG.clone();
        let repo = MemoryChannelRepo::new(config);

        let uploader_peer_id = "test_peer_id".to_string();
        let channel = repo.create_channel(uploader_peer_id.clone(),0).await.unwrap();

        let renewed = repo.renew_channel(channel.token.clone()).await.unwrap();
        assert!(renewed);

        let fetched_channel = repo.fetch_channel(channel.token.clone()).await.unwrap();
        assert_eq!(fetched_channel.token, channel.token);
    }

    #[tokio::test]
    async fn test_destroy_channel() {
        let config = CONFIG.clone();
        let repo = MemoryChannelRepo::new(config);

        let uploader_peer_id = "test_peer_id".to_string();
        let channel = repo.create_channel(uploader_peer_id.clone(),0).await.unwrap();

        repo.destroy_channel(channel.token.clone()).await.unwrap();

        let result = repo.fetch_channel(channel.token.clone()).await;
        assert!(result.is_err());
    }
}




// // Redis 存储实现
// struct RedisChannelRepo {
//     config: Config,
//     client: ConnectionManager,
// }
//
// impl RedisChannelRepo {
//     async fn new(config: Config, redis_url: &str) -> anyhow::Result<Self> {
//         let client = Client::open(redis_url)?;
//         let connection = ConnectionManager::new(client).await?;
//         Ok(Self { config, client: connection })
//     }
// }
//
// impl ChannelRepo for RedisChannelRepo {
//     async fn create_channel(&self, uploader_peer_id: &str) -> anyhow::Result<Channel> {
//         // 类似内存实现的 Redis 版本，使用 MULTI/EXEC 事务
//         todo!()
//     }
//
//     async fn fetch_channel(&self, slug: &str, scrub_secret: bool) -> anyhow::Result<Option<Channel>> {
//         todo!()
//     }
//
//     async fn renew_channel(&self, slug: &str, secret: &str) -> anyhow::Result<bool> {
//         todo!()
//     }
//
//     async fn destroy_channel(&self, slug: &str) -> anyhow::Result<()> {
//         todo!()
//     }
//
//     // 其他 trait 方法实现...
// }
//
// struct ChannelRepoInstance {
//     repo: Box<dyn ChannelRepo + Send + Sync>,
// }
//
// impl ChannelRepoInstance {
//     async fn global() -> &'static Self {
//         static INSTANCE: once_cell::sync::OnceCell<ChannelRepoInstance> = once_cell::sync::OnceCell::new();
//         INSTANCE.get_or_init(|| async {
//             let config = Config::default();
//             if let Ok(redis_url) = std::env::var("REDIS_URL") {
//                 let repo = RedisChannelRepo::new(config.clone(), &redis_url)
//                     .await
//                     .expect("Failed to create Redis repo");
//                 ChannelRepoInstance { repo: Box::new(repo) }
//             } else {
//                 let repo = MemoryChannelRepo::new(config);
//
//                 ChannelRepoInstance { repo: Box::new(repo) }
//             }
//         }).await
//     }
// }