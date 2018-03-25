/* @flow */
import React from 'react'
import { compose, pure, withHandlers, type HOC } from 'recompose'
import addItemToCart from '~/presentation/views/modules/product/hocs/withHandlers/addItemToCart'

const enhancer: HOC<*, *> = compose(
  withHandlers({
    addItemToCart
  }),
  pure
)

export default enhancer(({ productVM, cartVM, addItemToCart }) => {
  const productCode: string = productVM.getProductCode()
  const formattedPrice: string = productVM.getFormattedPrice()

  const targetItemVM: CartItemModel = cartVM.selectCartItemByProductCode(
    productCode
  )
  const itemExistsInCart: boolean = targetItemVM
    ? targetItemVM.getQuantity() > 0
    : false

  const itemQuantityInCart: number = targetItemVM
    ? targetItemVM.getQuantity()
    : 0
  const productStockQuantity: number = productVM.getStockInfo().getQuantity()
  const availableQuantity: number = productStockQuantity - itemQuantityInCart
  const isSoldOut: boolean = availableQuantity < 1
  const stockLabel: InnerHTMLString = productVM.convertStockQuantityToLabel(
    availableQuantity
  )

  return (
    <div className="prdct-Sale">
      <h4 className="prdct-Sale_Price">{formattedPrice}</h4>
      <p className="prdct-Sale_Stock" dangerouslySetInnerHTML={stockLabel} />
      <button
        className="prdct-Sale_Button"
        onClick={() => addItemToCart({ productCode, itemExistsInCart })}
        disabled={isSoldOut}
      >
        {isSoldOut ? 'Sold Out' : 'Add to Cart'}
      </button>
    </div>
  )
})
