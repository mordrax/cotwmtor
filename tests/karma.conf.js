var webpack = require('webpack');
var path = require('path');

module.exports = function (config) {
  config.set({
    autoWatch        : true,
    browsers         : ['Chrome'], //run in Chrome
    files            : ['tests.webpack.js'],
    frameworks       : ['jasmine'], //use the mocha test framework
    logLevel         : config.LOG_INFO,
    singleRun        : false, //just run once by default
    preprocessors    : {
      'tests.webpack.js': ['webpack', 'sourcemap'] //preprocess with webpack and our sourcemap loader
    },
    reporters        : ['mocha'],
    //reporters    : ['dots'], //report results in this format
    webpack          : { //kind of a copy of your webpack config
      //devtool  : 'inline-source-map', //just do inline source maps instead of the default
      devtool: 'eval',
      module   : {
        loaders: [
          {
            test   : /\.jsx?$/,
            exclude: /\/node_modules\//,
            loader : 'babel-loader',
            query  : {
              presets: [
                'es2015',
                'babel-preset-stage-0',
                'react'], //airbnb
              plugins: [
                ['babel-root-slash-import', {
                  "rootPathSuffix": ".."}]
              ]
            }
          }
        ]
      },
      resolve  : {
        extensions: ['', '.js', '.jsx']
      },
      externals: {
        'cheerio'                       : 'window',
        'react/lib/ExecutionEnvironment': true,
        'react/lib/ReactContext'        : true
      }
    },
    webpackServer    : {
      noInfo: true //please don't spam the console when running in karma!
    },
    plugins          : [
      'karma-webpack',
      'karma-jasmine',
      'karma-sourcemap-loader',
      'karma-chrome-launcher',
      'karma-mocha-reporter',
      'karma-spec-reporter'
    ],
    babelPreprocessor: {
      options: {
        presets: ['airbnb']
      }
    }
  });
};