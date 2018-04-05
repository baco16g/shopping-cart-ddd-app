/* @flow */
import { combineReducers } from 'redux'
import type { Reducer } from 'redux'

export default function(defaultReducer: *, exentions: * = {}): Reducer<*, *> {
  return combineReducers(Object.assign(defaultReducer, exentions))
}
