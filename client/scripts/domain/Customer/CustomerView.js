/* @flow */
import { repeat } from 'lodash'
import CustomerModel from '~/domain/Customer/Customer'

export default class CustomerViewModel extends CustomerModel({}) {
  constructor(args: CustomerSchema) {
    super(args)
  }

  getFullName(): string {
    return this.getVolumeInfo().getFullName()
  }
  getHidedCardNumber(): string {
    const _cardNumber = this.getPaymentInfo().getCardNumber()
    const _prefix = _cardNumber.slice(0, 4)
    const _suffix = repeat('*', _cardNumber.length - 4)
    return _prefix + _suffix
  }
  getExpiry(): string {
    const _paymentInfo = this.getPaymentInfo()
    const _month = _paymentInfo.getExpiryMonth()
    const _year = _paymentInfo.getExpiryYear()
    return `${_month} / ${_year}`
  }
}
