const orderService = require("../services/orderService");

exports.placeOrder = function (req, res) {
  orderService
    .placeOrder(req.body.amount)
    .then((order) => res.ok(201, order))
    .catch((err) => {
      console.log(err);
      res.fail(422, "failed to create order");
    });
};

exports.checkoutOrder = function (req, res) {
  orderService
    .checkoutOrder(req.params.id)
    .then((order) => res.ok(200, order))
    .catch((err) => {
      console.log(err);
      res.fail(422, "failed to checkout order");
    });
};
