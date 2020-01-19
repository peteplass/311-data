const merge = require('webpack-merge');
const config = require('./webpack.config.js');

module.exports = merge(config, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    open: true,
    contentBase: './public',
    compress: true,
    port: 3000,
    hot: true,
    historyApiFallback: true,
  },
});
