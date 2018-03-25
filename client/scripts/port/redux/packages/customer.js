/* @flow */

import createActionReducer from '~/port/lib/createActionReducer'

const { types, creators, reducer } = createActionReducer(
  ['requestLogin', 'requestLogout', 'requestSignup', 'setCustomer'],
  '/customer/'
)

export { types, creators, reducer }
