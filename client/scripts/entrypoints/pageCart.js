/* @flow */
import 'babel-polyfill'
import React from 'react'

// Libraries
import renderViews from '~/entrypoints/lib/renderViews'
import ViewAdapter from '~/adapter/viewAdapter'
import configureStore from '~/port/store/configureStore'
import runRootSaga from '~/adapter/processAdapter/lib/runRootSaga'
import { sagaMiddleware } from '~/adapter/processAdapter'
import extendReducers from '~/port/lib/extendReducers'

// RootView
import ReactCartView from '~/presentation/views/modules/cart'

// Reducers
import { reducer as CommonReducer } from '~/port/redux/common'
import { reducer as ProductsReducer } from '~/port/redux/packages/products'
import { reducer as CartReducer } from '~/port/redux/packages/cart'

// ViewModels
import CommonViewModel from '~/domain/Common/CommonView'
import ProductsViewModel from '~/domain/Products/ProductsView'
import CartViewModel from '~/domain/Cart/CartView'

// Sagas
import commonSaga from '~/adapter/processAdapter/services/common'
import productsSaga from '~/adapter/processAdapter/services/products'
import cartSaga from '~/adapter/processAdapter/services/cart'

// Main
const rootReducer = extendReducers({
  commonVM: CommonReducer(new CommonViewModel()),
  productsVM: ProductsReducer(new ProductsViewModel()),
  cartVM: CartReducer(new CartViewModel())
})

const store = configureStore(rootReducer)

const ViewAdaptedStore = () => {
  return (
    <ViewAdapter store={store}>
      <ReactCartView />
    </ViewAdapter>
  )
}

renderViews('data-react-cart-app', ViewAdaptedStore)
runRootSaga(sagaMiddleware)([commonSaga, productsSaga, cartSaga])
