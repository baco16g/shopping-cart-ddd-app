/* @flow */
import { fork, take, put, call, select } from 'redux-saga/effects'
import {
  loadLocalStorageByKey,
  saveLocalStorageByKey,
  deleteLocalStorageByKey,
  wait
} from '~/adapter/processAdapter/services/utils/storage'
import {
  creators as cartCreators,
  types as CartTypes
} from '~/port/redux/packages/cart'

/**********************************
 * services
 *********************************/

function* restoreCartItems(): * {
  const src: any[] = yield call(loadLocalStorageByKey, 'cart')
  yield put(cartCreators.restoreCartItems(src))
}

function* saveCartItems(): * {
  const cartVM = yield select(state => state.cartVM)
  const src: any[] = cartVM.getCartItemsJS()
  saveLocalStorageByKey(src, 'cart')
}

function* resetCartItems(): * {
  yield call(deleteLocalStorageByKey, 'cart')
  yield put(cartCreators.resetCartItems({}))
}

/**********************************
 * subscribe Domain Actions
 *********************************/
function* subscribeToRestoreFailed(): * {
  while (true) {
    yield take(CartTypes.restoreFailed)
    yield call(wait, 1000)
    yield fork(resetCartItems)
    alert('保存されたカート情報が正しくありません。')
    window.location.href = '/'
  }
}

function* subscribeToAddItemToCart(): * {
  while (true) {
    yield take(CartTypes.addItemToCart)
    yield call(wait, 100)
    yield fork(saveCartItems)
    window.location.href = '/cart/'
  }
}

function* subscribeToGoingToPayment(): * {
  while (true) {
    yield take(CartTypes.goToPayment)
    yield call(wait, 100)
    yield fork(saveCartItems)
    const customerVM = yield select(state => state.customerVM)
    const exist = customerVM.exist()
    if (exist) {
      window.location.href = '/payment/'
    } else {
      window.location.href = '/login/'
    }
  }
}

export default function*(): * {
  yield fork(restoreCartItems)
  yield fork(subscribeToRestoreFailed)
  yield fork(subscribeToAddItemToCart)
  yield fork(subscribeToGoingToPayment)
}
