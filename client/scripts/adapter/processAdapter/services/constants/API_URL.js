/* @flow */

const API_URL = {
  GET: {
    PRODUCTS: '/api/products',
    CUSTOMER: '/api/auth'
  },
  POST: {
    LOGIN: '/api/auth/login',
    SIGNUP: '/api/signup',
    ORDER: '/api/order'
  },
  PATCH: {
    PRODUCT_STOCK: '/api/product/updateStock'
  }
}

export default API_URL
