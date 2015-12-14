module.exports = {
  entry: './entry',
  module: {
    loaders: [
      {
        test: /\.(jsx|es6)?$/,
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