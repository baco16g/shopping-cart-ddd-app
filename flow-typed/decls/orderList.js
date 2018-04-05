declare type OrderListSchema = {
  list: List
}

declare type Order = {
  createdAt: Date,
  items: OrderItem[]
}

declare type OrderItem = {
  productCode: string,
  quantity: number
}

/* eslint-disable */
declare class OrderListModel extends Entity {
  /* eslint-disable */
  getOrderList: () => List<OrderViewModel>,
  getOrderListSize: () => number,
  getOrderListJS: () => Order[],
  pushOrder: Order => OrderListModel
}

declare class OrderListViewModel extends OrderListModel {}

/* eslint-disable */
declare class OrderModel extends Entity {
  /* eslint-disable */
  setItems: OrderItem[] => OrderModel
}

declare class OrderViewModel extends OrderModel {}
