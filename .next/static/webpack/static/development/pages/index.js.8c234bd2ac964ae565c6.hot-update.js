webpackHotUpdate("static/development/pages/index.js",{

/***/ "./api/Currency.js":
/*!*************************!*\
  !*** ./api/Currency.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var axios = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");

var key;

if (false) {} else {
  key = __webpack_require__(/*! ./Private */ "./api/Private.js");
}

/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/(function () {
  var _ref = _asyncToGenerator(
  /*#__PURE__*/
  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(from, to) {
    var request_body, sample_response;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            console.log(from, to);
            request_body = {
              method: 'GET',
              url: "https://api.currencystack.io/currency?base=".concat(from, "&target=").concat(to),
              qs: {
                apikey: key
              },
              headers: {
                'postman-token': '0010f3d4-76e5-d044-31f3-42ecc4260371',
                'cache-control': 'no-cache'
              }
            };
            _context.next = 4;
            return axios(request_body);

          case 4:
            sample_response = "{\"base\":\"USD\",\"last_update\":\"2019-01-12T06:04:42.769Z\",\"rates\":{\"EUR\":0.8721736499},\"status\":200,\"target\":\"EUR\"}";
            return _context.abrupt("return", sample_response);

          case 6:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
})());

/***/ }),

/***/ "./node_modules/@babel/runtime/regenerator/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/regenerator/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! regenerator-runtime */ "./node_modules/regenerator-runtime/runtime-module.js");


/***/ })

})
//# sourceMappingURL=index.js.8c234bd2ac964ae565c6.hot-update.js.map