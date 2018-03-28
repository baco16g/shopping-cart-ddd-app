const request = require('request')
const fs = require('fs')
const path = require('path')
const rimraf = require('rimraf')
const mkdirp = require('mkdirp')
const faker = require('faker')
const PATH = require('../config/path')
const PRODUCTS_PATH = '/common/products'
const MAX_LENGTH = 15
faker.locale = 'ja'

const dbPath = path.join(PATH.SERVER, '/db/index.json')

const generateRandomString = (radix, length) => {
  return Math.random()
    .toString(radix)
    .slice(-length)
}

const saveThumb = (url, productCode, ouputPath) => {
  rimraf(ouputPath, () => {
    mkdirp(ouputPath)
    request(
      {
        method: 'GET',
        url: url,
        encoding: null
      },
      (error, response, body) => {
        if (!error && response.statusCode === 200) {
          const filename = `${productCode}.jpg`
          fs.writeFileSync(path.join(ouputPath, filename), body, 'binary')
        }
      }
    )
  })
}

const productList = () =>
  new Array(MAX_LENGTH).fill(0).map(() => {
    const productCode = faker.random.uuid()
    const thumbUrl = `https://loremflickr.com/680/480?${faker.random.number()}`
    saveThumb(thumbUrl, productCode, path.join(PATH.IMAGE_DEST, PRODUCTS_PATH))
    return {
      product_code: productCode,
      volume_info: {
        name: faker.commerce.productName(),
        description: faker.lorem.paragraph(),
        category: faker.lorem.slug()
      },
      sale_info: {
        price: faker.commerce.price(),
        currency_code: 'JPY'
      },
      stock_info: {
        quantity: parseInt(generateRandomString(10, 1))
      },
      created_at: new Date()
    }
  })

const adminUserList = [
  {
    customer_id: 'admin',
    email: 'admin@gmail.com',
    password: 'admin',
    volume_info: {
      first_name: 'admin',
      last_name: 'user'
    },
    payment_info: {
      contract_name: 'ADMIN USER',
      card_number: '4111222233334444',
      expiry_month: '1',
      expiry_year: '2020'
    },
    created_at: new Date()
  }
]

const orderList = [
  {
    customer_id: 'admin',
    order: [
      {
        items: [
          {
            product_code: '',
            quantity: ''
          }
        ],
        created_at: new Date()
      }
    ]
  }
]

fs.open(dbPath, 'r', (err, data) => {
  const db = JSON.parse(data)
  const json = Object.assign({}, db, {
    products: productList(),
    users: adminUserList,
    orderList: orderList
  })
  console.log(JSON.stringify(json))
})
