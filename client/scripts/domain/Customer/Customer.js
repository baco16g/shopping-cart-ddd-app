/* @flow */
import Entity from '~/domain/Entity'

const props = (def: any): CustomerSchema => {
  return {
    customerID: '',
    email: '',
    token: '',
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
      return this.get('customerID')
    }
    getEmail(): string {
      return this.get('email')
    }
    getToken(): string {
      return this.get('token')
    }

    /**********************
     * Setter
     **********************/
    setCustomer({ customerId, email, token }): CustomerModel {
      return this.withMutations(m =>
        m
          .set('customerID', customerId)
          .set('email', email)
          .set('token', token)
      )
    }
  }

export default CustomerModel
