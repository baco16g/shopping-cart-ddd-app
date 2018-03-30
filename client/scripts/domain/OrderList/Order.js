/* @flow */
import Entity from '~/domain/Entity'

const props = (def: any): OrderSchema => {
  return {
    productCode: '',
    quantity: 0,
    ...def
  }
}

const OrderModel = (def?: any) =>
  class extends Entity(props(def)) {
    constructor(args: OrderSchema) {
      super()
      return this.withMutations(m =>
        m.set('productCode', args.productCode).set('quantity', args.quantity)
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
  }

export default OrderModel
