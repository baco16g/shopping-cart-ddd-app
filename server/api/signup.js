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
const userExist = (db, { email }) => {
  return db.users.find(user => user.email === email)
}

/***********************
 * Main Module
 ***********************/
module.exports = (req, res) => {
  const {
    email,
    password,
    first_name,
    last_name,
    contract_name,
    card_number,
    expiry_month,
    expiry_year
  } = req.body
  const volume_info = { first_name, last_name }
  const payment_info = {
    contract_name,
    card_number,
    expiry_month,
    expiry_year
  }
  const user = { email, password, payment_info, volume_info }

  const db = getDB()
  if (db.hasOwnProperty('users')) {
    const exist = userExist(db, { email })
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
