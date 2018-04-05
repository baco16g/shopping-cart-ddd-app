/* @flow */
import axios from 'axios'
import API_URL from '~/adapter/processAdapter/services/constants/API_URL'

export default function(reqData) {
  return axios
    .get(API_URL.GET.ORDER, { params: reqData })
    .then(payload => {
      console.log(payload)
      return { payload }
    })
    .catch(error => {
      console.log(error)
      return { error }
    })
}
