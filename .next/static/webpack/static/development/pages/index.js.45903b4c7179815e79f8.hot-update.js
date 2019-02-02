webpackHotUpdate("static/development/pages/index.js",{

/***/ "./api/Currency.js":
/*!*************************!*\
  !*** ./api/Currency.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(process) {var axios = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");

var key = __webpack_require__(/*! ./Private */ "./api/Private.js"); // if (process.env.NODE_ENV == 'production') {
// }


/* harmony default export */ __webpack_exports__["default"] = (function (from, to) {
  console.log(from, to);
  console.log(process.env.API_KEY);
  console.log(key);
  var sample_response = "{\"base\":\"USD\",\"last_update\":\"2019-01-12T06:04:42.769Z\",\"rates\":{\"EUR\":0.8721736499},\"status\":200,\"target\":\"EUR\"}";
  return sample_response;
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./api/Private.js":
/*!************************!*\
  !*** ./api/Private.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {//     var options = { method: 'GET',
//   url: 'https://api.currencystack.io/currency?base=USD&target=EUR,GBP',
//   qs: { apikey: 'b2c929e3f36cc58bbbe528819288862f' },
//   headers: 
//    { 'postman-token': '0010f3d4-76e5-d044-31f3-42ecc4260371',
//  'cache-control': 'no-cache' } };
//     axios(options).then(res => console.log(res))
// let request_body = { method: 'GET',
// url: `https://api.currencystack.io/currency?base=${from}&target=${to}`,
// qs: { apikey: 'b2c929e3f36cc58bbbe528819288862f' },
// headers: 
//  { 'postman-token': '0010f3d4-76e5-d044-31f3-42ecc4260371',
// 'cache-control': 'no-cache' } }
module.export = 'b2c929e3f36cc58bbbe528819288862f';
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ })

})
//# sourceMappingURL=index.js.45903b4c7179815e79f8.hot-update.js.map