/* @flow */
import Entity from '~/domain/Entity'

const props = (def: any): CustomerSchema => {
  return {
    customerId: '',
    email: '',
    volumeInfo: null,

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
    setCustomer({ customerId, email, volumeInfo, paymentInfo }): CustomerModel {
      return this.withMutations(m =>
        m
          .set('customerID', customerId)
          .set('email', email)
          .set('volumeInfo', volumeInfo)
          .set('paymentInfo', paymentInfo)
      )
    }
  }

export default CustomerModel
