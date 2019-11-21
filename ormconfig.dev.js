module.exports = {
  type: "mysql",
  host: process.env.MYSQL_HOST || "localhost",
  port: parseInt(process.env.MYSQL_PORT || "3306"),
  username: process.env.MYSQL_USER || "root",
  password: process.env.MYSQL_PASSWORD || "",
  database: process.env.MYSQL_DATABASE || "nest-api-database",
  entities: ["server/entities/*.ts"],
  synchronize: false,
  cli: {
    entitiesDir: "server/entities",
    migrationsDir: "server/migration",
  },
};