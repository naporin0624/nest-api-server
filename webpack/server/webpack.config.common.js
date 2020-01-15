/* eslint-disable @typescript-eslint/no-var-requires */
const webpack = require("webpack");
const path = require("path");
const nodeExternals = require("webpack-node-externals");
const Dotenv = require("dotenv-webpack");

module.exports = {
  entry: ["webpack/hot/poll?100", "./server/index.ts"],
  target: "node",
  externals: [
    nodeExternals({
      whitelist: ["webpack/hot/poll?100"],
    }),
  ],
  module: {
    rules: [
      {
        test: /.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
    alias: {
      "@": path.resolve(process.cwd(), "./"),
    },
  },
  plugins: [new webpack.HotModuleReplacementPlugin(), new Dotenv()],
  output: {
    path: path.join(process.cwd(), "dist"),
    filename: "server.js",
  },
};
