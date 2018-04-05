/* @flow */
import Entity from '~/domain/Entity'
import CustomerVolumeInfo from '~/domain/Customer/ValueObjects/CustomerVolumeInfo'
import CustomerPaymentInfo from '~/domain/Customer/ValueObjects/CustomerPaymentInfo'

const props = (def: any): CustomerSchema => {
  return {
    customerId: '',
    email: '',
    volumeInfo: null,
    paymentInfo: null,
    ...def
  }
}

const CustomerModel = (def?: any) =>
  class extends Entity(props(def)) {
    constructor() {
      super()
    }

    /**********************
     * Getter
     **********************/
    getCustomerID(): string {
      return this.get('customerId')
    }
    getEmail(): string {
      return this.get('email')
    }
    getVolumeInfo(): CustomerVolumeInfo {
      return this.get('volumeInfo')
    }
    getPaymentInfo(): CustomerPaymentInfo {
      return this.get('paymentInfo')
    }
    exist(): boolean {
      return this.getCustomerID() !== '' && this.getEmail() !== ''
    }

    /**********************
     * Setter
     **********************/
    setCustomer({
      customerId,
      email,
      volumeInfo,
      paymentInfo
    }: CustomerSchema): CustomerModel {
      return this.withMutations(m =>
        m
          .set('customerId', customerId)
          .set('email', email)
          .set('volumeInfo', new (CustomerVolumeInfo({}))(volumeInfo))
          .set('paymentInfo', new (CustomerPaymentInfo({}))(paymentInfo))
      )
    }
  }

export default CustomerModel
