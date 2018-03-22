/* @flow */
import ValueObject from '~/domain/ValueObject'

const props = (def: any): ProductVolumeInfoSchema => {
  return {
    name: '',
    description: '',
    category: '',
    ...def
  }
}

const ProductVolumeInfo = (def?: any) =>
  class extends ValueObject(props(def)) {
    constructor(args: ProductVolumeInfoSchema) {
      super()
      return this.withMutations(m =>
        m
          .set('name', args.name)
          .set('description', args.description)
          .set('category', args.category)
      )
    }

    /**********************
     * Getter
     **********************/
    getName(): string {
      return this.get('name')
    }
    getDescription(): string {
      return this.get('description')
    }
    getCategory(): string {
      return this.get('category')
    }
  }

export default ProductVolumeInfo
