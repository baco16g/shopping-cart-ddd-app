/* @flow */
import React, { Fragment } from 'react'
import { compose, pure, type HOC } from 'recompose'
import connector from '~/presentation/views/modules/payment/hocs/connector'
import Loading from '~/presentation/views/_core/atoms/Loading'
import CartItem from '~/presentation/views/modules/payment/molecules/CartItem'
import TotalAmount from '~/presentation/views/modules/payment/molecules/TotalAmount'
import PaymentInfo from '~/presentation/views/modules/payment/molecules/PaymentInfo'
import Checkout from '~/presentation/views/modules/payment/molecules/Checkout'

const enhancer: HOC<*, *> = compose(connector, pure)

export default enhancer(
  ({ actions, commonVM, productsVM, cartVM, customerVM }) => {
    const isFetching: boolean = commonVM.hasEventkeyInFetchingQueue()
    const exist = customerVM.exist()
    const cartItems: any[] = cartVM
      .getCartItems()
      .map((cartItemVM: CartItemModel) => {
        const id = cartItemVM.getID()
        const _props = { actions, commonVM, productsVM, cartItemVM }
        return <CartItem key={id} {..._props} />
      })

    return (
      <Fragment>
        {isFetching ? (
          <Loading />
        ) : (
          <div className="pymnt-Container">
            {exist ? (
              <Fragment>
                {cartItems.size > 0 ? (
                  <Fragment>
                    <section className="pymnt-Section">
                      <h3 className="pymnt-Section_Hdg">Cart Items</h3>
                      <div className="pymnt-CartItems">{cartItems}</div>
                      <TotalAmount {...{ productsVM, cartVM }} />
                    </section>
                    <section className="pymnt-Section">
                      <h3 className="pymnt-Section_Hdg">Payment Info</h3>
                      <PaymentInfo {...{ customerVM }} />
                    </section>
                    <section className="pymnt-Section">
                      <Checkout {...{ actions }} />
                    </section>
                  </Fragment>
                ) : (
                  <div className="pymnt-Section">
                    <span>Cart is empty...</span>
                  </div>
                )}
              </Fragment>
            ) : (
              <p>Not Found Customer</p>
            )}
          </div>
        )}
      </Fragment>
    )
  }
)
