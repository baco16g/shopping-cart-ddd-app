/* @flow */
import qs from 'qs'
import { camelizeKeys } from 'humps'
import { fork, put } from 'redux-saga/effects'
import { creators as commonCreators } from '~/port/redux/common'

function* setQueryObject(): * {
  yield put(commonCreators.pushFetchingQueue({ eventkey: 'setQueryObject' }))
  const queries = qs.parse(window.location.search, { ignoreQueryPrefix: true })
  yield put(commonCreators.setQueries({ queries: camelizeKeys(queries) }))
  yield put(commonCreators.deleteFetchingQueue({ eventkey: 'setQueryObject' }))
}

export default function*(): * {
  yield fork(setQueryObject)
}
