/* @flow */
import React, { Fragment } from 'react'

type Props = {
  actions: Object,
  productsVM: ProductsViewModel,
  cartItemVM: CartItemViewModel
}

export default function CartItem({ actions, productsVM, cartItemVM }: Props) {
  const productCode = cartItemVM.getProductCode()
  const productVM = productsVM.selectProductByProductCode(productCode)

  if (!productVM) actions.restoreFailed()

  const name = productVM.getVolumeInfo().getName()
  const thumbnailUrl = productVM.getThumbnailUrl()
  const formattedPrice = productVM.getFormattedPrice()
  const cartItemQuantity = cartItemVM.getQuantity()

  return (
    <div className="pymnt-Cart_Item">
      <Fragment>
        <div className="pymnt-Cart_Item_thumb">
          <img src={thumbnailUrl} alt={name} />
        </div>
        <h3 className="pymnt-Cart_Item_name">{name}</h3>
        <h4 className="pymnt-Cart_Item_price">{formattedPrice}</h4>
        <div className="pymnt-Cart_Item_stock">{cartItemQuantity}</div>
      </Fragment>
    </div>
  )
}
