/* @flow */
import React, { Fragment } from 'react'
import { compose, pure, withHandlers, type HOC } from 'recompose'
import { times } from 'lodash'
import updateCartItemQuantity from '~/presentation/views/modules/cart/hocs/withHandlers/updateCartItemQuantity'
import removeCartItem from '~/presentation/views/modules/cart/hocs/withHandlers/removeCartItem'

const enhancer: HOC<*, *> = compose(
  withHandlers({
    updateCartItemQuantity,
    removeCartItem
  }),
  pure
)

export default enhancer(
  ({
    actions,
    productsVM,
    cartItemVM,
    updateCartItemQuantity,
    removeCartItem
  }) => {
    const id = cartItemVM.getID()
    const productCode = cartItemVM.getProductCode()
    const productVM = productsVM.selectProductByProductCode(productCode)

    if (!productVM) actions.restoreFailed()

    const name = productVM.getVolumeInfo().getName()
    const thumbnailUrl = productVM.getThumbnailUrl()
    const formattedPrice = productVM.getFormattedPrice()
    const cartItemQuantity = cartItemVM.getQuantity()
    const productStockQuantity = productVM.getStockInfo().getQuantity()
    const stockOptions = times(productStockQuantity + 1, Number).map(
      (n: number) => {
        const val = n + 1
        return (
          <option key={n} value={val}>
            {val}
          </option>
        )
      }
    )

    return (
      <div className="crt-Item">
        <Fragment>
          <div className="crt-Item_Thumb">
            <a href={`/product/?product_code=${productCode}`}>
              <img src={thumbnailUrl} alt={name} />
            </a>
          </div>
          <div className="crt-Item_Data">
            <Fragment>
              <h3 className="crt-Item_Name">
                <a href={`/product/?product_code=${productCode}`}>{name}</a>
              </h3>
              <h4 className="crt-Item_Price">{formattedPrice}</h4>
            </Fragment>
          </div>
          <div className="crt-Item_Stock">
            <select
              className="crt-Item_Stock_select"
              defaultValue={cartItemQuantity}
              onChange={e => updateCartItemQuantity(e, { productCode })}
            >
              {stockOptions}
            </select>
          </div>
          <div className="crt-Item_Delete">
            <button
              className="crt-Item_Delete_button"
              onClick={() => removeCartItem({ id })}
            >
              Delete
            </button>
          </div>
        </Fragment>
      </div>
    )
  }
)
