/* @flow */

import createActionReducer from '~/port/lib/createActionReducer'

const { types, creators, reducer } = createActionReducer(
  ['requestLogin', 'requestSignup', 'setCustomer'],
  '/customer/'
)

export { types, creators, reducer }
