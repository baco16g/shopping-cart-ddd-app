/* @flow */
import Entity from '~/domain/Entity'

const props = (def: any): ProductSchema => {
  return {
    productCode: '',
    volumeInfo: null,
    saleInfo: null,
    stockInfo: null,
    ...def
  }
}

const ProductModel = (def?: any) =>
  class extends Entity(props(def)) {
    constructor(args: ProductSchema) {
      super()
      return this.withMutations(m =>
        m
          .set('productCode', args.productCode)
          .set('volumeInfo', args.volumeInfo)
          .set('saleInfo', args.saleInfo)
          .set('stockInfo', args.stockInfo)
      )
    }

    /**********************
     * Getter
     **********************/
    getProductCode(): string {
      return this.get('productCode')
    }
    getVolumeInfo(): ProductVolumeInfo {
      return this.get('volumeInfo')
    }
    getSaleInfo(): ProductSaleInfo {
      return this.get('saleInfo')
    }
    getStockInfo(): ProductStockInfo {
      return this.get('stockInfo')
    }

    /**********************
     * Setter
     **********************/
    reduceStockQuantity(n: number): ProductModel {
      return this.get('stockInfo').reduceQuantity(n)
    }
  }

export default ProductModel
