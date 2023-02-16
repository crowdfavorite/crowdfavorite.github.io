"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkcrowdfavorite_github_io"] = self["webpackChunkcrowdfavorite_github_io"] || []).push([["src_js_pages_wordpress_plugin_logger_introduction_js"],{

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

/***/ "./src/js/pages/wordpress/plugin/logger/introduction.js":
/*!**************************************************************!*\
  !*** ./src/js/pages/wordpress/plugin/logger/introduction.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-markdown */ \"./node_modules/react-markdown/lib/react-markdown.js\");\n/* harmony import */ var rehype_raw__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rehype-raw */ \"./node_modules/rehype-raw/index.js\");\n/* harmony import */ var _js_components_actionBar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @js/components/actionBar */ \"./src/js/components/actionBar/index.js\");\n/* harmony import */ var _docs_wordpress_plugin_logger_introduction_md__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @docs/wordpress/plugin/logger/introduction.md */ \"./src/docs/wordpress/plugin/logger/introduction.md\");\n/* eslint-disable react/no-children-prop */\n/* eslint-disable func-names */\n\n\n\n\n\n/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_js_components_actionBar__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    title: \"Plugin\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"parser\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_markdown__WEBPACK_IMPORTED_MODULE_3__.ReactMarkdown, {\n    rehypePlugins: [rehype_raw__WEBPACK_IMPORTED_MODULE_4__[\"default\"]],\n    children: _docs_wordpress_plugin_logger_introduction_md__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_js_components_actionBar__WEBPACK_IMPORTED_MODULE_1__[\"default\"], null));\n}\n\n//# sourceURL=webpack://crowdfavorite.github.io/./src/js/pages/wordpress/plugin/logger/introduction.js?");

/***/ }),

/***/ "./src/docs/wordpress/plugin/logger/introduction.md":
/*!**********************************************************!*\
  !*** ./src/docs/wordpress/plugin/logger/introduction.md ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (\"The logger functionality is based on a PSR-3 interface. Logs can be save to a log file, emails and the database.\\nAs a primary implementation we will limit the logging to a file.  \\n\\nThe implementation of the logger is based on the package monolog.  \\n\\nCustom log levels are not supported. Only eight RFC 5424 levels are available.\\nThe supported log levels / helpers are:\\n\\n<table>\\n<thead>\\n<tr>\\n    <td><b>Helper</b></td>\\n    <td><b>Log level</b></td>\\n    <td><b>Description</b></td>\\n</tr>\\n</thead>\\n<tbody>\\n<tr>\\n    <td>debug</td>\\n    <td>DEBUG(100)</td>\\n    <td>Debug information.</td>\\n</tr>\\n<tr>\\n    <td>info</td>\\n    <td>INFO(200)</td>\\n    <td>General events.</td>\\n</tr>\\n<tr>\\n    <td>notice</td>\\n    <td>NOTICE(250)</td>\\n    <td>Significant events.</td>\\n</tr>\\n<tr>\\n    <td>warning</td>\\n    <td>WARNING(300)</td>\\n    <td>Exceptional occurences but not errors.</td>\\n</tr>\\n<tr>\\n    <td>error</td>\\n    <td>ERROR(400)</td>\\n    <td>Runtime errors which do not require immediate action.</td>\\n</tr>\\n<tr>\\n    <td>critical</td>\\n    <td>CRITICAL(500)</td>\\n    <td>Critical conditions.</td>\\n</tr>\\n<tr>\\n    <td>alert</td>\\n    <td>ALERT(550)</td>\\n    <td>Immediate action must be taken.</td>\\n</tr>\\n<tr>\\n    <td>emergency</td>\\n    <td>EMERGENCY(600)</td>\\n    <td>Sytem is unusable.</td>\\n</tr>\\n</tbody>\\n</table>\\n\\n<br>\\n\\nThe usage of the logger will be as\\n\\n```\\nuse Core\\\\Facade\\\\Log;\\n\\nclass MyClass\\n{\\n    public function myMethod\\n    {\\n        //Log::helperMethod('message', [contextArray]);\\n        Log::info('some message', ['logger' => __CLASS__, ....])\\n    }\\n}\\n```\\n\\nThe registration in the log file will be\\n\\n```\\n2021-03-31 16:25 > INFO > some message {\\\"logger\\\":\\\"MyClass\\\"}\\n```\\n\\nThe configuration file of the logger is at:\\n\\n```\\n//Core > Config > log.php\\n\\n[\\n\\t'defaultChannel' => 'console',\\n\\t'channels' => [\\n\\t\\t'file' => [\\n\\t\\t\\t'dateFormat' => \\\"Y-m-d H:i:s\\\",\\n\\t\\t\\t'output' => \\\"%datetime% > %level_name% > %message% %context% %extra%\\\\n\\\",\\n\\t\\t],\\n\\t\\t'slack' => [\\n\\t\\t\\t'dateFormat' => \\\"Y-m-d H:i:s\\\",\\n\\t\\t\\t'output' => \\\"%datetime% > %level_name% > %message% %context% %extra%\\\\n\\\",\\n\\t\\t\\t'token' => 'xoxb-2883774866-2012686074454-laeDke1lOzZIA2J59FdTiUtv',\\n\\t\\t\\t'channel' => '#wordpressbot',\\n\\t\\t\\t'bot' => 'wpbot',\\n\\t\\t]\\n\\t],\\n]\\n```\\n\");\n\n//# sourceURL=webpack://crowdfavorite.github.io/./src/docs/wordpress/plugin/logger/introduction.md?");

/***/ })

}]);