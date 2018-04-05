/* @flow */
import React, { Fragment } from 'react'
import OrderItem from '~/presentation/views/modules/orderList/molecules/OrderItem'
import TotalAmount from '~/presentation/views/modules/orderList/molecules/TotalAmount'

type Props = {
  actions: Object,
  productsVM: ProductsViewModel,
  orderVM: OrderViewModel
}

export default function Order({ productsVM, orderVM }: Props) {
  const items = orderVM
    .getItems()
    .map(({ productCode, quantity }: OrderItem, idx) => {
      return <OrderItem key={idx} {...{ productsVM, productCode, quantity }} />
    })
  const createdAt = orderVM.getFormatedCreatedAt()

  return (
    <div className="ordrlst-Order">
      <div className="ordrlst-Section">
        <div className="ordrlst-Order_Date">
          <span>Order Date:</span>
          <span>{createdAt}</span>
        </div>
        <div>{items}</div>
        <TotalAmount {...{ productsVM, orderVM }} />
      </div>
    </div>
  )
}
