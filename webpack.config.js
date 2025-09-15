const path = require('path');
module.exports = {
  entry: './main.js',
  mode: 'development',
  output: {
    filename: 'sum.js',
    path: path.resolve(__dirname, 'dist')
  }
};