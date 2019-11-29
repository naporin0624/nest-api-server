# nest-api-server

## 主要な使用技術

- nginx-proxy
- grpc
- NestJS
- React
- TypeORM
- Mongoose

## 環境構築方法

### node_modules インストール

```shell
yarn install
```

### docker で開発用 DB を立てる

```shell
cd docker/development
docker-compose up --build
```

### DB migration

```shell
yarn migration:run
```

### サーバを起動する

```shell
yarn start:dev
```

## 動かし方

swagger に生えてる api が見れます。CRUD は[SwaggerUI](http://localhost:3000/swagger)で体験できるかと思います

[React で書いてる画面](http://localhost:3000)ここでデータが飛んでくるたびにグラフが更新されるものが見えると思います


## API開発の手順

### 準備するもの
[nest-cli](https://github.com/nestjs/nest-cli)

```
yarn global add @nestjs/cli
```

### nest-cliの基本的な使い方
基本的にgenerateコマンドを使うことが多いと思う[参考](https://docs.nestjs.com/cli/usages#nest-generate)

モジュールの作成
```
nest g mo MODULE_NAME
```

コントローラーの作成
```
nest g c CONTROLLER_NAME
```

サービスの作成
```
nest g s SERVICE_NAME
```

## マイグレーション周り

### テーブルを作る

- `server/entities`に entity_name.entity.ts が作られます

```shell
yarn migration:create <entity_name>
```

### DB との差分 migration を作る

- `server/migration/`に timestamp-migration_name.ts が作られます

```shell
yarn migration:generate <migration_name>
```

### migration を走らせる

- `server/migration/`にあるファイルを timestamp 順に実行します
- mysql の migrations テーブルに完了しているファイルのレコードが生成されるので、終わっている migration は DB で確認してください.
- 注意: 全ての migration が終わっていないのに**generate**を使わないでください

```shell
yarn migration:run
```

### 前回の migration を取り消す

```shell
yarn migration:revert
```

### DB を drop する

```shell
yarn typeorm scheme:drop
```
