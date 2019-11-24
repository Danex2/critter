const path = require('path');
const baseConfig = require('./webpack.config');
const merge = require('webpack-merge');
const TerserJSPlugin = require('terser-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = merge(baseConfig, {
  optimization: {
    minimizer: [new TerserJSPlugin({}), new OptimizeCSSAssetsPlugin({})]
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  plugins: [],
  devtool: 'hidden-source-map',
  mode: 'production',
  output: {
    path: path.join(__dirname, 'public'),
    filename: '[name].bundle.js'
  }
});
