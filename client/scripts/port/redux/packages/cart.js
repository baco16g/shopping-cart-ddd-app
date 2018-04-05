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
    'requestCheckout',
    'restoreFailed',
    'saveCartItems',
    'resetCartItems'
  ],
  '/cart/'
)

export { types, creators, reducer }
