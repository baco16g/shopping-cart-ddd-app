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
