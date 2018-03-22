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
import ReactProductsView from '~/presentation/views/modules/products'

// Reducers
import { reducer as CommonReducer } from '~/port/redux/common'
import { reducer as ProductsReducer } from '~/port/redux/packages/products'

// ViewModels
import CommonViewModel from '~/domain/Common/CommonView'
import ProductsViewModel from '~/domain/Products/ProductsView'

// Sagas
import productsSaga from '~/adapter/processAdapter/services/products'

// Main
const rootReducer = extendReducers({
  commonVM: CommonReducer(new CommonViewModel()),
  productsVM: ProductsReducer(new ProductsViewModel())
})

const store = configureStore(rootReducer)

const ViewAdaptedStore = () => {
  return (
    <ViewAdapter store={store}>
      <ReactProductsView />
    </ViewAdapter>
  )
}

renderViews('data-react-products-app', ViewAdaptedStore)
runRootSaga(sagaMiddleware)([productsSaga])
