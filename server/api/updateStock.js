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
const getProductIndex = (db, { product_code }) => {
  return db.products.findIndex(product => product.product_code === product_code)
}

const getProductStock = (db, idx) => {
  return db.products[idx]['stock_info']['quantity']
}

/***********************
 * Main Module
 ***********************/
module.exports = (req, res) => {
  const cartItems = req.body['cart_items']
  const db = getDB()

  if (cartItems && cartItems.length > 0) {
    cartItems.forEach(cartItem => {
      const product_code = cartItem['product_code']
      const quantity = cartItem['quantity']
      const idx = getProductIndex(db, { product_code })
      const newStock = getProductStock(db, idx) - quantity

      if (newStock < 0) {
        res.status(200).json({ status: 0, message: 'sorry... not found stock' })
        return false
      }

      db.products[idx]['stock_info']['quantity'] =
        getProductStock(db, idx) - quantity
    })
    fs.writeFileSync(dbPath, JSON.stringify(db))
    res.status(200).json({ status: 0, message: 'completed' })
  } else {
    res.status(200).json({ status: -2, message: 'not Found Items in Cart' })
  }
}
