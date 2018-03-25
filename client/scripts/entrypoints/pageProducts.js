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
import ReactProductsView from '~/presentation/views/modules/products'

// Reducers
import { reducer as CommonReducer } from '~/port/redux/common'
import { reducer as ProductsReducer } from '~/port/redux/packages/products'
import { reducer as CustomerReducer } from '~/port/redux/packages/customer'

// ViewModels
import CommonViewModel from '~/domain/Common/CommonView'
import ProductsViewModel from '~/domain/Products/ProductsView'
import CustomerViewModel from '~/domain/Customer/CustomerView'

// Sagas
import productsSaga from '~/adapter/processAdapter/services/products'
import customerSaga from '~/adapter/processAdapter/services/customer'

// Main
const rootReducer = extendReducers({
  commonVM: CommonReducer(new CommonViewModel()),
  productsVM: ProductsReducer(new ProductsViewModel()),
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
      <ReactProductsView />
    </ViewAdapter>
  )
}

renderViews('data-react-header-app', HeaderViewAdaptedStore)
renderViews('data-react-products-app', MainViewAdaptedStore)
runRootSaga(sagaMiddleware)([productsSaga, customerSaga])
