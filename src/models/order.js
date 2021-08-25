"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Order.init(
    {
      invoiceNumber: DataTypes.STRING,
      amount: DataTypes.FLOAT,
      status: DataTypes.ENUM("PLACED", "CHECKED_OUT", "PAID", "EXPIRED"),
      paidAt: DataTypes.DATE,
    },
    {
      sequelize,
      paranoid: true,
      modelName: "Order",
    }
  );
  return Order;
};
