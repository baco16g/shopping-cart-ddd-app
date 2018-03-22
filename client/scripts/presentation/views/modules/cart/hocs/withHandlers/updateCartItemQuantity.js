/* @flow */

type OuterProps = {
  actions: Object
}

export default ({ actions }: OuterProps) => (e: Event) => {
  actions.updateQuantity(e.target.value)
}
