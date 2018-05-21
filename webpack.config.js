const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'index.js',
    libraryTarget: 'commonjs2'
  },
  mode: 'none',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        include: path.resolve(__dirname, 'src'),
        exclude: /(node_modules|bower_components|build)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env'],
            plugins: [
              "transform-object-rest-spread",
              "transform-react-jsx"
            ]
          }
        }
      },
      {
        test: /\.(css)$/,
        use: [ 'style-loader', 'css-loader' ]
      },
      {
        test: /\.(svg)$/,
        use: 'svg-loader'
      },
      {
        test: /\.(eot|ttf|woff|png|jpg|jpeg|gif)$/,
        use: ['url-loader']
      },
    ]
  },
  externals: {
    'react': 'commonjs react'
  }
};