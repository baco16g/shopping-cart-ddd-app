/* @flow */
import ValueObject from '~/domain/ValueObject'

const props = (def: any): ProductSaleInfoSchema => {
  return {
    price: 0,
    currencyCode: '',
    ...def
  }
}

const ProductSaleInfo = (def?: any) =>
  class extends ValueObject(props(def)) {
    /**********************
     * Getter
     **********************/
    getPrice(): number {
      return this.get('price')
    }
    getCurrencyCode(): string {
      return this.get('currencyCode')
    }
  }

export default ProductSaleInfo
