/* @flow */
import React from 'react'
import { Provider } from 'react-redux'
import type { Store } from 'redux'

type Props = {
  children: any,
  store: Store<*, *>
}

export default function ViewAdapter({ children, store }: Props) {
  return <Provider store={store}>{children}</Provider>
}
