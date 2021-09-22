process.env.NODE_ENV = 'development';
process.env.BABEL_ENV = 'development';

const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    static: './dist',
    historyApiFallback: true,
    client: {
      webSocketTransport: 'ws',
    },
    webSocketServer: 'ws',
  },
});
