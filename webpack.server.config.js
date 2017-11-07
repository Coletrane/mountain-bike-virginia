const webpack = require('webpack')
const path = require('path')
const baseConfig = require('./webpack.config.js')
const merge = require('webpack-merge')

const env = process.env.NODE_ENV

const serverConfig = merge(baseConfig, {
  target: 'node',
  entry: {
    app: './src/server.js'
  },
  devtool: false,
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'server.js',
    libraryTarget: 'commonjs2'
  },
  externals: Object.keys(require('./package.json').dependencies),
  plugins: [
    new webpack.DefinePlugin({
      'process.env': env
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    })
  ]
})

module.exports = serverConfig
