/* eslint-disable @typescript-eslint/no-var-requires */
const merge = require("webpack-merge");
const common = require("./webpack.config.common");
const webpack = require("webpack");

module.exports = merge(common, {
  // productionにするとなんかバグる
  mode: "development",
  plugins: [
    new webpack.EnvironmentPlugin({
      NODE_ENV: "production",
    }),
  ],
});