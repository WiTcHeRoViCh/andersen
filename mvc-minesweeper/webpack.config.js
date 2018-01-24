const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: "./view/displayBoard",
  output: {
    filename: 'build.js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Sapper'
    })
  ]
};