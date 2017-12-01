const { resolve } = require('path')
const merge = require('webpack-merge')
const nodeExternals = require('webpack-node-externals')
const baseConfig = require('./webpack.base')


const config = {
  target: 'node',
  entry: './src/server.js',
  output: {
    path: resolve(__dirname, 'dist'),
    filename: 'server.js',
  },
  externals: [
    nodeExternals(),
  ],
}

const serverConfig = merge(baseConfig, config)

module.exports = serverConfig
