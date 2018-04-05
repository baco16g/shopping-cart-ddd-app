/* @flow */

import getProducts from '~/adapter/processAdapter/services/constants/api/getProducts'
import fetchCustoemr from '~/adapter/processAdapter/services/constants/api/fetchCustomer'
import fetchOrder from '~/adapter/processAdapter/services/constants/api/fetchOrder'
import login from '~/adapter/processAdapter/services/constants/api/login'
import signup from '~/adapter/processAdapter/services/constants/api/signup'
import updateStock from '~/adapter/processAdapter/services/constants/api/updateStock'
import postOrder from '~/adapter/processAdapter/services/constants/api/postOrder'

const API_FUNC = {
  GET: {
    PRODUCTS: getProducts,
    CUSTOMER: fetchCustoemr,
    ORDER: fetchOrder
  },
  POST: {
    LOGIN: login,
    SIGNUP: signup,
    ORDER: postOrder
  },
  PATCH: {
    PRODUCT_STOCK: updateStock
  }
}

export default API_FUNC
