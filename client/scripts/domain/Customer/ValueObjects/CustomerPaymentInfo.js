/* @flow */
import ValueObject from '~/domain/ValueObject'

const props = (def: any): CustomerPaymentInfoSchema => {
  return {
    cardNumber: '',
    expiryMonth: '',
    expiryYear: '',
    ...def
  }
}

const CustomerPaymentInfo = (def?: any) =>
  class extends ValueObject(props(def)) {
    constructor(args: CustomerPaymentInfoSchema) {
      super()
      return this.withMutations(m =>
        m
          .set('cardNumber', args.cardNumber)
          .set('expiryMonth', args.expiryMonth)
          .set('expiryYear', args.expiryYear)
      )
    }
    /**********************
     * Getter
     **********************/
    getPrice(): string {
      return this.get('cardNumber')
    }
    getExpiryMonth(): string {
      return this.get('expiryMonth')
    }
    getExpiryYear(): string {
      return this.get('expiryYear')
    }
  }

export default CustomerPaymentInfo
