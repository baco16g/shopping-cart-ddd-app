const path = require('path')

const ROOT = path.join(__dirname, '../')
const SRC = path.resolve(`${ROOT}/client`)
const DEST = path.resolve(`${ROOT}/public`)
const SERVER = path.resolve(`${ROOT}/server`)

exports.ROOT = ROOT
exports.SRC = SRC
exports.DEST = DEST
exports.SERVER = SERVER
exports.IMAGE_DEST = path.resolve(`${DEST}/assets/images`)
exports.JS_SRC = path.resolve(`${SRC}/scripts`)
exports.JS_DEST = path.resolve(`${DEST}/assets/javascripts`)
exports.ENTRY_POINTS = path.resolve(`${SRC}/scripts/entrypoints`)
exports.TEMPLATES_SRC = path.resolve(`${SRC}/templates`)
exports.TEMPLATES_DEST = path.resolve(`${DEST}`)
