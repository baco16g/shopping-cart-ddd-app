/* @flow */
import { List } from 'immutable'
import Entity from '~/domain/Entity'
import OrderViewModel from '~/domain/OrderList/OrderView'

const props = (def: any): OrderListSchema => {
  return {
    list: List([]),
    ...def
  }
}

const OrderListModel = (def?: any) =>
  class extends Entity(props(def)) {
    /**********************
     * Getter
     **********************/
    getOrderList(): List<OrderViewModel> {
      return this.get('list')
    }
    getOrderListSize(): number {
      return this.getOrderList().size
    }
    getOrderListJS(): Order[] {
      return this.getOrderList().toJS()
    }

    /**********************
     * Setter
     **********************/
    pushOrder({
      orderList
    }: {
      orderList: {
        items: OrderItem[],
        createdAt: Date
      }
    }): OrderListModel {
      const { items, createdAt } = orderList
      return this.update('list', list =>
        list.push(
          new OrderViewModel().restoreCreatedAt(createdAt).setItems(items)
        )
      )
    }
  }

export default OrderListModel
