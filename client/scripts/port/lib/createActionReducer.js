/* @flow */

function createActionCreators(
  constants: Array<string>,
  namespace: string
): Actions {
  return constants.reduce(
    (acc: Object, row: string): Actions => {
      const type: ActionType = `${namespace}${row}`
      acc['types'][row] = type
      acc['creators'][row] = payload => ({ type, payload })
      return acc
    },
    {
      types: {},
      creators: {}
    }
  )
}

function createReducer(namespace: string): Function {
  return function(initialModel: *) {
    return (model: * = initialModel, action: ActionCreator) => {
      const fn = action.type.replace(namespace, '')
      if (model[fn] !== undefined) return model[fn](action.payload)
      return model
    }
  }
}

export default function(constants: Array<string>, namespace: string) {
  const { types, creators } = createActionCreators(constants, namespace)
  const reducer = createReducer(namespace)
  return { types, creators, reducer }
}
