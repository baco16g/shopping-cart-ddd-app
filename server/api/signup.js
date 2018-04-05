/* @flow */
const path = require('path')
const fs = require('fs')
const PATH = require('../../config/path')

/***********************
 * Database
 ***********************/
const dbPath = path.join(PATH.SERVER, '/db/index.json')
const getDB = () => JSON.parse(fs.readFileSync(dbPath), 'UTF-8')

/***********************
 * Private Function
 ***********************/
const customerExist = (db, { customer_id, email }) => {
  return db.customers.find(
    customer => customer.email === email || customer.customer_id === customer_id
  )
}

/***********************
 * Main Module
 ***********************/
module.exports = (req, res) => {
  const {
    customer_id,
    email,
    password,
    first_name,
    last_name,
    contract_name,
    card_number,
    expiry_month,
    expiry_year,
    created_at
  } = req.body
  const volume_info = { first_name, last_name }
  const payment_info = {
    contract_name,
    card_number,
    expiry_month,
    expiry_year
  }
  const customer = {
    customer_id,
    email,
    password,
    payment_info,
    volume_info,
    created_at
  }

  const db = getDB()
  if (db.hasOwnProperty('customers')) {
    const exist = customerExist(db, { customer_id, email })
    if (exist) {
      res.status(200).json({ status: -2, message: 'Customer already exists.' })
    } else {
      db.customers.push(customer)
      fs.writeFileSync(dbPath, JSON.stringify(db))
      res.status(200).json({ status: 0, message: 'completed!' })
    }
  } else {
    db['customers'] = [customer]
    fs.writeFileSync(dbPath, JSON.stringify(db))
    res.status(200).json({ status: 0, message: 'completed!' })
  }
}
