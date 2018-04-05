/* @flow */
import { List } from 'immutable'
import Entity from '~/domain/Entity'

const props = (def: any): OrderSchema => {
  return {
    items: List([]),
    ...def
  }
}

const OrderModel = (def?: any) =>
  class extends Entity(props(def)) {
    /**********************
     * Getter
     **********************/
    getItems(): [] {
      return this.get('items')
    }

    /**********************
     * Setter
     **********************/
    setItems(
      orderItems: Array<{ productCode: string, quantity: number }>
    ): OrderModel {
      return this.set('items', orderItems)
    }
  }

export default OrderModel
