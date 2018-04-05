/* @flow */

import { applyMiddleware } from 'redux'
import createReduxStore from '~/port/lib/createReduxStore'
import middlewares from '~/adapter/processAdapter'
import type { Reducer, Store } from 'redux'

export default function(rootReducer: Reducer<*, *>): Store<*, *> {
  return createReduxStore(rootReducer, applyMiddleware(...middlewares))
}
