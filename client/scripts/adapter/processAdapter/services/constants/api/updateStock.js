/* @flow */
import axios from 'axios'
import qs from 'qs'
import API_URL from '~/adapter/processAdapter/services/constants/API_URL'

export default function(reqData) {
  return axios
    .patch(API_URL.PATCH.PRODUCT_STOCK, qs.stringify(reqData))
    .then(payload => {
      console.log(payload)
      return { payload }
    })
    .catch(error => {
      console.log(error)
      return { error }
    })
}
