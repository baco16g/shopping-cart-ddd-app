/* @flow */
const path = require('path')
const fs = require('fs')
const jwt = require('jsonwebtoken')
const PATH = require('../../config/path')
const AUTH = require('../../config/auth')

/***********************
 * Database
 ***********************/
const db = JSON.parse(
  fs.readFileSync(path.join(PATH.SERVER, '/db/index.json'), 'UTF-8')
)

/***********************
 * Private Function
 ***********************/
const findUser = ({ email, password }) => {
  return db.users.find(
    user => user.email === email && user.password === password
  )
}

/***********************
 * Main Module
 ***********************/
module.exports = (req, res) => {
  const token = req.headers.authorization.split(' ')[1]

  jwt.verify(token, AUTH.SECRET_KEY, (err, decode) => {
    const user = findUser(decode)
    if (!user & err) {
      res.status(400).json({ status: -1, message: err })
    } else if (user) {
      res.status(200).json({ status: 0, user })
    } else {
      res.status(200).json({ status: -2, message: 'User is not found' })
    }
  })
}
