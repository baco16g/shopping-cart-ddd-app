/* @flow */
import { stopSubmit } from 'redux-form'
import { camelizeKeys } from 'humps'
import { fork, call, put, take } from 'redux-saga/effects'
import {
  loadLocalStorageByKey,
  saveLocalStorageByKey
} from '~/adapter/processAdapter/services/utils/storage'
import {
  creators as customerCreators,
  types as CustomerTypes
} from '~/port/redux/packages/customer'
import API_FUNC from '~/adapter/processAdapter/services/constants/API_FUNC'

/**********************************
 * services
 *********************************/
function* fetchCustomer(): * {
  const token: string = yield call(loadLocalStorageByKey, 'token')

  if (token) {
    const reqHeaders = {
      headers: {
        authorization: `Bearer ${token}`
      }
    }
    const { payload, err } = yield call(API_FUNC.GET.CUSTOMER, reqHeaders)

    if (!payload && err) throw new Error('システムエラーが発生しました。')

    const status = payload['data']['status']
    switch (status) {
      case 0:
        yield put(
          customerCreators.setCustomer({
            ...camelizeKeys(payload['data']['user'])
          })
        )
        break
      case -2:
        console.log(err)
        break
      default:
        throw new Error('該当するステータスコードが存在しません')
    }
  }
}

/**********************************
 * subscribe Domain Actions
 *********************************/
function* subscribeToRequestLogin(): * {
  while (true) {
    const { payload: reqData } = yield take(CustomerTypes.requestLogin)
    const { payload, err } = yield call(API_FUNC.POST.LOGIN, reqData)

    if (!payload && err) throw new Error('システムエラーが発生しました。')

    const status = payload['data']['status']
    switch (status) {
      case 0:
        saveLocalStorageByKey(payload['data']['token'], 'token')
        yield put(
          customerCreators.setCustomer({
            ...camelizeKeys(payload['data']['user'])
          })
        )
        location.href = '/'
        break
      case -2:
        yield put(stopSubmit('login', { _error: payload['data']['message'] }))
        continue
      default:
        throw new Error('該当するステータスコードが存在しません')
    }
  }
}

function* subscribeToRequestSignup(): * {
  while (true) {
    const { payload: reqData } = yield take(CustomerTypes.requestSignup)
    const { payload, err } = yield call(API_FUNC.POST.SIGNUP, reqData)

    if (!payload && err) throw new Error('システムエラーが発生しました。')

    const status = payload['data']['status']
    switch (status) {
      case 0:
        alert(payload['data']['message'])
        location.href = '/login/'
        break
      case -2:
        yield put(stopSubmit('signup', { _error: payload['data']['message'] }))
        continue
      default:
        throw new Error('該当するステータスコードが存在しません')
    }
  }
}

export default function*(): * {
  yield fork(fetchCustomer)
  yield fork(subscribeToRequestLogin)
  yield fork(subscribeToRequestSignup)
}
