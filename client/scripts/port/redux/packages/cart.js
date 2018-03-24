/* @flow */

import createActionReducer from '~/port/lib/createActionReducer'

const { types, creators, reducer } = createActionReducer(
  [
    'addItemToCart',
    'restoreCartItems',
    'pushCartItem',
    'removeCartItem',
    'increaseQuantityOfCartItem',
    'updateQuantityOfCartItem',
    'goToPayment',
    'restoreFailed',
    'saveCartItems'
  ],
  '/cart/'
)

export { types, creators, reducer }
