const path = require('path')
const webpack = require('webpack')

const dllConfig = {
  entry: {
    vendor: [path.join(__dirname, 'src', 'vendors.js')]
  },
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'dll.[name].js',
    library: '[name]'
  },
  plugins: [
    new webpack.DllPlugin({
      path: path.join(__dirname, 'dll', '[name]-manifest.json'),
      name: '[name]',
      context: path.resolve(__dirname, 'src')
    }),
    new webpack.optimize.OccurrenceOrderPlugin()
  ],
  resolve: {
    modules: [
      'node_modules',
      path.resolve(__dirname, 'src')
    ]
  }
}

module.exports = dllConfig
