/* @flow */
import { List } from 'immutable'
import Entity from '~/domain/Entity'
import ProductFactory from '~/domain/Products/ProductFactory'

const props = (def: any): ProductSchema => {
  return {
    list: List([]),
    ...def
  }
}

const ProductsModel = (def?: any) =>
  class extends Entity(props(def)) {
    /**********************
     * Getter
     **********************/
    getProductList(): List<ProductViewModel> {
      return this.get('list')
    }
    getProductListSize(): number {
      return this.getProductList().size
    }
    getProductListJS(): any[] {
      return this.getProductList().toJS()
    }
    selectProductByProductCode(productCode: string): ProductViewModel {
      return this.getProductList().find(
        product => product.getProductCode() === productCode
      )
    }
    computeTotalAmount(
      items: { productCode: string, quantity: number }[]
    ): number {
      return items.reduce((acc: number, { productCode, quantity }) => {
        const _productVM = this.selectProductByProductCode(productCode)
        const _amount = _productVM.getSaleInfo().getPrice()
        return acc + +(_amount * quantity)
      }, 0)
    }
    exactCurrencyCode(items: { productCode: string }[]): string | boolean {
      const _baseCurrencyCode = this.selectProductByProductCode(
        items[0].productCode
      )
        .getSaleInfo()
        .getCurrencyCode()
      const _isEqual = items.every(({ productCode }) => {
        const _productVM = this.selectProductByProductCode(productCode)
        return _productVM.getSaleInfo().getCurrencyCode() === _baseCurrencyCode
      })
      return _isEqual ? _baseCurrencyCode : false
    }

    /**********************
     * Setter
     **********************/
    pushProduct({ product }: { product: ProductSchema }): ProductsModel {
      if (!product.productCode) return this
      return this.update('list', list =>
        list.push(ProductFactory.create(product))
      )
    }
  }

export default ProductsModel
