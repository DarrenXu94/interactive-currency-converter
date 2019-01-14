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
/* harmony import */ var _api_Currency__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../api/Currency */ "./api/Currency.js");
/* harmony import */ var _configs_CountryCodes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../configs/CountryCodes */ "./configs/CountryCodes.js");
/* harmony import */ var _configs_CurrencySelector__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../configs/CurrencySelector */ "./configs/CurrencySelector.js");
/* harmony import */ var _configs_CurrencySelector__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_configs_CurrencySelector__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_autocomplete__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-autocomplete */ "./node_modules/react-autocomplete/build/lib/Autocomplete.js");
/* harmony import */ var react_autocomplete__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_autocomplete__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "/home/hazard/Code/interactive-currency-converter/components/ConverterForm.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }







var ConverterForm =
/*#__PURE__*/
function (_Component) {
  _inherits(ConverterForm, _Component);

  function ConverterForm() {
    _classCallCheck(this, ConverterForm);

    return _possibleConstructorReturn(this, _getPrototypeOf(ConverterForm).apply(this, arguments));
  }

  _createClass(ConverterForm, [{
    key: "componentDidMount",
    value: function componentDidMount() {// Currency()
      // console.log(CountryCodes)
      // console.log(CurrencySelector.currency_list)
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        },
        __self: this
      }, "Convert currencies live!"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Autocomplete, {
        getItemValue: function getItemValue(item) {
          return item.CurrencyCode;
        },
        items: _configs_CurrencySelector__WEBPACK_IMPORTED_MODULE_3___default.a.currency_list,
        renderItem: function renderItem(item, isHighlighted) {
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            style: {
              background: isHighlighted ? 'lightgray' : 'white'
            },
            __source: {
              fileName: _jsxFileName,
              lineNumber: 25
            },
            __self: this
          }, item.label);
        },
        value: value,
        onChange: function onChange(e) {
          return value = e.target.value;
        },
        onSelect: function onSelect(val) {
          return value = val;
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        },
        __self: this
      }, "Convert from:", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("select", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
        value: "grapefruit",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        },
        __self: this
      }, "Grapefruit"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
        value: "lime",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        },
        __self: this
      }, "Lime"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
        selected: true,
        value: "coconut",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        },
        __self: this
      }, "Coconut"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
        value: "mango",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        },
        __self: this
      }, "Mango"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        __self: this
      }, "Convert to:", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("select", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
        value: "grapefruit",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        __self: this
      }, "Grapefruit"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
        value: "lime",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        },
        __self: this
      }, "Lime"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
        selected: true,
        value: "coconut",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        },
        __self: this
      }, "Coconut"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
        value: "mango",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        },
        __self: this
      }, "Mango"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        type: "submit",
        value: "Submit",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        },
        __self: this
      })));
    }
  }]);

  return ConverterForm;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (ConverterForm);

/***/ })

})
//# sourceMappingURL=index.js.06fdd1be2b9aefe71370.hot-update.js.map