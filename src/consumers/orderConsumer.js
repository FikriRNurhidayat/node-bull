const { expireOrder } = require("../services/orderService");

exports.onExpiration = async function (job) {
  console.log("Running [orders.EXPIRE]:", job.data);
  const { orderId } = job.data;

  await expireOrder(orderId);
};
