/* @flow */

type OuterProps = {
  actions: Object
}

export default ({ actions }: OuterProps) => () => {
  actions.requestLogout()
}
