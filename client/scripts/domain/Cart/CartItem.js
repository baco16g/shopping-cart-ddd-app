/* @flow */
import Entity from '~/domain/Entity'

const props = (def: any): CartItemSchema => {
  return {
    productCode: '',
    quantity: 0,
    ...def
  }
}

const CartItemModel = (def?: any) =>
  class extends Entity(props(def)) {
    constructor(args: CartItemSchema) {
      super(args)
      return this.withMutations(m =>
        m.set('productCode', args.productCode).set('quantity', +args.quantity)
      )
    }

    /**********************
     * Getter
     **********************/
    getProductCode(): string {
      return this.get('productCode')
    }
    getQuantity(): number {
      return this.get('quantity')
    }

    /**********************
     * Setter
     **********************/
    updateQuantity(quantity: number): CartItemModel {
      return this.update('quantity', _ => quantity)
    }
    increaseQuantity(): CartItemModel {
      return this.update('quantity', q => q + 1)
    }
    decreaseQuantity(): CartItemModel {
      const _quantity = this.getQuantity()
      if (_quantity < 1) return this
      return this.update('quantity', m => m.getQuantity() - 1)
    }
  }

export default CartItemModel
