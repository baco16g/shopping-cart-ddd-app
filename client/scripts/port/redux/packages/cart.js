/* @flow */

import createActionReducer from '~/port/lib/createActionReducer'

const { types, creators, reducer } = createActionReducer(
  [
    'addItemToCart',
    'restoreCartItems',
    'pushCartItem',
    'increaseQuantityOfCartItem',
    'updateQuantity',
    'goToPayment',
    'restoreFailed'
  ],
  '/cart/'
)

export { types, creators, reducer }
