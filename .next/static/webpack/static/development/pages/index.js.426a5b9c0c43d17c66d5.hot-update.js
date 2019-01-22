webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/AutoCompleteWrapper.js":
/*!*******************************************!*\
  !*** ./components/AutoCompleteWrapper.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_autocomplete__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-autocomplete */ "./node_modules/react-autocomplete/build/lib/Autocomplete.js");
/* harmony import */ var react_autocomplete__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_autocomplete__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _configs_CurrencySelector__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../configs/CurrencySelector */ "./configs/CurrencySelector.js");
/* harmony import */ var _configs_CurrencySelector__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_configs_CurrencySelector__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/home/hazard/Code/interactive-currency-converter/components/AutoCompleteWrapper.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }





function matchCurrencyToTerm(currency, value) {
  return currency.CurrencyCode.toLowerCase().indexOf(value.toLowerCase()) !== -1 || currency.CurrencyName.toLowerCase().indexOf(value.toLowerCase()) !== -1;
}

var AutoCompleteWrapper =
/*#__PURE__*/
function (_Component) {
  _inherits(AutoCompleteWrapper, _Component);

  function AutoCompleteWrapper() {
    _classCallCheck(this, AutoCompleteWrapper);

    return _possibleConstructorReturn(this, _getPrototypeOf(AutoCompleteWrapper).apply(this, arguments));
  }

  _createClass(AutoCompleteWrapper, [{
    key: "render",
    value: function render() {
      var _this = this;

      var value = this.props.value;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_autocomplete__WEBPACK_IMPORTED_MODULE_1___default.a, {
        getItemValue: function getItemValue(item) {
          return item.CurrencyCode;
        },
        items: _configs_CurrencySelector__WEBPACK_IMPORTED_MODULE_2___default.a.currency_list,
        renderItem: function renderItem(item, isHighlighted) {
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            key: item.CurrencyCode,
            style: {
              background: isHighlighted ? 'lightgray' : 'black',
              cursor: 'pointer'
            },
            __source: {
              fileName: _jsxFileName,
              lineNumber: 23
            },
            __self: this
          }, item.CurrencyCode, " - ", item.CurrencyName);
        },
        shouldItemRender: matchCurrencyToTerm,
        value: value,
        onChange: function onChange(event, value) {
          return _this.setState({
            value: value
          });
        },
        onSelect: this.props.onSelectParent,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        },
        __self: this
      }));
    }
  }]);

  return AutoCompleteWrapper;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (AutoCompleteWrapper);

/***/ })

})
//# sourceMappingURL=index.js.426a5b9c0c43d17c66d5.hot-update.js.map