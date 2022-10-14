"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Home),\n/* harmony export */   \"getStaticProps\": () => (/* binding */ getStaticProps)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n// import styles from '../styles/globals.css'\n\n\nasync function getStaticProps() {\n    const res = await fetch(\"https://jsonplaceholder.typicode.com/users\");\n    const posts = await res.json();\n    return {\n        props: {\n            posts\n        }\n    };\n}\nfunction Home({ posts  }) {\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex justify-between flexflow-column w-52 h-60 m-auto \",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: ()=>router.push(\"signUp\"),\n                children: \"БҮРТГҮҮЛЭХ\"\n            }, void 0, false, {\n                fileName: \"/Users/bilguunleap2/Desktop/mongoDbTodo/frontend/pages/index.js\",\n                lineNumber: 21,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: ()=>router.push(\"loginPage\"),\n                children: \"НЭВТРЭХ\"\n            }, void 0, false, {\n                fileName: \"/Users/bilguunleap2/Desktop/mongoDbTodo/frontend/pages/index.js\",\n                lineNumber: 22,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/bilguunleap2/Desktop/mongoDbTodo/frontend/pages/index.js\",\n        lineNumber: 20,\n        columnNumber: 5\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSw2Q0FBNkM7QUFDN0M7QUFBcUM7QUFDOUIsZUFBZUMsY0FBYyxHQUFHO0lBRXJDLE1BQU1DLEdBQUcsR0FBRyxNQUFNQyxLQUFLLENBQUMsNENBQTRDLENBQUM7SUFFckUsTUFBTUMsS0FBSyxHQUFHLE1BQU1GLEdBQUcsQ0FBQ0csSUFBSSxFQUFFO0lBRTlCLE9BQU87UUFDTEMsS0FBSyxFQUFFO1lBQ0xGLEtBQUs7U0FDTjtLQUNGLENBQUM7QUFDSixDQUFDO0FBRWMsU0FBU0csSUFBSSxDQUFDLEVBQUVILEtBQUssR0FBRSxFQUFFO0lBQ3RDLE1BQU1JLE1BQU0sR0FBR1Isc0RBQVMsRUFBRTtJQUMxQixxQkFFRSw4REFBQ1MsS0FBRztRQUFDQyxTQUFTLEVBQUMsd0RBQXlEOzswQkFDdEUsOERBQUNDLFFBQU07Z0JBQUNDLE9BQU8sRUFBRSxJQUFNSixNQUFNLENBQUNLLElBQUksQ0FBQyxRQUFRLENBQUM7MEJBQUUsWUFBVTs7Ozs7b0JBQVM7MEJBQ2pFLDhEQUFDRixRQUFNO2dCQUFFQyxPQUFPLEVBQUUsSUFBTUosTUFBTSxDQUFDSyxJQUFJLENBQUMsV0FBVyxDQUFDOzBCQUFFLFNBQU87Ozs7O29CQUFTOzs7Ozs7WUFDOUQsQ0FDTjtBQUNKLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0LW15LWFwcC8uL3BhZ2VzL2luZGV4LmpzP2JlZTciXSwic291cmNlc0NvbnRlbnQiOlsiLy8gaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zdHlsZXMvZ2xvYmFscy5jc3MnXG5pbXBvcnQge3VzZVJvdXRlcn0gZnJvbSBcIm5leHQvcm91dGVyXCJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcygpIHtcblxuICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChcImh0dHBzOi8vanNvbnBsYWNlaG9sZGVyLnR5cGljb2RlLmNvbS91c2Vyc1wiKTtcblxuICBjb25zdCBwb3N0cyA9IGF3YWl0IHJlcy5qc29uKCk7XG5cbiAgcmV0dXJuIHtcbiAgICBwcm9wczoge1xuICAgICAgcG9zdHMsXG4gICAgfSxcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSh7IHBvc3RzIH0pIHtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gIHJldHVybiAoXG5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1iZXR3ZWVuIGZsZXhmbG93LWNvbHVtbiB3LTUyIGgtNjAgbS1hdXRvICBcIj5cbiAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gcm91dGVyLnB1c2goXCJzaWduVXBcIil9PtCR0q7QoNCi0JPSrtKu0JvQrdClPC9idXR0b24+XG4gICAgICA8YnV0dG9uICBvbkNsaWNrPXsoKSA9PiByb3V0ZXIucHVzaChcImxvZ2luUGFnZVwiKX0+0J3QrdCS0KLQoNCt0KU8L2J1dHRvbj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiAgXG5cblxuIl0sIm5hbWVzIjpbInVzZVJvdXRlciIsImdldFN0YXRpY1Byb3BzIiwicmVzIiwiZmV0Y2giLCJwb3N0cyIsImpzb24iLCJwcm9wcyIsIkhvbWUiLCJyb3V0ZXIiLCJkaXYiLCJjbGFzc05hbWUiLCJidXR0b24iLCJvbkNsaWNrIiwicHVzaCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.js"));
module.exports = __webpack_exports__;

})();