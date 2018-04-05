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
const findCustomer = (db, { email, password }) => {
  return db.customers.find(
    customer => customer.email === email && customer.password === password
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
      const customer = maskCardNumber(findCustomer(db, decode))
      if (customer) {
        res.status(200).json({ status: 0, customer })
      } else {
        res.status(200).json({ status: -2, message: 'User is not found' })
      }
    }
  })
}
