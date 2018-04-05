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
import ReactOrderListView from '~/presentation/views/modules/orderList'

// Reducers
import { reducer as CommonReducer } from '~/port/redux/common'
import { reducer as CustomerReducer } from '~/port/redux/packages/customer'
import { reducer as ProductsReducer } from '~/port/redux/packages/products'
import { reducer as OrderListReducer } from '~/port/redux/packages/orderList'

// ViewModels
import CommonViewModel from '~/domain/Common/CommonView'
import CustomerViewModel from '~/domain/Customer/CustomerView'
import ProductsViewModel from '~/domain/Products/ProductsView'
import OrderListViewModel from '~/domain/OrderList/OrderListView'

// Sagas
import commonSaga from '~/adapter/processAdapter/services/commonService'
import authSaga from '~/adapter/processAdapter/services/auth'
import setProductsSaga from '~/adapter/processAdapter/services/setProducts'
import setOrderSaga from '~/adapter/processAdapter/services/setOrder'

// Main
const rootReducer = extendReducers({
  commonVM: CommonReducer(new CommonViewModel()),
  customerVM: CustomerReducer(new CustomerViewModel()),
  productsVM: ProductsReducer(new ProductsViewModel()),
  orderListVM: OrderListReducer(new OrderListViewModel())
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
      <ReactOrderListView />
    </ViewAdapter>
  )
}

renderViews('data-react-header-app', HeaderViewAdaptedStore)
renderViews('data-react-orderlist-app', MainViewAdaptedStore)
runRootSaga(sagaMiddleware)([
  commonSaga,
  authSaga,
  setProductsSaga,
  setOrderSaga
])
