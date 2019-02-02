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

var key;

if (false) {} else {
  key = __webpack_require__(/*! ./Private */ "./api/Private.js");
}

/* harmony default export */ __webpack_exports__["default"] = (function (from, to) {
  console.log(from, to);
  console.log(process.env.API_KEY);
  console.log(key);
  var sample_response = "{\"base\":\"USD\",\"last_update\":\"2019-01-12T06:04:42.769Z\",\"rates\":{\"EUR\":0.8721736499},\"status\":200,\"target\":\"EUR\"}";
  return sample_response;
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/process/browser.js */ "./node_modules/process/browser.js")))

/***/ })

})
//# sourceMappingURL=index.js.726008655029435f8e74.hot-update.js.map