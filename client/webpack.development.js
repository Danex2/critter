const merge = require("webpack-merge");
const baseConfig = require("./webpack.config");
const path = require("path");

module.exports = merge(baseConfig, {
  devtool: "cheap-module-eval-source-map",
  mode: "development",
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  performance: {
    hints: "warning",
  },
});
