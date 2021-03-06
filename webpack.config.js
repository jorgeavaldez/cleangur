var webpack = require('webpack');
//var ModernizrWebpackPlugin = require('modernizr-webpack-plugin');

module.exports = {
  entry: [
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/only-dev-server',
    './src/index.js'
  ],
  module: {
    loaders: [ {
      test: /\.js?$/,
      exclude: /node_modules/,
      loader: 'react-hot!babel'
    }, {
      test: /\.css?$/,
      loader: 'style-loader!css-loader'
    }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.css']
  },
  output: {
    path: 'dist',
    publicPath: '/',
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: './dist',
    hot: true
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
};
