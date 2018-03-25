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
import ReactHeaderView from '~/presentation/views/_core/organisms/Header'
import ReactCartView from '~/presentation/views/modules/cart'

// Reducers
import { reducer as CommonReducer } from '~/port/redux/common'
import { reducer as ProductsReducer } from '~/port/redux/packages/products'
import { reducer as CartReducer } from '~/port/redux/packages/cart'
import { reducer as CustomerReducer } from '~/port/redux/packages/customer'

// ViewModels
import CommonViewModel from '~/domain/Common/CommonView'
import ProductsViewModel from '~/domain/Products/ProductsView'
import CartViewModel from '~/domain/Cart/CartView'
import CustomerViewModel from '~/domain/Customer/CustomerView'

// Sagas
import commonSaga from '~/adapter/processAdapter/services/common'
import productsSaga from '~/adapter/processAdapter/services/products'
import cartSaga from '~/adapter/processAdapter/services/cart'
import customerSaga from '~/adapter/processAdapter/services/customer'

// Main
const rootReducer = extendReducers({
  commonVM: CommonReducer(new CommonViewModel()),
  productsVM: ProductsReducer(new ProductsViewModel()),
  cartVM: CartReducer(new CartViewModel()),
  customerVM: CustomerReducer(new CustomerViewModel())
})

const store = configureStore(rootReducer)

const HeaderViewAdaptedStore = () => {
  return (
    <ViewAdapter store={store}>
      <ReactHeaderView />
    </ViewAdapter>
  )
}

const MainViewAdaptedStore = () => {
  return (
    <ViewAdapter store={store}>
      <ReactCartView />
    </ViewAdapter>
  )
}

renderViews('data-react-header-app', HeaderViewAdaptedStore)
renderViews('data-react-cart-app', MainViewAdaptedStore)
runRootSaga(sagaMiddleware)([commonSaga, productsSaga, cartSaga, customerSaga])
