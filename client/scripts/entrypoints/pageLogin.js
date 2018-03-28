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
import ReactLoginView from '~/presentation/views/modules/login'

// Reducers
import { reducer as formReducer } from 'redux-form'
import { reducer as CommonReducer } from '~/port/redux/common'
import { reducer as CustomerReducer } from '~/port/redux/packages/customer'

// ViewModels
import CommonViewModel from '~/domain/Common/CommonView'
import CustomerViewModel from '~/domain/Customer/CustomerView'

// Sagas
import commonSaga from '~/adapter/processAdapter/services/commonService'
import authSaga from '~/adapter/processAdapter/services/auth'

// Main
const rootReducer = extendReducers({
  commonVM: CommonReducer(new CommonViewModel()),
  customerVM: CustomerReducer(new CustomerViewModel()),
  form: formReducer
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
      <ReactLoginView />
    </ViewAdapter>
  )
}

renderViews('data-react-header-app', HeaderViewAdaptedStore)
renderViews('data-react-login-app', MainViewAdaptedStore)
runRootSaga(sagaMiddleware)([commonSaga, authSaga])
