/* @flow */

import CartModel from '~/domain/Cart/Cart'

export default class CartViewModel extends CartModel({}) {
  constructor() {
    super()
  }

  /**********************
   * Setter
   **********************/
  increaseQuantityOfCartItem(productCode: string): CartViewModel {
    return this.update('cartItems', list => {
      const _targetIdx = this._getCartItemIndexByProductCode(productCode)
      return list.update(_targetIdx, m => m.increaseQuantity())
    })
  }
  decreaseQuantityOfCartItem(productCode: string): CartViewModel {
    return this.update('cartItems', list => {
      const _targetIdx = this._getCartItemIndexByProductCode(productCode)
      return list.update(_targetIdx, m => m.decreaseQuantity())
    })
  }
}
