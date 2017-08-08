const path = require('path');
const webpack = require('webpack');

module.exports = {
  output: {
    path: path.join(__dirname, '../dist'),
    filename: 'avatar.bundle.js',
    publicPath: publicPath,
    sourceMapFilename: '[name].map'
  },
  entry: "./js/client.js",
  plugins: [
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug: false
    }),
    new webpack.optimize.UglifyJsPlugin({
      beautify: false,
      mangle: {
        screw_ie8: true,
        keep_fnames: true
      },
      compress: {
        screw_ie8: true
      },
      comments: false
    })
  ]
}
