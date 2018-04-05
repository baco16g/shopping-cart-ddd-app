/* @flow */
import React, { Fragment } from 'react'

type Props = {
  actions: Object,
  productsVM: ProductsViewModel,
  productCode: string,
  quantity: number
}

export default function OrderItem({
  productsVM,
  productCode,
  quantity
}: Props) {
  const productVM = productsVM.selectProductByProductCode(productCode)

  const name = productVM.getVolumeInfo().getName()
  const thumbnailUrl = productVM.getThumbnailUrl()
  const formattedPrice = productVM.getFormattedPrice()

  return (
    <div className="ordrlst-Order_Item">
      <Fragment>
        <div className="ordrlst-Order_Item_thumb">
          <img src={thumbnailUrl} alt={name} />
        </div>
        <h3 className="ordrlst-Order_Item_name">{name}</h3>
        <h4 className="ordrlst-Order_Item_price">{formattedPrice}</h4>
        <div className="ordrlst-Order_Item_stock">{quantity}</div>
      </Fragment>
    </div>
  )
}
