const CONFIG = require('../config/path')

module.exports = {
  filename: '[name].bundle.js',
  chunkFilename: '[name].bundle.js',
  path: CONFIG.JS_DEST,
  publicPath: '/'
}
