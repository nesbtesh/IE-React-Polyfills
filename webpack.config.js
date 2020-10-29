const path = require('path');
const webpack = require('webpack');
const CompressionPlugin = require('compression-webpack-plugin');

module.exports = {
  entry: './main.js',
  plugins: [new CompressionPlugin({
  	algorithm: 'gzip',
  })],
   mode: 'production',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'polyfill.js'
  }
};