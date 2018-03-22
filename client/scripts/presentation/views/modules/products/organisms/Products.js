/* @flow */
import React from 'react'
import { compose, pure, type HOC } from 'recompose'
import connector from '~/presentation/views/modules/products/hocs/connector'
import Product from '~/presentation/views/modules/products/molecules/Product'

const enhancer: HOC<*, *> = compose(connector, pure)

export default enhancer(({ actions, commonVM, productsVM, cartVM }) => {
  const isFetching: boolean = commonVM.hasEventkeyInFetchingQueue()
  const products: any[] = productsVM
    .getProductList()
    .map((productVM: ProductViewModel) => {
      const id = productVM.getID()
      const _props = { actions, productVM, cartVM }
      return <Product key={id} {..._props} />
    })

  return (
    <ul className="prdcts-Items">{isFetching ? <p>Loading</p> : products}</ul>
  )
})
