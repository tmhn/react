"use strict"; // eslint-disable-line strict

const path = require("path");
const webpack = require("webpack");
const WebpackNotifierPlugin = require("webpack-notifier");

module.exports = {
  devtool: "source-map",
  entry: ["babel-polyfill", "./src/client/index.js"],
  output: {
    path: path.join(__dirname, "src", "public", "js"),
    filename: "bundle.js",
    publicPath: path.join(__dirname, "src", "public", "js")
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: JSON.stringify("development") // eslint-disable-line quote-props
      }
    }),
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery",
      "window.jQuery": "jquery",
      Popper: ["popper.js", "default"],
      Util: "exports-loader?Util!bootstrap/js/dist/util",
      Dropdown: "exports-loader?Dropdown!bootstrap/js/dist/dropdown"
    }),
    new WebpackNotifierPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: "babel-loader",
        query: {
          presets: ["react", ["env", { targets: { browsers: ["last 2 Chrome versions"] } }]], // eslint-disable-line quote-props
          plugins: ["transform-flow-strip-types", "lodash"]
        },
        exclude: /node_modules/
      },
      {
        test: /\.(css|scss)$/,
        loaders: ["style-loader", "css-loader", "sass-loader"]
      },
      {
        test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
        loader: "file-loader"
      },
      {
        test: /\.(woff|woff2|ttf|svg)$/,
        loader: "url-loader"
      }
    ]
  }
};
