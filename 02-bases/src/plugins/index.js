const { getAge } = require("./get-age.plugin");
const { uuid } = require("./uuid.plugin");
const { http } = require("./http-client.plugin");
const buildLogger = require("./logger.plugin");

module.exports = {
  getAge,
  uuid,
  http,
  buildLogger,
}