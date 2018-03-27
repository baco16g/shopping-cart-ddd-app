/* @flow */
import React from 'react'
import { compose, pure, withHandlers, type HOC } from 'recompose'
import checkout from '~/presentation/views/modules/payment/hocs/withHandlers/checkout'

const enhancer: HOC<*, *> = compose(
  withHandlers({
    checkout
  }),
  pure
)

export default enhancer(({ checkout }) => {
  return (
    <div className="pymnt-Checkout">
      <button className="pymnt-Checkout_Button" onClick={checkout}>
        Checkout
      </button>
    </div>
  )
})
