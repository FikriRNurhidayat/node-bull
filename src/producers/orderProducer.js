const { expirationQueue } = require("../queues/orderQueue");

exports.checkExpirationLater = function (orderId, defer) {
  return expirationQueue.add(
    { orderId },
    {
      delay: defer,
    }
  );
};
