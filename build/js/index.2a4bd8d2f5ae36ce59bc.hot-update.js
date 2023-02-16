"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdatecrowdfavorite_github_io"]("index",{

/***/ "./src/js/router/index.js":
/*!********************************!*\
  !*** ./src/js/router/index.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router/dist/index.js\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/dist/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _js_components_router_loading__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @js/components/router/loading */ \"./src/js/components/router/loading.js\");\n/* harmony import */ var _js_router_routes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @js/router/routes */ \"./src/js/router/routes.js\");\n/* eslint-disable func-names */\n/* eslint-disable react/no-array-index-key */\n\n\n\n\nconst routeComponents = _js_router_routes__WEBPACK_IMPORTED_MODULE_2__[\"default\"].map(route => {\n  if (route.children === undefined) {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.Route, {\n      key: route.key,\n      exact: route.exact,\n      path: route.path,\n      element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(route.component, null)\n    });\n  }\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.Route, {\n    key: route.key,\n    exact: route.exact,\n    path: route.path,\n    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(route.component, null)\n  }, route.children.map((child, index) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.Route, {\n    key: `${child.key}_${index}`,\n    exact: child.exact,\n    path: child.path,\n    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(child.component, null)\n  })));\n});\n/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.HashRouter, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.Routes, null, routeComponents));\n}\n\n//# sourceURL=webpack://crowdfavorite.github.io/./src/js/router/index.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("189b5fd40940f0383a82")
/******/ })();
/******/ 
/******/ }
);