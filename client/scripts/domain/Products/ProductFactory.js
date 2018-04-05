/* @flow */
import ProductView from '~/domain/Products/ProductView'
import ProductVolumeInfo from '~/domain/Products/ValueObjects/ProductVolumeInfo'
import ProductSaleInfo from '~/domain/Products/ValueObjects/ProductSaleInfo'
import ProductStockInfo from '~/domain/Products/ValueObjects/ProductStockInfo'

export default class {
  static create(p: ProductSchema) {
    const { productCode, volumeInfo, saleInfo, stockInfo } = p
    return new ProductView({
      productCode: productCode,
      volumeInfo: new (ProductVolumeInfo({}))({ ...volumeInfo, productCode }),
      saleInfo: new (ProductSaleInfo({}))(saleInfo),
      stockInfo: new (ProductStockInfo({}))(stockInfo)
    })
  }
}
