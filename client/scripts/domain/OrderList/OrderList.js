/* @flow */
import { List } from 'immutable'
import Entity from '~/domain/Entity'
import OrderViewModel from '~/domain/OrderList/OrderView'

const props = (def: any): OrderSchema => {
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
    getOrderListJS(): any[] {
      return this.getOrderList().toJS()
    }

    /**********************
     * Setter
     **********************/
    pushOrder({ orderList }: { orderList: OrderSchema }): OrderListModel {
      return this.update('list', list =>
        list.push(
          new OrderViewModel()
            .restoreCreatedAt(orderList.createdAt)
            .setItems(orderList.items)
        )
      )
    }
  }

export default OrderListModel
