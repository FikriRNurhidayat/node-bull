const { Order } = require("../models");
const { checkExpirationLater } = require("../producers/orderProducer");

async function getOrder(orderId) {
  const order = await Order.findByPk(orderId);
  if (!order) throw new Error("ORDER_NOT_FOUND");

  return order;
}

exports.placeOrder = async function (amount) {
  // This is not a real implementation.
  // Use the actual products to calculate total amount of order
  const order = await Order.create({
    amount,
    status: "PLACED",
    invoiceNumber: Date.now().toString(),
  });

  return order;
};

exports.checkoutOrder = async function (orderId) {
  const order = await getOrder(orderId);

  await order.update({ status: "CHECKED_OUT" });
  await checkExpirationLater(order.id, 3000);

  return order;
};

exports.payOrder = async function (orderId) {
  const order = await getOrder(orderId);

  await order.update({ status: "PAID", paidAt: new Date() });

  return order;
};

exports.expireOrder = async function (orderId) {
  const order = await getOrder(orderId);

  if (isOrderPaid(order)) return;
  if (isOrderCheckedOut(order)) {
    await order.update({ status: "EXPIRED" });
    return;
  }

  await order.destroy();
  return;
};

function isOrderPaid(order) {
  return order.status === "PAID";
}

function isOrderCheckedOut(order) {
  return order.status === "CHECKED_OUT";
}
