const webpack = require('webpack');
const dotenv = require('dotenv').config();

module.exports = {
  devtool: 'eval-source-map',
  entry: {
      main: [
          './src/main.js',
      ]
  },
  output: {
      filename: 'bundle.js'
  },
  resolve: {
      extensions: ['.js', '.jsx'],
  },
  plugins: [
    new webpack.DefinePlugin({
      'process': {
        'env': {
          'API_KEY': JSON.stringify(process.env.API_KEY),
          'CLIENT_ID': JSON.stringify(process.env.CLIENT_ID)
        }
      }
    })
  ],

  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
            "presets": ['react', 'es2015']
        }
    },

      {
        test: /\.scss$/,
        loaders: [
          'style-loader', 'css-loader', 'resolve-url-loader', 'sass-loader?sourceMap'
        ]
      }
    ]
  }


 }
