exports.ok = function (code = 200, data = null) {
  return this.status(code).json({
    status: "OK",
    data,
  });
};

exports.fail = function (code = 400, data = null) {
  return this.status(code).json({
    status: "FAIL",
    data,
  });
};

exports.error = function (code = 500, error = new Error()) {
  return this.status(code).json({
    status: "ERROR",
    data: {
      name: error.name,
      message: error.message,
      stack: error.stack,
    },
  });
};
