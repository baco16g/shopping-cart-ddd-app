/* @flow */

import OrderListModel from '~/domain/OrderList/OrderList'

export default class OrderListViewModel extends OrderListModel({}) {
  constructor(args: OrderListSchema) {
    super(args)
  }
}
