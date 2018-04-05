/* @flow */

type OuterProps = {
  actions: Object
}

export default ({ actions }: OuterProps) => async ({ id }: { id: string }) => {
  await actions.removeCartItem(id)
  await actions.saveCartItems()
}
