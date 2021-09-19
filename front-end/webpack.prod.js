process.env.NODE_ENV = 'production';
process.env.BABEL_ENV = 'production';

const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'production',
  devtool: 'source-map',
});
