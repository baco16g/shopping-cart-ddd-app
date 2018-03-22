/* @flow */

type OuterProps = {
  actions: Object
}

export default ({ actions }: OuterProps) => (values: Object) => {
  alert(`You submitted:\n\n${JSON.stringify(values, null, 2)}`)
  actions.requestLogin(values)
}
