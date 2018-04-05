/* @flow */

import createActionReducer from '~/port/lib/createActionReducer'

const { types, creators, reducer } = createActionReducer(
  ['pushOrder', 'setInitialOrderList'],
  '/orderList/'
)

export { types, creators, reducer }
