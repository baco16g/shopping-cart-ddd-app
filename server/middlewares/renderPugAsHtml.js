const PATH = require('../../config/path')
const url = require('url')
const path = require('path')
const pug = require('pug')

const getPugSrcPath = req => {
  const reqPath = url.parse(req.url).pathname
  if (!reqPath || !reqPath.match(/(\/|\.html)$/)) return false
  const reqExtname = path.extname(path.basename(reqPath))
  return reqExtname === '.html'
    ? reqPath.replace(reqExtname, '.pug')
    : path.join(`${reqPath}`, 'index.pug')
}

module.exports = (req, res, next) => {
  const pugPath = getPugSrcPath(req)
  if (typeof pugPath !== 'string') {
    next()
    return false
  }
  const htmlBuffer = pug.renderFile(path.join(PATH.TEMPLATES_SRC, pugPath), {
    basedir: PATH.TEMPLATES_SRC,
    pretty: true,
    options: {}
  })
  res.send(htmlBuffer.toString())
}
