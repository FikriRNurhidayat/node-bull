const mainController = require("./controllers/mainController");
const orderController = require("./controllers/orderController");

exports.apply = function (router) {
  router.get("/", mainController.root);
  router.post("/orders", orderController.placeOrder);
  router.put("/orders/:id/checkout", orderController.checkoutOrder);
  router.put("/orders/:id/pay", orderController.payOrder);

  return router;
};
