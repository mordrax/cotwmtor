var path = require('path');

module.exports = {
  devServer: {
    host: 'localhost'
  },
  hotMiddleware: {
    reload: true
  },
  resolve: {
    root: path.join(__dirname, '..', 'modules'),
    extensions: ['', '.js', '.jsx', '.json', '.css', '.less', '.scss']
  }
};
