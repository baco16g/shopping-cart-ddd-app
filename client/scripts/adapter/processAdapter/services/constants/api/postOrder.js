/* @flow */
import axios from 'axios'
import qs from 'qs'
import API_URL from '~/adapter/processAdapter/services/constants/API_URL'

export default function(reqData) {
  return axios
    .post(API_URL.POST.ORDER, qs.stringify(reqData))
    .then(payload => {
      console.log(payload)
      return { payload }
    })
    .catch(error => {
      console.log(error)
      return { error }
    })
}
