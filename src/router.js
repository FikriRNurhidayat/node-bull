const mainController = require("./controllers/mainController");
const orderController = require("./controllers/orderController");

exports.apply = function (router) {
  router.get("/", mainController.root);
  router.post("/orders", orderController.placeOrder);
  router.put("/orders/:id/checkout", orderController.checkoutOrder);

  return router;
};
