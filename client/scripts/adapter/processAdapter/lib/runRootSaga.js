/* @flow */

import createSagaMiddleware from 'redux-saga'
import { all, fork } from 'redux-saga/effects'

function createRootSaga(sagas: Array<*>, extension: Array<*> = []) {
  return function*(): * {
    yield all([...sagas, ...extension].map(task => fork(task)))
  }
}

export default function(
  sagaMiddleware: $ReturnType<createSagaMiddleware>
): Function {
  return (saga: Array<*>, extension: Array<*> = []): void => {
    const rootSaga = createRootSaga(saga, extension)
    sagaMiddleware.run(rootSaga)
  }
}
