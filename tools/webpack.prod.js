'use strict';

const webpack = require('webpack')
const path = require('path')
const autoprefixer = require('autoprefixer')

const imageName = 'images/[name].[hash:8].[ext]'
const cssName = 'css/[name].[hash:8].css'
const jsName = 'js/[name].[hash:8].js'
const fontName = 'font/[name].[hash:8].[ext]'

const METADATA = {
  browsers: [
    'ie >= 10',
    'last 10 Chrome version',
    'last 10 Firefox version',
    'last 2 Edge version',
    'Safari >= 8',
    'last 5 Opera version'
  ]
}

module.exports = {
  output: {
    filename: jsName,
    path: path.resolve(__dirname, '../dist'),
    publicPath: '/'
  },

  entry: {
    'main': './client/main'
  },

  resolve: {
    modules: [
      'node_modules',
      path.resolve(__dirname, '../src')
    ],

    extensions: ['.js', '.ts', '.tsx', '.html']
  },

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        enforce: 'pre',
        exclude: /node_modules/,
        loader: 'tslint-loader'
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
          'postcss-loader'
        ]
      },
      {
        test: /.styl$/,
        use: [
          'style-loader',
          'css-loader',
          'postcss-loader',
          'stylus-loader'
        ]
      },
      { test: /\.tsx?$/, loader: 'ts-loader' },
      { test: /\.(svg|cur)$/, loader: 'file', query: {name: imageName} },
      { test: /\.woff((\?|#)[\?#\w\d_-]+)?$/, loader: 'url', query: { limit: 100, minetype: 'application/font-woff', name: fontName } },
      { test: /\.woff2((\?|#)[\?#\w\d_-]+)?$/, loader: 'url', query: { limit: 100, minetype: 'application/font-woff2', name: fontName } },
      { test: /\.ttf((\?|#)[\?#\w\d_-]+)?$/, loader: 'url', query: { limit: 100, minetype: 'application/octet-stream', name: fontName } },
      { test: /\.eot((\?|#)[\?#\w\d_-]+)?$/, loader: 'url', query: { limit: 100, name: fontName} }
    ]
  }
}
