/* @flow */
import React, { Fragment } from 'react'

type Props = {
  productsVM: ProductsViewModel,
  orderVM: OrderViewModel
}

export default function TotalPrice({ productsVM, orderVM }: Props) {
  const items: {
    productCode: string,
    quantity: number
  }[] = orderVM.getItems()
  const totalAmount = productsVM.formatedTotalAmount(items)

  return (
    <Fragment>
      <h4
        className="ordrlst-Order_TotalAmount"
        dangerouslySetInnerHTML={totalAmount}
      />
    </Fragment>
  )
}
