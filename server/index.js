const PATH = require('../config/path')
const PORT = require('../config/port')

const path = require('path')
const jsonServer = require('json-server')
const bodyParser = require('body-parser')
const server = jsonServer.create()
const router = jsonServer.router(path.join(PATH.SERVER, '/db/index.json'))
const defaultMiddlewares = jsonServer.defaults()
const renderPugAsHtml = require(path.join(
  PATH.SERVER,
  '/middlewares/renderPugAsHtml'
))
const login = require(path.join(PATH.SERVER, '/api/login'))
const signup = require(path.join(PATH.SERVER, '/api/signup'))
const auth = require(path.join(PATH.SERVER, '/api/auth'))

router.render = (req, res) => {
  console.log(res)
  res.status(200).json(res.locals.data)
}

server
  .use(defaultMiddlewares)
  .use(bodyParser.urlencoded({ extended: true }))
  .use(bodyParser.json())
  .use(renderPugAsHtml)
  .get('/api/auth', auth)
  .post('/api/auth/login', login)
  .post('/api/signup', signup)
  .use('/api', router)
  .listen(PORT, () => {
    console.log('JSON Server is running')
  })
