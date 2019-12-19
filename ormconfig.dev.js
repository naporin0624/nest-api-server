module.exports = {
  type: "mysql",
  host: "127.0.0.1",
  port: 3308,
  username: "root",
  password: "root",
  database: "nest-api-database",
  entities: ["server/entities/**/*.ts"],
  migrations: ["server/migration/**/*.ts"],
  synchronize: false,
  cli: {
    entitiesDir: "server/entities",
    migrationsDir: "server/migration",
  },
};