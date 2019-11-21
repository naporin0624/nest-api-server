/* eslint-disable @typescript-eslint/no-var-requires */
const merge = require("merge");
const config = require("./webpack.config.common");
const path = require("path");
const htmlWebpackPlugin = require("html-webpack-plugin");

module.exports = merge(config, {
  mode: "development",
  watch: true,
  devtool: "source-map",
  module: {
    rules: config.module.rules.concat([{
      enforce: "pre",
      test: /\.js$/,
      loader: "source-map-loader",
    }, ]),
  },
  plugins: [
    ...config.plugins,
    new htmlWebpackPlugin({
      template: path.join(__dirname, "..", "..", "public/index.html"),
    }),
  ],
  devServer: {
    contentBase: path.join(__dirname, "..", "..", "public"),
    compress: true,
    port: 3000,
    host: "0.0.0.0",
    hot: true,
    overlay: true,
    watchContentBase: true,
    historyApiFallback: true,
    open: true,
  },
});