var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var babelSettings = {
  presets: ['react', 'es2015', 'stage-0']
};
babelSettings.plugins = [
  'transform-decorators-legacy',
  ["transform-react-jsx", { "pragma": "hJSX" }]
];

if (process.env.NODE_ENV !== 'production' && !process.env.IS_MIRROR) {
  babelSettings.plugins.push(['react-transform', {
    transforms: [{
      transform: 'react-transform-hmr',
      imports: ['react'],
      locals: ['module']
    }, {
      transform: 'react-transform-catch-errors',
      imports: ['react', 'redbox-react']
    }]
    // redbox-react is breaking the line numbers :-(
    // you might want to disable it
  }]);
}

var cssLoader;
var plugins = [];

if (process.env.NODE_ENV === 'production') {
  plugins.push(new ExtractTextPlugin('style.css', { allChunks: true }));
  cssLoader = ExtractTextPlugin.extract('style', 'css?module&localIdentName=[hash:base64:5]');

  if (!Meteor.isCordova) {
    plugins.push(new webpack.optimize.CommonsChunkPlugin('common', 'common.web.js'));
  }
} else {
  cssLoader = 'style!css?module&localIdentName=[name]__[local]__[hash:base64:5]';
}

module.exports = {
  entry: './entry',
  plugins: plugins,

  module: {
    hot: true,
    loaders: [
      { test: /\.jsx?$/,
        loader: 'babel',
        query: babelSettings,
        exclude: /(node_modules|bower_components)/
      },
      { test: /\.css$/, loader: cssLoader },
      { test: /\.(png|jpe?g)(\?.*)?$/, loader: 'url?limit=8182' },
      { test: /\.(svg|ttf|woff|eot)(\?.*)?$/, loader: 'file' },

    ]
  }
};