const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const imageName = 'images/[name].[hash:8].[ext]'
const jsName = 'js/[name].[hash:8].js'
const fontName = 'font/[name].[hash:8].[ext]'

module.exports =(env = {}) => {
  const isDev = !!env.dev
  return {
    mode: isDev ? 'development' : 'production',

    output: {
      filename: jsName,
      path: path.join(__dirname, '/dist'),
      publicPath: isDev ? '/' : 'https://pjshy.github.io/redux-todos'
    },
  
    entry: {
      'main': './client/main'
    },
  
    devServer: {
      stats: 'errors-only',
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Credentials': 'true'
      },
      port: '8889'
    },
  
    devtool: 'eval',
  
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
        { test: /\.tsx?$/, loader: 'ts-loader', options: { transpileOnly: true} },
        { test: /\.(svg|cur)$/, loader: 'url', query: { name: imageName } },
        { test: /\.woff((\?|#)[\?#\w\d_-]+)?$/, loader: 'url', query: { limit: 100, minetype: 'application/font-woff', name: fontName } },
        { test: /\.woff2((\?|#)[\?#\w\d_-]+)?$/, loader: 'url', query: { limit: 100, minetype: 'application/font-woff2', name: fontName } },
        { test: /\.ttf((\?|#)[\?#\w\d_-]+)?$/, loader: 'url', query: { limit: 100, minetype: 'application/octet-stream', name: fontName } },
        { test: /\.eot((\?|#)[\?#\w\d_-]+)?$/, loader: 'url', query: { limit: 100, name: fontName} }
      ]
    },
  
    plugins: [
      new HtmlWebpackPlugin({
        template: 'public/index.html',
        filename: 'index.html',
        inject: true
      })
    ]
  }
}
