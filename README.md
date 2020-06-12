# DB設計

## usersテーブル
|Column|Type|Options|
|------|----|-------|
|name|srring|null:false, index:true|
|mail|string|null:false, unique:true|
|password|string|null:false|
### Association
- has_many :messages
- has_many :groups, through: :groups_users
- has_many :groups_users

## messagesテーブル
|Column|Type|Options|
|------|----|-------|
|body|text|------|
|image|string|------|
|group_id|integer|null:false, foreign_key: true|
|user_id|integer|null:false, foreigh_key: true|
### Association
- belongs_to :user
- belongs_to :group

## group_usersテーブル
|Column|Type|Options|
|------|----|-------|
|user_id|references|foreign_key: true|
|group_id|references|foreign_key: true|
### Association
- belongs_to :user
- belongs_to :group

## groupsテーブル
|Column|Type|Options|
|------|----|-------|
|name|string|null:false, unique: true|
### Association
- has_many :messages
- has_many :users, through: :groups_users
- has_many :groups_users

# 開発に使用している技術
- BEMによる命名規則を使用したHaml、Sassによるフロントマークアップ
- 中間テーブルを使用した多対多のテーブル間のアソシエーション
- javascript（Jquery）を使用したメッセージの非同期通信、インクリメンタルリサーチ、SetIntervalメソッドを使用した自動更新機能
