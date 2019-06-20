const path = require('path');
const Htmlwebpackplugin = require('html-webpack-plugin');
const Dynamic = require('dynamic-cdn-webpack-plugin');
const Compress = require('compression-webpack-plugin');
const Uglify = require('uglifyjs-webpack-plugin');
const Minify = require('babel-minify-webpack-plugin');

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
  externals: {
    faker: 'faker',
  },
  plugins: [
    new Htmlwebpackplugin(),
    new Dynamic(),
    new Minify(),
    new Compress(),
  ],
  optimization: {
    minimizer: [
      new Uglify({
        test: /main\.bundle\.js$/,
      }),
    ],
  },
};
