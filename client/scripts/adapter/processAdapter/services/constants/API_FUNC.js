/* @flow */

import getProducts from '~/adapter/processAdapter/services/constants/api/getProducts'
import fetchCustoemr from '~/adapter/processAdapter/services/constants/api/fetchCustomer'
import login from '~/adapter/processAdapter/services/constants/api/login'
import signup from '~/adapter/processAdapter/services/constants/api/signup'
import updateStock from '~/adapter/processAdapter/services/constants/api/updateStock'

const API_FUNC = {
  GET: {
    PRODUCTS: getProducts,
    CUSTOMER: fetchCustoemr
  },
  POST: {
    LOGIN: login,
    SIGNUP: signup
  },
  PATCH: {
    PRODUCT_STOCK: updateStock
  }
}

export default API_FUNC
