"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/homepage",{

/***/ "./pages/homepage.js":
/*!***************************!*\
  !*** ./pages/homepage.js ***!
  \***************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var _swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @swc/helpers/src/_ts_generator.mjs */ \"./node_modules/@swc/helpers/src/_ts_generator.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\n\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\nvar HomePage = function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]), todos = ref[0], setTodos = ref[1];\n    var userInputRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)();\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false), isAgainGetData = ref1[0], setIsAgainGetData = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false), isLoading = ref2[0], setIsLoading = ref2[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        function handleGetDatasFromServer() {\n            return _handleGetDatasFromServer.apply(this, arguments);\n        }\n        function _handleGetDatasFromServer() {\n            _handleGetDatasFromServer = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(function() {\n                var accessToken, data, error;\n                return (0,_swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(this, function(_state) {\n                    switch(_state.label){\n                        case 0:\n                            _state.trys.push([\n                                0,\n                                2,\n                                ,\n                                3\n                            ]);\n                            accessToken = localStorage.getItem(\"accessToken\");\n                            return [\n                                4,\n                                axios__WEBPACK_IMPORTED_MODULE_1__[\"default\"].get(\"http://localhost:8000/myInfo\", {\n                                    headers: {\n                                        accessToken: accessToken\n                                    }\n                                })\n                            ];\n                        case 1:\n                            data = _state.sent();\n                            setTodos(data.data.data.todos);\n                            return [\n                                3,\n                                3\n                            ];\n                        case 2:\n                            error = _state.sent();\n                            return [\n                                3,\n                                3\n                            ];\n                        case 3:\n                            return [\n                                2\n                            ];\n                    }\n                });\n            });\n            return _handleGetDatasFromServer.apply(this, arguments);\n        }\n        handleGetDatasFromServer();\n        return function() {\n            return handleGetDatasFromServer();\n        };\n    }, [\n        isAgainGetData\n    ]);\n    function handleAddTodo() {\n        return _handleAddTodo.apply(this, arguments);\n    }\n    function _handleAddTodo() {\n        _handleAddTodo = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(function() {\n            var todo, accesstoken, data, error;\n            return (0,_swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(this, function(_state) {\n                switch(_state.label){\n                    case 0:\n                        todo = userInputRef.current.value;\n                        setIsLoading(true);\n                        _state.label = 1;\n                    case 1:\n                        _state.trys.push([\n                            1,\n                            3,\n                            ,\n                            4\n                        ]);\n                        accesstoken = localStorage.getItem(\"accessToken\");\n                        return [\n                            4,\n                            axios__WEBPACK_IMPORTED_MODULE_1__[\"default\"].post(\"http://localhost:8000/todos/addTodo\", {\n                                todo: todo\n                            }, {\n                                headers: {\n                                    accesstoken: accesstoken\n                                }\n                            }).then(function() {\n                                console.log(\"ne\");\n                                setIsAgainGetData(function(prev) {\n                                    return !prev;\n                                });\n                                setIsLoading(false);\n                            })\n                        ];\n                    case 2:\n                        data = _state.sent();\n                        return [\n                            3,\n                            4\n                        ];\n                    case 3:\n                        error = _state.sent();\n                        return [\n                            3,\n                            4\n                        ];\n                    case 4:\n                        return [\n                            2\n                        ];\n                }\n            });\n        });\n        return _handleAddTodo.apply(this, arguments);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            isLoading === true ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: \"Loading\"\n            }, void 0, false, {\n                fileName: \"/Users/bilguunleap2/Desktop/mongoDbTodo/frontend/pages/homepage.js\",\n                lineNumber: 48,\n                columnNumber: 30\n            }, _this) : \"\",\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"HomePage\"\n            }, void 0, false, {\n                fileName: \"/Users/bilguunleap2/Desktop/mongoDbTodo/frontend/pages/homepage.js\",\n                lineNumber: 49,\n                columnNumber: 9\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: function() {\n                    localStorage.removeItem(\"accessToken\");\n                },\n                children: \"ГАРАХ\"\n            }, void 0, false, {\n                fileName: \"/Users/bilguunleap2/Desktop/mongoDbTodo/frontend/pages/homepage.js\",\n                lineNumber: 50,\n                columnNumber: 9\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                ref: userInputRef\n            }, void 0, false, {\n                fileName: \"/Users/bilguunleap2/Desktop/mongoDbTodo/frontend/pages/homepage.js\",\n                lineNumber: 53,\n                columnNumber: 9\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: function() {\n                    return handleAddTodo();\n                },\n                children: \"НЭМЭХ\"\n            }, void 0, false, {\n                fileName: \"/Users/bilguunleap2/Desktop/mongoDbTodo/frontend/pages/homepage.js\",\n                lineNumber: 54,\n                columnNumber: 9\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                style: {\n                    width: \"auto\",\n                    height: \"100px\",\n                    overflow: \"scroll\"\n                },\n                children: todos.length > 0 ? todos.map(function(todo, i) {\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        children: todo\n                    }, todo + i, false, {\n                        fileName: \"/Users/bilguunleap2/Desktop/mongoDbTodo/frontend/pages/homepage.js\",\n                        lineNumber: 58,\n                        columnNumber: 24\n                    }, _this);\n                }) : \"\"\n            }, void 0, false, {\n                fileName: \"/Users/bilguunleap2/Desktop/mongoDbTodo/frontend/pages/homepage.js\",\n                lineNumber: 55,\n                columnNumber: 9\n            }, _this)\n        ]\n    }, void 0, true);\n};\n_s(HomePage, \"xHEjEn9OAMz2sqUj50qBZuRJN1I=\");\n_c = HomePage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (HomePage);\nvar _c;\n$RefreshReg$(_c, \"HomePage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNyQmpCLFlBQVksQ0FBQ2tCLFVBQVUsQ0FBQyxhQUFhLENBQUM7Z0JBQ3hDLENBQUM7MEJBQUUsT0FBSzs7Ozs7cUJBQVM7MEJBQ2pCLDhEQUFDQyxPQUFLO2dCQUFDQyxHQUFHLEVBQUU3QixZQUFZOzs7OztxQkFBSTswQkFDNUIsOERBQUN5QixRQUFNO2dCQUFDQyxPQUFPLEVBQUU7MkJBQU1iLGFBQWEsRUFBRTtpQkFBQTswQkFBRSxPQUFLOzs7OztxQkFBUzswQkFDdEQsOERBQUNpQixJQUFFO2dCQUFDQyxLQUFLLEVBQUU7b0JBQUNDLEtBQUssRUFBQyxNQUFNO29CQUFDQyxNQUFNLEVBQUUsT0FBSztvQkFBRUMsUUFBUSxFQUFDLFFBQVE7aUJBQUM7MEJBQ3ZEcEMsS0FBSyxDQUFDcUMsTUFBTSxHQUFHLENBQUMsR0FDYnJDLEtBQUssQ0FBQ3NDLEdBQUcsQ0FBQyxTQUFDdEIsSUFBSSxFQUFFdUIsQ0FBQyxFQUFLO29CQUNyQixxQkFBTyw4REFBQ0MsSUFBRTtrQ0FBaUJ4QixJQUFJO3VCQUFmQSxJQUFJLEdBQUd1QixDQUFDOzs7OzZCQUFhLENBQUM7Z0JBQ3hDLENBQUMsQ0FBQyxHQUNGLEVBQUU7Ozs7O3FCQUNIOztvQkFDSixDQUNIO0FBQ04sQ0FBQztHQTdES3hDLFFBQVE7QUFBUkEsS0FBQUEsUUFBUTtBQThEZCwrREFBZUEsUUFBUSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9ob21lcGFnZS5qcz8zNjY4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcbmltcG9ydCB7IHVzZVN0YXRlLHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSAncmVhY3QnXG5jb25zdCBIb21lUGFnZSA9ICgpID0+IHtcbiAgICBjb25zdCBbdG9kb3MsIHNldFRvZG9zXSA9IHVzZVN0YXRlKFtdKTtcbiAgICBjb25zdCB1c2VySW5wdXRSZWYgPSB1c2VSZWYoKVxuICAgIGNvbnN0IFtpc0FnYWluR2V0RGF0YSxzZXRJc0FnYWluR2V0RGF0YV0gPSB1c2VTdGF0ZShmYWxzZSkgXG4gICAgIGNvbnN0IFtpc0xvYWRpbmcsc2V0SXNMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKVxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICBhc3luYyBmdW5jdGlvbiBoYW5kbGVHZXREYXRhc0Zyb21TZXJ2ZXIoKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgY29uc3QgYWNjZXNzVG9rZW4gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImFjY2Vzc1Rva2VuXCIpO1xuICAgICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBheGlvcy5nZXQoXCJodHRwOi8vbG9jYWxob3N0OjgwMDAvbXlJbmZvXCIsIHtcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgYWNjZXNzVG9rZW46IGFjY2Vzc1Rva2VuLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBzZXRUb2RvcyhkYXRhLmRhdGEuZGF0YS50b2Rvcyk7XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7fVxuICAgICAgfVxuICAgICAgaGFuZGxlR2V0RGF0YXNGcm9tU2VydmVyKCk7XG4gICAgICByZXR1cm4gKCk9PiBoYW5kbGVHZXREYXRhc0Zyb21TZXJ2ZXIoKVxuICAgIH0sIFtpc0FnYWluR2V0RGF0YV0pO1xuXG4gIGFzeW5jIGZ1bmN0aW9uIGhhbmRsZUFkZFRvZG8oKSB7XG4gICAgY29uc3QgdG9kbyA9IHVzZXJJbnB1dFJlZi5jdXJyZW50LnZhbHVlO1xuICAgIHNldElzTG9hZGluZyh0cnVlKVxuICAgICAgIHRyeSB7XG4gICAgICAgICBjb25zdCBhY2Nlc3N0b2tlbiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiYWNjZXNzVG9rZW5cIik7XG4gICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgYXhpb3MucG9zdChcImh0dHA6Ly9sb2NhbGhvc3Q6ODAwMC90b2Rvcy9hZGRUb2RvXCIse3RvZG99LCB7XG4gICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICBhY2Nlc3N0b2tlblxuICAgICAgICAgICB9LFxuICAgICAgICAgfSkudGhlbigoKSA9PiB7XG4gICAgICAgICAgY29uc29sZS5sb2coJ25lJylcbiAgICAgICAgICAgc2V0SXNBZ2FpbkdldERhdGEocHJldj0+IXByZXYpO1xuICAgICAgICAgICBzZXRJc0xvYWRpbmcoZmFsc2UpXG4gICAgICAgICB9KTtcbiAgICAgICAgIFxuICAgICAgICB9IGNhdGNoIChlcnJvcikge31cbiAgICAgIFxuICAgICAgICBcbiAgICB9XG5cblxuICAgXG4gICAgcmV0dXJuIChcbiAgICAgIDw+XG4gICAgICAgIHtpc0xvYWRpbmcgPT09dHJ1ZSA/IDxwPkxvYWRpbmc8L3A+OicnfVxuICAgICAgICA8aDE+SG9tZVBhZ2U8L2gxPlxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgnYWNjZXNzVG9rZW4nKVxuICAgICAgICB9fT7Qk9CQ0KDQkNClPC9idXR0b24+XG4gICAgICAgIDxpbnB1dCByZWY9e3VzZXJJbnB1dFJlZn0gLz5cbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBoYW5kbGVBZGRUb2RvKCl9PtCd0K3QnNCt0KU8L2J1dHRvbj5cbiAgICAgICAgPHVsIHN0eWxlPXt7d2lkdGg6J2F1dG8nLGhlaWdodDpgMTAwcHhgLG92ZXJmbG93OidzY3JvbGwnfX0+XG4gICAgICAgICAge3RvZG9zLmxlbmd0aCA+IDBcbiAgICAgICAgICAgID8gdG9kb3MubWFwKCh0b2RvLCBpKSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIDxsaSBrZXk9e3RvZG8gKyBpfT57dG9kb308L2xpPjtcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIDogXCJcIn1cbiAgICAgICAgPC91bD5cbiAgICAgIDwvPlxuICAgICk7XG59XG5leHBvcnQgZGVmYXVsdCBIb21lUGFnZSJdLCJuYW1lcyI6WyJheGlvcyIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwidXNlUmVmIiwiSG9tZVBhZ2UiLCJ0b2RvcyIsInNldFRvZG9zIiwidXNlcklucHV0UmVmIiwiaXNBZ2FpbkdldERhdGEiLCJzZXRJc0FnYWluR2V0RGF0YSIsImlzTG9hZGluZyIsInNldElzTG9hZGluZyIsImhhbmRsZUdldERhdGFzRnJvbVNlcnZlciIsImFjY2Vzc1Rva2VuIiwiZGF0YSIsImVycm9yIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsImdldCIsImhlYWRlcnMiLCJoYW5kbGVBZGRUb2RvIiwidG9kbyIsImFjY2Vzc3Rva2VuIiwiY3VycmVudCIsInZhbHVlIiwicG9zdCIsInRoZW4iLCJjb25zb2xlIiwibG9nIiwicHJldiIsInAiLCJoMSIsImJ1dHRvbiIsIm9uQ2xpY2siLCJyZW1vdmVJdGVtIiwiaW5wdXQiLCJyZWYiLCJ1bCIsInN0eWxlIiwid2lkdGgiLCJoZWlnaHQiLCJvdmVyZmxvdyIsImxlbmd0aCIsIm1hcCIsImkiLCJsaSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/homepage.js\n"));

/***/ })

});