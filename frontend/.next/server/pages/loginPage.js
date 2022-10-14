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
exports.id = "pages/loginPage";
exports.ids = ["pages/loginPage"];
exports.modules = {

/***/ "./pages/loginPage.js":
/*!****************************!*\
  !*** ./pages/loginPage.js ***!
  \****************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_2__]);\naxios__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\nconst LoginPage = ()=>{\n    const [userInfo, setUserInfo] = react__WEBPACK_IMPORTED_MODULE_1___default().useState({});\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    function handleUserInput(e) {\n        setUserInfo({\n            ...userInfo,\n            [e.target.name]: e.target.value\n        });\n    }\n    async function handleSendDataToServer() {\n        await axios__WEBPACK_IMPORTED_MODULE_2__[\"default\"].post(\"http://localhost:8000/login\", userInfo).then(async (res)=>{\n            const accessToken = res.data.accesstoken;\n            await localStorage.setItem(\"accessToken\", accessToken);\n            router.push(\"homepage\");\n        }).catch((err)=>console.log(err));\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                onChange: handleUserInput,\n                name: \"email\",\n                placeholder: \"И-Майл\"\n            }, void 0, false, {\n                fileName: \"/Users/bilguunleap2/Desktop/mongoDbTodo/frontend/pages/loginPage.js\",\n                lineNumber: 22,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                onChange: handleUserInput,\n                name: \"password\",\n                placeholder: \"Нууц үг\",\n                type: \"password\"\n            }, void 0, false, {\n                fileName: \"/Users/bilguunleap2/Desktop/mongoDbTodo/frontend/pages/loginPage.js\",\n                lineNumber: 23,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: handleSendDataToServer,\n                children: \"НЭВТРЭХ\"\n            }, void 0, false, {\n                fileName: \"/Users/bilguunleap2/Desktop/mongoDbTodo/frontend/pages/loginPage.js\",\n                lineNumber: 29,\n                columnNumber: 9\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LoginPage);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9sb2dpblBhZ2UuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUEwQjtBQUNBO0FBQ2M7QUFDeEMsTUFBTUcsU0FBUyxHQUFHLElBQU07SUFDdEIsTUFBTSxDQUFDQyxRQUFRLEVBQUVDLFdBQVcsQ0FBQyxHQUFHTCxxREFBYyxDQUFDLEVBQUUsQ0FBQztJQUNsRCxNQUFNTyxNQUFNLEdBQUdMLHNEQUFTLEVBQUU7SUFDMUIsU0FBU00sZUFBZSxDQUFDQyxDQUFDLEVBQUU7UUFDMUJKLFdBQVcsQ0FBQztZQUFFLEdBQUdELFFBQVE7WUFBRSxDQUFDSyxDQUFDLENBQUNDLE1BQU0sQ0FBQ0MsSUFBSSxDQUFDLEVBQUVGLENBQUMsQ0FBQ0MsTUFBTSxDQUFDRSxLQUFLO1NBQUUsQ0FBQyxDQUFDO0lBQ2hFLENBQUM7SUFFRCxlQUFlQyxzQkFBc0IsR0FBRztRQUN0QyxNQUFNWixrREFDQyxDQUFDLDZCQUE2QixFQUFFRyxRQUFRLENBQUMsQ0FDN0NXLElBQUksQ0FBQyxPQUFNQyxHQUFHLEdBQUs7WUFDbEIsTUFBTUMsV0FBVyxHQUFHRCxHQUFHLENBQUNFLElBQUksQ0FBQ0MsV0FBVztZQUN4QyxNQUFNQyxZQUFZLENBQUNDLE9BQU8sQ0FBQyxhQUFhLEVBQUVKLFdBQVcsQ0FBQyxDQUFDO1lBQ3ZEVixNQUFNLENBQUNlLElBQUksQ0FBQyxVQUFVLENBQUM7UUFDN0IsQ0FBQyxDQUFDLENBQUNDLEtBQUssQ0FBQ0MsQ0FBQUEsR0FBRyxHQUFFQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0YsR0FBRyxDQUFDLENBQUMsQ0FBQztJQUNoQyxDQUFDO0lBQ0MscUJBQ0U7OzBCQUNFLDhEQUFDRyxPQUFLO2dCQUFDQyxRQUFRLEVBQUVwQixlQUFlO2dCQUFFRyxJQUFJLEVBQUMsT0FBTztnQkFBQ2tCLFdBQVcsRUFBQyxRQUFROzs7Ozt5QkFBRzswQkFDdEUsOERBQUNGLE9BQUs7Z0JBQ0pDLFFBQVEsRUFBRXBCLGVBQWU7Z0JBQ3pCRyxJQUFJLEVBQUMsVUFBVTtnQkFDZmtCLFdBQVcsRUFBQyxTQUFTO2dCQUNyQkMsSUFBSSxFQUFDLFVBQVU7Ozs7O3lCQUNmOzBCQUNGLDhEQUFDQyxRQUFNO2dCQUFDQyxPQUFPLEVBQUVuQixzQkFBc0I7MEJBQUUsU0FBTzs7Ozs7eUJBQVM7O29CQUN4RCxDQUNIO0FBQ04sQ0FBQztBQUNELGlFQUFlVixTQUFTIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dC1teS1hcHAvLi9wYWdlcy9sb2dpblBhZ2UuanM/MjNmMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XG5jb25zdCBMb2dpblBhZ2UgPSAoKSA9PiB7XG4gIGNvbnN0IFt1c2VySW5mbywgc2V0VXNlckluZm9dID0gUmVhY3QudXNlU3RhdGUoe30pO1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgZnVuY3Rpb24gaGFuZGxlVXNlcklucHV0KGUpIHtcbiAgICBzZXRVc2VySW5mbyh7IC4uLnVzZXJJbmZvLCBbZS50YXJnZXQubmFtZV06IGUudGFyZ2V0LnZhbHVlIH0pO1xuICB9XG5cbiAgYXN5bmMgZnVuY3Rpb24gaGFuZGxlU2VuZERhdGFUb1NlcnZlcigpIHtcbiAgICBhd2FpdCBheGlvc1xuICAgICAgLnBvc3QoXCJodHRwOi8vbG9jYWxob3N0OjgwMDAvbG9naW5cIiwgdXNlckluZm8pXG4gICAgICAudGhlbihhc3luYyhyZXMpID0+IHtcbiAgICAgICAgY29uc3QgYWNjZXNzVG9rZW4gPSByZXMuZGF0YS5hY2Nlc3N0b2tlbjtcbiAgICAgICAgYXdhaXQgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJhY2Nlc3NUb2tlblwiLCBhY2Nlc3NUb2tlbik7XG4gICAgICAgIHJvdXRlci5wdXNoKFwiaG9tZXBhZ2VcIilcbiAgfSkuY2F0Y2goZXJyPT5jb25zb2xlLmxvZyhlcnIpKTtcbiAgfVxuICAgIHJldHVybiAoXG4gICAgICA8PlxuICAgICAgICA8aW5wdXQgb25DaGFuZ2U9e2hhbmRsZVVzZXJJbnB1dH0gbmFtZT1cImVtYWlsXCIgcGxhY2Vob2xkZXI9XCLQmC3QnNCw0LnQu1wiIC8+XG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVVc2VySW5wdXR9XG4gICAgICAgICAgbmFtZT1cInBhc3N3b3JkXCJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cItCd0YPRg9GGINKv0LNcIlxuICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXG4gICAgICAgIC8+XG4gICAgICAgIDxidXR0b24gb25DbGljaz17aGFuZGxlU2VuZERhdGFUb1NlcnZlcn0+0J3QrdCS0KLQoNCt0KU8L2J1dHRvbj5cbiAgICAgIDwvPlxuICAgICk7IFxufVxuZXhwb3J0IGRlZmF1bHQgTG9naW5QYWdlICJdLCJuYW1lcyI6WyJSZWFjdCIsImF4aW9zIiwidXNlUm91dGVyIiwiTG9naW5QYWdlIiwidXNlckluZm8iLCJzZXRVc2VySW5mbyIsInVzZVN0YXRlIiwicm91dGVyIiwiaGFuZGxlVXNlcklucHV0IiwiZSIsInRhcmdldCIsIm5hbWUiLCJ2YWx1ZSIsImhhbmRsZVNlbmREYXRhVG9TZXJ2ZXIiLCJwb3N0IiwidGhlbiIsInJlcyIsImFjY2Vzc1Rva2VuIiwiZGF0YSIsImFjY2Vzc3Rva2VuIiwibG9jYWxTdG9yYWdlIiwic2V0SXRlbSIsInB1c2giLCJjYXRjaCIsImVyciIsImNvbnNvbGUiLCJsb2ciLCJpbnB1dCIsIm9uQ2hhbmdlIiwicGxhY2Vob2xkZXIiLCJ0eXBlIiwiYnV0dG9uIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/loginPage.js\n");

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
var __webpack_exports__ = (__webpack_exec__("./pages/loginPage.js"));
module.exports = __webpack_exports__;

})();