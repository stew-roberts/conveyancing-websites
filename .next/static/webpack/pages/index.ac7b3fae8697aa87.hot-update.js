"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/Feature.tsx":
/*!********************************!*\
  !*** ./components/Feature.tsx ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _IconComponent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./IconComponent */ \"./components/IconComponent.tsx\");\n\n\n\nfunction Feature(param) {\n    let { title , description , fontAwesomeIconName  } = param;\n    console.log(fontAwesomeIconName);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-col items-center justify-center w-full md:w-72 shadow-lg rounded-md px-6 py-14 hover:bg-gradient-to-r from-sky-500 from-10% via-sky-600 via-70% to-sky-700 hover:text-white cursor-pointer\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"flex flex-col items-center justify-center\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_IconComponent__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                    icon: fontAwesomeIconName,\n                    size: 24,\n                    color: \"text-base-500\"\n                }, void 0, false, {\n                    fileName: \"/Users/stew/Documents/www/conveyacing-websites/components/Feature.tsx\",\n                    lineNumber: 9,\n                    columnNumber: 13\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                    className: \"text-base py-8\",\n                    children: title\n                }, void 0, false, {\n                    fileName: \"/Users/stew/Documents/www/conveyacing-websites/components/Feature.tsx\",\n                    lineNumber: 10,\n                    columnNumber: 13\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    className: \"text-sm text-center\",\n                    children: description\n                }, void 0, false, {\n                    fileName: \"/Users/stew/Documents/www/conveyacing-websites/components/Feature.tsx\",\n                    lineNumber: 11,\n                    columnNumber: 13\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/stew/Documents/www/conveyacing-websites/components/Feature.tsx\",\n            lineNumber: 8,\n            columnNumber: 9\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/stew/Documents/www/conveyacing-websites/components/Feature.tsx\",\n        lineNumber: 7,\n        columnNumber: 5\n    }, this);\n}\n_c = Feature;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Feature);\nvar _c;\n$RefreshReg$(_c, \"Feature\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0ZlYXR1cmUudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FBQXlCO0FBQ21CO0FBRTVDLFNBQVNFLFFBQVEsS0FBeUMsRUFBRTtRQUEzQyxFQUFDQyxNQUFLLEVBQUVDLFlBQVcsRUFBRUMsb0JBQW1CLEVBQUMsR0FBekM7SUFDZkMsUUFBUUMsR0FBRyxDQUFDRjtJQUNaLHFCQUNFLDhEQUFDRztRQUFJQyxXQUFVO2tCQUNYLDRFQUFDRDtZQUFJQyxXQUFVOzs4QkFDWCw4REFBQ1Isc0RBQWFBO29CQUFDUyxNQUFNTDtvQkFBcUJNLE1BQU07b0JBQUlDLE9BQU07Ozs7Ozs4QkFDMUQsOERBQUNDO29CQUFHSixXQUFVOzhCQUFrQk47Ozs7Ozs4QkFDaEMsOERBQUNXO29CQUFFTCxXQUFVOzhCQUF1Qkw7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSWhEO0tBWFNGO0FBYVQsK0RBQWVBLE9BQU9BLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9GZWF0dXJlLnRzeD81MGI4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBJY29uQ29tcG9uZW50IGZyb20gJy4vSWNvbkNvbXBvbmVudCc7XG5cbmZ1bmN0aW9uIEZlYXR1cmUoe3RpdGxlLCBkZXNjcmlwdGlvbiwgZm9udEF3ZXNvbWVJY29uTmFtZX0pIHtcbiAgY29uc29sZS5sb2coZm9udEF3ZXNvbWVJY29uTmFtZSk7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciB3LWZ1bGwgbWQ6dy03MiBzaGFkb3ctbGcgcm91bmRlZC1tZCBweC02IHB5LTE0IGhvdmVyOmJnLWdyYWRpZW50LXRvLXIgZnJvbS1za3ktNTAwIGZyb20tMTAlIHZpYS1za3ktNjAwIHZpYS03MCUgdG8tc2t5LTcwMCBob3Zlcjp0ZXh0LXdoaXRlIGN1cnNvci1wb2ludGVyXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXJcIj5cbiAgICAgICAgICAgIDxJY29uQ29tcG9uZW50IGljb249e2ZvbnRBd2Vzb21lSWNvbk5hbWV9IHNpemU9ezI0fSBjb2xvcj1cInRleHQtYmFzZS01MDBcIiAvPlxuICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRleHQtYmFzZSBweS04XCI+e3RpdGxlfTwvaDM+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXNtIHRleHQtY2VudGVyXCI+e2Rlc2NyaXB0aW9ufTwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgRmVhdHVyZSJdLCJuYW1lcyI6WyJSZWFjdCIsIkljb25Db21wb25lbnQiLCJGZWF0dXJlIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsImZvbnRBd2Vzb21lSWNvbk5hbWUiLCJjb25zb2xlIiwibG9nIiwiZGl2IiwiY2xhc3NOYW1lIiwiaWNvbiIsInNpemUiLCJjb2xvciIsImgzIiwicCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Feature.tsx\n"));

/***/ })

});