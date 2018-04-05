/* @flow */

import createActionReducer from '~/port/lib/createActionReducer'

const { types, creators, reducer } = createActionReducer(
  ['pushProduct'],
  '/products/'
)

export { types, creators, reducer }
