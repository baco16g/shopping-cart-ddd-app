/* @flow */
import React from 'react'
import { compose, pure, withHandlers, type HOC } from 'recompose'
import goToPayment from '~/presentation/views/modules/cart/hocs/withHandlers/goToPayment'

const enhancer: HOC<*, *> = compose(
  withHandlers({
    goToPayment
  }),
  pure
)

export default enhancer(({ actions, goToPayment }) => {
  return (
    <div className="crt-Box crt-PaymentNav">
      <button className="crt-PaymentNav_Button" onClick={goToPayment}>
        Proceed to checkout
      </button>
    </div>
  )
})
