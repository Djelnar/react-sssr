const webpack = require('webpack')
const path = require('path')


const baseConfig = {
  module: {
    rules: [{
      test: /\.jsx$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env', '@babel/preset-react']
        }
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