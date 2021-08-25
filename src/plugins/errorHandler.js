// Handle on uncaught exception
exports.onError = (err, req, res, next) => res.error(500, err);

// Handle on endpoint does not exist
exports.onLost = (req, res) =>
  res.fail(404, {
    method: req.method,
    url: req.url,
    message: "not found",
  });
