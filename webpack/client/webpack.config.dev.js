/* eslint-disable @typescript-eslint/no-var-requires */
const merge = require("merge");
const config = require("./webpack.config.common");
const path = require("path");

module.exports = merge(config, {
  mode: "development",
  watch: true,
  devtool: "source-map",
  module: {
    rules: config.module.rules.concat([
      {
        enforce: "pre",
        test: /\.js$/,
        loader: "source-map-loader",
      },
    ]),
  },
  devServer: {
    contentBase: path.join("__dirname", "..", "..", "public"),
    compress: true,
    port: 8080,
    host: "0.0.0.0",
    hot: true,
    overlay: true,
    watchContentBase: true,
    historyApiFallback: true,
    open: true,
    proxy: {
      "/api": "http://localhost:3000",
    },
  },
});
