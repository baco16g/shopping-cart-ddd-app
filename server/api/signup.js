/* @flow */
const path = require('path')
const fs = require('fs')
const PATH = require('../../config/path')

/***********************
 * Database
 ***********************/
const dbPath = path.join(PATH.SERVER, '/db/index.json')
const db = JSON.parse(fs.readFileSync(dbPath), 'UTF-8')

/***********************
 * Private Function
 ***********************/
const userExist = ({ email }) => {
  return db.users.find(user => user.email === email)
}

/***********************
 * Main Module
 ***********************/
module.exports = (req, res) => {
  const { email } = req.body
  if (db.hasOwnProperty('users') && db.users.hasOwnProperty('email')) {
    const exist = userExist({ email })
    if (exist) {
      res.status(200).json({ status: -2, message: 'User already exists.' })
    } else {
      db.users.push(req.body)
      fs.writeFileSync(dbPath, JSON.stringify(db))
      res.status(200).json({ status: 0, message: 'completed!' })
    }
  } else {
    db.users = [req.body]
    fs.writeFileSync(dbPath, JSON.stringify(db))
    res.status(200).json({ status: 0, message: 'completed!' })
  }
}
