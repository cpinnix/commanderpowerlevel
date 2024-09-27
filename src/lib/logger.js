const pino = require("pino");

const _logger = pino();

function createKey({ category, target, action }) {
  return [...category, ...target, ...action].join(".");
}

function info(props) {
  const { message = "", ...rest } = props;

  _logger.info(rest, [createKey(props), message].filter((v) => v).join(" - "));
}

const logger = {
  info,
};

module.exports = logger;
