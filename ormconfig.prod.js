module.exports = {
  type: "mysql",
  host: process.env.MYSQL_HOST || "127.0.0.1",
  port: parseInt(process.env.MYSQL_PORT || "3306"),
  username: process.env.MYSQL_USER || "root",
  password: process.env.MYSQL_PASSWORD || "",
  database: process.env.MYSQL_DATABASE || "nest-api-database",
  entities: ["server/entities/**/*.js"],
  migrations: ["server/migration/**/*.js"],
  synchronize: false,
  cli: {
    entitiesDir: "server/entities",
    migrationsDir: "server/migration",
  },
}