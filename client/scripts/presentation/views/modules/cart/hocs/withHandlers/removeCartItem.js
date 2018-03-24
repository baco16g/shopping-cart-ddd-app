/* @flow */

type OuterProps = {
  actions: Object
}

export default ({ actions }: OuterProps) => ({ id }: { id: string }) => {
  actions.removeCartItem(id)
}
