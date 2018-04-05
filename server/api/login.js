/* @flow */
const path = require('path')
const fs = require('fs')
const jwt = require('jsonwebtoken')
const repeat = require('lodash').repeat
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
const createToken = payload => {
  return jwt.sign(payload, AUTH.SECRET_KEY)
}

const getCustomerIndex = (db, { email, password }) => {
  return db.customers.findIndex(
    customers => customers.email === email && customers.password === password
  )
}

const getCustomer = (db, { email, password }) => {
  return db.customers.find(
    customers => customers.email === email && customers.password === password
  )
}
const maskCardNumber = customer => {
  const _cardNumber = customer['payment_info']['card_number']
  const _prefix = _cardNumber.slice(0, 4)
  const _suffix = repeat('*', _cardNumber.length - 4)
  const _masked = _prefix + _suffix
  return {
    ...customer,
    payment_info: {
      ...customer.payment_info,
      card_number: _masked
    }
  }
}

const isAuth = (db, { email, password }) =>
  getCustomerIndex(db, { email, password }) !== -1

/***********************
 * Main Module
 ***********************/
module.exports = (req, res) => {
  const { email, password } = req.body
  const db = getDB()

  if (!isAuth(db, { email, password })) {
    const message = 'Incorrect email or password'
    res.status(200).json({ status: -2, message })
  } else {
    const customer = maskCardNumber(getCustomer(db, { email, password }))
    const token = createToken({ email, password })
    const payload = Object.assign({}, { customer }, { status: 0, token })
    res.status(200).json(payload)
  }
}
