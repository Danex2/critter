const path = require('path');
const baseConfig = require('./webpack.config');
const merge = require('webpack-merge');

module.exports = merge(baseConfig, {
  devtool: 'hidden-source-map',
  mode: 'production',
  output: {
    path: path.join(__dirname, 'public'),
    filename: '[name].bundle.js'
  }
});
