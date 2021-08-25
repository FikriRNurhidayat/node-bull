const { REDIS_HOST = "redis://127.0.0.1:6379" } = process.env;

module.exports = { HOST: REDIS_HOST };
