/* @flow */

import { Record } from 'immutable'
import uuid from 'uuid'

const props = (def: any): EntitySchema => ({
  id: 0,
  createdAt: 0,
  updatedAt: 0,
  ...def
})

const Entity = (def: any) =>
  class extends Record(props(def)) {
    constructor(arg: any) {
      super(arg)
      return this.set('id', uuid())
        .set('createdAt', new Date())
        .set('updatedAt', new Date())
    }

    equals(o: Entity): boolean {
      return this.getID() === o.getID()
    }

    /**********************
     * Getter
     **********************/
    getID(): string {
      return this.get('id')
    }
    getCreatedAt(): Date {
      return this.get('createdAt')
    }
    getUpdatedAt(): Date {
      return this.get('updatedAt')
    }

    /**********************
     * Setter
     **********************/
    updateUpdatedAt(): Entity {
      return this.update('updatedAt', _ => new Date())
    }
    restoreID(id: string): Entity {
      return this.update('id', _ => id)
    }
    restoreCreatedAt(date: Date): Entity {
      return this.update('createdAt', _ => date)
    }
    restoreUpdatedAt(date: Date): Entity {
      return this.update('updatedAt', _ => date)
    }
  }

export default Entity
