webpackHotUpdate("static/development/pages/index.js",{

/***/ "./api/Currency.js":
/*!*************************!*\
  !*** ./api/Currency.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var axios = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");

var key;

if (false) {} else {
  key = __webpack_require__(/*! ./Private */ "./api/Private.js");
}

/* harmony default export */ __webpack_exports__["default"] = (function (from, to) {
  console.log(from, to);
  var request_body = {
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
  var sample_response = "{\"base\":\"USD\",\"last_update\":\"2019-01-12T06:04:42.769Z\",\"rates\":{\"EUR\":0.8721736499},\"status\":200,\"target\":\"EUR\"}";
  return sample_response;
});

/***/ })

})
//# sourceMappingURL=index.js.debf091599ae788c19f9.hot-update.js.map