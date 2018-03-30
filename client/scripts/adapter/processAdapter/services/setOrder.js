/* @flow */
import { all, fork, call, put } from 'redux-saga/effects'
import { map } from 'lodash'
import { camelizeKeys } from 'humps'
import { creators as commonCreators } from '~/port/redux/common'
import { creators as orderListCreators } from '~/port/redux/packages/orderList'
import API_FUNC from '~/adapter/processAdapter/services/constants/API_FUNC'

function* setOrder(): * {
  yield put(commonCreators.pushFetchingQueue({ eventkey: 'setOrder' }))
  const { payload, error } = yield call(API_FUNC.GET.ORDER)
  if (!payload && error) throw new Error('not found Order')
  yield all([
    map(payload['data'], order => {
      return put(orderListCreators.pushOrder({ order: camelizeKeys(order) }))
    })
  ])
  yield put(commonCreators.deleteFetchingQueue({ eventkey: 'setOrder' }))
}

/**********************************
 * subscribe Domain Actions
 *********************************/

export default function*(): * {
  yield fork(setOrder)
}
