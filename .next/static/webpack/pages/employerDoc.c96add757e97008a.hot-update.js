"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/employerDoc",{

/***/ "./pages/employerDoc.js":
/*!******************************!*\
  !*** ./pages/employerDoc.js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_employer_Emp_ar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/employer/Emp_ar */ \"./components/employer/Emp_ar.js\");\n/* harmony import */ var _pages_api_withAuth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../pages/api/withAuth */ \"./pages/api/withAuth.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n\nvar _s = $RefreshSig$();\n\n\n // Import the withAuth higher-order component\n\nfunction employerDoc(param) {\n    let { token } = param;\n    _s();\n    const [data, setData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        // Fetch the data from the API and pass the JWT token with the request headers\n        axios__WEBPACK_IMPORTED_MODULE_4__[\"default\"].get(\"http://10.0.0.215:7000/api/mashhad-data/1000460459\", {\n            headers: {\n                Authorization: \"Bearer \".concat(token)\n            }\n        }).then((response)=>{\n            setData(response.data);\n        }).catch((error)=>{\n            console.error(\"Error fetching data:\", error);\n        });\n    }, [\n        token\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"md:w-1/2 mx-auto shadow-2xl rounded-3xl pb-2 bg-gray-100\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"my-10 p-10\",\n            children: data ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_employer_Emp_ar__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                data: data\n            }, void 0, false, {\n                fileName: \"/home/erp/es-moared/pages/employerDoc.js\",\n                lineNumber: 28,\n                columnNumber: 11\n            }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: \"Loading data...\"\n            }, void 0, false, {\n                fileName: \"/home/erp/es-moared/pages/employerDoc.js\",\n                lineNumber: 30,\n                columnNumber: 11\n            }, this)\n        }, void 0, false, {\n            fileName: \"/home/erp/es-moared/pages/employerDoc.js\",\n            lineNumber: 26,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/home/erp/es-moared/pages/employerDoc.js\",\n        lineNumber: 25,\n        columnNumber: 5\n    }, this);\n}\n_s(employerDoc, \"fQZRxy/+nAZ7NLS1X4dVhrlp8Go=\");\n// Use the withAuth higher-order component to pass the JWT token as a prop\n/* harmony default export */ __webpack_exports__[\"default\"] = ((0,_pages_api_withAuth__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(employerDoc));\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9lbXBsb3llckRvYy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQW1EO0FBQ0U7QUFDUixDQUFDLDZDQUE2QztBQUNqRTtBQUUxQixTQUFTTSxZQUFZLEtBQVM7UUFBVCxFQUFFQyxLQUFLLEVBQUUsR0FBVDs7SUFDbkIsTUFBTSxDQUFDQyxNQUFNQyxRQUFRLEdBQUdSLCtDQUFRQSxDQUFDO0lBRWpDQyxnREFBU0EsQ0FBQztRQUNSLDhFQUE4RTtRQUM5RUcsaURBQVMsQ0FBQyxzREFBc0Q7WUFDOURNLFNBQVM7Z0JBQ1BDLGVBQWUsVUFBZ0IsT0FBTkw7WUFDM0I7UUFDRixHQUNHTSxJQUFJLENBQUMsQ0FBQ0M7WUFDTEwsUUFBUUssU0FBU04sSUFBSTtRQUN2QixHQUNDTyxLQUFLLENBQUMsQ0FBQ0M7WUFDTkMsUUFBUUQsS0FBSyxDQUFDLHdCQUF3QkE7UUFDeEM7SUFDSixHQUFHO1FBQUNUO0tBQU07SUFFVixxQkFDRSw4REFBQ1c7UUFBSUMsV0FBVTtrQkFDYiw0RUFBQ0Q7WUFBSUMsV0FBVTtzQkFDWlgscUJBQ0MsOERBQUNMLG1FQUFRQTtnQkFBQ0ssTUFBTUE7Ozs7O3FDQUVoQiw4REFBQ1k7MEJBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLYjtHQTdCU2Q7QUErQlQsMEVBQTBFO0FBQzFFLCtEQUFlRiwrREFBUUEsQ0FBQ0UsWUFBWUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9lbXBsb3llckRvYy5qcz84N2QxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IEVtcGxveWVyIGZyb20gJy4uL2NvbXBvbmVudHMvZW1wbG95ZXIvRW1wX2FyJztcbmltcG9ydCB3aXRoQXV0aCBmcm9tICcuLi9wYWdlcy9hcGkvd2l0aEF1dGgnOyAvLyBJbXBvcnQgdGhlIHdpdGhBdXRoIGhpZ2hlci1vcmRlciBjb21wb25lbnRcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5cbmZ1bmN0aW9uIGVtcGxveWVyRG9jKHsgdG9rZW4gfSkge1xuICBjb25zdCBbZGF0YSwgc2V0RGF0YV0gPSB1c2VTdGF0ZShudWxsKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIC8vIEZldGNoIHRoZSBkYXRhIGZyb20gdGhlIEFQSSBhbmQgcGFzcyB0aGUgSldUIHRva2VuIHdpdGggdGhlIHJlcXVlc3QgaGVhZGVyc1xuICAgIGF4aW9zLmdldCgnaHR0cDovLzEwLjAuMC4yMTU6NzAwMC9hcGkvbWFzaGhhZC1kYXRhLzEwMDA0NjA0NTknLCB7XG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgIEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHt0b2tlbn1gLFxuICAgICAgfSxcbiAgICB9KVxuICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgIHNldERhdGEocmVzcG9uc2UuZGF0YSk7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBmZXRjaGluZyBkYXRhOicsIGVycm9yKTtcbiAgICAgIH0pO1xuICB9LCBbdG9rZW5dKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwibWQ6dy0xLzIgbXgtYXV0byBzaGFkb3ctMnhsIHJvdW5kZWQtM3hsIHBiLTIgYmctZ3JheS0xMDBcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXktMTAgcC0xMFwiPlxuICAgICAgICB7ZGF0YSA/IChcbiAgICAgICAgICA8RW1wbG95ZXIgZGF0YT17ZGF0YX0gLz5cbiAgICAgICAgKSA6IChcbiAgICAgICAgICA8cD5Mb2FkaW5nIGRhdGEuLi48L3A+XG4gICAgICAgICl9XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuLy8gVXNlIHRoZSB3aXRoQXV0aCBoaWdoZXItb3JkZXIgY29tcG9uZW50IHRvIHBhc3MgdGhlIEpXVCB0b2tlbiBhcyBhIHByb3BcbmV4cG9ydCBkZWZhdWx0IHdpdGhBdXRoKGVtcGxveWVyRG9jKTtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiRW1wbG95ZXIiLCJ3aXRoQXV0aCIsImF4aW9zIiwiZW1wbG95ZXJEb2MiLCJ0b2tlbiIsImRhdGEiLCJzZXREYXRhIiwiZ2V0IiwiaGVhZGVycyIsIkF1dGhvcml6YXRpb24iLCJ0aGVuIiwicmVzcG9uc2UiLCJjYXRjaCIsImVycm9yIiwiY29uc29sZSIsImRpdiIsImNsYXNzTmFtZSIsInAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/employerDoc.js\n"));

/***/ })

});