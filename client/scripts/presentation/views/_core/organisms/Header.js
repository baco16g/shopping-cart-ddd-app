/* @flow */
import React from 'react'
import { compose, pure, withHandlers, type HOC } from 'recompose'
import connector from '~/presentation/views/_core/hocs/connector'
import logout from '~/presentation/views/_core/hocs/withHandlers/logout'

const enhancer: HOC<*, *> = compose(
  connector,
  withHandlers({
    logout
  }),
  pure
)

export default enhancer(({ customerVM, logout }) => {
  const customerExist = customerVM.exist()

  return (
    <nav>
      <ul className="st-Nav">
        <li className="st-Nav_Item">
          <a href="/products/">Products</a>
        </li>
        <li className="st-Nav_Item">
          <a href="/cart/">Cart</a>
        </li>
        <li className="st-Nav_Item">
          {customerExist ? (
            <a href="javascript:void(0)" onClick={logout}>
              Logout
            </a>
          ) : (
            <a href="/login/">Login</a>
          )}
        </li>
      </ul>
    </nav>
  )
})
