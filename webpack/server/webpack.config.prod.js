/* eslint-disable @typescript-eslint/no-var-requires */
const merge = require("merge");
const common = require("./webpack.config.common");

module.exports = merge(common, {
  mode: "production",
  optimization: {
    minimize: false,
  },
});