import loggerMiddleware from 'redux-logger'
import createSagaMiddleware from 'redux-saga'

export const sagaMiddleware = createSagaMiddleware()

export default [sagaMiddleware].concat(
  process.env.NODE_ENV === 'production' ? [] : [loggerMiddleware]
)
