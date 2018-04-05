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
const findCustomerIndex = (db, { customer_id }) => {
  return db['order'].findIndex(o => o.customer_id === customer_id)
}

/***********************
 * Main Module
 ***********************/
module.exports = (req, res) => {
  const { customer_id } = req.query

  const db = getDB()
  if (db.hasOwnProperty('order')) {
    const idx = findCustomerIndex(db, { customer_id })
    if (idx < 0) {
      res.status(200).json({ status: -2, message: 'not found customer' })
    } else {
      const idx = findCustomerIndex(db, { customer_id })
      res.status(200).json({ status: 0, order_list: db['order'][idx]['order'] })
    }
  } else {
    res.status(200).json({ status: -2, message: 'not found customer' })
  }
}
