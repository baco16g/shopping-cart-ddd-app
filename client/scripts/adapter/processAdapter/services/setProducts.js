/* @flow */
import { all, fork, call, put, take, select } from 'redux-saga/effects'
import { map } from 'lodash'
import { camelizeKeys, decamelizeKeys } from 'humps'
import { creators as commonCreators } from '~/port/redux/common'
import {
  creators as productsCreators,
  types as ProductsTypes
} from '~/port/redux/packages/products'
import API_FUNC from '~/adapter/processAdapter/services/constants/API_FUNC'

function* setProducts(): * {
  yield put(commonCreators.pushFetchingQueue({ eventkey: 'setProducts' }))
  const { payload, error } = yield call(API_FUNC.GET.PRODUCTS)
  if (!payload && error) throw new Error('not found Products')
  yield all([
    map(payload['data'], product => {
      return put(
        productsCreators.pushProduct({ product: camelizeKeys(product) })
      )
    })
  ])
  yield put(commonCreators.deleteFetchingQueue({ eventkey: 'setProducts' }))
}

/**********************************
 * subscribe Domain Actions
 *********************************/

export default function*(): * {
  yield fork(setProducts)
}
