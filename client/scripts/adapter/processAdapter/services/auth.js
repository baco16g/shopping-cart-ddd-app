/* @flow */
import { stopSubmit } from 'redux-form'
import { camelizeKeys, decamelizeKeys } from 'humps'
import { fork, call, put, take } from 'redux-saga/effects'
import {
  loadLocalStorageByKey,
  saveLocalStorageByKey,
  deleteLocalStorageByKey,
  wait
} from '~/adapter/processAdapter/services/utils/storage'
import { creators as commonCreators } from '~/port/redux/common'
import {
  creators as customerCreators,
  types as CustomerTypes
} from '~/port/redux/packages/customer'
import API_FUNC from '~/adapter/processAdapter/services/constants/API_FUNC'

/**********************************
 * services
 *********************************/
function* requestCustomer(): * {
  const token: string = yield call(loadLocalStorageByKey, 'token')
  if (!token) return false
  yield call(fetchCustomer, 'fetchCustomer', token)
}

function* fetchCustomer(eventKey: string, token: string): * {
  yield put(commonCreators.pushFetchingQueue({ eventkey: eventKey }))
  const reqHeaders = {
    headers: {
      authorization: `Bearer ${token}`
    }
  }
  const { payload, err } = yield call(
    API_FUNC.GET.CUSTOMER,
    decamelizeKeys(reqHeaders)
  )
  yield put(commonCreators.deleteFetchingQueue({ eventkey: eventKey }))

  if (!payload && err) throw new Error('システムエラーが発生しました。')

  const status = payload['data']['status']
  switch (status) {
    case 0:
      yield put(
        customerCreators.setCustomer({
          ...camelizeKeys(payload['data']['customer'])
        })
      )
      return true
    case -2:
      return true
    default:
      alert('該当するステータスコードが存在しません')
      return false
  }
}

function* login(eventKey: string, reqData: *): * {
  yield put(commonCreators.pushFetchingQueue({ eventkey: eventKey }))
  const { payload, err } = yield call(
    API_FUNC.POST.LOGIN,
    decamelizeKeys(reqData)
  )
  yield put(commonCreators.deleteFetchingQueue({ eventkey: eventKey }))

  if (!payload && err) throw new Error('システムエラーが発生しました。')

  const status = payload['data']['status']
  switch (status) {
    case 0:
      saveLocalStorageByKey(payload['data']['token'], 'token')
      yield call(wait, 500)
      location.href = '/'
      return true
    case -2:
      yield put(stopSubmit('login', { _error: payload['data']['message'] }))
      return false
    default:
      alert('該当するステータスコードが存在しません')
      return false
  }
}

function* signup(eventKey: string, reqData: *): * {
  yield put(commonCreators.pushFetchingQueue({ eventkey: eventKey }))
  const { payload, err } = yield call(
    API_FUNC.POST.SIGNUP,
    decamelizeKeys(Object.assign({}, reqData, { createdAt: new Date() }))
  )
  yield put(commonCreators.deleteFetchingQueue({ eventkey: eventKey }))

  if (!payload && err) throw new Error('システムエラーが発生しました。')

  const status = payload['data']['status']
  switch (status) {
    case 0:
      alert(payload['data']['message'])
      location.href = '/login/'
      return true
    case -2:
      yield put(stopSubmit('signup', { _error: payload['data']['message'] }))
      return false
    default:
      alert('該当するステータスコードが存在しません')
      return false
  }
}

/**********************************
 * subscribe Domain Actions
 *********************************/
function* subscribeToRequestLogin(): * {
  while (true) {
    const { payload: reqData } = yield take(CustomerTypes.requestLogin)
    const isCompleted: boolean = yield call(login, 'requestLogin', reqData)
    if (!isCompleted) continue
  }
}

function* subscribeToRequestLogout(): * {
  while (true) {
    yield take(CustomerTypes.requestLogout)
    yield call(deleteLocalStorageByKey, 'token')
    location.reload()
  }
}

function* subscribeToRequestSignup(): * {
  while (true) {
    const { payload: reqData } = yield take(CustomerTypes.requestSignup)
    const isCompleted: boolean = yield call(signup, 'requestSignup', reqData)
    if (!isCompleted) continue
  }
}

export default function*(): * {
  yield fork(requestCustomer)
  yield fork(subscribeToRequestLogin)
  yield fork(subscribeToRequestLogout)
  yield fork(subscribeToRequestSignup)
}
