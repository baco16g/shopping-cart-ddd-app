/* @flow */

import createActionReducer from '~/port/lib/createActionReducer'

const { types, creators, reducer } = createActionReducer(
  ['requestLogin', 'setCustomer'],
  '/customer/'
)

export { types, creators, reducer }
