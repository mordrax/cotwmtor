var path = require('path');

module.exports = {
  resolve: {
    root: path.join(__dirname, '..', 'modules'),
    extensions: ['', '.js', '.jsx', '.json']
  }
};
