const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const PATHS ={
  assets: path.join(__dirname, 'assets'),
  build: path.join(__dirname, 'build')
}

module.exports = {
  entry: PATHS.assets+'/js/displayBoard.js',
  output: {
    path: PATHS.build,
    filename: '[name].js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Sapper'
    })
  ]
};