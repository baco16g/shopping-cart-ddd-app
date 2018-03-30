/* @flow */

import OrderModel from '~/domain/OrderList/Order'

export default class OrderViewModel extends OrderModel({}) {
  constructor(args: OrderSchema) {
    super(args)
  }
}
