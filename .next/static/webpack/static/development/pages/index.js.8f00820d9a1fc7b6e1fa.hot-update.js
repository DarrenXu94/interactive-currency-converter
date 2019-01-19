webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/ConverterForm.js":
/*!*************************************!*\
  !*** ./components/ConverterForm.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _configs_CountryCodes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../configs/CountryCodes */ "./configs/CountryCodes.js");
/* harmony import */ var _configs_CurrencySelector__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../configs/CurrencySelector */ "./configs/CurrencySelector.js");
/* harmony import */ var _configs_CurrencySelector__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_configs_CurrencySelector__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_autocomplete__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-autocomplete */ "./node_modules/react-autocomplete/build/lib/Autocomplete.js");
/* harmony import */ var react_autocomplete__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_autocomplete__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _AutoCompleteWrapper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./AutoCompleteWrapper */ "./components/AutoCompleteWrapper.js");
var _jsxFileName = "/home/hazard/Code/interactive-currency-converter/components/ConverterForm.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

 // import Currency from '../api/Currency'






function matchCurrencyToTerm(currency, value) {
  return currency.CurrencyCode.toLowerCase().indexOf(value.toLowerCase()) !== -1 || currency.CurrencyName.toLowerCase().indexOf(value.toLowerCase()) !== -1;
}

var ConverterForm =
/*#__PURE__*/
function (_Component) {
  _inherits(ConverterForm, _Component);

  function ConverterForm() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, ConverterForm);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(ConverterForm)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      value: 'AUD'
    });

    return _this;
  }

  _createClass(ConverterForm, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      // Currency()
      // console.log(CountryCodes)
      console.log(_configs_CurrencySelector__WEBPACK_IMPORTED_MODULE_2___default.a.currency_list);
    }
  }, {
    key: "render",
    value: function render() {
      var value = this.state.value;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        },
        __self: this
      }, "Convert currencies live!"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_AutoCompleteWrapper__WEBPACK_IMPORTED_MODULE_4__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        },
        __self: this
      }));
    }
  }]);

  return ConverterForm;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (ConverterForm);

/***/ })

})
//# sourceMappingURL=index.js.8f00820d9a1fc7b6e1fa.hot-update.js.map