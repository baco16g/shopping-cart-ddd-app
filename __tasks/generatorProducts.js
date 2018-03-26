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

const list = () =>
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
      }
    }
  })

fs.open(dbPath, 'r', (err, data) => {
  const db = JSON.parse(data)
  const json = Object.assign({}, db, {
    products: list()
  })
  console.log(JSON.stringify(json))
})
