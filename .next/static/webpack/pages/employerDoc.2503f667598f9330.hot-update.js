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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getStaticProps: function() { return /* binding */ getStaticProps; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var jspdf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jspdf */ \"./node_modules/jspdf/dist/jspdf.es.min.js\");\n/* harmony import */ var html2canvas__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! html2canvas */ \"./node_modules/html2canvas/dist/html2canvas.js\");\n/* harmony import */ var html2canvas__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(html2canvas__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _public_assets_images_v16_150_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../public/assets/images/v16_150.png */ \"./public/assets/images/v16_150.png\");\n/* harmony import */ var _public_assets_images_v16_193_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../public/assets/images/v16_193.png */ \"./public/assets/images/v16_193.png\");\n/* harmony import */ var _public_assets_images_v25_2_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../public/assets/images/v25_2.png */ \"./public/assets/images/v25_2.png\");\n/* harmony import */ var _public_assets_images_v25_3_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../public/assets/images/v25_3.png */ \"./public/assets/images/v25_3.png\");\n/* harmony import */ var _public_assets_images_v21_2_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../public/assets/images/v21_2.png */ \"./public/assets/images/v21_2.png\");\n/* eslint-disable @next/next/no-img-element */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nconst Emp_ar = (param)=>{\n    let { data } = param;\n    _s();\n    const [userData, setUserData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});\n    const createPDF = async ()=>{\n        const pdf = new jspdf__WEBPACK_IMPORTED_MODULE_3__.jsPDF(\"portrait\", \"pt\", \"a4\");\n        const data = await html2canvas__WEBPACK_IMPORTED_MODULE_4___default()(document.querySelector(\"#pdf\"));\n        const img = data.toDataURL(\"image/jpg\");\n        const imgProperties = pdf.getImageProperties(img);\n        const pdfWidth = pdf.internal.pageSize.getWidth();\n        const pdfHeight = imgProperties.height * pdfWidth / imgProperties.width;\n        pdf.addImage(img, \"JPG\", 0, 0, pdfWidth, pdfHeight);\n        pdf.save(\"شهادة تعريف راتب.pdf\");\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"d-flex flex-column bg-light justify-content-center text-center\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: \"bg-green-500 text-white uppercase py-2 px-4 font-semibold rounded-xl cursor-pointer\",\n                style: {\n                    backgroundColor: \"#43bf6c\",\n                    color: \"#fff\"\n                },\n                onClick: createPDF,\n                type: \"button\",\n                children: \"طباعة\"\n            }, void 0, false, {\n                fileName: \"/home/erp/es-moared/components/employer/Emp_ar.js\",\n                lineNumber: 33,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    \"Employee Number: \",\n                    data.emp_no\n                ]\n            }, void 0, true, {\n                fileName: \"/home/erp/es-moared/components/employer/Emp_ar.js\",\n                lineNumber: 41,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    \"Full Name: \",\n                    data.full_name\n                ]\n            }, void 0, true, {\n                fileName: \"/home/erp/es-moared/components/employer/Emp_ar.js\",\n                lineNumber: 42,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    \"Gender: \",\n                    data.gender\n                ]\n            }, void 0, true, {\n                fileName: \"/home/erp/es-moared/components/employer/Emp_ar.js\",\n                lineNumber: 43,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/erp/es-moared/components/employer/Emp_ar.js\",\n        lineNumber: 32,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Emp_ar, \"Q2aUI0XNxoXeBT1MID3mt23CGEo=\");\n_c = Emp_ar;\nasync function getStaticProps() {\n    try {\n        // Fetch data from the API using Axios\n        const response = await axios.get(\"http://10.0.0.215:7000/api/mashhad-data/1000460459\");\n        const data = response.data;\n        // Log the data to the console for debugging\n        console.log(\"Received Data:\", data);\n        // Pass the fetched data as props to your component\n        return {\n            props: {\n                data\n            }\n        };\n    } catch (error) {\n        console.error(\"An error occurred while fetching data:\", error);\n        return {\n            props: {\n                data: null\n            }\n        };\n    }\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (Emp_ar);\nvar _c;\n$RefreshReg$(_c, \"Emp_ar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2VtcGxveWVyL0VtcF9hci5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSw0Q0FBNEM7O0FBQ007QUFDcEI7QUFDRDtBQUNRO0FBQytCO0FBQ047QUFDTjtBQUNBO0FBQ0E7QUFHeEQsTUFBTVcsU0FBUztRQUFDLEVBQUNDLElBQUksRUFBQzs7SUFDcEIsTUFBTSxDQUFDQyxVQUFVQyxZQUFZLEdBQUdaLCtDQUFRQSxDQUFDLENBQUM7SUFPMUMsTUFBTWEsWUFBWTtRQUNoQixNQUFNQyxNQUFNLElBQUlaLHdDQUFLQSxDQUFDLFlBQVksTUFBTTtRQUN4QyxNQUFNUSxPQUFPLE1BQU1QLGtEQUFXQSxDQUFDWSxTQUFTQyxhQUFhLENBQUM7UUFDdEQsTUFBTUMsTUFBTVAsS0FBS1EsU0FBUyxDQUFDO1FBQzNCLE1BQU1DLGdCQUFnQkwsSUFBSU0sa0JBQWtCLENBQUNIO1FBQzdDLE1BQU1JLFdBQVdQLElBQUlRLFFBQVEsQ0FBQ0MsUUFBUSxDQUFDQyxRQUFRO1FBQy9DLE1BQU1DLFlBQVksY0FBZUMsTUFBTSxHQUFHTCxXQUFZRixjQUFjUSxLQUFLO1FBQ3pFYixJQUFJYyxRQUFRLENBQUNYLEtBQUssT0FBTyxHQUFHLEdBQUdJLFVBQVVJO1FBQ3pDWCxJQUFJZSxJQUFJLENBQUM7SUFDWDtJQUNBLHFCQUNFLDhEQUFDQztRQUFJQyxXQUFVOzswQkFDYiw4REFBQ0M7Z0JBQ0NELFdBQVU7Z0JBQ1ZFLE9BQU87b0JBQUVDLGlCQUFpQjtvQkFBV0MsT0FBTztnQkFBTztnQkFDbkRDLFNBQVN2QjtnQkFDVHdCLE1BQUs7MEJBQ047Ozs7OzswQkFHRCw4REFBQ1A7O29CQUFJO29CQUFrQnBCLEtBQUs0QixNQUFNOzs7Ozs7OzBCQUNsQyw4REFBQ1I7O29CQUFJO29CQUFZcEIsS0FBSzZCLFNBQVM7Ozs7Ozs7MEJBQy9CLDhEQUFDVDs7b0JBQUk7b0JBQVNwQixLQUFLOEIsTUFBTTs7Ozs7Ozs7Ozs7OztBQUkvQjtHQWxDTS9CO0tBQUFBO0FBb0NDLGVBQWVnQztJQUNwQixJQUFJO1FBQ0Ysc0NBQXNDO1FBQ3RDLE1BQU1DLFdBQVcsTUFBTUMsTUFBTUMsR0FBRyxDQUFDO1FBQ2pDLE1BQU1sQyxPQUFPZ0MsU0FBU2hDLElBQUk7UUFFMUIsNENBQTRDO1FBQzVDbUMsUUFBUUMsR0FBRyxDQUFDLGtCQUFrQnBDO1FBRTlCLG1EQUFtRDtRQUNuRCxPQUFPO1lBQ0xxQyxPQUFPO2dCQUNMckM7WUFDRjtRQUNGO0lBQ0YsRUFBRSxPQUFPc0MsT0FBTztRQUNkSCxRQUFRRyxLQUFLLENBQUMsMENBQTBDQTtRQUN4RCxPQUFPO1lBQ0xELE9BQU87Z0JBQ0xyQyxNQUFNO1lBQ1I7UUFDRjtJQUNGO0FBQ0Y7QUFFQSwrREFBZUQsTUFBTUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2VtcGxveWVyL0VtcF9hci5qcz9iM2FkIl0sInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIEBuZXh0L25leHQvbm8taW1nLWVsZW1lbnQgKi9cclxuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnXHJcbmltcG9ydCB7IGpzUERGIH0gZnJvbSAnanNwZGYnXHJcbmltcG9ydCBodG1sMmNhbnZhcyBmcm9tICdodG1sMmNhbnZhcydcclxuaW1wb3J0IEJhY2tncm91bmRpbWFnZSBmcm9tICcuLi8uLi9wdWJsaWMvYXNzZXRzL2ltYWdlcy92MTZfMTUwLnBuZydcclxuaW1wb3J0IExvZ29pbWFnZSBmcm9tICcuLi8uLi9wdWJsaWMvYXNzZXRzL2ltYWdlcy92MTZfMTkzLnBuZydcclxuaW1wb3J0IHNpZ24xIGZyb20gJy4uLy4uL3B1YmxpYy9hc3NldHMvaW1hZ2VzL3YyNV8yLnBuZydcclxuaW1wb3J0IHNpZ24yIGZyb20gJy4uLy4uL3B1YmxpYy9hc3NldHMvaW1hZ2VzL3YyNV8zLnBuZydcclxuaW1wb3J0IHNpZ24zIGZyb20gJy4uLy4uL3B1YmxpYy9hc3NldHMvaW1hZ2VzL3YyMV8yLnBuZydcclxuXHJcblxyXG5jb25zdCBFbXBfYXIgPSAoe2RhdGF9KSA9PiB7XHJcbiAgY29uc3QgW3VzZXJEYXRhLCBzZXRVc2VyRGF0YV0gPSB1c2VTdGF0ZSh7fSk7XHJcblxyXG5cclxuXHJcblxyXG4gIFxyXG5cclxuICBjb25zdCBjcmVhdGVQREYgPSBhc3luYyAoKSA9PiB7XHJcbiAgICBjb25zdCBwZGYgPSBuZXcganNQREYoJ3BvcnRyYWl0JywgJ3B0JywgJ2E0JylcclxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBodG1sMmNhbnZhcyhkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcGRmJykpXHJcbiAgICBjb25zdCBpbWcgPSBkYXRhLnRvRGF0YVVSTCgnaW1hZ2UvanBnJylcclxuICAgIGNvbnN0IGltZ1Byb3BlcnRpZXMgPSBwZGYuZ2V0SW1hZ2VQcm9wZXJ0aWVzKGltZylcclxuICAgIGNvbnN0IHBkZldpZHRoID0gcGRmLmludGVybmFsLnBhZ2VTaXplLmdldFdpZHRoKClcclxuICAgIGNvbnN0IHBkZkhlaWdodCA9IChpbWdQcm9wZXJ0aWVzLmhlaWdodCAqIHBkZldpZHRoKSAvIGltZ1Byb3BlcnRpZXMud2lkdGhcclxuICAgIHBkZi5hZGRJbWFnZShpbWcsICdKUEcnLCAwLCAwLCBwZGZXaWR0aCwgcGRmSGVpZ2h0KVxyXG4gICAgcGRmLnNhdmUoJ9i02YfYp9iv2Kkg2KrYudix2YrZgSDYsdin2KrYqC5wZGYnKVxyXG4gIH1cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJkLWZsZXggZmxleC1jb2x1bW4gYmctbGlnaHQganVzdGlmeS1jb250ZW50LWNlbnRlciB0ZXh0LWNlbnRlclwiPlxyXG4gICAgICA8YnV0dG9uXHJcbiAgICAgICAgY2xhc3NOYW1lPVwiYmctZ3JlZW4tNTAwIHRleHQtd2hpdGUgdXBwZXJjYXNlIHB5LTIgcHgtNCBmb250LXNlbWlib2xkIHJvdW5kZWQteGwgY3Vyc29yLXBvaW50ZXJcIlxyXG4gICAgICAgIHN0eWxlPXt7IGJhY2tncm91bmRDb2xvcjogJyM0M2JmNmMnLCBjb2xvcjogJyNmZmYnIH19XHJcbiAgICAgICAgb25DbGljaz17Y3JlYXRlUERGfVxyXG4gICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICA+XHJcbiAgICAgICAg2LfYqNin2LnYqVxyXG4gICAgICA8L2J1dHRvbj5cclxuICAgICAgPGRpdj5FbXBsb3llZSBOdW1iZXI6IHtkYXRhLmVtcF9ub308L2Rpdj5cclxuICAgICAgPGRpdj5GdWxsIE5hbWU6IHtkYXRhLmZ1bGxfbmFtZX08L2Rpdj5cclxuICAgICAgPGRpdj5HZW5kZXI6IHtkYXRhLmdlbmRlcn08L2Rpdj5cclxuICAgICAgey8qIEluY2x1ZGUgb3RoZXIgcHJvcGVydGllcyBmcm9tIHRoZSBkYXRhIG9iamVjdCBhcyBuZWVkZWQgKi99XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKCkge1xyXG4gIHRyeSB7XHJcbiAgICAvLyBGZXRjaCBkYXRhIGZyb20gdGhlIEFQSSB1c2luZyBBeGlvc1xyXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5nZXQoJ2h0dHA6Ly8xMC4wLjAuMjE1OjcwMDAvYXBpL21hc2hoYWQtZGF0YS8xMDAwNDYwNDU5Jyk7XHJcbiAgICBjb25zdCBkYXRhID0gcmVzcG9uc2UuZGF0YTtcclxuXHJcbiAgICAvLyBMb2cgdGhlIGRhdGEgdG8gdGhlIGNvbnNvbGUgZm9yIGRlYnVnZ2luZ1xyXG4gICAgY29uc29sZS5sb2coJ1JlY2VpdmVkIERhdGE6JywgZGF0YSk7XHJcblxyXG4gICAgLy8gUGFzcyB0aGUgZmV0Y2hlZCBkYXRhIGFzIHByb3BzIHRvIHlvdXIgY29tcG9uZW50XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBwcm9wczoge1xyXG4gICAgICAgIGRhdGEsXHJcbiAgICAgIH0sXHJcbiAgICB9O1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKCdBbiBlcnJvciBvY2N1cnJlZCB3aGlsZSBmZXRjaGluZyBkYXRhOicsIGVycm9yKTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHByb3BzOiB7XHJcbiAgICAgICAgZGF0YTogbnVsbCxcclxuICAgICAgfSxcclxuICAgIH07XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBFbXBfYXI7XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiSW1hZ2UiLCJqc1BERiIsImh0bWwyY2FudmFzIiwiQmFja2dyb3VuZGltYWdlIiwiTG9nb2ltYWdlIiwic2lnbjEiLCJzaWduMiIsInNpZ24zIiwiRW1wX2FyIiwiZGF0YSIsInVzZXJEYXRhIiwic2V0VXNlckRhdGEiLCJjcmVhdGVQREYiLCJwZGYiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJpbWciLCJ0b0RhdGFVUkwiLCJpbWdQcm9wZXJ0aWVzIiwiZ2V0SW1hZ2VQcm9wZXJ0aWVzIiwicGRmV2lkdGgiLCJpbnRlcm5hbCIsInBhZ2VTaXplIiwiZ2V0V2lkdGgiLCJwZGZIZWlnaHQiLCJoZWlnaHQiLCJ3aWR0aCIsImFkZEltYWdlIiwic2F2ZSIsImRpdiIsImNsYXNzTmFtZSIsImJ1dHRvbiIsInN0eWxlIiwiYmFja2dyb3VuZENvbG9yIiwiY29sb3IiLCJvbkNsaWNrIiwidHlwZSIsImVtcF9ubyIsImZ1bGxfbmFtZSIsImdlbmRlciIsImdldFN0YXRpY1Byb3BzIiwicmVzcG9uc2UiLCJheGlvcyIsImdldCIsImNvbnNvbGUiLCJsb2ciLCJwcm9wcyIsImVycm9yIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/employer/Emp_ar.js\n"));

/***/ })

});