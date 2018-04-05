/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1]
/******/ 		var executeModules = data[2];
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fullfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fullfilled = false;
/******/ 			}
/******/ 			if(fullfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	var installedChunks = {
/******/ 		"pageProducts": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./client/scripts/entrypoints/pageProducts.js","vendor"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./client/scripts/adapter/processAdapter/index.js":
/*!********************************************************!*\
  !*** ./client/scripts/adapter/processAdapter/index.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.sagaMiddleware = void 0;

var _reduxLogger = _interopRequireDefault(__webpack_require__(/*! redux-logger */ "./node_modules/redux-logger/dist/redux-logger.js"));

var _reduxSaga = _interopRequireDefault(__webpack_require__(/*! redux-saga */ "./node_modules/redux-saga/es/index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

const sagaMiddleware = (0, _reduxSaga.default)();
exports.sagaMiddleware = sagaMiddleware;

const _default = [sagaMiddleware].concat( false ? undefined : [_reduxLogger.default]);

var _default2 = _default;
exports.default = _default2;
;

(function () {
  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(sagaMiddleware, "sagaMiddleware", "/Users/yuk-kobayashi/dev/git.baco16g/spa-base/client/scripts/adapter/processAdapter/index.js");
  reactHotLoader.register(_default, "default", "/Users/yuk-kobayashi/dev/git.baco16g/spa-base/client/scripts/adapter/processAdapter/index.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./client/scripts/adapter/processAdapter/lib/runRootSaga.js":
/*!******************************************************************!*\
  !*** ./client/scripts/adapter/processAdapter/lib/runRootSaga.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _reduxSaga = _interopRequireDefault(__webpack_require__(/*! redux-saga */ "./node_modules/redux-saga/es/index.js"));

var _effects = __webpack_require__(/*! redux-saga/effects */ "./node_modules/redux-saga/es/effects.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

function createRootSaga(sagas, extension = []) {
  return function* () {
    yield (0, _effects.all)([...sagas, ...extension].map(task => (0, _effects.fork)(task)));
  };
}

const _default = function (sagaMiddleware) {
  return (saga, extension = []) => {
    const rootSaga = createRootSaga(saga, extension);
    sagaMiddleware.run(rootSaga);
  };
};

var _default2 = _default;
exports.default = _default2;
;

(function () {
  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(createRootSaga, "createRootSaga", "/Users/yuk-kobayashi/dev/git.baco16g/spa-base/client/scripts/adapter/processAdapter/lib/runRootSaga.js");
  reactHotLoader.register(_default, "default", "/Users/yuk-kobayashi/dev/git.baco16g/spa-base/client/scripts/adapter/processAdapter/lib/runRootSaga.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./client/scripts/adapter/processAdapter/services/auth.js":
/*!****************************************************************!*\
  !*** ./client/scripts/adapter/processAdapter/services/auth.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _reduxForm = __webpack_require__(/*! redux-form */ "./node_modules/redux-form/es/index.js");

var _humps = __webpack_require__(/*! humps */ "./node_modules/humps/humps.js");

var _effects = __webpack_require__(/*! redux-saga/effects */ "./node_modules/redux-saga/es/effects.js");

var _storage = __webpack_require__(/*! ./client/scripts/adapter/processAdapter/services/utils/storage */ "./client/scripts/adapter/processAdapter/services/utils/storage/index.js");

var _common = __webpack_require__(/*! ./client/scripts/port/redux/common */ "./client/scripts/port/redux/common.js");

var _customer = __webpack_require__(/*! ./client/scripts/port/redux/packages/customer */ "./client/scripts/port/redux/packages/customer.js");

var _API_FUNC = _interopRequireDefault(__webpack_require__(/*! ./client/scripts/adapter/processAdapter/services/constants/API_FUNC */ "./client/scripts/adapter/processAdapter/services/constants/API_FUNC.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/**********************************
 * services
 *********************************/
function* requestCustomer() {
  const token = yield (0, _effects.call)(_storage.loadLocalStorageByKey, 'token');
  if (!token) return false;
  yield (0, _effects.call)(fetchCustomer, 'fetchCustomer', token);
}

function* fetchCustomer(eventKey, token) {
  yield (0, _effects.put)(_common.creators.pushFetchingQueue({
    eventkey: eventKey
  }));
  const reqHeaders = {
    headers: {
      authorization: `Bearer ${token}`
    }
  };
  const {
    payload,
    err
  } = yield (0, _effects.call)(_API_FUNC.default.GET.CUSTOMER, (0, _humps.decamelizeKeys)(reqHeaders));
  yield (0, _effects.put)(_common.creators.deleteFetchingQueue({
    eventkey: eventKey
  }));
  if (!payload && err) throw new Error('システムエラーが発生しました。');
  const status = payload['data']['status'];

  switch (status) {
    case 0:
      yield (0, _effects.put)(_customer.creators.setCustomer(_extends({}, (0, _humps.camelizeKeys)(payload['data']['customer']))));
      return true;

    case -2:
      return true;

    default:
      alert('該当するステータスコードが存在しません');
      return false;
  }
}

function* login(eventKey, reqData) {
  yield (0, _effects.put)(_common.creators.pushFetchingQueue({
    eventkey: eventKey
  }));
  const {
    payload,
    err
  } = yield (0, _effects.call)(_API_FUNC.default.POST.LOGIN, (0, _humps.decamelizeKeys)(reqData));
  yield (0, _effects.put)(_common.creators.deleteFetchingQueue({
    eventkey: eventKey
  }));
  if (!payload && err) throw new Error('システムエラーが発生しました。');
  const status = payload['data']['status'];

  switch (status) {
    case 0:
      (0, _storage.saveLocalStorageByKey)(payload['data']['token'], 'token');
      location.href = '/';
      return true;

    case -2:
      yield (0, _effects.put)((0, _reduxForm.stopSubmit)('login', {
        _error: payload['data']['message']
      }));
      return false;

    default:
      alert('該当するステータスコードが存在しません');
      return false;
  }
}

function* signup(eventKey, reqData) {
  yield (0, _effects.put)(_common.creators.pushFetchingQueue({
    eventkey: eventKey
  }));
  const {
    payload,
    err
  } = yield (0, _effects.call)(_API_FUNC.default.POST.SIGNUP, (0, _humps.decamelizeKeys)(Object.assign({}, reqData, {
    createdAt: new Date()
  })));
  yield (0, _effects.put)(_common.creators.deleteFetchingQueue({
    eventkey: eventKey
  }));
  if (!payload && err) throw new Error('システムエラーが発生しました。');
  const status = payload['data']['status'];

  switch (status) {
    case 0:
      alert(payload['data']['message']);
      location.href = '/login/';
      return true;

    case -2:
      yield (0, _effects.put)((0, _reduxForm.stopSubmit)('signup', {
        _error: payload['data']['message']
      }));
      return false;

    default:
      alert('該当するステータスコードが存在しません');
      return false;
  }
}
/**********************************
 * subscribe Domain Actions
 *********************************/


function* subscribeToRequestLogin() {
  while (true) {
    const {
      payload: reqData
    } = yield (0, _effects.take)(_customer.types.requestLogin);
    const isCompleted = yield (0, _effects.call)(login, 'requestLogin', reqData);
    if (!isCompleted) continue;
  }
}

function* subscribeToRequestLogout() {
  while (true) {
    yield (0, _effects.take)(_customer.types.requestLogout);
    yield (0, _effects.call)(_storage.deleteLocalStorageByKey, 'token');
    location.reload();
  }
}

function* subscribeToRequestSignup() {
  while (true) {
    const {
      payload: reqData
    } = yield (0, _effects.take)(_customer.types.requestSignup);
    const isCompleted = yield (0, _effects.call)(signup, 'requestSignup', reqData);
    if (!isCompleted) continue;
  }
}

const _default = function* () {
  yield (0, _effects.fork)(requestCustomer);
  yield (0, _effects.fork)(subscribeToRequestLogin);
  yield (0, _effects.fork)(subscribeToRequestLogout);
  yield (0, _effects.fork)(subscribeToRequestSignup);
};

var _default2 = _default;
exports.default = _default2;
;

(function () {
  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(requestCustomer, "requestCustomer", "/Users/yuk-kobayashi/dev/git.baco16g/spa-base/client/scripts/adapter/processAdapter/services/auth.js");
  reactHotLoader.register(fetchCustomer, "fetchCustomer", "/Users/yuk-kobayashi/dev/git.baco16g/spa-base/client/scripts/adapter/processAdapter/services/auth.js");
  reactHotLoader.register(login, "login", "/Users/yuk-kobayashi/dev/git.baco16g/spa-base/client/scripts/adapter/processAdapter/services/auth.js");
  reactHotLoader.register(signup, "signup", "/Users/yuk-kobayashi/dev/git.baco16g/spa-base/client/scripts/adapter/processAdapter/services/auth.js");
  reactHotLoader.register(subscribeToRequestLogin, "subscribeToRequestLogin", "/Users/yuk-kobayashi/dev/git.baco16g/spa-base/client/scripts/adapter/processAdapter/services/auth.js");
  reactHotLoader.register(subscribeToRequestLogout, "subscribeToRequestLogout", "/Users/yuk-kobayashi/dev/git.baco16g/spa-base/client/scripts/adapter/processAdapter/services/auth.js");
  reactHotLoader.register(subscribeToRequestSignup, "subscribeToRequestSignup", "/Users/yuk-kobayashi/dev/git.baco16g/spa-base/client/scripts/adapter/processAdapter/services/auth.js");
  reactHotLoader.register(_default, "default", "/Users/yuk-kobayashi/dev/git.baco16g/spa-base/client/scripts/adapter/processAdapter/services/auth.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./client/scripts/adapter/processAdapter/services/commonService.js":
/*!*************************************************************************!*\
  !*** ./client/scripts/adapter/processAdapter/services/commonService.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _qs = _interopRequireDefault(__webpack_require__(/*! qs */ "./node_modules/qs/lib/index.js"));

var _humps = __webpack_require__(/*! humps */ "./node_modules/humps/humps.js");

var _effects = __webpack_require__(/*! redux-saga/effects */ "./node_modules/redux-saga/es/effects.js");

var _common = __webpack_require__(/*! ./client/scripts/port/redux/common */ "./client/scripts/port/redux/common.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

function* setQueryObject() {
  yield (0, _effects.put)(_common.creators.pushFetchingQueue({
    eventkey: 'setQueryObject'
  }));

  const queries = _qs.default.parse(window.location.search, {
    ignoreQueryPrefix: true
  });

  yield (0, _effects.put)(_common.creators.setQueries({
    queries: (0, _humps.camelizeKeys)(queries)
  }));
  yield (0, _effects.put)(_common.creators.deleteFetchingQueue({
    eventkey: 'setQueryObject'
  }));
}

const _default = function* () {
  yield (0, _effects.fork)(setQueryObject);
};

var _default2 = _default;
exports.default = _default2;
;

(function () {
  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(setQueryObject, "setQueryObject", "/Users/yuk-kobayashi/dev/git.baco16g/spa-base/client/scripts/adapter/processAdapter/services/commonService.js");
  reactHotLoader.register(_default, "default", "/Users/yuk-kobayashi/dev/git.baco16g/spa-base/client/scripts/adapter/processAdapter/services/commonService.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./client/scripts/adapter/processAdapter/services/constants/API_FUNC.js":
/*!******************************************************************************!*\
  !*** ./client/scripts/adapter/processAdapter/services/constants/API_FUNC.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _getProducts = _interopRequireDefault(__webpack_require__(/*! ./client/scripts/adapter/processAdapter/services/constants/api/getProducts */ "./client/scripts/adapter/processAdapter/services/constants/api/getProducts.js"));

var _fetchCustomer = _interopRequireDefault(__webpack_require__(/*! ./client/scripts/adapter/processAdapter/services/constants/api/fetchCustomer */ "./client/scripts/adapter/processAdapter/services/constants/api/fetchCustomer.js"));

var _fetchOrder = _interopRequireDefault(__webpack_require__(/*! ./client/scripts/adapter/processAdapter/services/constants/api/fetchOrder */ "./client/scripts/adapter/processAdapter/services/constants/api/fetchOrder.js"));

var _login = _interopRequireDefault(__webpack_require__(/*! ./client/scripts/adapter/processAdapter/services/constants/api/login */ "./client/scripts/adapter/processAdapter/services/constants/api/login.js"));

var _signup = _interopRequireDefault(__webpack_require__(/*! ./client/scripts/adapter/processAdapter/services/constants/api/signup */ "./client/scripts/adapter/processAdapter/services/constants/api/signup.js"));

var _updateStock = _interopRequireDefault(__webpack_require__(/*! ./client/scripts/adapter/processAdapter/services/constants/api/updateStock */ "./client/scripts/adapter/processAdapter/services/constants/api/updateStock.js"));

var _postOrder = _interopRequireDefault(__webpack_require__(/*! ./client/scripts/adapter/processAdapter/services/constants/api/postOrder */ "./client/scripts/adapter/processAdapter/services/constants/api/postOrder.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

const API_FUNC = {
  GET: {
    PRODUCTS: _getProducts.default,
    CUSTOMER: _fetchCustomer.default,
    ORDER: _fetchOrder.default
  },
  POST: {
    LOGIN: _login.default,
    SIGNUP: _signup.default,
    ORDER: _postOrder.default
  },
  PATCH: {
    PRODUCT_STOCK: _updateStock.default
  }
};
const _default = API_FUNC;
var _default2 = _default;
exports.default = _default2;
;

(function () {
  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(API_FUNC, "API_FUNC", "/Users/yuk-kobayashi/dev/git.baco16g/spa-base/client/scripts/adapter/processAdapter/services/constants/API_FUNC.js");
  reactHotLoader.register(_default, "default", "/Users/yuk-kobayashi/dev/git.baco16g/spa-base/client/scripts/adapter/processAdapter/services/constants/API_FUNC.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../../node_modules/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./client/scripts/adapter/processAdapter/services/constants/API_URL.js":
/*!*****************************************************************************!*\
  !*** ./client/scripts/adapter/processAdapter/services/constants/API_URL.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

(function () {
  var enterModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

const API_URL = {
  GET: {
    PRODUCTS: '/api/products',
    CUSTOMER: '/api/auth',
    ORDER: '/api/order'
  },
  POST: {
    LOGIN: '/api/auth/login',
    SIGNUP: '/api/signup',
    ORDER: '/api/order'
  },
  PATCH: {
    PRODUCT_STOCK: '/api/product/updateStock'
  }
};
const _default = API_URL;
var _default2 = _default;
exports.default = _default2;
;

(function () {
  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(API_URL, "API_URL", "/Users/yuk-kobayashi/dev/git.baco16g/spa-base/client/scripts/adapter/processAdapter/services/constants/API_URL.js");
  reactHotLoader.register(_default, "default", "/Users/yuk-kobayashi/dev/git.baco16g/spa-base/client/scripts/adapter/processAdapter/services/constants/API_URL.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../../node_modules/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./client/scripts/adapter/processAdapter/services/constants/api/fetchCustomer.js":
/*!***************************************************************************************!*\
  !*** ./client/scripts/adapter/processAdapter/services/constants/api/fetchCustomer.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _axios = _interopRequireDefault(__webpack_require__(/*! axios */ "./node_modules/axios/index.js"));

var _API_URL = _interopRequireDefault(__webpack_require__(/*! ./client/scripts/adapter/processAdapter/services/constants/API_URL */ "./client/scripts/adapter/processAdapter/services/constants/API_URL.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

const _default = function (reqHeaders) {
  return _axios.default.get(_API_URL.default.GET.CUSTOMER, reqHeaders).then(payload => {
    console.log(payload);
    return {
      payload
    };
  }).catch(error => {
    console.log(error);
    return {
      error
    };
  });
};

var _default2 = _default;
exports.default = _default2;
;

(function () {
  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(_default, "default", "/Users/yuk-kobayashi/dev/git.baco16g/spa-base/client/scripts/adapter/processAdapter/services/constants/api/fetchCustomer.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../../../node_modules/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./client/scripts/adapter/processAdapter/services/constants/api/fetchOrder.js":
/*!************************************************************************************!*\
  !*** ./client/scripts/adapter/processAdapter/services/constants/api/fetchOrder.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _axios = _interopRequireDefault(__webpack_require__(/*! axios */ "./node_modules/axios/index.js"));

var _API_URL = _interopRequireDefault(__webpack_require__(/*! ./client/scripts/adapter/processAdapter/services/constants/API_URL */ "./client/scripts/adapter/processAdapter/services/constants/API_URL.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

const _default = function (reqData) {
  return _axios.default.get(_API_URL.default.GET.ORDER, {
    params: reqData
  }).then(payload => {
    console.log(payload);
    return {
      payload
    };
  }).catch(error => {
    console.log(error);
    return {
      error
    };
  });
};

var _default2 = _default;
exports.default = _default2;
;

(function () {
  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(_default, "default", "/Users/yuk-kobayashi/dev/git.baco16g/spa-base/client/scripts/adapter/processAdapter/services/constants/api/fetchOrder.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../../../node_modules/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./client/scripts/adapter/processAdapter/services/constants/api/getProducts.js":
/*!*************************************************************************************!*\
  !*** ./client/scripts/adapter/processAdapter/services/constants/api/getProducts.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _axios = _interopRequireDefault(__webpack_require__(/*! axios */ "./node_modules/axios/index.js"));

var _API_URL = _interopRequireDefault(__webpack_require__(/*! ./client/scripts/adapter/processAdapter/services/constants/API_URL */ "./client/scripts/adapter/processAdapter/services/constants/API_URL.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

const _default = function () {
  return _axios.default.get(_API_URL.default.GET.PRODUCTS).then(payload => {
    console.log(payload);
    return {
      payload
    };
  }).catch(error => {
    console.log(error);
    return {
      error
    };
  });
};

var _default2 = _default;
exports.default = _default2;
;

(function () {
  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(_default, "default", "/Users/yuk-kobayashi/dev/git.baco16g/spa-base/client/scripts/adapter/processAdapter/services/constants/api/getProducts.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../../../node_modules/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./client/scripts/adapter/processAdapter/services/constants/api/login.js":
/*!*******************************************************************************!*\
  !*** ./client/scripts/adapter/processAdapter/services/constants/api/login.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _axios = _interopRequireDefault(__webpack_require__(/*! axios */ "./node_modules/axios/index.js"));

var _qs = _interopRequireDefault(__webpack_require__(/*! qs */ "./node_modules/qs/lib/index.js"));

var _API_URL = _interopRequireDefault(__webpack_require__(/*! ./client/scripts/adapter/processAdapter/services/constants/API_URL */ "./client/scripts/adapter/processAdapter/services/constants/API_URL.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

const _default = function (reqData) {
  return _axios.default.post(_API_URL.default.POST.LOGIN, _qs.default.stringify(reqData)).then(payload => {
    console.log(payload);
    return {
      payload
    };
  }).catch(error => {
    console.log(error);
    return {
      error
    };
  });
};

var _default2 = _default;
exports.default = _default2;
;

(function () {
  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(_default, "default", "/Users/yuk-kobayashi/dev/git.baco16g/spa-base/client/scripts/adapter/processAdapter/services/constants/api/login.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../../../node_modules/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./client/scripts/adapter/processAdapter/services/constants/api/postOrder.js":
/*!***********************************************************************************!*\
  !*** ./client/scripts/adapter/processAdapter/services/constants/api/postOrder.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _axios = _interopRequireDefault(__webpack_require__(/*! axios */ "./node_modules/axios/index.js"));

var _qs = _interopRequireDefault(__webpack_require__(/*! qs */ "./node_modules/qs/lib/index.js"));

var _API_URL = _interopRequireDefault(__webpack_require__(/*! ./client/scripts/adapter/processAdapter/services/constants/API_URL */ "./client/scripts/adapter/processAdapter/services/constants/API_URL.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

const _default = function (reqData) {
  return _axios.default.post(_API_URL.default.POST.ORDER, _qs.default.stringify(reqData)).then(payload => {
    console.log(payload);
    return {
      payload
    };
  }).catch(error => {
    console.log(error);
    return {
      error
    };
  });
};

var _default2 = _default;
exports.default = _default2;
;

(function () {
  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(_default, "default", "/Users/yuk-kobayashi/dev/git.baco16g/spa-base/client/scripts/adapter/processAdapter/services/constants/api/postOrder.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../../../node_modules/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./client/scripts/adapter/processAdapter/services/constants/api/signup.js":
/*!********************************************************************************!*\
  !*** ./client/scripts/adapter/processAdapter/services/constants/api/signup.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _axios = _interopRequireDefault(__webpack_require__(/*! axios */ "./node_modules/axios/index.js"));

var _qs = _interopRequireDefault(__webpack_require__(/*! qs */ "./node_modules/qs/lib/index.js"));

var _API_URL = _interopRequireDefault(__webpack_require__(/*! ./client/scripts/adapter/processAdapter/services/constants/API_URL */ "./client/scripts/adapter/processAdapter/services/constants/API_URL.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

const _default = function (reqData) {
  return _axios.default.post(_API_URL.default.POST.SIGNUP, _qs.default.stringify(reqData)).then(payload => {
    console.log(payload);
    return {
      payload
    };
  }).catch(error => {
    console.log(error);
    return {
      error
    };
  });
};

var _default2 = _default;
exports.default = _default2;
;

(function () {
  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(_default, "default", "/Users/yuk-kobayashi/dev/git.baco16g/spa-base/client/scripts/adapter/processAdapter/services/constants/api/signup.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../../../node_modules/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./client/scripts/adapter/processAdapter/services/constants/api/updateStock.js":
/*!*************************************************************************************!*\
  !*** ./client/scripts/adapter/processAdapter/services/constants/api/updateStock.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _axios = _interopRequireDefault(__webpack_require__(/*! axios */ "./node_modules/axios/index.js"));

var _qs = _interopRequireDefault(__webpack_require__(/*! qs */ "./node_modules/qs/lib/index.js"));

var _API_URL = _interopRequireDefault(__webpack_require__(/*! ./client/scripts/adapter/processAdapter/services/constants/API_URL */ "./client/scripts/adapter/processAdapter/services/constants/API_URL.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

const _default = function (reqData) {
  return _axios.default.patch(_API_URL.default.PATCH.PRODUCT_STOCK, _qs.default.stringify(reqData)).then(payload => {
    console.log(payload);
    return {
      payload
    };
  }).catch(error => {
    console.log(error);
    return {
      error
    };
  });
};

var _default2 = _default;
exports.default = _default2;
;

(function () {
  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(_default, "default", "/Users/yuk-kobayashi/dev/git.baco16g/spa-base/client/scripts/adapter/processAdapter/services/constants/api/updateStock.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../../../node_modules/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./client/scripts/adapter/processAdapter/services/setProducts.js":
/*!***********************************************************************!*\
  !*** ./client/scripts/adapter/processAdapter/services/setProducts.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _effects = __webpack_require__(/*! redux-saga/effects */ "./node_modules/redux-saga/es/effects.js");

var _lodash = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");

var _humps = __webpack_require__(/*! humps */ "./node_modules/humps/humps.js");

var _common = __webpack_require__(/*! ./client/scripts/port/redux/common */ "./client/scripts/port/redux/common.js");

var _products = __webpack_require__(/*! ./client/scripts/port/redux/packages/products */ "./client/scripts/port/redux/packages/products.js");

var _API_FUNC = _interopRequireDefault(__webpack_require__(/*! ./client/scripts/adapter/processAdapter/services/constants/API_FUNC */ "./client/scripts/adapter/processAdapter/services/constants/API_FUNC.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

function* setProducts() {
  yield (0, _effects.put)(_common.creators.pushFetchingQueue({
    eventkey: 'setProducts'
  }));
  const {
    payload,
    error
  } = yield (0, _effects.call)(_API_FUNC.default.GET.PRODUCTS);
  if (!payload && error) throw new Error('not found Products');
  yield (0, _effects.all)([(0, _lodash.map)(payload['data'], product => {
    return (0, _effects.put)(_products.creators.pushProduct({
      product: (0, _humps.camelizeKeys)(product)
    }));
  })]);
  yield (0, _effects.put)(_common.creators.deleteFetchingQueue({
    eventkey: 'setProducts'
  }));
}
/**********************************
 * subscribe Domain Actions
 *********************************/


const _default = function* () {
  yield (0, _effects.fork)(setProducts);
};

var _default2 = _default;
exports.default = _default2;
;

(function () {
  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(setProducts, "setProducts", "/Users/yuk-kobayashi/dev/git.baco16g/spa-base/client/scripts/adapter/processAdapter/services/setProducts.js");
  reactHotLoader.register(_default, "default", "/Users/yuk-kobayashi/dev/git.baco16g/spa-base/client/scripts/adapter/processAdapter/services/setProducts.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./client/scripts/adapter/processAdapter/services/utils/storage/index.js":
/*!*******************************************************************************!*\
  !*** ./client/scripts/adapter/processAdapter/services/utils/storage/index.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.loadLocalStorageByKey = loadLocalStorageByKey;
exports.saveLocalStorageByKey = saveLocalStorageByKey;
exports.deleteLocalStorageByKey = deleteLocalStorageByKey;
exports.loadSessionStorageByKey = loadSessionStorageByKey;
exports.saveSessionStorageByKey = saveSessionStorageByKey;
exports.deleteSessionStorageByKey = deleteSessionStorageByKey;
exports.wait = wait;

(function () {
  var enterModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

function loadLocalStorageByKey(key) {
  return new Promise(resolve => {
    const serializedSrc = window.localStorage.getItem(key);
    const deserializedSrc = JSON.parse(serializedSrc);
    resolve(deserializedSrc);
  });
}

function saveLocalStorageByKey(src, key) {
  return new Promise(resolve => {
    const serializedSrc = JSON.stringify(src);
    window.localStorage.setItem(key, serializedSrc);
    resolve();
  });
}

function deleteLocalStorageByKey(key) {
  return new Promise(resolve => {
    window.localStorage.removeItem(key);
    resolve();
  });
}

function loadSessionStorageByKey(key) {
  return new Promise(resolve => {
    const serializedSrc = window.sessionStorage.getItem(key);
    const deserializedSrc = JSON.parse(serializedSrc);
    resolve(deserializedSrc);
  });
}

function saveSessionStorageByKey(src, key) {
  return new Promise(resolve => {
    const serializedSrc = JSON.stringify(src);
    window.sessionStorage.setItem(key, serializedSrc);
    resolve();
  });
}

function deleteSessionStorageByKey(key) {
  return new Promise(resolve => {
    window.sessionStorage.removeItem(key);
    resolve();
  });
}

function wait(duration = 0) {
  return new Promise(resolve => {
    setTimeout(resolve, duration);
  });
}

;

(function () {
  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(loadLocalStorageByKey, "loadLocalStorageByKey", "/Users/yuk-kobayashi/dev/git.baco16g/spa-base/client/scripts/adapter/processAdapter/services/utils/storage/index.js");
  reactHotLoader.register(saveLocalStorageByKey, "saveLocalStorageByKey", "/Users/yuk-kobayashi/dev/git.baco16g/spa-base/client/scripts/adapter/processAdapter/services/utils/storage/index.js");
  reactHotLoader.register(deleteLocalStorageByKey, "deleteLocalStorageByKey", "/Users/yuk-kobayashi/dev/git.baco16g/spa-base/client/scripts/adapter/processAdapter/services/utils/storage/index.js");
  reactHotLoader.register(loadSessionStorageByKey, "loadSessionStorageByKey", "/Users/yuk-kobayashi/dev/git.baco16g/spa-base/client/scripts/adapter/processAdapter/services/utils/storage/index.js");
  reactHotLoader.register(saveSessionStorageByKey, "saveSessionStorageByKey", "/Users/yuk-kobayashi/dev/git.baco16g/spa-base/client/scripts/adapter/processAdapter/services/utils/storage/index.js");
  reactHotLoader.register(deleteSessionStorageByKey, "deleteSessionStorageByKey", "/Users/yuk-kobayashi/dev/git.baco16g/spa-base/client/scripts/adapter/processAdapter/services/utils/storage/index.js");
  reactHotLoader.register(wait, "wait", "/Users/yuk-kobayashi/dev/git.baco16g/spa-base/client/scripts/adapter/processAdapter/services/utils/storage/index.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../../../node_modules/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./client/scripts/adapter/viewAdapter/index.js":
/*!*****************************************************!*\
  !*** ./client/scripts/adapter/viewAdapter/index.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ViewAdapter;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _reactRedux = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

function ViewAdapter({
  children,
  store
}) {
  return _react.default.createElement(_reactRedux.Provider, {
    store: store
  }, children);
}

;

(function () {
  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(ViewAdapter, "ViewAdapter", "/Users/yuk-kobayashi/dev/git.baco16g/spa-base/client/scripts/adapter/viewAdapter/index.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./client/scripts/domain/Common/Common.js":
/*!************************************************!*\
  !*** ./client/scripts/domain/Common/Common.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _immutable = __webpack_require__(/*! immutable */ "./node_modules/immutable/dist/immutable.es.js");

(function () {
  var enterModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

const props = () => ({
  fetchingQueue: (0, _immutable.List)([]),
  queries: (0, _immutable.Map)({})
});

const CommonModel = () => class extends (0, _immutable.Record)(props()) {
  /**********************
   * Getter
   **********************/
  // API Fetch Status
  getFetchingQueue() {
    return this.get('fetchingQueue');
  }

  getFetchingQueueSize() {
    return this.getFetchingQueue().size;
  }

  hasEventkeyInFetchingQueue() {
    return this.getFetchingQueueSize() > 0;
  }

  hasTargetEventKeyInFetchingQueue(eventkey) {
    return this.getFetchingQueue().includes(eventkey);
  } // URL Query


  getQueries() {
    return this.get('queries');
  }

  selectQueryValueByKey(key) {
    return this.getQueries().find((_, k) => k === key);
  }
  /**********************
   * Setter
   **********************/
  // API Fetch Status


  pushFetchingQueue({
    eventkey
  }) {
    return this.update('fetchingQueue', q => q.push(eventkey));
  }

  deleteFetchingQueue({
    eventkey
  }) {
    return this.update('fetchingQueue', q => q.filterNot(v => v === eventkey));
  } // URL Query


  setQueries({
    queries
  }) {
    return this.set('queries', (0, _immutable.Map)(queries));
  }

  __reactstandin__regenerateByEval(key, code) {
    this[key] = eval(code);
  }

};

const _default = CommonModel;
var _default2 = _default;
exports.default = _default2;
;

(function () {
  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(props, "props", "/Users/yuk-kobayashi/dev/git.baco16g/spa-base/client/scripts/domain/Common/Common.js");
  reactHotLoader.register(CommonModel, "CommonModel", "/Users/yuk-kobayashi/dev/git.baco16g/spa-base/client/scripts/domain/Common/Common.js");
  reactHotLoader.register(_default, "default", "/Users/yuk-kobayashi/dev/git.baco16g/spa-base/client/scripts/domain/Common/Common.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./client/scripts/domain/Common/CommonView.js":
/*!****************************************************!*\
  !*** ./client/scripts/domain/Common/CommonView.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _lodash = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");

var _Common = _interopRequireDefault(__webpack_require__(/*! ./client/scripts/domain/Common/Common */ "./client/scripts/domain/Common/Common.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

class CommonViewModel extends (0, _Common.default)() {
  constructor(args) {
    super(args);
  }

  createMonthPulldwon(from = 1, to = 12) {
    if (to < 1 || 12 < to || from < 1 || 12 < from) {
      throw new Error('引数の値に誤りがあります');
    }

    const _n = to - from + 1;

    return (0, _lodash.times)(_n, Number).map(n => {
      const month = from + n;
      return _react.default.createElement("option", {
        key: n,
        value: month
      }, month);
    });
  }

  createYearPulldwon(from, to) {
    if (from === 'now') {
      from = new Date().getFullYear();
    } else if (from === null) {
      from = new Date().getFullYear() - 100;
    }

    if (to === 'now') {
      to = new Date().getFullYear();
    } else if (to === null) {
      to = new Date().getFullYear() + 10;
    }

    if (to < 1 || from < 1) {
      throw new Error('引数の値に誤りがあります');
    }

    const _n = to - from + 1;

    return (0, _lodash.times)(_n, Number).map(n => {
      const year = from + n;
      return _react.default.createElement("option", {
        key: n,
        value: year
      }, year);
    });
  }

  __reactstandin__regenerateByEval(key, code) {
    this[key] = eval(code);
  }

}

exports.default = CommonViewModel;
;

(function () {
  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(CommonViewModel, "CommonViewModel", "/Users/yuk-kobayashi/dev/git.baco16g/spa-base/client/scripts/domain/Common/CommonView.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./client/scripts/domain/Customer/Customer.js":
/*!****************************************************!*\
  !*** ./client/scripts/domain/Customer/Customer.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Entity = _interopRequireDefault(__webpack_require__(/*! ./client/scripts/domain/Entity */ "./client/scripts/domain/Entity.js"));

var _CustomerVolumeInfo = _interopRequireDefault(__webpack_require__(/*! ./client/scripts/domain/Customer/ValueObjects/CustomerVolumeInfo */ "./client/scripts/domain/Customer/ValueObjects/CustomerVolumeInfo.js"));

var _CustomerPaymentInfo = _interopRequireDefault(__webpack_require__(/*! ./client/scripts/domain/Customer/ValueObjects/CustomerPaymentInfo */ "./client/scripts/domain/Customer/ValueObjects/CustomerPaymentInfo.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const props = def => {
  return _extends({
    customerId: '',
    email: '',
    volumeInfo: null,
    paymentInfo: null
  }, def);
};

const CustomerModel = def => class extends (0, _Entity.default)(props(def)) {
  constructor() {
    super();
  }
  /**********************
   * Getter
   **********************/


  getCustomerID() {
    return this.get('customerId');
  }

  getEmail() {
    return this.get('email');
  }

  getVolumeInfo() {
    return this.get('volumeInfo');
  }

  getPaymentInfo() {
    return this.get('paymentInfo');
  }

  exist() {
    return this.getCustomerID() !== '' && this.getEmail() !== '';
  }
  /**********************
   * Setter
   **********************/


  setCustomer({
    customerId,
    email,
    volumeInfo,
    paymentInfo
  }) {
    return this.withMutations(m => m.set('customerId', customerId).set('email', email).set('volumeInfo', new ((0, _CustomerVolumeInfo.default)({}))(volumeInfo)).set('paymentInfo', new ((0, _CustomerPaymentInfo.default)({}))(paymentInfo)));
  }

  __reactstandin__regenerateByEval(key, code) {
    this[key] = eval(code);
  }

};

const _default = CustomerModel;
var _default2 = _default;
exports.default = _default2;
;

(function () {
  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(props, "props", "/Users/yuk-kobayashi/dev/git.baco16g/spa-base/client/scripts/domain/Customer/Customer.js");
  reactHotLoader.register(CustomerModel, "CustomerModel", "/Users/yuk-kobayashi/dev/git.baco16g/spa-base/client/scripts/domain/Customer/Customer.js");
  reactHotLoader.register(_default, "default", "/Users/yuk-kobayashi/dev/git.baco16g/spa-base/client/scripts/domain/Customer/Customer.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./client/scripts/domain/Customer/CustomerView.js":
/*!********************************************************!*\
  !*** ./client/scripts/domain/Customer/CustomerView.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Customer = _interopRequireDefault(__webpack_require__(/*! ./client/scripts/domain/Customer/Customer */ "./client/scripts/domain/Customer/Customer.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

class CustomerViewModel extends (0, _Customer.default)({}) {
  constructor(args) {
    super(args);
  }

  getFullName() {
    return this.getVolumeInfo().getFullName();
  }

  getExpiry() {
    const _paymentInfo = this.getPaymentInfo();

    const _month = _paymentInfo.getExpiryMonth();

    const _year = _paymentInfo.getExpiryYear();

    return `${_month} / ${_year}`;
  }

  __reactstandin__regenerateByEval(key, code) {
    this[key] = eval(code);
  }

}

exports.default = CustomerViewModel;
;

(function () {
  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(CustomerViewModel, "CustomerViewModel", "/Users/yuk-kobayashi/dev/git.baco16g/spa-base/client/scripts/domain/Customer/CustomerView.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./client/scripts/domain/Customer/ValueObjects/CustomerPaymentInfo.js":
/*!****************************************************************************!*\
  !*** ./client/scripts/domain/Customer/ValueObjects/CustomerPaymentInfo.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _ValueObject = _interopRequireDefault(__webpack_require__(/*! ./client/scripts/domain/ValueObject */ "./client/scripts/domain/ValueObject.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const props = def => {
  return _extends({
    contractName: '',
    cardNumber: '',
    expiryMonth: '',
    expiryYear: ''
  }, def);
};

const CustomerPaymentInfo = def => class extends (0, _ValueObject.default)(props(def)) {
  constructor(args) {
    super();
    return this.withMutations(m => m.set('contractName', args.contractName).set('cardNumber', args.cardNumber).set('expiryMonth', args.expiryMonth).set('expiryYear', args.expiryYear));
  }
  /**********************
   * Getter
   **********************/


  getContractName() {
    return this.get('contractName');
  }

  getCardNumber() {
    return this.get('cardNumber');
  }

  getExpiryMonth() {
    return this.get('expiryMonth');
  }

  getExpiryYear() {
    return this.get('expiryYear');
  }

  __reactstandin__regenerateByEval(key, code) {
    this[key] = eval(code);
  }

};

const _default = CustomerPaymentInfo;
var _default2 = _default;
exports.default = _default2;
;

(function () {
  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(props, "props", "/Users/yuk-kobayashi/dev/git.baco16g/spa-base/client/scripts/domain/Customer/ValueObjects/CustomerPaymentInfo.js");
  reactHotLoader.register(CustomerPaymentInfo, "CustomerPaymentInfo", "/Users/yuk-kobayashi/dev/git.baco16g/spa-base/client/scripts/domain/Customer/ValueObjects/CustomerPaymentInfo.js");
  reactHotLoader.register(_default, "default", "/Users/yuk-kobayashi/dev/git.baco16g/spa-base/client/scripts/domain/Customer/ValueObjects/CustomerPaymentInfo.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./client/scripts/domain/Customer/ValueObjects/CustomerVolumeInfo.js":
/*!***************************************************************************!*\
  !*** ./client/scripts/domain/Customer/ValueObjects/CustomerVolumeInfo.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _ValueObject = _interopRequireDefault(__webpack_require__(/*! ./client/scripts/domain/ValueObject */ "./client/scripts/domain/ValueObject.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const props = def => {
  return _extends({
    firstName: '',
    lastName: ''
  }, def);
};

const CustomerVolumeInfo = def => class extends (0, _ValueObject.default)(props(def)) {
  constructor(args) {
    super();
    return this.withMutations(m => m.set('firstName', args.firstName).set('lastName', args.lastName));
  }
  /**********************
   * Getter
   **********************/


  getFirstName() {
    return this.get('firstName');
  }

  getLastName() {
    return this.get('lastName');
  }

  getFullName() {
    return `${this.getFirstName()} ${this.getLastName()}`;
  }

  __reactstandin__regenerateByEval(key, code) {
    this[key] = eval(code);
  }

};

const _default = CustomerVolumeInfo;
var _default2 = _default;
exports.default = _default2;
;

(function () {
  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(props, "props", "/Users/yuk-kobayashi/dev/git.baco16g/spa-base/client/scripts/domain/Customer/ValueObjects/CustomerVolumeInfo.js");
  reactHotLoader.register(CustomerVolumeInfo, "CustomerVolumeInfo", "/Users/yuk-kobayashi/dev/git.baco16g/spa-base/client/scripts/domain/Customer/ValueObjects/CustomerVolumeInfo.js");
  reactHotLoader.register(_default, "default", "/Users/yuk-kobayashi/dev/git.baco16g/spa-base/client/scripts/domain/Customer/ValueObjects/CustomerVolumeInfo.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./client/scripts/domain/Entity.js":
/*!*****************************************!*\
  !*** ./client/scripts/domain/Entity.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _immutable = __webpack_require__(/*! immutable */ "./node_modules/immutable/dist/immutable.es.js");

var _uuid = _interopRequireDefault(__webpack_require__(/*! uuid */ "./node_modules/uuid/index.js"));

var _moment = _interopRequireDefault(__webpack_require__(/*! moment */ "./node_modules/moment/moment.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const props = def => _extends({
  id: 0,
  createdAt: 0,
  updatedAt: 0
}, def);

const Entity = def => class extends (0, _immutable.Record)(props(def)) {
  constructor(arg) {
    super(arg);
    return this.set('id', (0, _uuid.default)()).set('createdAt', new Date()).set('updatedAt', new Date());
  }

  equals(o) {
    return this.getID() === o.getID();
  }
  /**********************
   * Getter
   **********************/


  getID() {
    return this.get('id');
  }

  getCreatedAt() {
    return this.get('createdAt');
  }

  getUpdatedAt() {
    return this.get('updatedAt');
  }

  getFormatedCreatedAt() {
    return (0, _moment.default)(this.getCreatedAt()).format('llll');
  }

  getFormatedUpdatedAt() {
    return (0, _moment.default)(this.getUpdatedAt()).format('llll');
  }
  /**********************
   * Setter
   **********************/


  updateUpdatedAt() {
    return this.update('updatedAt', _ => new Date());
  }

  restoreID(id) {
    return this.update('id', _ => id);
  }

  restoreCreatedAt(date) {
    return this.update('createdAt', _ => date);
  }

  restoreUpdatedAt(date) {
    return this.update('updatedAt', _ => date);
  }

  __reactstandin__regenerateByEval(key, code) {
    this[key] = eval(code);
  }

};

const _default = Entity;
var _default2 = _default;
exports.default = _default2;
;

(function () {
  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(props, "props", "/Users/yuk-kobayashi/dev/git.baco16g/spa-base/client/scripts/domain/Entity.js");
  reactHotLoader.register(Entity, "Entity", "/Users/yuk-kobayashi/dev/git.baco16g/spa-base/client/scripts/domain/Entity.js");
  reactHotLoader.register(_default, "default", "/Users/yuk-kobayashi/dev/git.baco16g/spa-base/client/scripts/domain/Entity.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./client/scripts/domain/Products/Product.js":
/*!***************************************************!*\
  !*** ./client/scripts/domain/Products/Product.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Entity = _interopRequireDefault(__webpack_require__(/*! ./client/scripts/domain/Entity */ "./client/scripts/domain/Entity.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const props = def => {
  return _extends({
    productCode: '',
    volumeInfo: null,
    saleInfo: null,
    stockInfo: null
  }, def);
};

const ProductModel = def => class extends (0, _Entity.default)(props(def)) {
  constructor(args) {
    super();
    return this.withMutations(m => m.set('productCode', args.productCode).set('volumeInfo', args.volumeInfo).set('saleInfo', args.saleInfo).set('stockInfo', args.stockInfo));
  }
  /**********************
   * Getter
   **********************/


  getProductCode() {
    return this.get('productCode');
  }

  getVolumeInfo() {
    return this.get('volumeInfo');
  }

  getSaleInfo() {
    return this.get('saleInfo');
  }

  getStockInfo() {
    return this.get('stockInfo');
  }
  /**********************
   * Setter
   **********************/


  reduceStockQuantity(n) {
    return this.get('stockInfo').reduceQuantity(n);
  }

  __reactstandin__regenerateByEval(key, code) {
    this[key] = eval(code);
  }

};

const _default = ProductModel;
var _default2 = _default;
exports.default = _default2;
;

(function () {
  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(props, "props", "/Users/yuk-kobayashi/dev/git.baco16g/spa-base/client/scripts/domain/Products/Product.js");
  reactHotLoader.register(ProductModel, "ProductModel", "/Users/yuk-kobayashi/dev/git.baco16g/spa-base/client/scripts/domain/Products/Product.js");
  reactHotLoader.register(_default, "default", "/Users/yuk-kobayashi/dev/git.baco16g/spa-base/client/scripts/domain/Products/Product.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./client/scripts/domain/Products/ProductFactory.js":
/*!**********************************************************!*\
  !*** ./client/scripts/domain/Products/ProductFactory.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _ProductView = _interopRequireDefault(__webpack_require__(/*! ./client/scripts/domain/Products/ProductView */ "./client/scripts/domain/Products/ProductView.js"));

var _ProductVolumeInfo = _interopRequireDefault(__webpack_require__(/*! ./client/scripts/domain/Products/ValueObjects/ProductVolumeInfo */ "./client/scripts/domain/Products/ValueObjects/ProductVolumeInfo.js"));

var _ProductSaleInfo = _interopRequireDefault(__webpack_require__(/*! ./client/scripts/domain/Products/ValueObjects/ProductSaleInfo */ "./client/scripts/domain/Products/ValueObjects/ProductSaleInfo.js"));

var _ProductStockInfo = _interopRequireDefault(__webpack_require__(/*! ./client/scripts/domain/Products/ValueObjects/ProductStockInfo */ "./client/scripts/domain/Products/ValueObjects/ProductStockInfo.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const _default = class {
  static create(p) {
    const {
      productCode,
      volumeInfo,
      saleInfo,
      stockInfo
    } = p;
    return new _ProductView.default({
      productCode: productCode,
      volumeInfo: new ((0, _ProductVolumeInfo.default)({}))(_extends({}, volumeInfo, {
        productCode
      })),
      saleInfo: new ((0, _ProductSaleInfo.default)({}))(saleInfo),
      stockInfo: new ((0, _ProductStockInfo.default)({}))(stockInfo)
    });
  }

};

var _default2 = _default;
exports.default = _default2;
;

(function () {
  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(_default, "default", "/Users/yuk-kobayashi/dev/git.baco16g/spa-base/client/scripts/domain/Products/ProductFactory.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./client/scripts/domain/Products/ProductView.js":
/*!*******************************************************!*\
  !*** ./client/scripts/domain/Products/ProductView.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Product = _interopRequireDefault(__webpack_require__(/*! ./client/scripts/domain/Products/Product */ "./client/scripts/domain/Products/Product.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

class ProductViewModel extends (0, _Product.default)({}) {
  constructor(args) {
    super(args);
  }

  getThumbnailUrl() {
    return `/assets/images/common/products/${this.getProductCode()}.jpg`;
  }

  getFormattedPrice() {
    const _saleInfo = this.getSaleInfo();

    return `${_saleInfo.getPrice()} ${_saleInfo.getCurrencyCode()}`;
  }

  convertStockQuantityToLabel(n) {
    return {
      __html: `
        <span>Stock：</span>
        <span>${n < 1 ? 'Sorry... sold out' : n}</span>
      `
    };
  }

  __reactstandin__regenerateByEval(key, code) {
    this[key] = eval(code);
  }

}

exports.default = ProductViewModel;
;

(function () {
  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(ProductViewModel, "ProductViewModel", "/Users/yuk-kobayashi/dev/git.baco16g/spa-base/client/scripts/domain/Products/ProductView.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./client/scripts/domain/Products/Products.js":
/*!****************************************************!*\
  !*** ./client/scripts/domain/Products/Products.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _immutable = __webpack_require__(/*! immutable */ "./node_modules/immutable/dist/immutable.es.js");

var _Entity = _interopRequireDefault(__webpack_require__(/*! ./client/scripts/domain/Entity */ "./client/scripts/domain/Entity.js"));

var _ProductFactory = _interopRequireDefault(__webpack_require__(/*! ./client/scripts/domain/Products/ProductFactory */ "./client/scripts/domain/Products/ProductFactory.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const props = def => {
  return _extends({
    list: (0, _immutable.List)([])
  }, def);
};

const ProductsModel = def => class extends (0, _Entity.default)(props(def)) {
  /**********************
   * Getter
   **********************/
  getProductList() {
    return this.get('list');
  }

  getProductListSize() {
    return this.getProductList().size;
  }

  getProductListJS() {
    return this.getProductList().toJS();
  }

  selectProductByProductCode(productCode) {
    return this.getProductList().find(product => product.getProductCode() === productCode);
  }

  computeTotalAmount(items) {
    return items.reduce((acc, {
      productCode,
      quantity
    }) => {
      const _productVM = this.selectProductByProductCode(productCode);

      const _amount = _productVM.getSaleInfo().getPrice();

      return acc + +(_amount * quantity);
    }, 0);
  }

  exactCurrencyCode(items) {
    const _baseCurrencyCode = this.selectProductByProductCode(items[0].productCode).getSaleInfo().getCurrencyCode();

    const _isEqual = items.every(({
      productCode
    }) => {
      const _productVM = this.selectProductByProductCode(productCode);

      return _productVM.getSaleInfo().getCurrencyCode() === _baseCurrencyCode;
    });

    return _isEqual ? _baseCurrencyCode : false;
  }
  /**********************
   * Setter
   **********************/


  pushProduct({
    product
  }) {
    if (!product.productCode) return this;
    return this.update('list', list => list.push(_ProductFactory.default.create(product).restoreCreatedAt(product.createdAt)));
  }

  __reactstandin__regenerateByEval(key, code) {
    this[key] = eval(code);
  }

};

const _default = ProductsModel;
var _default2 = _default;
exports.default = _default2;
;

(function () {
  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(props, "props", "/Users/yuk-kobayashi/dev/git.baco16g/spa-base/client/scripts/domain/Products/Products.js");
  reactHotLoader.register(ProductsModel, "ProductsModel", "/Users/yuk-kobayashi/dev/git.baco16g/spa-base/client/scripts/domain/Products/Products.js");
  reactHotLoader.register(_default, "default", "/Users/yuk-kobayashi/dev/git.baco16g/spa-base/client/scripts/domain/Products/Products.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./client/scripts/domain/Products/ProductsView.js":
/*!********************************************************!*\
  !*** ./client/scripts/domain/Products/ProductsView.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Products = _interopRequireDefault(__webpack_require__(/*! ./client/scripts/domain/Products/Products */ "./client/scripts/domain/Products/Products.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

class ProductsViewModel extends (0, _Products.default)({}) {
  constructor(args) {
    super(args);
  }

  formatedTotalAmount(items) {
    const _currencyCode = this.exactCurrencyCode(items);

    if (_currencyCode) {
      const _amount = this.computeTotalAmount(items);

      return {
        __html: `
          <span>${_amount}</span>
          <span>${_currencyCode}</span>
        `
      };
    } else {
      return {
        __html: `
          <span>CurrencyCode is different.</span>
        `
      };
    }
  }

  __reactstandin__regenerateByEval(key, code) {
    this[key] = eval(code);
  }

}

exports.default = ProductsViewModel;
;

(function () {
  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(ProductsViewModel, "ProductsViewModel", "/Users/yuk-kobayashi/dev/git.baco16g/spa-base/client/scripts/domain/Products/ProductsView.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./client/scripts/domain/Products/ValueObjects/ProductSaleInfo.js":
/*!************************************************************************!*\
  !*** ./client/scripts/domain/Products/ValueObjects/ProductSaleInfo.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _ValueObject = _interopRequireDefault(__webpack_require__(/*! ./client/scripts/domain/ValueObject */ "./client/scripts/domain/ValueObject.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const props = def => {
  return _extends({
    price: 0,
    currencyCode: ''
  }, def);
};

const ProductSaleInfo = def => class extends (0, _ValueObject.default)(props(def)) {
  /**********************
   * Getter
   **********************/
  getPrice() {
    return this.get('price');
  }

  getCurrencyCode() {
    return this.get('currencyCode');
  }

  __reactstandin__regenerateByEval(key, code) {
    this[key] = eval(code);
  }

};

const _default = ProductSaleInfo;
var _default2 = _default;
exports.default = _default2;
;

(function () {
  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(props, "props", "/Users/yuk-kobayashi/dev/git.baco16g/spa-base/client/scripts/domain/Products/ValueObjects/ProductSaleInfo.js");
  reactHotLoader.register(ProductSaleInfo, "ProductSaleInfo", "/Users/yuk-kobayashi/dev/git.baco16g/spa-base/client/scripts/domain/Products/ValueObjects/ProductSaleInfo.js");
  reactHotLoader.register(_default, "default", "/Users/yuk-kobayashi/dev/git.baco16g/spa-base/client/scripts/domain/Products/ValueObjects/ProductSaleInfo.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./client/scripts/domain/Products/ValueObjects/ProductStockInfo.js":
/*!*************************************************************************!*\
  !*** ./client/scripts/domain/Products/ValueObjects/ProductStockInfo.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _ValueObject = _interopRequireDefault(__webpack_require__(/*! ./client/scripts/domain/ValueObject */ "./client/scripts/domain/ValueObject.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const props = def => {
  return _extends({
    quantity: 0
  }, def);
};

const ProductStockInfo = def => class extends (0, _ValueObject.default)(props(def)) {
  constructor(args) {
    super();
    return this.set('quantity', args.quantity);
  }
  /**********************
   * Getter
   **********************/


  getQuantity() {
    return this.get('quantity');
  }
  /**********************
   * Setter
   **********************/


  reduceQuantity(n) {
    return this.update('quantity', _ => this.getQuantity() - n);
  }

  __reactstandin__regenerateByEval(key, code) {
    this[key] = eval(code);
  }

};

const _default = ProductStockInfo;
var _default2 = _default;
exports.default = _default2;
;

(function () {
  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(props, "props", "/Users/yuk-kobayashi/dev/git.baco16g/spa-base/client/scripts/domain/Products/ValueObjects/ProductStockInfo.js");
  reactHotLoader.register(ProductStockInfo, "ProductStockInfo", "/Users/yuk-kobayashi/dev/git.baco16g/spa-base/client/scripts/domain/Products/ValueObjects/ProductStockInfo.js");
  reactHotLoader.register(_default, "default", "/Users/yuk-kobayashi/dev/git.baco16g/spa-base/client/scripts/domain/Products/ValueObjects/ProductStockInfo.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./client/scripts/domain/Products/ValueObjects/ProductVolumeInfo.js":
/*!**************************************************************************!*\
  !*** ./client/scripts/domain/Products/ValueObjects/ProductVolumeInfo.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _ValueObject = _interopRequireDefault(__webpack_require__(/*! ./client/scripts/domain/ValueObject */ "./client/scripts/domain/ValueObject.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const props = def => {
  return _extends({
    name: '',
    description: '',
    category: ''
  }, def);
};

const ProductVolumeInfo = def => class extends (0, _ValueObject.default)(props(def)) {
  constructor(args) {
    super();
    return this.withMutations(m => m.set('name', args.name).set('description', args.description).set('category', args.category));
  }
  /**********************
   * Getter
   **********************/


  getName() {
    return this.get('name');
  }

  getDescription() {
    return this.get('description');
  }

  getCategory() {
    return this.get('category');
  }

  __reactstandin__regenerateByEval(key, code) {
    this[key] = eval(code);
  }

};

const _default = ProductVolumeInfo;
var _default2 = _default;
exports.default = _default2;
;

(function () {
  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(props, "props", "/Users/yuk-kobayashi/dev/git.baco16g/spa-base/client/scripts/domain/Products/ValueObjects/ProductVolumeInfo.js");
  reactHotLoader.register(ProductVolumeInfo, "ProductVolumeInfo", "/Users/yuk-kobayashi/dev/git.baco16g/spa-base/client/scripts/domain/Products/ValueObjects/ProductVolumeInfo.js");
  reactHotLoader.register(_default, "default", "/Users/yuk-kobayashi/dev/git.baco16g/spa-base/client/scripts/domain/Products/ValueObjects/ProductVolumeInfo.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./client/scripts/domain/ValueObject.js":
/*!**********************************************!*\
  !*** ./client/scripts/domain/ValueObject.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _immutable = __webpack_require__(/*! immutable */ "./node_modules/immutable/dist/immutable.es.js");

var _shallowEqualObject = __webpack_require__(/*! shallow-equal-object */ "./node_modules/shallow-equal-object/lib/src/shallow-equal-object.js");

(function () {
  var enterModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const props = def => _extends({}, def);

const ValueObject = def => class extends (0, _immutable.Record)(props(def)) {
  constructor(arg) {
    super(arg);
  }

  equals(o) {
    return (0, _shallowEqualObject.shallowEqual)(this, o);
  }

  __reactstandin__regenerateByEval(key, code) {
    this[key] = eval(code);
  }

};

const _default = ValueObject;
var _default2 = _default;
exports.default = _default2;
;

(function () {
  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(props, "props", "/Users/yuk-kobayashi/dev/git.baco16g/spa-base/client/scripts/domain/ValueObject.js");
  reactHotLoader.register(ValueObject, "ValueObject", "/Users/yuk-kobayashi/dev/git.baco16g/spa-base/client/scripts/domain/ValueObject.js");
  reactHotLoader.register(_default, "default", "/Users/yuk-kobayashi/dev/git.baco16g/spa-base/client/scripts/domain/ValueObject.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./client/scripts/entrypoints/lib/renderViews.js":
/*!*******************************************************!*\
  !*** ./client/scripts/entrypoints/lib/renderViews.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _reactDom = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");

var _lodash = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");

(function () {
  var enterModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

const _default = function (selector, component) {
  const elements = document.querySelectorAll(`[${selector}]`);
  (0, _lodash.map)(elements, element => {
    (0, _reactDom.render)(component(), element);
  });
};

var _default2 = _default;
exports.default = _default2;
;

(function () {
  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(_default, "default", "/Users/yuk-kobayashi/dev/git.baco16g/spa-base/client/scripts/entrypoints/lib/renderViews.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./client/scripts/entrypoints/pageProducts.js":
/*!****************************************************!*\
  !*** ./client/scripts/entrypoints/pageProducts.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

__webpack_require__(/*! babel-polyfill */ "./node_modules/babel-polyfill/lib/index.js");

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _renderViews = _interopRequireDefault(__webpack_require__(/*! ./client/scripts/entrypoints/lib/renderViews */ "./client/scripts/entrypoints/lib/renderViews.js"));

var _viewAdapter = _interopRequireDefault(__webpack_require__(/*! ./client/scripts/adapter/viewAdapter */ "./client/scripts/adapter/viewAdapter/index.js"));

var _configureStore = _interopRequireDefault(__webpack_require__(/*! ./client/scripts/port/store/configureStore */ "./client/scripts/port/store/configureStore.js"));

var _runRootSaga = _interopRequireDefault(__webpack_require__(/*! ./client/scripts/adapter/processAdapter/lib/runRootSaga */ "./client/scripts/adapter/processAdapter/lib/runRootSaga.js"));

var _processAdapter = __webpack_require__(/*! ./client/scripts/adapter/processAdapter */ "./client/scripts/adapter/processAdapter/index.js");

var _extendReducers = _interopRequireDefault(__webpack_require__(/*! ./client/scripts/port/lib/extendReducers */ "./client/scripts/port/lib/extendReducers.js"));

var _Header = _interopRequireDefault(__webpack_require__(/*! ./client/scripts/presentation/views/_core/organisms/Header */ "./client/scripts/presentation/views/_core/organisms/Header.js"));

var _products = _interopRequireDefault(__webpack_require__(/*! ./client/scripts/presentation/views/modules/products */ "./client/scripts/presentation/views/modules/products/index.js"));

var _common = __webpack_require__(/*! ./client/scripts/port/redux/common */ "./client/scripts/port/redux/common.js");

var _customer = __webpack_require__(/*! ./client/scripts/port/redux/packages/customer */ "./client/scripts/port/redux/packages/customer.js");

var _products2 = __webpack_require__(/*! ./client/scripts/port/redux/packages/products */ "./client/scripts/port/redux/packages/products.js");

var _CommonView = _interopRequireDefault(__webpack_require__(/*! ./client/scripts/domain/Common/CommonView */ "./client/scripts/domain/Common/CommonView.js"));

var _CustomerView = _interopRequireDefault(__webpack_require__(/*! ./client/scripts/domain/Customer/CustomerView */ "./client/scripts/domain/Customer/CustomerView.js"));

var _ProductsView = _interopRequireDefault(__webpack_require__(/*! ./client/scripts/domain/Products/ProductsView */ "./client/scripts/domain/Products/ProductsView.js"));

var _commonService = _interopRequireDefault(__webpack_require__(/*! ./client/scripts/adapter/processAdapter/services/commonService */ "./client/scripts/adapter/processAdapter/services/commonService.js"));

var _auth = _interopRequireDefault(__webpack_require__(/*! ./client/scripts/adapter/processAdapter/services/auth */ "./client/scripts/adapter/processAdapter/services/auth.js"));

var _setProducts = _interopRequireDefault(__webpack_require__(/*! ./client/scripts/adapter/processAdapter/services/setProducts */ "./client/scripts/adapter/processAdapter/services/setProducts.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

// Main
const rootReducer = (0, _extendReducers.default)({
  commonVM: (0, _common.reducer)(new _CommonView.default()),
  customerVM: (0, _customer.reducer)(new _CustomerView.default()),
  productsVM: (0, _products2.reducer)(new _ProductsView.default())
});
const store = (0, _configureStore.default)(rootReducer);

const HeaderViewAdaptedStore = () => {
  return _react.default.createElement(_viewAdapter.default, {
    store: store
  }, _react.default.createElement(_Header.default, null));
};

const MainViewAdaptedStore = () => {
  return _react.default.createElement(_viewAdapter.default, {
    store: store
  }, _react.default.createElement(_products.default, null));
};

(0, _renderViews.default)('data-react-header-app', HeaderViewAdaptedStore);
(0, _renderViews.default)('data-react-products-app', MainViewAdaptedStore);
(0, _runRootSaga.default)(_processAdapter.sagaMiddleware)([_commonService.default, _auth.default, _setProducts.default]);
;

(function () {
  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(rootReducer, "rootReducer", "/Users/yuk-kobayashi/dev/git.baco16g/spa-base/client/scripts/entrypoints/pageProducts.js");
  reactHotLoader.register(store, "store", "/Users/yuk-kobayashi/dev/git.baco16g/spa-base/client/scripts/entrypoints/pageProducts.js");
  reactHotLoader.register(HeaderViewAdaptedStore, "HeaderViewAdaptedStore", "/Users/yuk-kobayashi/dev/git.baco16g/spa-base/client/scripts/entrypoints/pageProducts.js");
  reactHotLoader.register(MainViewAdaptedStore, "MainViewAdaptedStore", "/Users/yuk-kobayashi/dev/git.baco16g/spa-base/client/scripts/entrypoints/pageProducts.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./client/scripts/port/lib/createActionReducer.js":
/*!********************************************************!*\
  !*** ./client/scripts/port/lib/createActionReducer.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

(function () {
  var enterModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

function createActionCreators(constants, namespace) {
  return constants.reduce((acc, row) => {
    const type = `${namespace}${row}`;
    acc['types'][row] = type;

    acc['creators'][row] = payload => ({
      type,
      payload
    });

    return acc;
  }, {
    types: {},
    creators: {}
  });
}

function createReducer(namespace) {
  return function (initialModel) {
    return (model = initialModel, action) => {
      const fn = action.type.replace(namespace, '');
      if (model[fn] !== undefined) return model[fn](action.payload);
      return model;
    };
  };
}

const _default = function (constants, namespace) {
  const {
    types,
    creators
  } = createActionCreators(constants, namespace);
  const reducer = createReducer(namespace);
  return {
    types,
    creators,
    reducer
  };
};

var _default2 = _default;
exports.default = _default2;
;

(function () {
  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(createActionCreators, "createActionCreators", "/Users/yuk-kobayashi/dev/git.baco16g/spa-base/client/scripts/port/lib/createActionReducer.js");
  reactHotLoader.register(createReducer, "createReducer", "/Users/yuk-kobayashi/dev/git.baco16g/spa-base/client/scripts/port/lib/createActionReducer.js");
  reactHotLoader.register(_default, "default", "/Users/yuk-kobayashi/dev/git.baco16g/spa-base/client/scripts/port/lib/createActionReducer.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./client/scripts/port/lib/createReduxStore.js":
/*!*****************************************************!*\
  !*** ./client/scripts/port/lib/createReduxStore.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _redux = __webpack_require__(/*! redux */ "./node_modules/redux/es/index.js");

(function () {
  var enterModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

const composeEnhancers = "development" !== 'production' && typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : _redux.compose;

const _default = function (reducer, middlewares) {
  return (0, _redux.createStore)(reducer, composeEnhancers(middlewares));
};

var _default2 = _default;
exports.default = _default2;
;

(function () {
  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(composeEnhancers, "composeEnhancers", "/Users/yuk-kobayashi/dev/git.baco16g/spa-base/client/scripts/port/lib/createReduxStore.js");
  reactHotLoader.register(_default, "default", "/Users/yuk-kobayashi/dev/git.baco16g/spa-base/client/scripts/port/lib/createReduxStore.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./client/scripts/port/lib/extendReducers.js":
/*!***************************************************!*\
  !*** ./client/scripts/port/lib/extendReducers.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _redux = __webpack_require__(/*! redux */ "./node_modules/redux/es/index.js");

(function () {
  var enterModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

const _default = function (defaultReducer, exentions = {}) {
  return (0, _redux.combineReducers)(Object.assign(defaultReducer, exentions));
};

var _default2 = _default;
exports.default = _default2;
;

(function () {
  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(_default, "default", "/Users/yuk-kobayashi/dev/git.baco16g/spa-base/client/scripts/port/lib/extendReducers.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./client/scripts/port/redux/common.js":
/*!*********************************************!*\
  !*** ./client/scripts/port/redux/common.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.reducer = exports.creators = exports.types = void 0;

var _createActionReducer = _interopRequireDefault(__webpack_require__(/*! ./client/scripts/port/lib/createActionReducer */ "./client/scripts/port/lib/createActionReducer.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

const {
  types,
  creators,
  reducer
} = (0, _createActionReducer.default)(['setQueries', 'pushFetchingQueue', 'deleteFetchingQueue'], '/common/');
exports.reducer = reducer;
exports.creators = creators;
exports.types = types;
;

(function () {
  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(types, "types", "/Users/yuk-kobayashi/dev/git.baco16g/spa-base/client/scripts/port/redux/common.js");
  reactHotLoader.register(creators, "creators", "/Users/yuk-kobayashi/dev/git.baco16g/spa-base/client/scripts/port/redux/common.js");
  reactHotLoader.register(reducer, "reducer", "/Users/yuk-kobayashi/dev/git.baco16g/spa-base/client/scripts/port/redux/common.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./client/scripts/port/redux/packages/customer.js":
/*!********************************************************!*\
  !*** ./client/scripts/port/redux/packages/customer.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.reducer = exports.creators = exports.types = void 0;

var _createActionReducer = _interopRequireDefault(__webpack_require__(/*! ./client/scripts/port/lib/createActionReducer */ "./client/scripts/port/lib/createActionReducer.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

const {
  types,
  creators,
  reducer
} = (0, _createActionReducer.default)(['requestLogin', 'requestLogout', 'requestSignup', 'setCustomer'], '/customer/');
exports.reducer = reducer;
exports.creators = creators;
exports.types = types;
;

(function () {
  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(types, "types", "/Users/yuk-kobayashi/dev/git.baco16g/spa-base/client/scripts/port/redux/packages/customer.js");
  reactHotLoader.register(creators, "creators", "/Users/yuk-kobayashi/dev/git.baco16g/spa-base/client/scripts/port/redux/packages/customer.js");
  reactHotLoader.register(reducer, "reducer", "/Users/yuk-kobayashi/dev/git.baco16g/spa-base/client/scripts/port/redux/packages/customer.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./client/scripts/port/redux/packages/products.js":
/*!********************************************************!*\
  !*** ./client/scripts/port/redux/packages/products.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.reducer = exports.creators = exports.types = void 0;

var _createActionReducer = _interopRequireDefault(__webpack_require__(/*! ./client/scripts/port/lib/createActionReducer */ "./client/scripts/port/lib/createActionReducer.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

const {
  types,
  creators,
  reducer
} = (0, _createActionReducer.default)(['pushProduct'], '/products/');
exports.reducer = reducer;
exports.creators = creators;
exports.types = types;
;

(function () {
  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(types, "types", "/Users/yuk-kobayashi/dev/git.baco16g/spa-base/client/scripts/port/redux/packages/products.js");
  reactHotLoader.register(creators, "creators", "/Users/yuk-kobayashi/dev/git.baco16g/spa-base/client/scripts/port/redux/packages/products.js");
  reactHotLoader.register(reducer, "reducer", "/Users/yuk-kobayashi/dev/git.baco16g/spa-base/client/scripts/port/redux/packages/products.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./client/scripts/port/store/configureStore.js":
/*!*****************************************************!*\
  !*** ./client/scripts/port/store/configureStore.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _redux = __webpack_require__(/*! redux */ "./node_modules/redux/es/index.js");

var _createReduxStore = _interopRequireDefault(__webpack_require__(/*! ./client/scripts/port/lib/createReduxStore */ "./client/scripts/port/lib/createReduxStore.js"));

var _processAdapter = _interopRequireDefault(__webpack_require__(/*! ./client/scripts/adapter/processAdapter */ "./client/scripts/adapter/processAdapter/index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

const _default = function (rootReducer) {
  return (0, _createReduxStore.default)(rootReducer, (0, _redux.applyMiddleware)(..._processAdapter.default));
};

var _default2 = _default;
exports.default = _default2;
;

(function () {
  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(_default, "default", "/Users/yuk-kobayashi/dev/git.baco16g/spa-base/client/scripts/port/store/configureStore.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./client/scripts/presentation/views/_core/atoms/Loading.js":
/*!******************************************************************!*\
  !*** ./client/scripts/presentation/views/_core/atoms/Loading.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Loading;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _reactLoading = _interopRequireDefault(__webpack_require__(/*! react-loading */ "./node_modules/react-loading/dist/react-loading.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

function Loading() {
  return _react.default.createElement("div", {
    className: "st-Loading"
  }, _react.default.createElement("div", {
    className: "st-Loading_Inner"
  }, _react.default.createElement(_reactLoading.default, {
    type: "bubbles",
    color: "#e74c3c",
    height: "100%",
    width: "100%"
  })));
}

;

(function () {
  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Loading, "Loading", "/Users/yuk-kobayashi/dev/git.baco16g/spa-base/client/scripts/presentation/views/_core/atoms/Loading.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../../node_modules/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./client/scripts/presentation/views/_core/hocs/connector.js":
/*!*******************************************************************!*\
  !*** ./client/scripts/presentation/views/_core/hocs/connector.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _reactRedux = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");

var _redux = __webpack_require__(/*! redux */ "./node_modules/redux/es/index.js");

var _customer = __webpack_require__(/*! ./client/scripts/port/redux/packages/customer */ "./client/scripts/port/redux/packages/customer.js");

(function () {
  var enterModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const creators = _extends({}, _customer.creators);

const connector = (0, _reactRedux.connect)((state, _props) => {
  return state;
}, dispatch => ({
  actions: (0, _redux.bindActionCreators)(_extends({}, creators), dispatch)
}));
const _default = connector;
var _default2 = _default;
exports.default = _default2;
;

(function () {
  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(creators, "creators", "/Users/yuk-kobayashi/dev/git.baco16g/spa-base/client/scripts/presentation/views/_core/hocs/connector.js");
  reactHotLoader.register(connector, "connector", "/Users/yuk-kobayashi/dev/git.baco16g/spa-base/client/scripts/presentation/views/_core/hocs/connector.js");
  reactHotLoader.register(_default, "default", "/Users/yuk-kobayashi/dev/git.baco16g/spa-base/client/scripts/presentation/views/_core/hocs/connector.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../../node_modules/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./client/scripts/presentation/views/_core/hocs/withHandlers/logout.js":
/*!*****************************************************************************!*\
  !*** ./client/scripts/presentation/views/_core/hocs/withHandlers/logout.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

(function () {
  var enterModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

const _default = ({
  actions
}) => () => {
  actions.requestLogout();
};

var _default2 = _default;
exports.default = _default2;
;

(function () {
  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(_default, "default", "/Users/yuk-kobayashi/dev/git.baco16g/spa-base/client/scripts/presentation/views/_core/hocs/withHandlers/logout.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../../../node_modules/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./client/scripts/presentation/views/_core/organisms/Header.js":
/*!*********************************************************************!*\
  !*** ./client/scripts/presentation/views/_core/organisms/Header.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _recompose = __webpack_require__(/*! recompose */ "./node_modules/recompose/es/Recompose.js");

var _connector = _interopRequireDefault(__webpack_require__(/*! ./client/scripts/presentation/views/_core/hocs/connector */ "./client/scripts/presentation/views/_core/hocs/connector.js"));

var _logout = _interopRequireDefault(__webpack_require__(/*! ./client/scripts/presentation/views/_core/hocs/withHandlers/logout */ "./client/scripts/presentation/views/_core/hocs/withHandlers/logout.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

const enhancer = (0, _recompose.compose)(_connector.default, (0, _recompose.withHandlers)({
  logout: _logout.default
}), _recompose.pure);

const _default = enhancer(({
  customerVM,
  logout
}) => {
  const customerExist = customerVM.exist();
  return _react.default.createElement("nav", null, _react.default.createElement("ul", {
    className: "st-Nav"
  }, _react.default.createElement("li", {
    className: "st-Nav_Item"
  }, _react.default.createElement("a", {
    href: "/products/"
  }, "Products")), _react.default.createElement("li", {
    className: "st-Nav_Item"
  }, _react.default.createElement("a", {
    href: "/cart/"
  }, "Cart")), _react.default.createElement("li", {
    className: "st-Nav_Item"
  }, _react.default.createElement("a", {
    href: "/order/"
  }, "Order")), _react.default.createElement("li", {
    className: "st-Nav_Item"
  }, customerExist ? _react.default.createElement("a", {
    href: "javascript:void(0)",
    onClick: logout
  }, "Logout") : _react.default.createElement("a", {
    href: "/login/"
  }, "Login"))));
});

var _default2 = _default;
exports.default = _default2;
;

(function () {
  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(enhancer, "enhancer", "/Users/yuk-kobayashi/dev/git.baco16g/spa-base/client/scripts/presentation/views/_core/organisms/Header.js");
  reactHotLoader.register(_default, "default", "/Users/yuk-kobayashi/dev/git.baco16g/spa-base/client/scripts/presentation/views/_core/organisms/Header.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../../node_modules/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./client/scripts/presentation/views/modules/products/hocs/connector.js":
/*!******************************************************************************!*\
  !*** ./client/scripts/presentation/views/modules/products/hocs/connector.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _reactRedux = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");

var _redux = __webpack_require__(/*! redux */ "./node_modules/redux/es/index.js");

var _products = __webpack_require__(/*! ./client/scripts/port/redux/packages/products */ "./client/scripts/port/redux/packages/products.js");

(function () {
  var enterModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const creators = _extends({}, _products.creators);

const connector = (0, _reactRedux.connect)((state, _props) => {
  return state;
}, dispatch => ({
  actions: (0, _redux.bindActionCreators)(_extends({}, creators), dispatch)
}));
const _default = connector;
var _default2 = _default;
exports.default = _default2;
;

(function () {
  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(creators, "creators", "/Users/yuk-kobayashi/dev/git.baco16g/spa-base/client/scripts/presentation/views/modules/products/hocs/connector.js");
  reactHotLoader.register(connector, "connector", "/Users/yuk-kobayashi/dev/git.baco16g/spa-base/client/scripts/presentation/views/modules/products/hocs/connector.js");
  reactHotLoader.register(_default, "default", "/Users/yuk-kobayashi/dev/git.baco16g/spa-base/client/scripts/presentation/views/modules/products/hocs/connector.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../../../node_modules/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./client/scripts/presentation/views/modules/products/index.js":
/*!*********************************************************************!*\
  !*** ./client/scripts/presentation/views/modules/products/index.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = App;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _Products = _interopRequireDefault(__webpack_require__(/*! ./client/scripts/presentation/views/modules/products/organisms/Products */ "./client/scripts/presentation/views/modules/products/organisms/Products.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

(function () {
  var enterModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

function App() {
  return _react.default.createElement(_react.Fragment, null, _react.default.createElement(_Products.default, null));
}

;

(function () {
  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(App, "App", "/Users/yuk-kobayashi/dev/git.baco16g/spa-base/client/scripts/presentation/views/modules/products/index.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../../node_modules/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./client/scripts/presentation/views/modules/products/molecules/Product.js":
/*!*********************************************************************************!*\
  !*** ./client/scripts/presentation/views/modules/products/molecules/Product.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Product;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

(function () {
  var enterModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

function Product({
  productVM
}) {
  const productCode = productVM.getProductCode();
  const name = productVM.getVolumeInfo().getName();
  const thumbnailUrl = productVM.getThumbnailUrl();
  const formattedPrice = productVM.getFormattedPrice();
  return _react.default.createElement("li", {
    className: "prdcts-Item"
  }, _react.default.createElement(_react.Fragment, null, _react.default.createElement("div", {
    className: "prdcts-Item_Thumb"
  }, _react.default.createElement("a", {
    href: `/product/?product_code=${productCode}`
  }, _react.default.createElement("img", {
    src: thumbnailUrl,
    alt: name
  }))), _react.default.createElement("div", {
    className: "prdcts-Item_Data"
  }, _react.default.createElement(_react.Fragment, null, _react.default.createElement("h3", {
    className: "prdcts-Item_Name"
  }, _react.default.createElement("a", {
    href: `/product/?product_code=${productCode}`
  }, name)), _react.default.createElement("h4", {
    className: "prdcts-Item_Price"
  }, formattedPrice)))));
}

;

(function () {
  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Product, "Product", "/Users/yuk-kobayashi/dev/git.baco16g/spa-base/client/scripts/presentation/views/modules/products/molecules/Product.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../../../node_modules/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./client/scripts/presentation/views/modules/products/organisms/Products.js":
/*!**********************************************************************************!*\
  !*** ./client/scripts/presentation/views/modules/products/organisms/Products.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _recompose = __webpack_require__(/*! recompose */ "./node_modules/recompose/es/Recompose.js");

var _connector = _interopRequireDefault(__webpack_require__(/*! ./client/scripts/presentation/views/modules/products/hocs/connector */ "./client/scripts/presentation/views/modules/products/hocs/connector.js"));

var _Loading = _interopRequireDefault(__webpack_require__(/*! ./client/scripts/presentation/views/_core/atoms/Loading */ "./client/scripts/presentation/views/_core/atoms/Loading.js"));

var _Product = _interopRequireDefault(__webpack_require__(/*! ./client/scripts/presentation/views/modules/products/molecules/Product */ "./client/scripts/presentation/views/modules/products/molecules/Product.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const enhancer = (0, _recompose.compose)(_connector.default, _recompose.pure);

const _default = enhancer(({
  actions,
  commonVM,
  productsVM,
  cartVM
}) => {
  const isFetching = commonVM.hasEventkeyInFetchingQueue();
  const products = productsVM.getProductList().map(productVM => {
    const id = productVM.getID();
    const _props = {
      actions,
      productVM,
      cartVM
    };
    return _react.default.createElement(_Product.default, _extends({
      key: id
    }, _props));
  });
  return _react.default.createElement("ul", {
    className: "prdcts-Items"
  }, isFetching ? _react.default.createElement(_Loading.default, null) : products);
});

var _default2 = _default;
exports.default = _default2;
;

(function () {
  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(enhancer, "enhancer", "/Users/yuk-kobayashi/dev/git.baco16g/spa-base/client/scripts/presentation/views/modules/products/organisms/Products.js");
  reactHotLoader.register(_default, "default", "/Users/yuk-kobayashi/dev/git.baco16g/spa-base/client/scripts/presentation/views/modules/products/organisms/Products.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../../../node_modules/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/moment/locale sync recursive ^\\.\\/.*$":
/*!**************************************************!*\
  !*** ./node_modules/moment/locale sync ^\.\/.*$ ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "./node_modules/moment/locale/af.js",
	"./af.js": "./node_modules/moment/locale/af.js",
	"./ar": "./node_modules/moment/locale/ar.js",
	"./ar-dz": "./node_modules/moment/locale/ar-dz.js",
	"./ar-dz.js": "./node_modules/moment/locale/ar-dz.js",
	"./ar-kw": "./node_modules/moment/locale/ar-kw.js",
	"./ar-kw.js": "./node_modules/moment/locale/ar-kw.js",
	"./ar-ly": "./node_modules/moment/locale/ar-ly.js",
	"./ar-ly.js": "./node_modules/moment/locale/ar-ly.js",
	"./ar-ma": "./node_modules/moment/locale/ar-ma.js",
	"./ar-ma.js": "./node_modules/moment/locale/ar-ma.js",
	"./ar-sa": "./node_modules/moment/locale/ar-sa.js",
	"./ar-sa.js": "./node_modules/moment/locale/ar-sa.js",
	"./ar-tn": "./node_modules/moment/locale/ar-tn.js",
	"./ar-tn.js": "./node_modules/moment/locale/ar-tn.js",
	"./ar.js": "./node_modules/moment/locale/ar.js",
	"./az": "./node_modules/moment/locale/az.js",
	"./az.js": "./node_modules/moment/locale/az.js",
	"./be": "./node_modules/moment/locale/be.js",
	"./be.js": "./node_modules/moment/locale/be.js",
	"./bg": "./node_modules/moment/locale/bg.js",
	"./bg.js": "./node_modules/moment/locale/bg.js",
	"./bm": "./node_modules/moment/locale/bm.js",
	"./bm.js": "./node_modules/moment/locale/bm.js",
	"./bn": "./node_modules/moment/locale/bn.js",
	"./bn.js": "./node_modules/moment/locale/bn.js",
	"./bo": "./node_modules/moment/locale/bo.js",
	"./bo.js": "./node_modules/moment/locale/bo.js",
	"./br": "./node_modules/moment/locale/br.js",
	"./br.js": "./node_modules/moment/locale/br.js",
	"./bs": "./node_modules/moment/locale/bs.js",
	"./bs.js": "./node_modules/moment/locale/bs.js",
	"./ca": "./node_modules/moment/locale/ca.js",
	"./ca.js": "./node_modules/moment/locale/ca.js",
	"./cs": "./node_modules/moment/locale/cs.js",
	"./cs.js": "./node_modules/moment/locale/cs.js",
	"./cv": "./node_modules/moment/locale/cv.js",
	"./cv.js": "./node_modules/moment/locale/cv.js",
	"./cy": "./node_modules/moment/locale/cy.js",
	"./cy.js": "./node_modules/moment/locale/cy.js",
	"./da": "./node_modules/moment/locale/da.js",
	"./da.js": "./node_modules/moment/locale/da.js",
	"./de": "./node_modules/moment/locale/de.js",
	"./de-at": "./node_modules/moment/locale/de-at.js",
	"./de-at.js": "./node_modules/moment/locale/de-at.js",
	"./de-ch": "./node_modules/moment/locale/de-ch.js",
	"./de-ch.js": "./node_modules/moment/locale/de-ch.js",
	"./de.js": "./node_modules/moment/locale/de.js",
	"./dv": "./node_modules/moment/locale/dv.js",
	"./dv.js": "./node_modules/moment/locale/dv.js",
	"./el": "./node_modules/moment/locale/el.js",
	"./el.js": "./node_modules/moment/locale/el.js",
	"./en-au": "./node_modules/moment/locale/en-au.js",
	"./en-au.js": "./node_modules/moment/locale/en-au.js",
	"./en-ca": "./node_modules/moment/locale/en-ca.js",
	"./en-ca.js": "./node_modules/moment/locale/en-ca.js",
	"./en-gb": "./node_modules/moment/locale/en-gb.js",
	"./en-gb.js": "./node_modules/moment/locale/en-gb.js",
	"./en-ie": "./node_modules/moment/locale/en-ie.js",
	"./en-ie.js": "./node_modules/moment/locale/en-ie.js",
	"./en-il": "./node_modules/moment/locale/en-il.js",
	"./en-il.js": "./node_modules/moment/locale/en-il.js",
	"./en-nz": "./node_modules/moment/locale/en-nz.js",
	"./en-nz.js": "./node_modules/moment/locale/en-nz.js",
	"./eo": "./node_modules/moment/locale/eo.js",
	"./eo.js": "./node_modules/moment/locale/eo.js",
	"./es": "./node_modules/moment/locale/es.js",
	"./es-do": "./node_modules/moment/locale/es-do.js",
	"./es-do.js": "./node_modules/moment/locale/es-do.js",
	"./es-us": "./node_modules/moment/locale/es-us.js",
	"./es-us.js": "./node_modules/moment/locale/es-us.js",
	"./es.js": "./node_modules/moment/locale/es.js",
	"./et": "./node_modules/moment/locale/et.js",
	"./et.js": "./node_modules/moment/locale/et.js",
	"./eu": "./node_modules/moment/locale/eu.js",
	"./eu.js": "./node_modules/moment/locale/eu.js",
	"./fa": "./node_modules/moment/locale/fa.js",
	"./fa.js": "./node_modules/moment/locale/fa.js",
	"./fi": "./node_modules/moment/locale/fi.js",
	"./fi.js": "./node_modules/moment/locale/fi.js",
	"./fo": "./node_modules/moment/locale/fo.js",
	"./fo.js": "./node_modules/moment/locale/fo.js",
	"./fr": "./node_modules/moment/locale/fr.js",
	"./fr-ca": "./node_modules/moment/locale/fr-ca.js",
	"./fr-ca.js": "./node_modules/moment/locale/fr-ca.js",
	"./fr-ch": "./node_modules/moment/locale/fr-ch.js",
	"./fr-ch.js": "./node_modules/moment/locale/fr-ch.js",
	"./fr.js": "./node_modules/moment/locale/fr.js",
	"./fy": "./node_modules/moment/locale/fy.js",
	"./fy.js": "./node_modules/moment/locale/fy.js",
	"./gd": "./node_modules/moment/locale/gd.js",
	"./gd.js": "./node_modules/moment/locale/gd.js",
	"./gl": "./node_modules/moment/locale/gl.js",
	"./gl.js": "./node_modules/moment/locale/gl.js",
	"./gom-latn": "./node_modules/moment/locale/gom-latn.js",
	"./gom-latn.js": "./node_modules/moment/locale/gom-latn.js",
	"./gu": "./node_modules/moment/locale/gu.js",
	"./gu.js": "./node_modules/moment/locale/gu.js",
	"./he": "./node_modules/moment/locale/he.js",
	"./he.js": "./node_modules/moment/locale/he.js",
	"./hi": "./node_modules/moment/locale/hi.js",
	"./hi.js": "./node_modules/moment/locale/hi.js",
	"./hr": "./node_modules/moment/locale/hr.js",
	"./hr.js": "./node_modules/moment/locale/hr.js",
	"./hu": "./node_modules/moment/locale/hu.js",
	"./hu.js": "./node_modules/moment/locale/hu.js",
	"./hy-am": "./node_modules/moment/locale/hy-am.js",
	"./hy-am.js": "./node_modules/moment/locale/hy-am.js",
	"./id": "./node_modules/moment/locale/id.js",
	"./id.js": "./node_modules/moment/locale/id.js",
	"./is": "./node_modules/moment/locale/is.js",
	"./is.js": "./node_modules/moment/locale/is.js",
	"./it": "./node_modules/moment/locale/it.js",
	"./it.js": "./node_modules/moment/locale/it.js",
	"./ja": "./node_modules/moment/locale/ja.js",
	"./ja.js": "./node_modules/moment/locale/ja.js",
	"./jv": "./node_modules/moment/locale/jv.js",
	"./jv.js": "./node_modules/moment/locale/jv.js",
	"./ka": "./node_modules/moment/locale/ka.js",
	"./ka.js": "./node_modules/moment/locale/ka.js",
	"./kk": "./node_modules/moment/locale/kk.js",
	"./kk.js": "./node_modules/moment/locale/kk.js",
	"./km": "./node_modules/moment/locale/km.js",
	"./km.js": "./node_modules/moment/locale/km.js",
	"./kn": "./node_modules/moment/locale/kn.js",
	"./kn.js": "./node_modules/moment/locale/kn.js",
	"./ko": "./node_modules/moment/locale/ko.js",
	"./ko.js": "./node_modules/moment/locale/ko.js",
	"./ky": "./node_modules/moment/locale/ky.js",
	"./ky.js": "./node_modules/moment/locale/ky.js",
	"./lb": "./node_modules/moment/locale/lb.js",
	"./lb.js": "./node_modules/moment/locale/lb.js",
	"./lo": "./node_modules/moment/locale/lo.js",
	"./lo.js": "./node_modules/moment/locale/lo.js",
	"./lt": "./node_modules/moment/locale/lt.js",
	"./lt.js": "./node_modules/moment/locale/lt.js",
	"./lv": "./node_modules/moment/locale/lv.js",
	"./lv.js": "./node_modules/moment/locale/lv.js",
	"./me": "./node_modules/moment/locale/me.js",
	"./me.js": "./node_modules/moment/locale/me.js",
	"./mi": "./node_modules/moment/locale/mi.js",
	"./mi.js": "./node_modules/moment/locale/mi.js",
	"./mk": "./node_modules/moment/locale/mk.js",
	"./mk.js": "./node_modules/moment/locale/mk.js",
	"./ml": "./node_modules/moment/locale/ml.js",
	"./ml.js": "./node_modules/moment/locale/ml.js",
	"./mn": "./node_modules/moment/locale/mn.js",
	"./mn.js": "./node_modules/moment/locale/mn.js",
	"./mr": "./node_modules/moment/locale/mr.js",
	"./mr.js": "./node_modules/moment/locale/mr.js",
	"./ms": "./node_modules/moment/locale/ms.js",
	"./ms-my": "./node_modules/moment/locale/ms-my.js",
	"./ms-my.js": "./node_modules/moment/locale/ms-my.js",
	"./ms.js": "./node_modules/moment/locale/ms.js",
	"./mt": "./node_modules/moment/locale/mt.js",
	"./mt.js": "./node_modules/moment/locale/mt.js",
	"./my": "./node_modules/moment/locale/my.js",
	"./my.js": "./node_modules/moment/locale/my.js",
	"./nb": "./node_modules/moment/locale/nb.js",
	"./nb.js": "./node_modules/moment/locale/nb.js",
	"./ne": "./node_modules/moment/locale/ne.js",
	"./ne.js": "./node_modules/moment/locale/ne.js",
	"./nl": "./node_modules/moment/locale/nl.js",
	"./nl-be": "./node_modules/moment/locale/nl-be.js",
	"./nl-be.js": "./node_modules/moment/locale/nl-be.js",
	"./nl.js": "./node_modules/moment/locale/nl.js",
	"./nn": "./node_modules/moment/locale/nn.js",
	"./nn.js": "./node_modules/moment/locale/nn.js",
	"./pa-in": "./node_modules/moment/locale/pa-in.js",
	"./pa-in.js": "./node_modules/moment/locale/pa-in.js",
	"./pl": "./node_modules/moment/locale/pl.js",
	"./pl.js": "./node_modules/moment/locale/pl.js",
	"./pt": "./node_modules/moment/locale/pt.js",
	"./pt-br": "./node_modules/moment/locale/pt-br.js",
	"./pt-br.js": "./node_modules/moment/locale/pt-br.js",
	"./pt.js": "./node_modules/moment/locale/pt.js",
	"./ro": "./node_modules/moment/locale/ro.js",
	"./ro.js": "./node_modules/moment/locale/ro.js",
	"./ru": "./node_modules/moment/locale/ru.js",
	"./ru.js": "./node_modules/moment/locale/ru.js",
	"./sd": "./node_modules/moment/locale/sd.js",
	"./sd.js": "./node_modules/moment/locale/sd.js",
	"./se": "./node_modules/moment/locale/se.js",
	"./se.js": "./node_modules/moment/locale/se.js",
	"./si": "./node_modules/moment/locale/si.js",
	"./si.js": "./node_modules/moment/locale/si.js",
	"./sk": "./node_modules/moment/locale/sk.js",
	"./sk.js": "./node_modules/moment/locale/sk.js",
	"./sl": "./node_modules/moment/locale/sl.js",
	"./sl.js": "./node_modules/moment/locale/sl.js",
	"./sq": "./node_modules/moment/locale/sq.js",
	"./sq.js": "./node_modules/moment/locale/sq.js",
	"./sr": "./node_modules/moment/locale/sr.js",
	"./sr-cyrl": "./node_modules/moment/locale/sr-cyrl.js",
	"./sr-cyrl.js": "./node_modules/moment/locale/sr-cyrl.js",
	"./sr.js": "./node_modules/moment/locale/sr.js",
	"./ss": "./node_modules/moment/locale/ss.js",
	"./ss.js": "./node_modules/moment/locale/ss.js",
	"./sv": "./node_modules/moment/locale/sv.js",
	"./sv.js": "./node_modules/moment/locale/sv.js",
	"./sw": "./node_modules/moment/locale/sw.js",
	"./sw.js": "./node_modules/moment/locale/sw.js",
	"./ta": "./node_modules/moment/locale/ta.js",
	"./ta.js": "./node_modules/moment/locale/ta.js",
	"./te": "./node_modules/moment/locale/te.js",
	"./te.js": "./node_modules/moment/locale/te.js",
	"./tet": "./node_modules/moment/locale/tet.js",
	"./tet.js": "./node_modules/moment/locale/tet.js",
	"./tg": "./node_modules/moment/locale/tg.js",
	"./tg.js": "./node_modules/moment/locale/tg.js",
	"./th": "./node_modules/moment/locale/th.js",
	"./th.js": "./node_modules/moment/locale/th.js",
	"./tl-ph": "./node_modules/moment/locale/tl-ph.js",
	"./tl-ph.js": "./node_modules/moment/locale/tl-ph.js",
	"./tlh": "./node_modules/moment/locale/tlh.js",
	"./tlh.js": "./node_modules/moment/locale/tlh.js",
	"./tr": "./node_modules/moment/locale/tr.js",
	"./tr.js": "./node_modules/moment/locale/tr.js",
	"./tzl": "./node_modules/moment/locale/tzl.js",
	"./tzl.js": "./node_modules/moment/locale/tzl.js",
	"./tzm": "./node_modules/moment/locale/tzm.js",
	"./tzm-latn": "./node_modules/moment/locale/tzm-latn.js",
	"./tzm-latn.js": "./node_modules/moment/locale/tzm-latn.js",
	"./tzm.js": "./node_modules/moment/locale/tzm.js",
	"./ug-cn": "./node_modules/moment/locale/ug-cn.js",
	"./ug-cn.js": "./node_modules/moment/locale/ug-cn.js",
	"./uk": "./node_modules/moment/locale/uk.js",
	"./uk.js": "./node_modules/moment/locale/uk.js",
	"./ur": "./node_modules/moment/locale/ur.js",
	"./ur.js": "./node_modules/moment/locale/ur.js",
	"./uz": "./node_modules/moment/locale/uz.js",
	"./uz-latn": "./node_modules/moment/locale/uz-latn.js",
	"./uz-latn.js": "./node_modules/moment/locale/uz-latn.js",
	"./uz.js": "./node_modules/moment/locale/uz.js",
	"./vi": "./node_modules/moment/locale/vi.js",
	"./vi.js": "./node_modules/moment/locale/vi.js",
	"./x-pseudo": "./node_modules/moment/locale/x-pseudo.js",
	"./x-pseudo.js": "./node_modules/moment/locale/x-pseudo.js",
	"./yo": "./node_modules/moment/locale/yo.js",
	"./yo.js": "./node_modules/moment/locale/yo.js",
	"./zh-cn": "./node_modules/moment/locale/zh-cn.js",
	"./zh-cn.js": "./node_modules/moment/locale/zh-cn.js",
	"./zh-hk": "./node_modules/moment/locale/zh-hk.js",
	"./zh-hk.js": "./node_modules/moment/locale/zh-hk.js",
	"./zh-tw": "./node_modules/moment/locale/zh-tw.js",
	"./zh-tw.js": "./node_modules/moment/locale/zh-tw.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	var module = __webpack_require__(id);
	return module;
}
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) { // check for number or string
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return id;
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./node_modules/moment/locale sync recursive ^\\.\\/.*$";

/***/ })

/******/ });
//# sourceMappingURL=pageProducts.bundle.js.map