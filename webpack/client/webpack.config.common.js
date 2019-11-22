/* eslint-disable @typescript-eslint/no-var-requires */
const path = require("path");
const webpack = require("webpack");

module.exports = {
  entry: ["./client/src/App.tsx", "babel-polyfill"],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "..", "..", "./client/src/"),
    },
    extensions: [".ts", ".tsx", ".js", ".jsx"],
  },
  module: {
    rules: [
      {
        test: /\.(png|jpe?g|gif)$/i,
        exclude: /node_modules/,
        use: [
          {
            loader: "file-loader",
          },
        ],
      },
      {
        test: /\.json$/,
        exclude: /node_modules/,
        type: "javascript/auto",
        use: [
          {
            loader: "json-loader",
          },
        ],
      },
      {
        test: /\.ts(x?)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "ts-loader",
          },
        ],
      },
    ],
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendors: {
          test: /node_modules/,
          name: "vendor",
          enforce: true,
          chunks: "all",
        },
      },
    },
  },
  output: {
    filename: "js/[name]-[hash].js",
    path: path.join(__dirname, "..", "..", "dist/public"),
    publicPath: "/",
  },
  plugins: [],
};
