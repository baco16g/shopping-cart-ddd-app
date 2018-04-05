const fs = require('fs')
const path = require('path')

module.exports = function(srcPath, outputPath) {
  return fs
    .readdirSync(srcPath)
    .filter(file => file.match(/.*\.pug$/))
    .map(file => ({
      template: path.join(srcPath, file),
      filename: path.join(outputPath, file.replace(/\.[^/.]+$/, '.html')),
      pretty: true,
      inject: false,
      cache: false
    }))
}
