/* @flow */

type OuterProps = {
  actions: Object
}

export default ({ actions }: OuterProps) => (
  e: Event,
  { productCode }: { productCode: string }
) => {
  actions.updateQuantityOfCartItem({
    productCode: productCode,
    quantity: e.target.value
  })
}
