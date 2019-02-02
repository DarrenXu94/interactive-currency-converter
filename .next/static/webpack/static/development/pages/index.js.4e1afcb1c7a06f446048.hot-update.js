webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/ConverterForm.js":
/*!*************************************!*\
  !*** ./components/ConverterForm.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _AutoCompleteWrapper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AutoCompleteWrapper */ "./components/AutoCompleteWrapper.js");
/* harmony import */ var _StepConvertor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./StepConvertor */ "./components/StepConvertor.js");


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

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

var axios = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");




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
      convertFrom: '',
      convertTo: '',
      apiResponse: ''
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "requestConversion",
    /*#__PURE__*/
    _asyncToGenerator(
    /*#__PURE__*/
    _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              // let { convertFrom, convertTo } = this.state;
              // if (convertFrom !== '' && convertTo !== '') {
              //     let res = await Currency(convertFrom, convertTo)
              //     this.setState({ apiResponse: res })
              // }
              axios.get('/convert/AUD/USD').then(function (response) {
                console.log(response);
              }).catch(function (error) {
                console.log(error);
              });

            case 1:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this);
    })));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "updateValue", function (value, type) {
      switch (type) {
        case 'from':
          _this.setState({
            convertFrom: value
          });

          break;

        case 'to':
          _this.setState({
            convertTo: value
          });

          break;

        default:
          break;
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onChange", function (value, type) {
      _this.updateValue(value, type);
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onSelect", function (value, type) {
      _this.updateValue(value, type);
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onSwapClick", function () {
      var _this$state = _this.state,
          convertFrom = _this$state.convertFrom,
          convertTo = _this$state.convertTo;

      _this.setState({
        convertFrom: convertTo,
        convertTo: convertFrom
      });
    });

    return _this;
  }

  _createClass(ConverterForm, [{
    key: "render",
    value: function render() {
      var _this$state2 = this.state,
          convertFrom = _this$state2.convertFrom,
          convertTo = _this$state2.convertTo,
          apiResponse = _this$state2.apiResponse;
      var onChange = this.onChange,
          onSelect = this.onSelect;
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", null, "Convert currencies live!"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", null, "Choose a currency to convert from"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_AutoCompleteWrapper__WEBPACK_IMPORTED_MODULE_2__["default"], {
        onSelectParent: onSelect,
        value: convertFrom,
        onChange: onChange,
        type: 'from'
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", null, "Choose a currency to convert to"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_AutoCompleteWrapper__WEBPACK_IMPORTED_MODULE_2__["default"], {
        onSelectParent: onSelect,
        value: convertTo,
        onChange: onChange,
        type: 'to'
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
        onClick: this.requestConversion
      }, "Convert"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
        onClick: this.onSwapClick
      }, "Swap"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", null, "Converting ", convertFrom, " to ", convertTo), apiResponse !== '' && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_StepConvertor__WEBPACK_IMPORTED_MODULE_3__["default"], {
        convertFrom: convertFrom,
        convertTo: convertTo,
        apiResponse: apiResponse
      }));
    }
  }]);

  return ConverterForm;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (ConverterForm);

/***/ })

})
//# sourceMappingURL=index.js.4e1afcb1c7a06f446048.hot-update.js.map