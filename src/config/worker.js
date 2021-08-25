const queues = require("../queues");
const consumers = require("../consumers");

exports.apply = function (worker) {
  queues.expirationQueue.process(consumers.onExpiration);
  // Add more queues....

  return worker;
};
