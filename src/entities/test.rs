use sea_orm::{ActiveModelBehavior, ConnectionTrait, DbErr, DeriveEntityModel, DeriveRelation, EntityTrait, EnumIter, FromJsonQueryResult, RelationDef, RelationTrait};
use sea_orm::prelude::Json;
use serde::{Deserialize, Serialize};




// 实体之间的关系（例如，一对多、多对多等）
// 不要删除Relation枚举或ActiveModelBehaviorimpl 块，即使它们是空的
// EnumIter: 使得可以遍历这个枚举的所有变体
//   #[sea_orm(has_many = "Entity")],表示当前模型与entity有一对多关系，简化实现 用RelationTrait实现
// #[derive(Copy, Clone, Debug, EnumIter, DeriveRelation)]
// pub enum Relation {}

// 用于定义模型之间的关系的特征
//
// impl RelationTrait for Relation {
//     fn def(&self) -> RelationDef {
//         match self {
//             Self::UserRole => Entity::has_many(super::user_role::Entity).into(),
//             Self::Dept => Entity::belongs_to(super::dept::Entity)
//                 .from(Column::DeptId)
//                 .to(super::dept::Column::Id)
//                 .into(),
//         }
//     }
// }

// ActiveModel 定义自定义行为，或者使用默认的行为，而无需手动实现所有方法
// impl ActiveModelBehavior for ActiveModel {
//     // 自定义保存逻辑
//
//     async fn after_save<C>(model: Model, db: &C, insert: bool) -> Result<Model, DbErr>
//     where
//         C: ConnectionTrait,
//     {
//         Ok(model)
//     }
// }
