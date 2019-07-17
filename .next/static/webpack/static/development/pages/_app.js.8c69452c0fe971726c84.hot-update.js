webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./components/theme/color-scheme.tsx":
/*!*******************************************!*\
  !*** ./components/theme/color-scheme.tsx ***!
  \*******************************************/
/*! exports provided: Color */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Color", function() { return Color; });
var Color = {
  blue: "#1F3044",
  grey: "#646C79",
  platinum: "#E8E8E8",
  silver: "#BFBFBF",
  saffron: "#FB9039"
};

/***/ }),

/***/ "./components/theme/index.tsx":
/*!************************************!*\
  !*** ./components/theme/index.tsx ***!
  \************************************/
/*! exports provided: GlobalStyle, CustomThemeProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./global */ "./components/theme/global.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GlobalStyle", function() { return _global__WEBPACK_IMPORTED_MODULE_0__["GlobalStyle"]; });

/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./theme */ "./components/theme/theme.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CustomThemeProvider", function() { return _theme__WEBPACK_IMPORTED_MODULE_1__["CustomThemeProvider"]; });




/***/ }),

/***/ "./components/theme/theme.tsx":
/*!************************************!*\
  !*** ./components/theme/theme.tsx ***!
  \************************************/
/*! exports provided: CustomThemeProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomThemeProvider", function() { return CustomThemeProvider; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _color_scheme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./color-scheme */ "./components/theme/color-scheme.tsx");
var _jsxFileName = "/Users/dogancan/Desktop/Development/my/city-notes/components/theme/theme.tsx";



var customTheme = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["createMuiTheme"])({
  palette: {
    primary: {
      main: _color_scheme__WEBPACK_IMPORTED_MODULE_2__["Color"].blue
    },
    secondary: {
      main: _color_scheme__WEBPACK_IMPORTED_MODULE_2__["Color"].saffron
    }
  }
});
var theme = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["responsiveFontSizes"])(customTheme);
var CustomThemeProvider = function CustomThemeProvider(_ref) {
  var children = _ref.children;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["MuiThemeProvider"], {
    theme: theme,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, children);
};

/***/ })

})
//# sourceMappingURL=_app.js.8c69452c0fe971726c84.hot-update.js.map