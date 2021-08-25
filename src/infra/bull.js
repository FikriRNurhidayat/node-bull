const Queue = require("bull");
const redis = require("../config/redis");

exports.createQueue = function (name, config = redis.HOST) {
  return new Queue(name, config);
};
