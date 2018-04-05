/* @flow */
import { delay } from 'redux-saga'
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
    map(payload['data']['order_list'], ({ items, createdAt }) => {
      return put(
        orderListCreators.pushOrder({
          orderList: camelizeKeys({ items, createdAt })
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
  yield take(OrderListTypes.setInitialOrderList)
  yield delay(1000)
  yield fork(fetchOrder)
}

export default function*(): * {
  yield fork(subscribeToSetInitialOrderList)
}
