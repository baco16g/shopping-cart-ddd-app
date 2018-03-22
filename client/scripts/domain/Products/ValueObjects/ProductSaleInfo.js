/* @flow */
import ValueObject from '~/domain/ValueObject'

const props = (def: any): ProductSaleInfoSchema => {
  return {
    amount: 0,
    currencyCode: '',
    ...def
  }
}

const ProductSaleInfo = (def?: any) =>
  class extends ValueObject(props(def)) {
    /**********************
     * Getter
     **********************/
    getAmount(): number {
      return this.get('amount')
    }
    getCurrencyCode(): string {
      return this.get('currencyCode')
    }
  }

export default ProductSaleInfo
