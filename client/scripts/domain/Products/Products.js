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
    getProductByProductCode(productCode: string): ProductViewModel {
      return this.getProductList().find(
        product => product.getProductCode() === productCode
      )
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
