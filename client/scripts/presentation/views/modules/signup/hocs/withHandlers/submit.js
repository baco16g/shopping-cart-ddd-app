/* @flow */

type OuterProps = {
  actions: Object
}

export default ({ actions }: OuterProps) => (values: Object) => {
  actions.requestSignup(values)
}
