/* @flow */
import React, { Fragment } from 'react'

type Props = {
  productsVM: ProductsViewModel,
  cartVM: CartViewModel
}

export default function TotalPrice({ productsVM, cartVM }: Props) {
  const items: {
    productCode: string,
    quantity: number
  }[] = cartVM.getCartItemsJS()
  const totalAmount = productsVM.formatedTotalAmount(items)

  return (
    <Fragment>
      <h4
        className="crt-Box crt-TotalAmount"
        dangerouslySetInnerHTML={totalAmount}
      />
    </Fragment>
  )
}
