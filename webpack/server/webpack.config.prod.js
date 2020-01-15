/* eslint-disable @typescript-eslint/no-var-requires */
const config = require("./webpack.config.common");

module.exports = {
  ...config,
  mode: "production",
  optimization: {
    minimize: false,
  },
};
