import { createStore, compose, applyMiddleware } from 'redux'
import type { Store } from 'redux'

const composeEnhancers =
  process.env.NODE_ENV !== 'production' &&
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : compose

export default function(
  reducer: Function,
  middlewares: $ReturnType<typeof applyMiddleware>
): Store<*, *> {
  return createStore(reducer, composeEnhancers(middlewares))
}
