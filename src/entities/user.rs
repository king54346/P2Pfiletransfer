use serde::{Deserialize, Serialize};

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct User {
    pub id: Option<String>,
    pub name: String,
    pub email: String,
    pub password: String,
}


impl User {
    pub fn new<A, B, C>(name: A, email: B, password_hash: C) -> Self
    where
        A: Into<String>,
        B: Into<String>,
        C: Into<String>,
    {
        Self {
            id: None,
            name: name.into(),
            email: email.into(),
            password: password_hash.into(),
        }
    }

    pub fn is_password_match(&self, password: &str) -> bool {
        bcrypt::verify(password, self.password.as_ref()).unwrap_or(false)
    }
}

#[derive(Debug, Serialize, Deserialize)]
pub struct PublicUser {
    pub name: String,
    pub email: String,
}


impl From<User> for PublicUser {
    fn from(user: User) -> Self {
        Self {
            name: user.name.clone(),
            email: user.email.clone(),
        }
    }
}
