/* @flow */
import React, { Fragment } from 'react'
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
  const targetItem: CartItemModel = cartVM.getCartItemByProductCode(productCode)
  const itemExists: boolean = targetItem ? targetItem.getQuantity() > 0 : false

  return (
    <Fragment>
      <p
        className="prdct-Details_Stock"
        dangerouslySetInnerHTML={productStock}
      />
      <button
        className="prdct-Details_Button"
        onClick={() => addItemToCart({ productCode, itemExists })}
        disabled={productStock < 1}
      >
        Add Cart
      </button>
    </Fragment>
  )
})
