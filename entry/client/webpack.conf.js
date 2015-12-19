var webpack = require('webpack');

module.exports = {
  entry: './entry',
  resolve: {
    extensions: ['', '.js', '.es6', '.jsx']
  },
  module: {
    loaders: [
      {
        test: /\.(js|jsx|es6)?$/,
        loader: 'babel',
        query: {stage: 0},
        exclude: /node_modules/
      },
      {test: /\.css$/, loader: 'style-loader!css-loader'},
      {test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192'},
      {test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/, loader: 'file-loader'}

    ]
  }
};