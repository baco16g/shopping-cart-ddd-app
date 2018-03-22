/* @flow */

import { Record } from 'immutable'
import { shallowEqual } from 'shallow-equal-object'

const props = (def: any): ValueObjectSchema => ({
  ...def
})

const ValueObject = (def: any) =>
  class extends Record(props(def)) {
    constructor(arg: any) {
      super(arg)
    }

    equals(o?: ValueObject): boolean {
      return shallowEqual(this, o)
    }
  }

export default ValueObject
