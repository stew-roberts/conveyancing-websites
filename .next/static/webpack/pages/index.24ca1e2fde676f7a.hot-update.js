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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _FontAwesomeIcon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./FontAwesomeIcon */ \"./components/FontAwesomeIcon.tsx\");\n\n\n\nfunction Feature(param) {\n    let { title , description , fontAwesomeIconName  } = param;\n    console.log(fontAwesomeIconName);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-col items-center justify-center w-full md:w-72 shadow-lg rounded-md px-6 py-14 hover:bg-gradient-to-r from-sky-500 from-10% via-sky-600 via-70% to-sky-700 hover:text-white cursor-pointer\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"flex flex-col items-center justify-center\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_FontAwesomeIcon__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                    icon: fontAwesomeIconName.toString(),\n                    size: \"1\",\n                    color: \"text-base-500\"\n                }, void 0, false, {\n                    fileName: \"/Users/stew/Documents/www/conveyacing-websites/components/Feature.tsx\",\n                    lineNumber: 9,\n                    columnNumber: 13\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                    className: \"text-base py-8\",\n                    children: title\n                }, void 0, false, {\n                    fileName: \"/Users/stew/Documents/www/conveyacing-websites/components/Feature.tsx\",\n                    lineNumber: 10,\n                    columnNumber: 13\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    className: \"text-sm text-center\",\n                    children: description\n                }, void 0, false, {\n                    fileName: \"/Users/stew/Documents/www/conveyacing-websites/components/Feature.tsx\",\n                    lineNumber: 11,\n                    columnNumber: 13\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/stew/Documents/www/conveyacing-websites/components/Feature.tsx\",\n            lineNumber: 8,\n            columnNumber: 9\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/stew/Documents/www/conveyacing-websites/components/Feature.tsx\",\n        lineNumber: 7,\n        columnNumber: 5\n    }, this);\n}\n_c = Feature;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Feature);\nvar _c;\n$RefreshReg$(_c, \"Feature\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0ZlYXR1cmUudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FBQXlCO0FBQ3VCO0FBRWhELFNBQVNFLFFBQVEsS0FBeUMsRUFBRTtRQUEzQyxFQUFDQyxNQUFLLEVBQUVDLFlBQVcsRUFBRUMsb0JBQW1CLEVBQUMsR0FBekM7SUFDZkMsUUFBUUMsR0FBRyxDQUFDRjtJQUNaLHFCQUNFLDhEQUFDRztRQUFJQyxXQUFVO2tCQUNYLDRFQUFDRDtZQUFJQyxXQUFVOzs4QkFDWCw4REFBQ1Isd0RBQWVBO29CQUFDUyxNQUFNTCxvQkFBb0JNLFFBQVE7b0JBQUlDLE1BQUs7b0JBQUlDLE9BQU07Ozs7Ozs4QkFDdEUsOERBQUNDO29CQUFHTCxXQUFVOzhCQUFrQk47Ozs7Ozs4QkFDaEMsOERBQUNZO29CQUFFTixXQUFVOzhCQUF1Qkw7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSWhEO0tBWFNGO0FBYVQsK0RBQWVBLE9BQU9BLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9GZWF0dXJlLnRzeD81MGI4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBGb250QXdlc29tZUljb24gZnJvbSAnLi9Gb250QXdlc29tZUljb24nO1xuXG5mdW5jdGlvbiBGZWF0dXJlKHt0aXRsZSwgZGVzY3JpcHRpb24sIGZvbnRBd2Vzb21lSWNvbk5hbWV9KSB7XG4gIGNvbnNvbGUubG9nKGZvbnRBd2Vzb21lSWNvbk5hbWUpO1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgdy1mdWxsIG1kOnctNzIgc2hhZG93LWxnIHJvdW5kZWQtbWQgcHgtNiBweS0xNCBob3ZlcjpiZy1ncmFkaWVudC10by1yIGZyb20tc2t5LTUwMCBmcm9tLTEwJSB2aWEtc2t5LTYwMCB2aWEtNzAlIHRvLXNreS03MDAgaG92ZXI6dGV4dC13aGl0ZSBjdXJzb3ItcG9pbnRlclwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyXCI+XG4gICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZvbnRBd2Vzb21lSWNvbk5hbWUudG9TdHJpbmcoKX0gc2l6ZT0nMScgY29sb3I9J3RleHQtYmFzZS01MDAnIC8+XG4gICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGV4dC1iYXNlIHB5LThcIj57dGl0bGV9PC9oMz5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtc20gdGV4dC1jZW50ZXJcIj57ZGVzY3JpcHRpb259PC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBGZWF0dXJlIl0sIm5hbWVzIjpbIlJlYWN0IiwiRm9udEF3ZXNvbWVJY29uIiwiRmVhdHVyZSIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJmb250QXdlc29tZUljb25OYW1lIiwiY29uc29sZSIsImxvZyIsImRpdiIsImNsYXNzTmFtZSIsImljb24iLCJ0b1N0cmluZyIsInNpemUiLCJjb2xvciIsImgzIiwicCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Feature.tsx\n"));

/***/ })

});