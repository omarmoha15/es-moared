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

/***/ "./components/employer/Emp_ar.js":
/*!***************************************!*\
  !*** ./components/employer/Emp_ar.js ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var jspdf__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jspdf */ \"./node_modules/jspdf/dist/jspdf.es.min.js\");\n/* harmony import */ var html2canvas__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! html2canvas */ \"./node_modules/html2canvas/dist/html2canvas.js\");\n/* harmony import */ var html2canvas__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(html2canvas__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_4__);\n/* eslint-disable @next/next/no-img-element */ \nvar _s = $RefreshSig$();\n\n\n\n\nconst Emp_ar = (param)=>{\n    let { data } = param;\n    _s();\n    const [userData, setUserData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});\n    const createPDF = async ()=>{\n        const pdf = new jspdf__WEBPACK_IMPORTED_MODULE_2__.jsPDF(\"portrait\", \"pt\", \"a4\");\n        const data = await html2canvas__WEBPACK_IMPORTED_MODULE_3___default()(document.querySelector(\"#pdf\"));\n        const img = data.toDataURL(\"image/jpg\");\n        const imgProperties = pdf.getImageProperties(img);\n        const pdfWidth = pdf.internal.pageSize.getWidth();\n        const pdfHeight = imgProperties.height * pdfWidth / imgProperties.width;\n        pdf.addImage(img, \"JPG\", 0, 0, pdfWidth, pdfHeight);\n        pdf.save(\"شهادة تعريف راتب.pdf\");\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"d-flex flex-column bg-light justify-content-center text-center\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"box-border text-base\",\n            children: data.emp_no\n        }, void 0, false, {\n            fileName: \"/home/erp/es-moared/components/employer/Emp_ar.js\",\n            lineNumber: 34,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/home/erp/es-moared/components/employer/Emp_ar.js\",\n        lineNumber: 25,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Emp_ar, \"Q2aUI0XNxoXeBT1MID3mt23CGEo=\");\n_c = Emp_ar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Emp_ar);\nvar _c;\n$RefreshReg$(_c, \"Emp_ar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2VtcGxveWVyL0VtcF9hci5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsNENBQTRDOztBQUNPO0FBQ3JCO0FBQ1E7QUFDUDtBQUcvQixNQUFNTSxTQUFTO1FBQUMsRUFBRUMsSUFBSSxFQUFFOztJQUN0QixNQUFNLENBQUNDLFVBQVVDLFlBQVksR0FBR1AsK0NBQVFBLENBQUMsQ0FBQztJQUUxQyxNQUFNUSxZQUFZO1FBQ2hCLE1BQU1DLE1BQU0sSUFBSVIsd0NBQUtBLENBQUMsWUFBWSxNQUFNO1FBQ3hDLE1BQU1JLE9BQU8sTUFBTUgsa0RBQVdBLENBQUNRLFNBQVNDLGFBQWEsQ0FBQztRQUN0RCxNQUFNQyxNQUFNUCxLQUFLUSxTQUFTLENBQUM7UUFDM0IsTUFBTUMsZ0JBQWdCTCxJQUFJTSxrQkFBa0IsQ0FBQ0g7UUFDN0MsTUFBTUksV0FBV1AsSUFBSVEsUUFBUSxDQUFDQyxRQUFRLENBQUNDLFFBQVE7UUFDL0MsTUFBTUMsWUFBWSxjQUFlQyxNQUFNLEdBQUdMLFdBQVlGLGNBQWNRLEtBQUs7UUFDekViLElBQUljLFFBQVEsQ0FBQ1gsS0FBSyxPQUFPLEdBQUcsR0FBR0ksVUFBVUk7UUFDekNYLElBQUllLElBQUksQ0FBQztJQUNYO0lBSUEscUJBQ0UsOERBQUNDO1FBQUlDLFdBQVU7a0JBU2IsNEVBQUNEO1lBQUlDLFdBQVU7c0JBQ2RyQixLQUFLc0IsTUFBTTs7Ozs7Ozs7Ozs7QUFLbEI7R0FoQ012QjtLQUFBQTtBQWtDTiwrREFBZUEsTUFBTUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2VtcGxveWVyL0VtcF9hci5qcz9iM2FkIl0sInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIEBuZXh0L25leHQvbm8taW1nLWVsZW1lbnQgKi9cclxuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IGpzUERGIH0gZnJvbSAnanNwZGYnO1xyXG5pbXBvcnQgaHRtbDJjYW52YXMgZnJvbSAnaHRtbDJjYW52YXMnO1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSc7XHJcblxyXG5cclxuY29uc3QgRW1wX2FyID0gKHsgZGF0YSB9KSA9PiB7XHJcbiAgY29uc3QgW3VzZXJEYXRhLCBzZXRVc2VyRGF0YV0gPSB1c2VTdGF0ZSh7fSk7XHJcblxyXG4gIGNvbnN0IGNyZWF0ZVBERiA9IGFzeW5jICgpID0+IHtcclxuICAgIGNvbnN0IHBkZiA9IG5ldyBqc1BERigncG9ydHJhaXQnLCAncHQnLCAnYTQnKTtcclxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBodG1sMmNhbnZhcyhkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcGRmJykpO1xyXG4gICAgY29uc3QgaW1nID0gZGF0YS50b0RhdGFVUkwoJ2ltYWdlL2pwZycpO1xyXG4gICAgY29uc3QgaW1nUHJvcGVydGllcyA9IHBkZi5nZXRJbWFnZVByb3BlcnRpZXMoaW1nKTtcclxuICAgIGNvbnN0IHBkZldpZHRoID0gcGRmLmludGVybmFsLnBhZ2VTaXplLmdldFdpZHRoKCk7XHJcbiAgICBjb25zdCBwZGZIZWlnaHQgPSAoaW1nUHJvcGVydGllcy5oZWlnaHQgKiBwZGZXaWR0aCkgLyBpbWdQcm9wZXJ0aWVzLndpZHRoO1xyXG4gICAgcGRmLmFkZEltYWdlKGltZywgJ0pQRycsIDAsIDAsIHBkZldpZHRoLCBwZGZIZWlnaHQpO1xyXG4gICAgcGRmLnNhdmUoJ9i02YfYp9iv2Kkg2KrYudix2YrZgSDYsdin2KrYqC5wZGYnKTtcclxuICB9XHJcblxyXG4gXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBmbGV4LWNvbHVtbiBiZy1saWdodCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIHRleHQtY2VudGVyXCI+XHJcbiAgICAgIHsvKiA8YnV0dG9uXHJcbiAgICAgICAgY2xhc3NOYW1lPVwiYmctZ3JlZW4tNTAwIHRleHQtd2hpdGUgdXBwZXJjYXNlIHB5LTIgcHgtNCBmb250LXNlbWlib2xkIHJvdW5kZWQteGwgY3Vyc29yLXBvaW50ZXJcIlxyXG4gICAgICAgIHN0eWxlPXt7IGJhY2tncm91bmRDb2xvcjogJyM0M2JmNmMnLCBjb2xvcjogJyNmZmYnIH19XHJcbiAgICAgICAgb25DbGljaz17Y3JlYXRlUERGfVxyXG4gICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICA+XHJcbiAgICAgICAg2LfYqNin2LnYqVxyXG4gICAgICA8L2J1dHRvbj4gKi99XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm94LWJvcmRlciB0ZXh0LWJhc2VcIj5cclxuICAgICAge2RhdGEuZW1wX25vfVxyXG4gICAgICB7Lyoge2RhdGEuYm9keX0gKi99XHJcbiAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBFbXBfYXI7XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwianNQREYiLCJodG1sMmNhbnZhcyIsIkltYWdlIiwiRW1wX2FyIiwiZGF0YSIsInVzZXJEYXRhIiwic2V0VXNlckRhdGEiLCJjcmVhdGVQREYiLCJwZGYiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJpbWciLCJ0b0RhdGFVUkwiLCJpbWdQcm9wZXJ0aWVzIiwiZ2V0SW1hZ2VQcm9wZXJ0aWVzIiwicGRmV2lkdGgiLCJpbnRlcm5hbCIsInBhZ2VTaXplIiwiZ2V0V2lkdGgiLCJwZGZIZWlnaHQiLCJoZWlnaHQiLCJ3aWR0aCIsImFkZEltYWdlIiwic2F2ZSIsImRpdiIsImNsYXNzTmFtZSIsImVtcF9ubyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/employer/Emp_ar.js\n"));

/***/ })

});