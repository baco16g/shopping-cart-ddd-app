/* @flow */

import getProducts from '~/adapter/processAdapter/services/constants/api/getProducts'
import fetchCustoemr from '~/adapter/processAdapter/services/constants/api/fetchCustomer'
import login from '~/adapter/processAdapter/services/constants/api/login'

const API_FUNC = {
  GET: {
    PRODUCTS: getProducts,
    CUSTOMER: fetchCustoemr
  },
  POST: {
    LOGIN: login
  }
}

export default API_FUNC
