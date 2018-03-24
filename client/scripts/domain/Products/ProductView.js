/* @flow */

import ProductModel from '~/domain/Products/Product'

export default class ProductViewModel extends ProductModel({}) {
  constructor(args: ProductSchema) {
    super(args)
  }

  getThumbnailUrl(): string {
    return `/assets/images/common/products/${this.getProductCode()}.jpg`
  }
  getFormattedPrice(): string {
    const _saleInfo = this.getSaleInfo()
    return `${_saleInfo.getPrice()} ${_saleInfo.getCurrencyCode()}`
  }
  getStockQuantityLabel(): InnerHTMLString {
    const _stockInfo = this.getStockInfo()
    return {
      __html: `
        <span>Stock：</span>
        <span>${_stockInfo.getQuantity()}</span>
      `
    }
  }
}
