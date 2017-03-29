'use strict';

const webpack = require('webpack')
const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
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
  metadata: METADATA,

  errorDetails: true,

  output: {
    filename: jsName,
    path: './dist',
    publicPath: 'dist/'
  },

  entry: {
    'main': './client/main'
  },

  resolve: {
    root: [
      path.resolve('./client'),
      path.resolve('./dist')
    ],
    
    modulesDirectories: ['node_modules'],

    alias: {},

    extensions: ['', '.js', '.ts', '.tsx', '.html']
  },

  module: {
    proLoaders: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        loader: 'tslint'
      }
    ],
    loaders: [
      {test: /\.json$/, loader: 'json'},
      {test: /\.css$/, loader: ExtractTextPlugin.extract('style', 'css')},
      {test: /.styl$/, loader: ExtractTextPlugin.extract('style', 'css!postcss!stylus')},
      {test: /\.tsx?$/, loader: 'ts-loader'},
      {test: /\.(svg|cur)$/, loader: 'file', query: {name: imageName}},
      {test: /\.woff((\?|#)[\?#\w\d_-]+)?$/, loader: 'url', query: {limit: 100, minetype: 'application/font-woff', name: fontName}},
      {test: /\.woff2((\?|#)[\?#\w\d_-]+)?$/, loader: 'url', query: {limit: 100, minetype: 'application/font-woff2', name: fontName}},
      {test: /\.ttf((\?|#)[\?#\w\d_-]+)?$/, loader: 'url', query: {limit: 100, minetype: 'application/octet-stream', name: fontName}},
      {test: /\.eot((\?|#)[\?#\w\d_-]+)?$/, loader: 'url', query: {limit: 100, name: fontName}}
    ]
  },

  plugins: [
    new webpack.NoErrorsPlugin(),
    new ExtractTextPlugin(cssName, { disable: true }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {warnings: false}
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': '"production"'
    })
  ],

  postcss: () => {
    return autoprefixer({browsers: METADATA.browsers})
  }
}
