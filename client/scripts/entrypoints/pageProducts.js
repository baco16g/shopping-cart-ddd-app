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
import { reducer as CustomerReducer } from '~/port/redux/packages/customer'
import { reducer as ProductsReducer } from '~/port/redux/packages/products'

// ViewModels
import CommonViewModel from '~/domain/Common/CommonView'
import CustomerViewModel from '~/domain/Customer/CustomerView'
import ProductsViewModel from '~/domain/Products/ProductsView'

// Sagas
import commonSaga from '~/adapter/processAdapter/services/commonService'
import authSaga from '~/adapter/processAdapter/services/auth'
import setProductsSaga from '~/adapter/processAdapter/services/setProducts'

// Main
const rootReducer = extendReducers({
  commonVM: CommonReducer(new CommonViewModel()),
  customerVM: CustomerReducer(new CustomerViewModel()),
  productsVM: ProductsReducer(new ProductsViewModel())
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
runRootSaga(sagaMiddleware)([commonSaga, authSaga, setProductsSaga])
