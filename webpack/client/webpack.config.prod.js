/* eslint-disable @typescript-eslint/no-var-requires */
const merge = require("merge");
const config = require("./webpack.config.common");
const htmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = merge(config, {
  mode: "production",
  plugins: [
    ...config.plugins,
    new htmlWebpackPlugin({
      template: path.join(__dirname, "..", "..", "public/index.html"),
    }),
  ],
});
