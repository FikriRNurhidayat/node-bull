const {
  DATABASE_NAME = "node_bull",
  DATABASE_USERNAME = "root",
  DATABASE_PASSWORD = JSON.parse("null"),
  DATABASE_HOST = "127.0.0.1",
} = process.env;

module.exports = {
  development: {
    username: DATABASE_USERNAME,
    password: DATABASE_PASSWORD,
    database: DATABASE_NAME + "_development",
    host: DATABASE_HOST,
    dialect: "postgres",
  },
  test: {
    username: DATABASE_USERNAME,
    password: DATABASE_PASSWORD,
    database: DATABASE_NAME + "_test",
    host: DATABASE_HOST,
    dialect: "postgres",
  },
  staging: {
    username: DATABASE_USERNAME,
    password: DATABASE_PASSWORD,
    database: DATABASE_NAME,
    host: DATABASE_HOST,
    dialect: "postgres",
  },
  production: {
    username: DATABASE_USERNAME,
    password: DATABASE_PASSWORD,
    database: DATABASE_NAME,
    host: DATABASE_HOST,
    dialect: "postgres",
  },
};
