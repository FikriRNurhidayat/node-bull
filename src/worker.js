const queues = require("./queues");
const consumers = require("./consumers");

exports.run = function (callback) {
  queues.expirationQueue.process(consumers.onExpiration);
  // Add more queues....

  return callback();
};
