const webpack = require('webpack')
const { resolve } = require('path')
const merge = require('webpack-merge')
const { baseConfig } = require('./webpack.base')


const config = {
  cache: true,
  devtool: 'eval',
  entry: './src/index.js',
  output: {
    path: resolve(__dirname, 'public'),
    filename: '[name].js',
    chunkFilename: '[name].js'
  },
  plugins: [
    new webpack.DllReferencePlugin({
      context: path.join(__dirname, "src"),
      manifest: require("./dll/vendor-manifest.json")
    })
  ],
}

const clientConfig = merge(config, baseConfig)

module.exports = clientConfig