/* config-overrides.js */

module.exports = function override(config, env) {
    config.output.publicPath = './dist/'
    return config;
  }