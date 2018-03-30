/* @flow */
import { fork, call, put, take, select } from 'redux-saga/effects'
import { decamelizeKeys } from 'humps'
import { deleteLocalStorageByKey } from '~/adapter/processAdapter/services/utils/storage'
import { creators as commonCreators } from '~/port/redux/common'
import {
  creators as cartCreators,
  types as CartTypes
} from '~/port/redux/packages/cart'
import API_FUNC from '~/adapter/processAdapter/services/constants/API_FUNC'

/**********************************
 * services
 *********************************/
function* resetCartItems(): * {
  yield call(deleteLocalStorageByKey, 'cart')
  yield put(cartCreators.resetCartItems({}))
}

function* reduceStock(eventKey: string): * {
  yield put(commonCreators.pushFetchingQueue({ eventkey: eventKey }))
  const cartVM = yield select(state => state.cartVM)
  const reqData = cartVM.toJS()
  const { payload, err } = yield call(
    API_FUNC.PATCH.PRODUCT_STOCK,
    decamelizeKeys(reqData)
  )
  yield put(commonCreators.deleteFetchingQueue({ eventkey: eventKey }))

  if (!payload && err) throw new Error('システムエラーが発生しました。')

  const status = payload['data']['status']
  switch (status) {
    case 0:
      break
    case -2:
      alert(payload['data']['message'])
      return false
    default:
      alert('該当するステータスコードが存在しません')
      return false
  }
}

function* saveOrder(eventKey: string): * {
  yield put(commonCreators.pushFetchingQueue({ eventkey: eventKey }))
  const cartVM = yield select(state => state.cartVM)
  const customerVM = yield select(state => state.customerVM)
  const reqData = {
    customerId: customerVM.getCustomerID(),
    items: cartVM.getCartItemsJS(),
    createdAt: new Date()
  }
  const { payload, err } = yield call(
    API_FUNC.POST.ORDER,
    decamelizeKeys(reqData)
  )
  yield put(commonCreators.deleteFetchingQueue({ eventkey: eventKey }))

  if (!payload && err) throw new Error('システムエラーが発生しました。')

  const status = payload['data']['status']
  switch (status) {
    case 0:
      alert(payload['data']['message'])
      return true
    case -2:
      alert(payload['data']['message'])
      return false
    default:
      alert('該当するステータスコードが存在しません')
      return false
  }
}

/**********************************
 * subscribe Domain Actions
 *********************************/
function* subscribeToRequestCheckout(): * {
  while (true) {
    yield take(CartTypes.requestCheckout)
    yield call(reduceStock, 'requestCheckout')
    yield fork(resetCartItems)
    yield fork(saveOrder)
  }
}

export default function*(): * {
  yield fork(subscribeToRequestCheckout)
}
