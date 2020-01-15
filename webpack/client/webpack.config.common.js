/* eslint-disable @typescript-eslint/no-var-requires */
const path = require("path");
const webpack = require("webpack");
const Dotenv = require("dotenv-webpack");

module.exports = {
  entry: ["./client/App.tsx", "babel-polyfill"],
  resolve: {
    alias: {
      "@": path.resolve(process.cwd(), "./"),
      apis: path.resolve(process.cwd(), "./apis/$api.ts"),
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
    path: path.join(process.cwd(), "dist/public"),
    publicPath: "/",
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env.WS_HOST": JSON.stringify(process.env.WS_HOST),
      "process.env.WS_PORT": JSON.stringify(process.env.WS_PORT),
    }),
    new Dotenv(),
  ],
};
