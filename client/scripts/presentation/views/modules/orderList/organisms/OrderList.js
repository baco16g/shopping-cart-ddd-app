/* @flow */
import React, { Fragment } from 'react'
import { compose, pure, lifecycle, type HOC } from 'recompose'
import connector from '~/presentation/views/modules/orderList/hocs/connector'
import Loading from '~/presentation/views/_core/atoms/Loading'
import Order from '~/presentation/views/modules/orderList/molecules/Order'

const enhancer: HOC<*, *> = compose(
  connector,
  lifecycle({
    componentWillUpdate() {
      this.props.actions.setInitialOrderList()
    }
  }),
  pure
)

export default enhancer(
  ({ actions, commonVM, productsVM, orderListVM, customerVM }) => {
    const isFetching: boolean = commonVM.hasEventkeyInFetchingQueue()
    const exist = customerVM.exist()
    const orders: any[] = orderListVM
      .getOrderList()
      .map((orderVM: OrderViewModel) => {
        const id = orderVM.getID()
        const _props = { actions, commonVM, productsVM, orderVM }
        return <Order key={id} {..._props} />
      })

    return (
      <Fragment>
        {isFetching ? (
          <Loading />
        ) : (
          <div className="ordrlst-Container">
            {exist ? (
              <Fragment>
                {orders.size > 0 ? (
                  <Fragment>
                    <span>{exist}</span>
                    <div className="ordrlst-Orders">{orders}</div>
                  </Fragment>
                ) : (
                  <div className="ordrlst-Section">
                    <span>Order is empty...</span>
                  </div>
                )}
              </Fragment>
            ) : (
              <div className="ordrlst-Section">
                <span>Not Found Customer. Please Login.</span>
              </div>
            )}
          </div>
        )}
      </Fragment>
    )
  }
)
