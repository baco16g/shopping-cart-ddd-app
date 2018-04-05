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
const customerExist = (db, { customer_id }) => {
  return db['customers'].find(customer => customer.customer_id === customer_id)
}

const findCustomerIndex = (db, { customer_id }) => {
  return db['order'].findIndex(o => o.customer_id === customer_id)
}

/***********************
 * Main Module
 ***********************/
module.exports = (req, res) => {
  const { customer_id, items, created_at } = req.body

  const formatedItems = items.map(({ product_code, quantity }) => {
    return {
      product_code,
      quantity
    }
  })

  const order = {
    items: formatedItems,
    created_at
  }

  const db = getDB()
  if (db.hasOwnProperty('order')) {
    const exist = customerExist(db, { customer_id })
    if (exist) {
      const idx = findCustomerIndex(db, { customer_id })
      console.log(idx)
      if (idx < 0) {
        db['order'].push({
          customer_id,
          order: [order]
        })
        fs.writeFileSync(dbPath, JSON.stringify(db))
        res.status(200).json({ status: 0, message: 'your order saved.' })
      } else {
        db['order'][idx]['order'].push(order)
        fs.writeFileSync(dbPath, JSON.stringify(db))
        res.status(200).json({ status: 0, message: 'your order saved.' })
      }
    } else {
      res.status(200).json({ status: -2, message: 'not found customer' })
    }
  } else {
    db['order'] = [
      {
        customer_id,
        order: [order]
      }
    ]
    fs.writeFileSync(dbPath, JSON.stringify(db))
    res.status(200).json({ status: 0, message: 'your order saved.' })
  }
}
