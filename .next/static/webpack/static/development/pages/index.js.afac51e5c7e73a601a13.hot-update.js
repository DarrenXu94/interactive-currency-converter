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

/* harmony default export */ __webpack_exports__["default"] = (function () {
  var options = {
    method: 'GET',
    url: 'https://api.currencystack.io/currency?base=USD&target=EUR,GBP',
    qs: {
      apikey: 'b2c929e3f36cc58bbbe528819288862f'
    },
    headers: {
      'postman-token': '0010f3d4-76e5-d044-31f3-42ecc4260371',
      'cache-control': 'no-cache'
    }
  };
  axios(options).then(function (res) {
    return console.log(res);
  });
});

/***/ })

})
//# sourceMappingURL=index.js.afac51e5c7e73a601a13.hot-update.js.map