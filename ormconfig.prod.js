module.exports = {
  type: "mysql",
  timezone: "+09:00",
  host: process.env.MYSQL_HOST,
  port: parseInt(process.env.MYSQL_PORT),
  username: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
  entities: ["server/entities/**/*.js"],
  migrations: ["server/migration/**/*.js"],
  synchronize: false,
  cli: {
    entitiesDir: "server/entities",
    migrationsDir: "server/migration",
  },
};