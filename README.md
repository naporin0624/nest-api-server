# ほにゃほにゃサーバ-

## TypeORM

[cli 説明](https://typeorm.io/#/using-cli)

## Entity を作る

```shell
yarn typeorm entity:create -n <EntityName>
```

## Migration を作る

```shell
yarn typeorm migration:create -n <MigrationName>
```

### Migration の書き方

[公式ドキュメント](https://typeorm.io/#/migrations/using-migration-api-to-write-migrations)

## Migration を実行する

```shell
yarn typeorm migration:run
```

## 戻す

```shell
yarn typeorm migration:revert
```
