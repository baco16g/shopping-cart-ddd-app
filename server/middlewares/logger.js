module.exports = async (req, res, next) => {
  const start = new Date()
  await next()
  const ms = new Date() - start
  console.log(`${req.method} ${req.url} - ${ms}ms`)
}
