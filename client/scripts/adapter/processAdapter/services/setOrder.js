/* @flow */
import { all, fork, call, put, take, select } from 'redux-saga/effects'
import { map } from 'lodash'
import { camelizeKeys } from 'humps'
import { creators as commonCreators } from '~/port/redux/common'
import {
  types as OrderListTypes,
  creators as orderListCreators
} from '~/port/redux/packages/orderList'
import API_FUNC from '~/adapter/processAdapter/services/constants/API_FUNC'

function* fetchOrder(): * {
  yield put(commonCreators.pushFetchingQueue({ eventkey: 'setOrder' }))
  const customerVM = yield select(state => state.customerVM)
  const customer_id = customerVM.getCustomerID()

  const { payload, error } = yield call(API_FUNC.GET.ORDER, { customer_id })
  if (!payload && error) throw new Error('not found Order')
  yield all([
    map(payload['data']['order_list'], orderList => {
      return put(
        orderListCreators.pushOrder({
          orderList: camelizeKeys(orderList)
        })
      )
    })
  ])
  yield put(commonCreators.deleteFetchingQueue({ eventkey: 'setOrder' }))
}

/**********************************
 * subscribe Domain Actions
 *********************************/
function* subscribeToSetInitialOrderList(): * {
  while (true) {
    yield take(OrderListTypes.setInitialOrderList)
    const customerVM = yield select(state => state.customerVM)
    const exist = customerVM.exist()
    if (!exist) continue
    yield fork(fetchOrder)
    break
  }
}

export default function*(): * {
  yield fork(subscribeToSetInitialOrderList)
}
