/* eslint-disable @typescript-eslint/no-var-requires */
const webpack = require("webpack");
const path = require("path");
const nodeExternals = require("webpack-node-externals");

module.exports = {
  entry: ["webpack/hot/poll?100", "./src/server.ts"],
  target: "node",
  externals: [
    nodeExternals({
      whitelist: ["webpack/hot/poll?100"],
    }),
  ],
  module: {
    rules: [{
      test: /.tsx?$/,
      use: "ts-loader",
      exclude: [/node_modules/, /.spec.tsx?$/],
    }, ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
    alias: {
      static: path.resolve(__dirname, "./static/"),
      "@": path.resolve(__dirname, "./src/"),
    },
  },
  plugins: [new webpack.HotModuleReplacementPlugin()],
  output: {
    path: path.join(__dirname, "dist/src"),
    filename: "server.js",
  },
};