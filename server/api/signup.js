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
const userExist = (db, { customer_id, email }) => {
  return db.users.find(
    user => user.email === email || user.customer_id === customer_id
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
  const user = {
    customer_id,
    email,
    password,
    payment_info,
    volume_info,
    created_at
  }

  const db = getDB()
  if (db.hasOwnProperty('users')) {
    const exist = userExist(db, { customer_id, email })
    if (exist) {
      res.status(200).json({ status: -2, message: 'User already exists.' })
    } else {
      db.users.push(user)
      fs.writeFileSync(dbPath, JSON.stringify(db))
      res.status(200).json({ status: 0, message: 'completed!' })
    }
  } else {
    db['users'] = [user]
    fs.writeFileSync(dbPath, JSON.stringify(db))
    res.status(200).json({ status: 0, message: 'completed!' })
  }
}
