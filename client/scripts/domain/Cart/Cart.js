/* @flow */
import { List, fromJS } from 'immutable'
import Entity from '~/domain/Entity'
import CartItemModel from '~/domain/Cart/CartItem'

const props = (def: any): CartSchema => {
  return {
    cartItems: List([]),
    ...def
  }
}

const CartModel = (def?: any) =>
  class extends Entity(props(def)) {
    constructor() {
      super()
    }
    /**********************
     * Getter
     **********************/
    getCartItems(): List<CartItemModel> {
      return this.get('cartItems')
    }
    getCartItemsJS(): CartItemModel[] {
      return this.getCartItems().toJS()
    }
    getCartItemByProductCode(productCode: string): CartItemModel {
      return this.getCartItems().find(item => item.productCode === productCode)
    }

    /**********************
     * Setter
     **********************/
    restoreCartItems(src: any[]): CartModel {
      if (src === null) return this
      const deserializedList: List<CartModel> = fromJS(src).map(m => {
        return new (CartItemModel({}))({
          productCode: m.get('productCode'),
          quantity: m.get('quantity')
        })
          .restoreID(m.get('id'))
          .restoreCreatedAt(new Date(m.get('createdAt')))
          .restoreUpdatedAt(new Date(m.get('updatedAt')))
      })
      return this.set('cartItems', deserializedList)
    }

    resetCartItems(): CartModel {
      return this.set('cartItems', List([]))
    }

    pushCartItem({
      productCode,
      quantity
    }: {
      productCode: string,
      quantity: number
    }): CartModel {
      return this.update('cartItems', items =>
        items.push(new (CartItemModel({}))({ productCode, quantity }))
      )
    }

    removeCartItem(id: string): CartModel {
      const index: number = this._getCartItemIndexByID(id)
      return this.update('list', list => list.delete(index))
    }

    /**********************
     * Private
     **********************/
    _getCartItemIndexByID(id: string): number {
      return this.getCartItems().findIndex(item => item.getID() === id)
    }
    _getCartItemIndexByProductCode(productCode: string): number {
      return this.getCartItems().findIndex(
        item => item.getProductCode() === productCode
      )
    }
  }

export default CartModel
