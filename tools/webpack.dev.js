'use strict';

const webpackMerge = require('webpack-merge')
const webpackConfig = require('./webpack.common')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

const webpackServerPath = 'http://localhost:8889/'

webpackConfig.output.publicPath = webpackServerPath

module.exports = webpackMerge(webpackConfig, {
  debug: true,

  devtool: 'eval',

  devServer: {
    stats: 'errors-only',
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': 'true'
    }
  },

  entry: {
    main: [
      'webpack/hot/dev-server',
      `webpack-dev-server/client?${webpackServerPath}`,
      webpackConfig.entry.main
    ]
  },

  plugins: [
    new ExtractTextPlugin('', { disable: true }),

    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html',
      inject: true
    })
  ]
})
