const { createQueue } = require("../infra/bull");

module.exports = {
  expirationQueue: createQueue("orders.EXPIRE"),
};
