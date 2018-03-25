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
  const productStock = productVM.getStockQuantityLabel()
  const formattedPrice: string = productVM.getFormattedPrice()
  const targetItem: CartItemModel = cartVM.selectCartItemByProductCode(
    productCode
  )
  const itemExistsInCart: boolean = targetItem
    ? targetItem.getQuantity() > 0
    : false

  return (
    <div className="prdct-Sale">
      <h4 className="prdct-Sale_Price">{formattedPrice}</h4>
      <p className="prdct-Sale_Stock" dangerouslySetInnerHTML={productStock} />
      <button
        className="prdct-Sale_Button"
        onClick={() => addItemToCart({ productCode, itemExistsInCart })}
        disabled={productStock < 1}
      >
        Add to Cart
      </button>
    </div>
  )
})
