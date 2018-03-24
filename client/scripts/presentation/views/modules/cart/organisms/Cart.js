/* @flow */
import React, { Fragment } from 'react'
import { compose, pure, type HOC } from 'recompose'
import connector from '~/presentation/views/modules/cart/hocs/connector'
import CartItem from '~/presentation/views/modules/cart/molecules/CartItem'
import PaymentNav from '~/presentation/views/modules/cart/molecules/PaymentNav'
import TotalAmount from '~/presentation/views/modules/cart/molecules/TotalAmount'

const enhancer: HOC<*, *> = compose(connector, pure)

export default enhancer(({ actions, commonVM, productsVM, cartVM }) => {
  const isFetching: boolean = commonVM.hasEventkeyInFetchingQueue()
  const cartItems: any[] = cartVM
    .getCartItems()
    .map((cartItemVM: CartItemModel) => {
      const id = cartItemVM.getID()
      const _props = { actions, commonVM, productsVM, cartItemVM }
      return <CartItem key={id} {..._props} />
    })

  return (
    <Fragment>
      {isFetching || cartItems.size <= 0 ? (
        'Loading'
      ) : (
        <div className="crt-Container">
          <div className="crt-Box crt-CartItems">{cartItems}</div>
          <TotalAmount {...{ productsVM, cartVM }} />
          <PaymentNav {...{ actions }} />
        </div>
      )}
    </Fragment>
  )
})
