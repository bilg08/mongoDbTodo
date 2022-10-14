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
exports.id = "pages/signUp";
exports.ids = ["pages/signUp"];
exports.modules = {

/***/ "./pages/signUp.js":
/*!*************************!*\
  !*** ./pages/signUp.js ***!
  \*************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_2__]);\naxios__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\nconst SignUp = ()=>{\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    const [userInfo, setUserInfo] = react__WEBPACK_IMPORTED_MODULE_1___default().useState({});\n    function handleUserInput(e) {\n        setUserInfo({\n            ...userInfo,\n            [e.target.name]: e.target.value\n        });\n    }\n    async function handleSendDataToServer() {\n        await axios__WEBPACK_IMPORTED_MODULE_2__[\"default\"].post(\"http://localhost:8000/signUp\", userInfo).then(async (res)=>{\n            const accessToken = res.data.accesstoken;\n            await localStorage.setItem(\"accessToken\", accessToken);\n            router.push(\"homepage\");\n        }).catch((err)=>console.log(err));\n    //  await axios.post(\"http://localhost:8000/signUp\", userInfo)\n    //    .then((res) => {\n    //      router.push(\"homepage\");\n    //  })\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                onChange: handleUserInput,\n                name: \"email\",\n                placeholder: \"И-Майл\"\n            }, void 0, false, {\n                fileName: \"/Users/bilguunleap2/Desktop/mongoDbTodo/frontend/pages/signUp.js\",\n                lineNumber: 29,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                onChange: handleUserInput,\n                name: \"password\",\n                placeholder: \"Нууц үг\",\n                type: \"password\"\n            }, void 0, false, {\n                fileName: \"/Users/bilguunleap2/Desktop/mongoDbTodo/frontend/pages/signUp.js\",\n                lineNumber: 30,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: handleSendDataToServer,\n                children: \"БҮРТГҮҮЛЭХ\"\n            }, void 0, false, {\n                fileName: \"/Users/bilguunleap2/Desktop/mongoDbTodo/frontend/pages/signUp.js\",\n                lineNumber: 36,\n                columnNumber: 9\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SignUp);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9zaWduVXAuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUEwQjtBQUNBO0FBQ1c7QUFDckMsTUFBTUcsTUFBTSxHQUFHLElBQU07SUFDakIsTUFBTUMsTUFBTSxHQUFHRixzREFBUyxFQUFFO0lBQzFCLE1BQU0sQ0FBQ0csUUFBUSxFQUFFQyxXQUFXLENBQUMsR0FBR04scURBQWMsQ0FBQyxFQUFFLENBQUM7SUFFbEQsU0FBU1EsZUFBZSxDQUFDQyxDQUFDLEVBQUU7UUFDeEJILFdBQVcsQ0FBQztZQUFFLEdBQUdELFFBQVE7WUFBRSxDQUFDSSxDQUFDLENBQUNDLE1BQU0sQ0FBQ0MsSUFBSSxDQUFDLEVBQUVGLENBQUMsQ0FBQ0MsTUFBTSxDQUFDRSxLQUFLO1NBQUUsQ0FBQyxDQUFDO0lBQ2xFLENBQUM7SUFFSCxlQUFlQyxzQkFBc0IsR0FBRztRQUN0QyxNQUFNWixrREFDQyxDQUFDLDhCQUE4QixFQUFFSSxRQUFRLENBQUMsQ0FDOUNVLElBQUksQ0FBQyxPQUFPQyxHQUFHLEdBQUs7WUFDbkIsTUFBTUMsV0FBVyxHQUFHRCxHQUFHLENBQUNFLElBQUksQ0FBQ0MsV0FBVztZQUN4QyxNQUFNQyxZQUFZLENBQUNDLE9BQU8sQ0FBQyxhQUFhLEVBQUVKLFdBQVcsQ0FBQyxDQUFDO1lBQ3ZEYixNQUFNLENBQUNrQixJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDMUIsQ0FBQyxDQUFDLENBQ0RDLEtBQUssQ0FBQyxDQUFDQyxHQUFHLEdBQUtDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDRixHQUFHLENBQUMsQ0FBQyxDQUFDO0lBRWxDLDhEQUE4RDtJQUM5RCxzQkFBc0I7SUFDdEIsZ0NBQWdDO0lBQ2hDLE1BQU07SUFDUixDQUFDO0lBQ0QscUJBQ0U7OzBCQUNFLDhEQUFDRyxPQUFLO2dCQUFDQyxRQUFRLEVBQUVwQixlQUFlO2dCQUFFRyxJQUFJLEVBQUMsT0FBTztnQkFBQ2tCLFdBQVcsRUFBQyxRQUFROzs7Ozt5QkFBRzswQkFDdEUsOERBQUNGLE9BQUs7Z0JBQ0pDLFFBQVEsRUFBRXBCLGVBQWU7Z0JBQ3pCRyxJQUFJLEVBQUMsVUFBVTtnQkFDZmtCLFdBQVcsRUFBQyxTQUFTO2dCQUNyQkMsSUFBSSxFQUFDLFVBQVU7Ozs7O3lCQUNmOzBCQUNGLDhEQUFDQyxRQUFNO2dCQUFDQyxPQUFPLEVBQUVuQixzQkFBc0I7MEJBQUUsWUFBVTs7Ozs7eUJBQVM7O29CQUMzRCxDQUNIO0FBQ04sQ0FBQztBQUNELGlFQUFlVixNQUFNIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dC1teS1hcHAvLi9wYWdlcy9zaWduVXAuanM/MzJmZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgcmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcbmltcG9ydCB7dXNlUm91dGVyfSBmcm9tICduZXh0L3JvdXRlcidcbmNvbnN0IFNpZ25VcCA9ICgpID0+IHtcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgICBjb25zdCBbdXNlckluZm8sIHNldFVzZXJJbmZvXSA9IHJlYWN0LnVzZVN0YXRlKHt9KTtcblxuICAgIGZ1bmN0aW9uIGhhbmRsZVVzZXJJbnB1dChlKSB7XG4gICAgICAgIHNldFVzZXJJbmZvKHsgLi4udXNlckluZm8sIFtlLnRhcmdldC5uYW1lXTogZS50YXJnZXQudmFsdWUgfSk7XG4gICAgfVxuXG4gIGFzeW5jIGZ1bmN0aW9uIGhhbmRsZVNlbmREYXRhVG9TZXJ2ZXIoKSB7XG4gICAgYXdhaXQgYXhpb3NcbiAgICAgIC5wb3N0KFwiaHR0cDovL2xvY2FsaG9zdDo4MDAwL3NpZ25VcFwiLCB1c2VySW5mbylcbiAgICAgIC50aGVuKGFzeW5jIChyZXMpID0+IHtcbiAgICAgICAgY29uc3QgYWNjZXNzVG9rZW4gPSByZXMuZGF0YS5hY2Nlc3N0b2tlbjtcbiAgICAgICAgYXdhaXQgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJhY2Nlc3NUb2tlblwiLCBhY2Nlc3NUb2tlbik7XG4gICAgICAgIHJvdXRlci5wdXNoKFwiaG9tZXBhZ2VcIik7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKChlcnIpID0+IGNvbnNvbGUubG9nKGVycikpOyBcblxuICAgICAgLy8gIGF3YWl0IGF4aW9zLnBvc3QoXCJodHRwOi8vbG9jYWxob3N0OjgwMDAvc2lnblVwXCIsIHVzZXJJbmZvKVxuICAgICAgLy8gICAgLnRoZW4oKHJlcykgPT4ge1xuICAgICAgLy8gICAgICByb3V0ZXIucHVzaChcImhvbWVwYWdlXCIpO1xuICAgICAgLy8gIH0pXG4gICAgfVxuICAgIHJldHVybiAoXG4gICAgICA8PlxuICAgICAgICA8aW5wdXQgb25DaGFuZ2U9e2hhbmRsZVVzZXJJbnB1dH0gbmFtZT1cImVtYWlsXCIgcGxhY2Vob2xkZXI9XCLQmC3QnNCw0LnQu1wiIC8+XG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVVc2VySW5wdXR9XG4gICAgICAgICAgbmFtZT1cInBhc3N3b3JkXCJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cItCd0YPRg9GGINKv0LNcIlxuICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXG4gICAgICAgIC8+XG4gICAgICAgIDxidXR0b24gb25DbGljaz17aGFuZGxlU2VuZERhdGFUb1NlcnZlcn0+0JHSrtCg0KLQk9Ku0q7Qm9Ct0KU8L2J1dHRvbj5cbiAgICAgIDwvPlxuICAgICk7XG59XG5leHBvcnQgZGVmYXVsdCBTaWduVXAiXSwibmFtZXMiOlsicmVhY3QiLCJheGlvcyIsInVzZVJvdXRlciIsIlNpZ25VcCIsInJvdXRlciIsInVzZXJJbmZvIiwic2V0VXNlckluZm8iLCJ1c2VTdGF0ZSIsImhhbmRsZVVzZXJJbnB1dCIsImUiLCJ0YXJnZXQiLCJuYW1lIiwidmFsdWUiLCJoYW5kbGVTZW5kRGF0YVRvU2VydmVyIiwicG9zdCIsInRoZW4iLCJyZXMiLCJhY2Nlc3NUb2tlbiIsImRhdGEiLCJhY2Nlc3N0b2tlbiIsImxvY2FsU3RvcmFnZSIsInNldEl0ZW0iLCJwdXNoIiwiY2F0Y2giLCJlcnIiLCJjb25zb2xlIiwibG9nIiwiaW5wdXQiLCJvbkNoYW5nZSIsInBsYWNlaG9sZGVyIiwidHlwZSIsImJ1dHRvbiIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/signUp.js\n");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = import("axios");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/signUp.js"));
module.exports = __webpack_exports__;

})();