const webpack = require('webpack')
const path = require('path')


const baseConfig = {
  module: {
    rules: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader'
      }
    }]
  },
  resolve: {
    extensions: [".js", ".jsx"],
    modules: [
      "node_modules",
      path.resolve(__dirname, "src")
    ]
  }
}

module.exports = baseConfig