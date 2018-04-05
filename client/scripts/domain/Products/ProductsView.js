/* @flow */

import ProductsModel from '~/domain/Products/Products'

export default class ProductsViewModel extends ProductsModel({}) {
  constructor(args: ProductsSchema) {
    super(args)
  }

  formatedTotalAmount(
    items: { productCode: string, quantity: number }[]
  ): InnerHTMLString {
    const _currencyCode = this.exactCurrencyCode(items)

    if (_currencyCode) {
      const _amount = this.computeTotalAmount(items)
      return {
        __html: `
          <span>${_amount}</span>
          <span>${_currencyCode}</span>
        `
      }
    } else {
      return {
        __html: `
          <span>CurrencyCode is different.</span>
        `
      }
    }
  }
}
