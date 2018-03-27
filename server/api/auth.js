/* @flow */
const path = require('path')
const fs = require('fs')
const jwt = require('jsonwebtoken')
const PATH = require('../../config/path')
const AUTH = require('../../config/auth')

/***********************
 * Database
 ***********************/
const dbPath = path.join(PATH.SERVER, '/db/index.json')
const getDB = () => JSON.parse(fs.readFileSync(dbPath), 'UTF-8')

/***********************
 * Private Function
 ***********************/
const findUser = (db, { email, password }) => {
  return db.users.find(
    user => user.email === email && user.password === password
  )
}

/***********************
 * Main Module
 ***********************/
module.exports = (req, res) => {
  const token = req.headers.authorization.split(' ')[1]
  const db = getDB()
  jwt.verify(token, AUTH.SECRET_KEY, (err, decode) => {
    if (!decode || err) {
      res.status(400).json({ status: -1, message: err })
    } else {
      const user = findUser(db, decode)
      if (user) {
        res.status(200).json({ status: 0, user })
      } else {
        res.status(200).json({ status: -2, message: 'User is not found' })
      }
    }
  })
}
