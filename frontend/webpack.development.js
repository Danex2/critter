const merge = require('webpack-merge');
const baseConfig = require('./webpack.config');
const path = require('path');

module.exports = merge(baseConfig, {
  devtool: 'cheap-module-eval-source-map',
  mode: 'development',
  devServer: {
    contentBase: path.join(__dirname, 'public')
  },
  performance: {
    hints: 'warning'
  }
});
