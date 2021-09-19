'use strict';

module.exports = function (api) {
  api.cache(true);

  const presets = [
    ['@babel/preset-env', {
      modules: false,
      corejs: { version: '3.17', proposals: false },
      useBuiltIns: 'usage',
      debug: process.env.BABEL_DEBUG || false,
    }],
    ["@babel/preset-react"]
  ];

  const plugins = [
    ['@babel/plugin-transform-runtime', {
      corejs: false,
      regenerator: false,
    }]
  ];

  return {
    presets,
    plugins,
  };
}
