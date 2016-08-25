const FriendlyErrorsWebpackPlugin = require('../../../index');

module.exports = {
  entry: __dirname + "/index.js",
  output: {
    path: __dirname + "/dist",
    filename: "bundle.js"
  },
  plugins: [
    new FriendlyErrorsWebpackPlugin(),

  ],
  module: {
    preLoaders: [
      {
        test: /\.js$/,
        loader: 'eslint',
        include: __dirname
      }
    ],
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel',
        exclude: /node_modules/
      }
    ]
  }
};