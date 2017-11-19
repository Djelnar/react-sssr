const webpack = require('webpack')
const { resolve } = require('path')
const merge = require('webpack-merge')
const { baseConfig } = require('./webpack.base')


const config = {
  entry: './src/index.js',
  output: {
    path: resolve(__dirname, 'public'),
    filename: '[name].js',
    chunkFilename: '[name].js'
  }
}

const clientConfig = merge(baseConfig, config)

module.exports = clientConfig