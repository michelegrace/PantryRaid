webpackHotUpdate("static/development/pages/index.js",{

/***/ "./comps/Search.js":
/*!*************************!*\
  !*** ./comps/Search.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
var _this = undefined,
    _jsxFileName = "/Users/smolensky/Projects/personal/pantry-next/comps/Search.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var preventDefault = function preventDefault(f) {
  return function (e) {
    e.preventDefault();
    f(e);
  };
};

/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var _ref$action = _ref.action,
      action = _ref$action === void 0 ? '/recipes' : _ref$action;
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_1__["useRouter"])();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(''),
      query = _useState[0],
      setQuery = _useState[1];

  var handleParam = function handleParam(setValue) {
    return function (e) {
      return setValue(e.target.value);
    };
  };

  var handleSubmit = preventDefault(function () {
    router.push({
      pathname: action,
      query: {
        query: query
      }
    });
  });
  return __jsx("form", {
    onSubmit: handleSubmit,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 6
    }
  }, __jsx("input", {
    type: "text",
    name: "q",
    value: query,
    onChange: handleParam(setQuery),
    placeholder: "Search",
    "aria-label": "Search",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 8
    }
  }));
});

/***/ })

})
//# sourceMappingURL=index.js.572fe8945b35885eab3c.hot-update.js.map