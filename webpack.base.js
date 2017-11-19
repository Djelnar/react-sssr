const webpack = require('webpack')
const path = require('path')


const baseConfig = {
  cache: true,
  devtool: 'eval',
  plugins: [
    new webpack.DllReferencePlugin({
      context: path.join(__dirname, "src"),
      manifest: require("./dll/vendor-manifest.json")
    })
  ],
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