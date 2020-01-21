const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const webpack = require("webpack");

module.exports = {
  entry: "./src/index.js",
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new webpack.ProgressPlugin(),
    new HtmlWebpackPlugin({
      title: "Find My Pet - Reconnecting owners with lost pets.",
      inject: false,
      template: require("html-webpack-template"),
      appMountId: "app",
      mobile: true,
      lang: "en-US",
      meta: [
        {
          name: "description",
          content: "A tool to help owners reunite with their pets."
        }
      ]
    })
  ]
};
