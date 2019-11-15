/* eslint-disable @typescript-eslint/no-var-requires */
const merge = require("merge");
const config = require("./webpack.config.common");

module.exports = merge(config, {
  mode: "production",
});
