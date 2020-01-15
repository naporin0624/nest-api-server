/* eslint-disable @typescript-eslint/no-var-requires */
const config = require("./webpack.config.common");
const NodemonPlugin = require("nodemon-webpack-plugin");
const { join } = require("path");

module.exports = {
  ...config,
  mode: "development",
  watch: true,
  plugins: [
    ...config.plugins,
    new NodemonPlugin({
      watch: join(process.cwd(), "./dist"),

      ignore: ["*.js.map"],

      verbose: true,

      script: join(process.cwd(), "./dist/server.js"),

      ext: "js,njk,json",
    }),
  ],
};
