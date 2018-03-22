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
const createToken = payload => {
  return jwt.sign(payload, AUTH.SECRET_KEY)
}

const getUserIndex = (db, { email, password }) => {
  return db.users.findIndex(
    user => user.email === email && user.password === password
  )
}

const getUser = (db, { email, password }) => {
  return db.users.find(
    user => user.email === email && user.password === password
  )
}

const isAuth = (db, { email, password }) =>
  getUserIndex(db, { email, password }) !== -1

/***********************
 * Main Module
 ***********************/
module.exports = (req, res) => {
  const { email, password } = req.body

  if (!isAuth(db, { email, password })) {
    const message = 'Incorrect email or password'
    res.status(200).json({ status: -2, message })
  }

  const user = getUser(db, { email, password })
  const token = createToken({ email, password })
  const payload = Object.assign({}, { user }, { status: 0, token })
  res.status(200).json(payload)
}
