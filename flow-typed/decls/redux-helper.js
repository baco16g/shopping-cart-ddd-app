declare type Action = {
  type: string
}

declare type ActionType = string

type ActionTypes = {
  [string]: ActionType
}

declare type ActionCreator = (
  payload: Object
) => { type: string, payload: Object }

declare type ActionCreators = {
  [string]: ActionCreator
}

declare type Actions = {
  types: ActionTypes,
  creators: ActionCreators
}

declare type InnerHTMLString = {
  __html: string
}
