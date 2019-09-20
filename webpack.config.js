/**
 * Created by jeffersonmourak on 21/5/17.
 */
const webpack = require("webpack");
const path = require("path");
const UglifyJSPlugin = require("uglifyjs-webpack-plugin");

var BUILD_DIR = path.resolve(__dirname, "dist/");
var SRC_DIR = path.resolve(__dirname, "src/");

var config = {
  resolve: {
    alias: {
      "@components": path.resolve(SRC_DIR, "components"),
      "@translations": path.resolve(SRC_DIR, "translations")
    }
  },
  entry: {
    jhs: ["babel-polyfill", SRC_DIR + "/index.js"],
    "jhs.min": ["babel-polyfill", SRC_DIR + "/index.js"]
  },
  devtool: "source-map",
  output: {
    path: BUILD_DIR,
    filename: "[name].js"
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      include: /\.min\.js$/,
      minimize: true
    }),
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    loaders: [
      {
        test: /\.js?/,
        include: SRC_DIR,
        loader: "babel-loader"
      }
    ]
  },
  devServer: {
    contentBase: __dirname,
    publicPath: "/dist/",
    compress: true,
    hot: true,
    port: 3000,
    watchContentBase: true,
    open: true,
    historyApiFallback: path.join(__dirname, "index.html")
  }
};

module.exports = config;
