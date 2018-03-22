/* @flow */
import ValueObject from '~/domain/ValueObject'

const props = (def: any): ProductStockInfoSchema => {
  return {
    quantity: 0,
    ...def
  }
}

const ProductStockInfo = (def?: any) =>
  class extends ValueObject(props(def)) {
    constructor(args: ProductStockInfoSchema) {
      super()
      return this.set('quantity', args.quantity)
    }

    /**********************
     * Getter
     **********************/
    getQuantity(): number {
      return this.get('quantity')
    }

    /**********************
     * Setter
     **********************/
    reduceQuantity(n: number): ProductStockInfo {
      return this.update('quantity', _ => this.getQuantity() - n)
    }
  }

export default ProductStockInfo
