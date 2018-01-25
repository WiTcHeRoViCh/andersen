const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const PATHS ={
  assets: path.join(__dirname, 'assets'),
  build: path.join(__dirname, 'build'),
  css: path.join(__dirname, 'css')
}

module.exports = {
  entry: PATHS.assets+'/js/view/gameBoard.js',
  output: {
    path: PATHS.build,
    filename: '[name].js'
  },

  module: {
    rules: [
      {
        test: /\.scss$/,
        //include: PATHS.css,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      }
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      title: 'Sapper'
    })
  ]
};