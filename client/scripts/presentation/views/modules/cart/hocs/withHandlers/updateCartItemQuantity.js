/* @flow */

type OuterProps = {
  actions: Object
}

export default ({ actions }: OuterProps) => async (
  e: Event,
  { productCode }: { productCode: string }
) => {
  await actions.updateQuantityOfCartItem({
    productCode: productCode,
    quantity: e.target.value
  })
  await actions.saveCartItems()
}
