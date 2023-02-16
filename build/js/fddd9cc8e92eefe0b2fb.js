"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkcrowdfavorite_github_io"] = self["webpackChunkcrowdfavorite_github_io"] || []).push([["src_js_pages_laravel_web_views_js"],{

/***/ "./src/js/components/actionBar/index.js":
/*!**********************************************!*\
  !*** ./src/js/components/actionBar/index.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _js_components_actionBar_partials_title__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @js/components/actionBar/partials/title */ \"./src/js/components/actionBar/partials/title.js\");\n/* harmony import */ var _js_components_actionBar_partials_homeLink__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @js/components/actionBar/partials/homeLink */ \"./src/js/components/actionBar/partials/homeLink.js\");\n/* harmony import */ var _js_components_actionBar_partials_nextLink__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @js/components/actionBar/partials/nextLink */ \"./src/js/components/actionBar/partials/nextLink.js\");\n/* harmony import */ var _js_components_actionBar_partials_downloadLink__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @js/components/actionBar/partials/downloadLink */ \"./src/js/components/actionBar/partials/downloadLink.js\");\n/* eslint-disable func-names */\n\n\n\n\n\n\nconst Index = function (_ref) {\n  let {\n    title,\n    downloadUrl,\n    downloadFile,\n    nextUrl\n  } = _ref;\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"action-bar\"\n  }, title ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_js_components_actionBar_partials_title__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    title: title\n  }) : null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"actions\"\n  }, downloadUrl && downloadFile ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_js_components_actionBar_partials_downloadLink__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    downloadUrl: downloadUrl,\n    downloadFile: downloadFile\n  }) : null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_js_components_actionBar_partials_homeLink__WEBPACK_IMPORTED_MODULE_2__[\"default\"], null), nextUrl ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_js_components_actionBar_partials_nextLink__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    url: nextUrl\n  }) : null));\n};\nIndex.defaultProps = {\n  title: null,\n  nextUrl: null,\n  downloadUrl: null,\n  downloadFile: null\n};\nIndex.propTypes = {\n  title: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().string),\n  nextUrl: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().string),\n  downloadUrl: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().string),\n  downloadFile: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().string)\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Index);\n\n//# sourceURL=webpack://crowdfavorite.github.io/./src/js/components/actionBar/index.js?");

/***/ }),

/***/ "./src/js/components/actionBar/partials/downloadLink.js":
/*!**************************************************************!*\
  !*** ./src/js/components/actionBar/partials/downloadLink.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _js_components_micons_download__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @js/components/micons/download */ \"./src/js/components/micons/download.js\");\n/* eslint-disable func-names */\n\n\n\nconst DownloadLink = function (_ref) {\n  let {\n    downloadUrl,\n    downloadFile\n  } = _ref;\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"a\", {\n    className: \"action-link download\",\n    href: `${\"https://crowdfavorite.github.io\" + downloadUrl}`,\n    download: downloadFile\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_js_components_micons_download__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    size: \"20px\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"span\", {\n    className: \"action-label\"\n  }, \"Download the code\"));\n};\nDownloadLink.propTypes = {\n  downloadUrl: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string.isRequired),\n  downloadFile: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string.isRequired)\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DownloadLink);\n\n//# sourceURL=webpack://crowdfavorite.github.io/./src/js/components/actionBar/partials/downloadLink.js?");

/***/ }),

/***/ "./src/js/components/actionBar/partials/homeLink.js":
/*!**********************************************************!*\
  !*** ./src/js/components/actionBar/partials/homeLink.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/dist/index.js\");\n/* harmony import */ var _js_components_micons_home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @js/components/micons/home */ \"./src/js/components/micons/home.js\");\n/* eslint-disable func-names */\n\n\n\nconst HomeLink = function () {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Link, {\n    to: \"/\",\n    className: \"action-link\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_js_components_micons_home__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    title: \"home\",\n    size: \"20px\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"span\", {\n    className: \"action-label\"\n  }, \"Home\"));\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HomeLink);\n\n//# sourceURL=webpack://crowdfavorite.github.io/./src/js/components/actionBar/partials/homeLink.js?");

/***/ }),

/***/ "./src/js/components/actionBar/partials/nextLink.js":
/*!**********************************************************!*\
  !*** ./src/js/components/actionBar/partials/nextLink.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/dist/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _js_components_micons_arrow_right__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @js/components/micons/arrow_right */ \"./src/js/components/micons/arrow_right.js\");\n/* eslint-disable func-names */\n\n\n\n\nconst NextLink = function (_ref) {\n  let {\n    url\n  } = _ref;\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Link, {\n    className: \"action-link\",\n    to: url\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_js_components_micons_arrow_right__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    title: \"Next\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"span\", {\n    className: \"action-label\"\n  }, \"Next\"));\n};\nNextLink.propTypes = {\n  url: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string.isRequired)\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NextLink);\n\n//# sourceURL=webpack://crowdfavorite.github.io/./src/js/components/actionBar/partials/nextLink.js?");

/***/ }),

/***/ "./src/js/components/actionBar/partials/title.js":
/*!*******************************************************!*\
  !*** ./src/js/components/actionBar/partials/title.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n/* eslint-disable func-names */\n\n\nconst Title = function (_ref) {\n  let {\n    title\n  } = _ref;\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h1\", null, title);\n};\nTitle.propTypes = {\n  title: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string.isRequired)\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Title);\n\n//# sourceURL=webpack://crowdfavorite.github.io/./src/js/components/actionBar/partials/title.js?");

/***/ }),

/***/ "./src/js/components/markdown/copyToClipboard.js":
/*!*******************************************************!*\
  !*** ./src/js/components/markdown/copyToClipboard.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _js_components_micons_copy__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @js/components/micons/copy */ \"./src/js/components/micons/copy.js\");\n/* eslint-disable func-names */\n\n\n\nconst CopyToClipboard = function (_ref) {\n  let {\n    code\n  } = _ref;\n  const handleClick = () => navigator.clipboard.writeText(code[0].props.children[0]);\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"button\", {\n    type: \"button\",\n    onClick: handleClick,\n    className: \"code-copy-btn\",\n    title: \"Copy to clipboard\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_js_components_micons_copy__WEBPACK_IMPORTED_MODULE_1__[\"default\"], null));\n};\nCopyToClipboard.propTypes = {\n  code: prop_types__WEBPACK_IMPORTED_MODULE_2___default().arrayOf((prop_types__WEBPACK_IMPORTED_MODULE_2___default().element)).isRequired\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CopyToClipboard);\n\n//# sourceURL=webpack://crowdfavorite.github.io/./src/js/components/markdown/copyToClipboard.js?");

/***/ }),

/***/ "./src/js/components/markdown/pre.js":
/*!*******************************************!*\
  !*** ./src/js/components/markdown/pre.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _js_components_markdown_copyToClipboard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @js/components/markdown/copyToClipboard */ \"./src/js/components/markdown/copyToClipboard.js\");\n/* eslint-disable func-names */\n\n\n\nconst Pre = function (_ref) {\n  let {\n    children\n  } = _ref;\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"pre\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_js_components_markdown_copyToClipboard__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    code: children\n  }), children);\n};\nPre.propTypes = {\n  children: prop_types__WEBPACK_IMPORTED_MODULE_2___default().arrayOf((prop_types__WEBPACK_IMPORTED_MODULE_2___default().element)).isRequired\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Pre);\n\n//# sourceURL=webpack://crowdfavorite.github.io/./src/js/components/markdown/pre.js?");

/***/ }),

/***/ "./src/js/components/micons/arrow_right.js":
/*!*************************************************!*\
  !*** ./src/js/components/micons/arrow_right.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./base */ \"./src/js/components/micons/base.js\");\n/* eslint-disable func-names */\n\n\n\nfunction MiconArrowRight(_ref) {\n  let {\n    size,\n    className,\n    title\n  } = _ref;\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_base__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    size: size,\n    className: className,\n    title: title,\n    path: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"path\", {\n      d: \"M0 0h24v24H0V0z\",\n      fill: \"none\"\n    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"path\", {\n      d: \"M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z\"\n    }))\n  });\n}\nMiconArrowRight.defaultProps = {\n  size: '24px',\n  className: ''\n};\nMiconArrowRight.propTypes = {\n  size: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string),\n  className: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string),\n  title: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string.isRequired)\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MiconArrowRight);\n\n//# sourceURL=webpack://crowdfavorite.github.io/./src/js/components/micons/arrow_right.js?");

/***/ }),

/***/ "./src/js/components/micons/base.js":
/*!******************************************!*\
  !*** ./src/js/components/micons/base.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n/* eslint-disable func-names */\n\n\nfunction Base(_ref) {\n  let {\n    size,\n    className,\n    title,\n    path\n  } = _ref;\n  const baseClasses = `inline-block align-middle${className ? ` ${className}` : ''}`;\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"i\", {\n    className: baseClasses,\n    title: title\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"svg\", {\n    className: \"micon\",\n    xmlns: \"http://www.w3.org/2000/svg\",\n    viewBox: \"0 0 24 24\",\n    height: size,\n    width: size,\n    fill: \"currentColor\"\n  }, path));\n}\nBase.defaultProps = {\n  size: '24px',\n  className: '',\n  path: ''\n};\nBase.propTypes = {\n  size: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),\n  className: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),\n  title: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string.isRequired),\n  path: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().element)\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Base);\n\n//# sourceURL=webpack://crowdfavorite.github.io/./src/js/components/micons/base.js?");

/***/ }),

/***/ "./src/js/components/micons/copy.js":
/*!******************************************!*\
  !*** ./src/js/components/micons/copy.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./base */ \"./src/js/components/micons/base.js\");\n/* eslint-disable func-names */\n\n\n\nconst Copy = function (_ref) {\n  let {\n    size = ''\n  } = _ref;\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_base__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    size: size,\n    title: \"Copy to clipboard\",\n    path: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"g\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"g\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"g\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"path\", {\n      d: \"M16,20H4c-0.6,0-1-0.4-1-1V1c0-0.6,0.4-1,1-1h12c0.6,0,1,0.4,1,1v18C17,19.6,16.6,20,16,20z M5,18h10V2H5V18z\"\n    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"g\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"g\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"path\", {\n      d: \"M20,24H8c-0.6,0-1-0.4-1-1v-4c0-0.6,0.4-1,1-1s1,0.4,1,1v3h10V6h-3c-0.6,0-1-0.4-1-1s0.4-1,1-1h4c0.6,0,1,0.4,1,1v18C21,23.6,20.6,24,20,24z\"\n    }))))\n  });\n};\nCopy.defaultProps = {\n  size: '24px'\n};\nCopy.propTypes = {\n  size: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string)\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Copy);\n\n//# sourceURL=webpack://crowdfavorite.github.io/./src/js/components/micons/copy.js?");

/***/ }),

/***/ "./src/js/components/micons/download.js":
/*!**********************************************!*\
  !*** ./src/js/components/micons/download.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./base */ \"./src/js/components/micons/base.js\");\n/* eslint-disable func-names */\n\n\n\nconst Download = function (_ref) {\n  let {\n    size = '',\n    className = '',\n    title = ''\n  } = _ref;\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_base__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    size: size,\n    className: className,\n    title: title,\n    path: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"path\", {\n      d: \"M6 20q-.825 0-1.412-.587Q4 18.825 4 18v-3h2v3h12v-3h2v3q0 .825-.587 1.413Q18.825 20 18 20Zm6-4-5-5 1.4-1.45 2.6 2.6V4h2v8.15l2.6-2.6L17 11Z\"\n    })\n  });\n};\nDownload.defaultProps = {\n  size: '24px',\n  className: '',\n  title: ''\n};\nDownload.propTypes = {\n  size: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string),\n  className: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string),\n  title: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string)\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Download);\n\n//# sourceURL=webpack://crowdfavorite.github.io/./src/js/components/micons/download.js?");

/***/ }),

/***/ "./src/js/components/micons/home.js":
/*!******************************************!*\
  !*** ./src/js/components/micons/home.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./base */ \"./src/js/components/micons/base.js\");\n/* eslint-disable func-names */\n\n\n\nfunction Home(_ref) {\n  let {\n    size = '',\n    className = '',\n    title = ''\n  } = _ref;\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_base__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    size: size,\n    className: className,\n    title: title,\n    path: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"path\", {\n      d: \"M6 19h3v-6h6v6h3v-9l-6-4.5L6 10Zm-2 2V9l8-6 8 6v12h-7v-6h-2v6Zm8-8.75Z\"\n    })\n  });\n}\nHome.defaultProps = {\n  size: '24px',\n  className: ''\n};\nHome.propTypes = {\n  size: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string),\n  className: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string),\n  title: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string.isRequired)\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);\n\n//# sourceURL=webpack://crowdfavorite.github.io/./src/js/components/micons/home.js?");

/***/ }),

/***/ "./src/js/pages/laravel/web/views.js":
/*!*******************************************!*\
  !*** ./src/js/pages/laravel/web/views.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-markdown */ \"./node_modules/react-markdown/lib/react-markdown.js\");\n/* harmony import */ var rehype_raw__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rehype-raw */ \"./node_modules/rehype-raw/index.js\");\n/* harmony import */ var _js_components_actionBar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @js/components/actionBar */ \"./src/js/components/actionBar/index.js\");\n/* harmony import */ var _docs_laravel_web_views_md__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @docs/laravel/web/views.md */ \"./src/docs/laravel/web/views.md\");\n/* harmony import */ var _js_components_markdown_pre__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @js/components/markdown/pre */ \"./src/js/components/markdown/pre.js\");\n/* eslint-disable react/no-children-prop */\n/* eslint-disable func-names */\n\n\n\n\n\n\n/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_js_components_actionBar__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    title: \"Web views\",\n    nextUrl: \"/laravel/web/assets\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"parser\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_markdown__WEBPACK_IMPORTED_MODULE_4__.ReactMarkdown, {\n    rehypePlugins: [rehype_raw__WEBPACK_IMPORTED_MODULE_5__[\"default\"]],\n    children: _docs_laravel_web_views_md__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n    components: {\n      pre: _js_components_markdown_pre__WEBPACK_IMPORTED_MODULE_3__[\"default\"]\n    }\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_js_components_actionBar__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    nextUrl: \"/laravel/web/assets\"\n  }));\n}\n\n//# sourceURL=webpack://crowdfavorite.github.io/./src/js/pages/laravel/web/views.js?");

/***/ }),

/***/ "./src/docs/laravel/web/views.md":
/*!***************************************!*\
  !*** ./src/docs/laravel/web/views.md ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (\"Blade is a simple yet powerfull templating engine. It allows fast development by offering directives, layout features and components.\\nIt also allows the usage of plain php. The main feature of blade are:\\n\\n#### Blade directives\\n\\n@if, @foreach, @include and @php are an example of a long list of directive usefull to compose web pages and display data.\\nWhen needed Blade can be extended by adding custom directives.\\n\\n#### Composition and inheritance\\nOne of the most attractive features of blade is the views composition and inheritance. A general view layout can be defined as:\\n\\n```\\n//layouts/main.blade.php\\n\\n<!DOCTYPE html>\\n<html lang=\\\"{{ config('app.locale') }}\\\">\\n<head>\\n    @include('includes.head')\\n    @yield('head')\\n</head>\\n<body>\\n<div class=\\\"super-container\\\">\\n    <header>\\n        @include('includes.header')\\n        @yield('header')\\n    </header>\\n    <article>\\n        <div class=\\\"main-container\\\">\\n            @yield('content')\\n        </div>\\n    </article>\\n\\n    @yield('scripts')\\n    <footer>\\n        @include('includes.footer')\\n    </footer>\\n</div>\\n</body>\\n</html>\\n```\\n\\nThe layout blade file would include a header file and a footer file imported using the @include directive.\\nThe @yield directive would be used to include optional content coming from a child view. It defines an optional section.\\n\\nA child view would start by extending the layout file and optionally adding to its predefined sections by using the @section directive.\\n\\n```\\n//pages/builder.php\\n\\n@extends('layouts.main')\\n\\n@section('head')\\n    //load additional assets\\n    <link href=\\\"{{ mix('/ccs/users.css') }}\\\" rel=\\\"stylesheet\\\">\\n    <script src=\\\"{{ mix('/js/users.js') }}\\\"></script>\\n@endsection\\n\\n@section('content')\\n    // add html elements in the content section\\n@endsection\\n```\\n\\n#### Blade components\\nReusable class based components can be generated by issuing the console command\\n```\\nphp artisan make:component Alert\\n```\\n\\nThe created component view will be placed in the resources/views/components directory.\\nA component class will be generated in the App/View/Components directory.\\n\\n```\\n//App/View/Components/Alert.php\\n\\nnamespace App\\\\View\\\\Components;\\n\\nuse Illuminate\\\\View\\\\Component;\\n\\nclass Alert extends Component\\n{\\n    \\n    public $type;\\n    \\n    public $message;\\n\\n    public function __construct($type, $message)\\n    {\\n        $this->type = $type;\\n        $this->message = $message;\\n    }\\n\\n    public function render()\\n    {\\n        return view('components.alert');\\n    }\\n}\\n```\\n\\nThe component view \\n\\n```\\n//resources/views/components/alert.blade.php\\n\\n<div class=\\\"alert alert-{{ \\\"{{ $type \\\" }}}}\\\">\\n    {{ \\\"{{ $message \\\" }}}}\\n</div>\\n```\\n\\nTo display a component, place the component tag in blade where the tag name starts with the string x- followed by the kebab case name of the component class:\\n\\n```\\n<x-alert type=\\\"error\\\" :message=\\\"$message\\\"/>\\n```\\n\\nLaravel's x-components support slots and scoped slots.\\n\\n#### Reference\\n<p class=\\\"m-0 mb-05\\\"><a class=\\\"link\\\" href=\\\"https://laravel.com/docs/8.x/blade\\\" target=\\\"_blank\\\">Laravel blade</a></p>\\n\\n\");\n\n//# sourceURL=webpack://crowdfavorite.github.io/./src/docs/laravel/web/views.md?");

/***/ })

}]);