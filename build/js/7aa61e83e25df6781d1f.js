"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkcrowdfavorite_github_io"] = self["webpackChunkcrowdfavorite_github_io"] || []).push([["src_js_pages_code_quality_phpstan_js"],{

/***/ "./src/js/components/actionBar/index.tsx":
/*!***********************************************!*\
  !*** ./src/js/components/actionBar/index.tsx ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _js_components_actionBar_partials_Title__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @js/components/actionBar/partials/Title */ \"./src/js/components/actionBar/partials/Title.tsx\");\n/* harmony import */ var _js_components_actionBar_partials_HomeLink__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @js/components/actionBar/partials/HomeLink */ \"./src/js/components/actionBar/partials/HomeLink.tsx\");\n/* harmony import */ var _js_components_actionBar_partials_NextLink__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @js/components/actionBar/partials/NextLink */ \"./src/js/components/actionBar/partials/NextLink.tsx\");\n/* harmony import */ var _js_components_actionBar_partials_DownloadLink__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @js/components/actionBar/partials/DownloadLink */ \"./src/js/components/actionBar/partials/DownloadLink.tsx\");\n/* eslint-disable react/function-component-definition */\n/* eslint-disable react/require-default-props */\n\n\n\n\n\nconst Index = _ref => {\n  let {\n    title,\n    downloadUrl,\n    downloadFile,\n    nextUrl\n  } = _ref;\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"action-bar\"\n  }, title ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_js_components_actionBar_partials_Title__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    title: title\n  }) : null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"actions\"\n  }, downloadUrl && downloadFile ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_js_components_actionBar_partials_DownloadLink__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    downloadUrl: downloadUrl,\n    downloadFile: downloadFile\n  }) : null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_js_components_actionBar_partials_HomeLink__WEBPACK_IMPORTED_MODULE_2__[\"default\"], null), nextUrl ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_js_components_actionBar_partials_NextLink__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    url: nextUrl\n  }) : null));\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Index);\n\n//# sourceURL=webpack://crowdfavorite.github.io/./src/js/components/actionBar/index.tsx?");

/***/ }),

/***/ "./src/js/components/actionBar/partials/DownloadLink.tsx":
/*!***************************************************************!*\
  !*** ./src/js/components/actionBar/partials/DownloadLink.tsx ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _js_components_micons_MiconDownload__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @js/components/micons/MiconDownload */ \"./src/js/components/micons/MiconDownload.tsx\");\n/* eslint-disable react/function-component-definition */\n/* eslint-disable react/require-default-props */\n\n\nconst DownloadLink = _ref => {\n  let {\n    downloadUrl,\n    downloadFile\n  } = _ref;\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"a\", {\n    className: \"action-link download\",\n    href: `${\"https://crowdfavorite.github.io\" + downloadUrl}`,\n    download: downloadFile\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_js_components_micons_MiconDownload__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    size: \"20px\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"span\", {\n    className: \"action-label\"\n  }, \"Download the code\"));\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DownloadLink);\n\n//# sourceURL=webpack://crowdfavorite.github.io/./src/js/components/actionBar/partials/DownloadLink.tsx?");

/***/ }),

/***/ "./src/js/components/actionBar/partials/HomeLink.tsx":
/*!***********************************************************!*\
  !*** ./src/js/components/actionBar/partials/HomeLink.tsx ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/dist/index.js\");\n/* harmony import */ var _js_components_micons_MiconHome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @js/components/micons/MiconHome */ \"./src/js/components/micons/MiconHome.tsx\");\n/* eslint-disable react/function-component-definition */\n/* eslint-disable react/require-default-props */\n\n\n\nconst HomeLink = () => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Link, {\n  to: \"/\",\n  className: \"action-link\"\n}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_js_components_micons_MiconHome__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n  title: \"home\",\n  size: \"20px\"\n}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"span\", {\n  className: \"action-label\"\n}, \"Home\"));\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HomeLink);\n\n//# sourceURL=webpack://crowdfavorite.github.io/./src/js/components/actionBar/partials/HomeLink.tsx?");

/***/ }),

/***/ "./src/js/components/actionBar/partials/NextLink.tsx":
/*!***********************************************************!*\
  !*** ./src/js/components/actionBar/partials/NextLink.tsx ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/dist/index.js\");\n/* harmony import */ var _js_components_micons_MiconArrowRight__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @js/components/micons/MiconArrowRight */ \"./src/js/components/micons/MiconArrowRight.tsx\");\n/* eslint-disable react/function-component-definition */\n/* eslint-disable react/require-default-props */\n\n\n\nconst NextLink = _ref => {\n  let {\n    url\n  } = _ref;\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Link, {\n    className: \"action-link\",\n    to: url\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_js_components_micons_MiconArrowRight__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    title: \"Next\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"span\", {\n    className: \"action-label\"\n  }, \"Next\"));\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NextLink);\n\n//# sourceURL=webpack://crowdfavorite.github.io/./src/js/components/actionBar/partials/NextLink.tsx?");

/***/ }),

/***/ "./src/js/components/actionBar/partials/Title.tsx":
/*!********************************************************!*\
  !*** ./src/js/components/actionBar/partials/Title.tsx ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* eslint-disable react/function-component-definition */\n/* eslint-disable react/require-default-props */\n\nconst Title = _ref => {\n  let {\n    title\n  } = _ref;\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h1\", null, title);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Title);\n\n//# sourceURL=webpack://crowdfavorite.github.io/./src/js/components/actionBar/partials/Title.tsx?");

/***/ }),

/***/ "./src/js/components/markdown/copyToClipboard.tsx":
/*!********************************************************!*\
  !*** ./src/js/components/markdown/copyToClipboard.tsx ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _js_components_micons_MiconCopy__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @js/components/micons/MiconCopy */ \"./src/js/components/micons/MiconCopy.tsx\");\n/* eslint-disable react/function-component-definition */\n\n\nconst CopyToClipboard = _ref => {\n  let {\n    code\n  } = _ref;\n  const handleClick = () => navigator.clipboard.writeText(code[0].props.children[0]);\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"button\", {\n    type: \"button\",\n    onClick: handleClick,\n    className: \"copy\",\n    title: \"Copy to clipboard\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_js_components_micons_MiconCopy__WEBPACK_IMPORTED_MODULE_1__[\"default\"], null));\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CopyToClipboard);\n\n//# sourceURL=webpack://crowdfavorite.github.io/./src/js/components/markdown/copyToClipboard.tsx?");

/***/ }),

/***/ "./src/js/components/markdown/pre.tsx":
/*!********************************************!*\
  !*** ./src/js/components/markdown/pre.tsx ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _js_components_markdown_copyToClipboard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @js/components/markdown/copyToClipboard */ \"./src/js/components/markdown/copyToClipboard.tsx\");\n/* eslint-disable react/function-component-definition */\n\n\nconst Pre = _ref => {\n  let {\n    children\n  } = _ref;\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"relative\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"pre\", null, children), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"absolute top-3 right-4\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_js_components_markdown_copyToClipboard__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    code: children\n  })));\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Pre);\n\n//# sourceURL=webpack://crowdfavorite.github.io/./src/js/components/markdown/pre.tsx?");

/***/ }),

/***/ "./src/js/components/micons/Base.tsx":
/*!*******************************************!*\
  !*** ./src/js/components/micons/Base.tsx ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* eslint-disable react/function-component-definition */\n/* eslint-disable react/require-default-props */\n\nconst Base = _ref => {\n  let {\n    size = '24px',\n    className = '',\n    title,\n    path\n  } = _ref;\n  const baseClasses = `inline-block align-middle${className ? ` ${className}` : ''}`;\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"i\", {\n    className: baseClasses,\n    title: title\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"svg\", {\n    className: \"micon\",\n    xmlns: \"http://www.w3.org/2000/svg\",\n    viewBox: \"0 0 24 24\",\n    height: size,\n    width: size,\n    fill: \"currentColor\"\n  }, path));\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Base);\n\n//# sourceURL=webpack://crowdfavorite.github.io/./src/js/components/micons/Base.tsx?");

/***/ }),

/***/ "./src/js/components/micons/MiconArrowRight.tsx":
/*!******************************************************!*\
  !*** ./src/js/components/micons/MiconArrowRight.tsx ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Base */ \"./src/js/components/micons/Base.tsx\");\n/* eslint-disable react/function-component-definition */\n/* eslint-disable react/require-default-props */\n\n\nconst MiconArrowRight = _ref => {\n  let {\n    size = '24px',\n    className = '',\n    title = ''\n  } = _ref;\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Base__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    size: size,\n    className: className,\n    title: title,\n    path: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"path\", {\n      d: \"M0 0h24v24H0V0z\",\n      fill: \"none\"\n    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"path\", {\n      d: \"M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z\"\n    }))\n  });\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MiconArrowRight);\n\n//# sourceURL=webpack://crowdfavorite.github.io/./src/js/components/micons/MiconArrowRight.tsx?");

/***/ }),

/***/ "./src/js/components/micons/MiconCopy.tsx":
/*!************************************************!*\
  !*** ./src/js/components/micons/MiconCopy.tsx ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Base */ \"./src/js/components/micons/Base.tsx\");\n/* eslint-disable react/function-component-definition */\n/* eslint-disable react/require-default-props */\n\n\nconst MiconCopy = _ref => {\n  let {\n    size = '20px',\n    className = '',\n    title = 'Copy to clipboard'\n  } = _ref;\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Base__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    size: size,\n    className: className,\n    title: title,\n    path: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"g\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"g\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"g\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"path\", {\n      d: \"M16,20H4c-0.6,0-1-0.4-1-1V1c0-0.6,0.4-1,1-1h12c0.6,0,1,0.4,1,1v18C17,19.6,16.6,20,16,20z M5,18h10V2H5V18z\"\n    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"g\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"g\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"path\", {\n      d: \"M20,24H8c-0.6,0-1-0.4-1-1v-4c0-0.6,0.4-1,1-1s1,0.4,1,1v3h10V6h-3c-0.6,0-1-0.4-1-1s0.4-1,1-1h4c0.6,0,1,0.4,1,1v18C21,23.6,20.6,24,20,24z\"\n    }))))\n  });\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MiconCopy);\n\n//# sourceURL=webpack://crowdfavorite.github.io/./src/js/components/micons/MiconCopy.tsx?");

/***/ }),

/***/ "./src/js/components/micons/MiconDownload.tsx":
/*!****************************************************!*\
  !*** ./src/js/components/micons/MiconDownload.tsx ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Base */ \"./src/js/components/micons/Base.tsx\");\n/* eslint-disable react/function-component-definition */\n/* eslint-disable react/require-default-props */\n\n\nconst MiconDownload = _ref => {\n  let {\n    size = '24px',\n    className = '',\n    title = ''\n  } = _ref;\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Base__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    size: size,\n    className: className,\n    title: title,\n    path: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"path\", {\n      d: \"M6 20q-.825 0-1.412-.587Q4 18.825 4 18v-3h2v3h12v-3h2v3q0 .825-.587 1.413Q18.825 20 18 20Zm6-4-5-5 1.4-1.45 2.6 2.6V4h2v8.15l2.6-2.6L17 11Z\"\n    })\n  });\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MiconDownload);\n\n//# sourceURL=webpack://crowdfavorite.github.io/./src/js/components/micons/MiconDownload.tsx?");

/***/ }),

/***/ "./src/js/components/micons/MiconHome.tsx":
/*!************************************************!*\
  !*** ./src/js/components/micons/MiconHome.tsx ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Base */ \"./src/js/components/micons/Base.tsx\");\n/* eslint-disable react/function-component-definition */\n/* eslint-disable react/require-default-props */\n\n\nconst MiconHome = _ref => {\n  let {\n    size = '24px',\n    className = '',\n    title = ''\n  } = _ref;\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Base__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    size: size,\n    className: className,\n    title: title,\n    path: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"path\", {\n      d: \"M6 19h3v-6h6v6h3v-9l-6-4.5L6 10Zm-2 2V9l8-6 8 6v12h-7v-6h-2v6Zm8-8.75Z\"\n    })\n  });\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MiconHome);\n\n//# sourceURL=webpack://crowdfavorite.github.io/./src/js/components/micons/MiconHome.tsx?");

/***/ }),

/***/ "./src/js/pages/code/quality/phpstan.js":
/*!**********************************************!*\
  !*** ./src/js/pages/code/quality/phpstan.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-markdown */ \"./node_modules/react-markdown/lib/react-markdown.js\");\n/* harmony import */ var rehype_raw__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rehype-raw */ \"./node_modules/rehype-raw/index.js\");\n/* harmony import */ var _js_components_actionBar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @js/components/actionBar */ \"./src/js/components/actionBar/index.tsx\");\n/* harmony import */ var _docs_code_quality_phpstan_md__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @docs/code/quality/phpstan.md */ \"./src/docs/code/quality/phpstan.md\");\n/* harmony import */ var _js_components_markdown_pre__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @js/components/markdown/pre */ \"./src/js/components/markdown/pre.tsx\");\n/* eslint-disable react/no-children-prop */\n/* eslint-disable func-names */\n\n\n\n\n\n\n/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_js_components_actionBar__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    title: \"PhpStan\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"parser\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_markdown__WEBPACK_IMPORTED_MODULE_4__.ReactMarkdown, {\n    rehypePlugins: [rehype_raw__WEBPACK_IMPORTED_MODULE_5__[\"default\"]],\n    children: _docs_code_quality_phpstan_md__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n    components: {\n      pre: _js_components_markdown_pre__WEBPACK_IMPORTED_MODULE_3__[\"default\"]\n    }\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_js_components_actionBar__WEBPACK_IMPORTED_MODULE_1__[\"default\"], null));\n}\n\n//# sourceURL=webpack://crowdfavorite.github.io/./src/js/pages/code/quality/phpstan.js?");

/***/ }),

/***/ "./src/docs/code/quality/phpstan.md":
/*!******************************************!*\
  !*** ./src/docs/code/quality/phpstan.md ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (\"PHPStan focuses on finding errors in your code without actually running it. \\n\\n## Installation\\n\\nThe installation and configuration of the package are detailed below\\n\\n### Composer\\n```\\t\\ncomposer require --dev nunomaduro/larastan\\n```\\nIn composer.json the following script should be added\\n```\\n\\\"phpstan\\\": \\\"vendor/bin/phpstan analyse -c phpstan.neon --memory-limit=2G --no-progress\\\"\\n```\\nThen run composer update.\\n\\n### PhpStorm\\n\\nIn PhpStorm’s preferences php quality tools menu\\n\\nPhpStorm > Languages & Frameworks > PHP > Quality Tools\\n\\nPoint to phpstan executable located at \\n\\nvendor > bin > phpstan\\n\\nThen click on the validate button.\\n\\nThe configuration of phpstan is stored in phpstan.neon located at the root of the project folder.\\n\\n<p class=\\\"m-0 mb-05\\\"><a class=\\\"link\\\" href=\\\"/assets/downloads/quality/phpstan.neon\\\" download=\\\"phpstan.neon\\\">PhpStan config</a></p>\\n\\nIn the inspection options the config file should be selected.\\n\\n\\n### References\\n<p class=\\\"m-0 mb-05\\\"><a class=\\\"link\\\" href=\\\"https://github.com/nunomaduro/larastan\\\" target=\\\"_blank\\\">Larastan github</a></p>  \\n<p class=\\\"m-0 mb-05\\\"><a class=\\\"link\\\" href=\\\"https://www.jetbrains.com/help/phpstorm/using-phpstan.html\\\" target=\\\"_blank\\\">Phpstorm docs</a></p> \\n\");\n\n//# sourceURL=webpack://crowdfavorite.github.io/./src/docs/code/quality/phpstan.md?");

/***/ })

}]);