/* @flow */
import CustomerModel from '~/domain/Customer/Customer'

export default class CustomerViewModel extends CustomerModel({}) {
  constructor(args: CustomerSchema) {
    super(args)
  }

  getFullName(): string {
    return this.getVolumeInfo().getFullName()
  }
  getExpiry(): string {
    const _paymentInfo = this.getPaymentInfo()
    const _month = _paymentInfo.getExpiryMonth()
    const _year = _paymentInfo.getExpiryYear()
    return `${_month} / ${_year}`
  }
}
