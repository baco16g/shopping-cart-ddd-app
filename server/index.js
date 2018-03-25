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
const fetchCustomer = require(path.join(PATH.SERVER, '/api/fetchCustomer'))

server.use(defaultMiddlewares)
server.use(bodyParser.urlencoded({ extended: true }))
server.use(bodyParser.json())
server.use(renderPugAsHtml)
server.get('/api/customer', fetchCustomer)
server.post('/api/login', login)
server.post('/api/signup', signup)
server.use('/api', router)
server.listen(PORT, () => {
  console.log('JSON Server is running')
})
