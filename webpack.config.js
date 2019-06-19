const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: {
    main: './client/main.js',
  },
  output: {
    filename: './main.bundle.js',
    path: path.join(__dirname, 'build'),
  },
  module: {
    rules: [
      {
        test: /\.s?css$/,
        use: [
          'isomorphic-style-loader',
          {
            loader: 'style-loader',
          }, {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
            },
          }, {
            loader: 'sass-loader',
          },
        ],
      }, {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx', '.es6', '.css'],
  },
};
