const express = require("express");
const logger = require("morgan");
const { ok, fail, error } = require("../plugins/responseBuilder");
const { onError, onLost } = require("../plugins/errorHandler");
const { apply } = require("../router");

module.exports = function (server) {
  const router = express.Router();

  // Attach logger
  server.use(logger("tiny"));

  // Handle JSON request
  server.use(express.json());

  // Attach responseBuilder plugin
  server.response.ok = ok;
  server.response.fail = fail;
  server.response.error = error;

  // Attach router
  server.use(apply(router));

  // Attach errorHandler plugin
  server.use(onLost);
  server.use(onError);

  return server;
};
