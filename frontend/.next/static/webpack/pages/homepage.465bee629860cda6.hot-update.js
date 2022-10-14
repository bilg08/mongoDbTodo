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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var _swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @swc/helpers/src/_ts_generator.mjs */ \"./node_modules/@swc/helpers/src/_ts_generator.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\n\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\nvar HomePage = function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]), todos = ref[0], setTodos = ref[1];\n    var userInputRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)();\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false), isAgainGetData = ref1[0], setIsAgainGetData = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false), isLoading = ref2[0], setIsLoading = ref2[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        function handleGetDatasFromServer() {\n            return _handleGetDatasFromServer.apply(this, arguments);\n        }\n        function _handleGetDatasFromServer() {\n            _handleGetDatasFromServer = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(function() {\n                var accessToken, data, error;\n                return (0,_swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(this, function(_state) {\n                    switch(_state.label){\n                        case 0:\n                            _state.trys.push([\n                                0,\n                                2,\n                                ,\n                                3\n                            ]);\n                            accessToken = localStorage.getItem(\"accessToken\");\n                            return [\n                                4,\n                                axios__WEBPACK_IMPORTED_MODULE_1__[\"default\"].get(\"http://localhost:8000/myInfo\", {\n                                    headers: {\n                                        accessToken: accessToken\n                                    }\n                                })\n                            ];\n                        case 1:\n                            data = _state.sent();\n                            setTodos(data.data.data.todos);\n                            return [\n                                3,\n                                3\n                            ];\n                        case 2:\n                            error = _state.sent();\n                            return [\n                                3,\n                                3\n                            ];\n                        case 3:\n                            return [\n                                2\n                            ];\n                    }\n                });\n            });\n            return _handleGetDatasFromServer.apply(this, arguments);\n        }\n        handleGetDatasFromServer();\n        return function() {\n            return handleGetDatasFromServer();\n        };\n    }, [\n        isAgainGetData\n    ]);\n    function handleAddTodo() {\n        return _handleAddTodo.apply(this, arguments);\n    }\n    function _handleAddTodo() {\n        _handleAddTodo = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(function() {\n            var todo, accesstoken, data, error;\n            return (0,_swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(this, function(_state) {\n                switch(_state.label){\n                    case 0:\n                        todo = userInputRef.current.value;\n                        setIsLoading(true);\n                        _state.label = 1;\n                    case 1:\n                        _state.trys.push([\n                            1,\n                            3,\n                            ,\n                            4\n                        ]);\n                        accesstoken = localStorage.getItem(\"accessToken\");\n                        return [\n                            4,\n                            axios__WEBPACK_IMPORTED_MODULE_1__[\"default\"].post(\"http://localhost:8000/todos/addTodo\", {\n                                todo: todo\n                            }, {\n                                headers: {\n                                    accesstoken: accesstoken\n                                }\n                            }).then(function(res) {\n                                if (res) {\n                                    console.log(res.data.status);\n                                }\n                            })\n                        ];\n                    case 2:\n                        data = _state.sent();\n                        return [\n                            3,\n                            4\n                        ];\n                    case 3:\n                        error = _state.sent();\n                        return [\n                            3,\n                            4\n                        ];\n                    case 4:\n                        return [\n                            2\n                        ];\n                }\n            });\n        });\n        return _handleAddTodo.apply(this, arguments);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            isLoading === true ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: \"Loading\"\n            }, void 0, false, {\n                fileName: \"/Users/bilguunleap2/Desktop/mongoDbTodo/frontend/pages/homepage.js\",\n                lineNumber: 47,\n                columnNumber: 30\n            }, _this) : \"\",\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"HomePage\"\n            }, void 0, false, {\n                fileName: \"/Users/bilguunleap2/Desktop/mongoDbTodo/frontend/pages/homepage.js\",\n                lineNumber: 48,\n                columnNumber: 9\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: function() {\n                    localStorage.removeItem(\"accessToken\");\n                },\n                children: \"ГАРАХ\"\n            }, void 0, false, {\n                fileName: \"/Users/bilguunleap2/Desktop/mongoDbTodo/frontend/pages/homepage.js\",\n                lineNumber: 49,\n                columnNumber: 9\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                ref: userInputRef\n            }, void 0, false, {\n                fileName: \"/Users/bilguunleap2/Desktop/mongoDbTodo/frontend/pages/homepage.js\",\n                lineNumber: 52,\n                columnNumber: 9\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: handleAddTodo,\n                children: \"НЭМЭХ\"\n            }, void 0, false, {\n                fileName: \"/Users/bilguunleap2/Desktop/mongoDbTodo/frontend/pages/homepage.js\",\n                lineNumber: 53,\n                columnNumber: 9\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                style: {\n                    width: \"auto\",\n                    height: \"100px\",\n                    overflow: \"scroll\"\n                },\n                children: todos.length > 0 ? todos.map(function(todo, i) {\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        children: todo\n                    }, todo + i, false, {\n                        fileName: \"/Users/bilguunleap2/Desktop/mongoDbTodo/frontend/pages/homepage.js\",\n                        lineNumber: 57,\n                        columnNumber: 24\n                    }, _this);\n                }) : \"\"\n            }, void 0, false, {\n                fileName: \"/Users/bilguunleap2/Desktop/mongoDbTodo/frontend/pages/homepage.js\",\n                lineNumber: 54,\n                columnNumber: 9\n            }, _this)\n        ]\n    }, void 0, true);\n};\n_s(HomePage, \"xHEjEn9OAMz2sqUj50qBZuRJN1I=\");\n_c = HomePage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (HomePage);\nvar _c;\n$RefreshReg$(_c, \"HomePage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUMsYUFBYSxDQUFDO2dCQUN4QyxDQUFDOzBCQUFFLE9BQUs7Ozs7O3FCQUFTOzBCQUNqQiw4REFBQ0MsT0FBSztnQkFBQ0MsR0FBRyxFQUFFOUIsWUFBWTs7Ozs7cUJBQUk7MEJBQzVCLDhEQUFDMEIsUUFBTTtnQkFBQ0MsT0FBTyxFQUFFZCxhQUFhOzBCQUFFLE9BQUs7Ozs7O3FCQUFTOzBCQUM5Qyw4REFBQ2tCLElBQUU7Z0JBQUNDLEtBQUssRUFBRTtvQkFBQ0MsS0FBSyxFQUFDLE1BQU07b0JBQUNDLE1BQU0sRUFBRSxPQUFLO29CQUFFQyxRQUFRLEVBQUMsUUFBUTtpQkFBQzswQkFDdkRyQyxLQUFLLENBQUNzQyxNQUFNLEdBQUcsQ0FBQyxHQUNidEMsS0FBSyxDQUFDdUMsR0FBRyxDQUFDLFNBQUN2QixJQUFJLEVBQUV3QixDQUFDLEVBQUs7b0JBQ3JCLHFCQUFPLDhEQUFDQyxJQUFFO2tDQUFpQnpCLElBQUk7dUJBQWZBLElBQUksR0FBR3dCLENBQUM7Ozs7NkJBQWEsQ0FBQztnQkFDeEMsQ0FBQyxDQUFDLEdBQ0YsRUFBRTs7Ozs7cUJBQ0g7O29CQUNKLENBQ0g7QUFDTixDQUFDO0dBNURLekMsUUFBUTtBQUFSQSxLQUFBQSxRQUFRO0FBNkRkLCtEQUFlQSxRQUFRIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2hvbWVwYWdlLmpzPzM2NjgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuaW1wb3J0IHsgdXNlU3RhdGUsdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tICdyZWFjdCdcbmNvbnN0IEhvbWVQYWdlID0gKCkgPT4ge1xuICAgIGNvbnN0IFt0b2Rvcywgc2V0VG9kb3NdID0gdXNlU3RhdGUoW10pO1xuICAgIGNvbnN0IHVzZXJJbnB1dFJlZiA9IHVzZVJlZigpXG4gICAgY29uc3QgW2lzQWdhaW5HZXREYXRhLHNldElzQWdhaW5HZXREYXRhXSA9IHVzZVN0YXRlKGZhbHNlKSBcbiAgICAgY29uc3QgW2lzTG9hZGluZyxzZXRJc0xvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgIGFzeW5jIGZ1bmN0aW9uIGhhbmRsZUdldERhdGFzRnJvbVNlcnZlcigpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBjb25zdCBhY2Nlc3NUb2tlbiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiYWNjZXNzVG9rZW5cIik7XG4gICAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IGF4aW9zLmdldChcImh0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9teUluZm9cIiwge1xuICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICBhY2Nlc3NUb2tlbjogYWNjZXNzVG9rZW4sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0pO1xuICAgICAgICAgIHNldFRvZG9zKGRhdGEuZGF0YS5kYXRhLnRvZG9zKTtcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHt9XG4gICAgICB9XG4gICAgICBoYW5kbGVHZXREYXRhc0Zyb21TZXJ2ZXIoKTtcbiAgICAgIHJldHVybiAoKT0+IGhhbmRsZUdldERhdGFzRnJvbVNlcnZlcigpXG4gICAgfSwgW2lzQWdhaW5HZXREYXRhXSk7XG5cbiAgYXN5bmMgZnVuY3Rpb24gaGFuZGxlQWRkVG9kbygpIHtcbiAgICBjb25zdCB0b2RvID0gdXNlcklucHV0UmVmLmN1cnJlbnQudmFsdWU7XG4gICAgc2V0SXNMb2FkaW5nKHRydWUpXG4gICAgICAgdHJ5IHtcbiAgICAgICAgIGNvbnN0IGFjY2Vzc3Rva2VuID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJhY2Nlc3NUb2tlblwiKTtcbiAgICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBheGlvcy5wb3N0KFwiaHR0cDovL2xvY2FsaG9zdDo4MDAwL3RvZG9zL2FkZFRvZG9cIix7dG9kb30sIHtcbiAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgIGFjY2Vzc3Rva2VuXG4gICAgICAgICAgIH0sXG4gICAgICAgICB9KS50aGVuKChyZXMpID0+IHtcbiAgICAgICAgICBpZihyZXMpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlcy5kYXRhLnN0YXR1cylcbiAgICAgICAgICB9XG4gICAgICAgICB9KVxuICAgICAgICB9IGNhdGNoIChlcnJvcikge31cbiAgICAgIFxuICAgICAgICBcbiAgICB9XG5cblxuICAgXG4gICAgcmV0dXJuIChcbiAgICAgIDw+XG4gICAgICAgIHtpc0xvYWRpbmcgPT09dHJ1ZSA/IDxwPkxvYWRpbmc8L3A+OicnfVxuICAgICAgICA8aDE+SG9tZVBhZ2U8L2gxPlxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgnYWNjZXNzVG9rZW4nKVxuICAgICAgICB9fT7Qk9CQ0KDQkNClPC9idXR0b24+XG4gICAgICAgIDxpbnB1dCByZWY9e3VzZXJJbnB1dFJlZn0gLz5cbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVBZGRUb2RvfT7QndCt0JzQrdClPC9idXR0b24+XG4gICAgICAgIDx1bCBzdHlsZT17e3dpZHRoOidhdXRvJyxoZWlnaHQ6YDEwMHB4YCxvdmVyZmxvdzonc2Nyb2xsJ319PlxuICAgICAgICAgIHt0b2Rvcy5sZW5ndGggPiAwXG4gICAgICAgICAgICA/IHRvZG9zLm1hcCgodG9kbywgaSkgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiA8bGkga2V5PXt0b2RvICsgaX0+e3RvZG99PC9saT47XG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICA6IFwiXCJ9XG4gICAgICAgIDwvdWw+XG4gICAgICA8Lz5cbiAgICApO1xufVxuZXhwb3J0IGRlZmF1bHQgSG9tZVBhZ2UiXSwibmFtZXMiOlsiYXhpb3MiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInVzZVJlZiIsIkhvbWVQYWdlIiwidG9kb3MiLCJzZXRUb2RvcyIsInVzZXJJbnB1dFJlZiIsImlzQWdhaW5HZXREYXRhIiwic2V0SXNBZ2FpbkdldERhdGEiLCJpc0xvYWRpbmciLCJzZXRJc0xvYWRpbmciLCJoYW5kbGVHZXREYXRhc0Zyb21TZXJ2ZXIiLCJhY2Nlc3NUb2tlbiIsImRhdGEiLCJlcnJvciIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJnZXQiLCJoZWFkZXJzIiwiaGFuZGxlQWRkVG9kbyIsInRvZG8iLCJhY2Nlc3N0b2tlbiIsImN1cnJlbnQiLCJ2YWx1ZSIsInBvc3QiLCJ0aGVuIiwicmVzIiwiY29uc29sZSIsImxvZyIsInN0YXR1cyIsInAiLCJoMSIsImJ1dHRvbiIsIm9uQ2xpY2siLCJyZW1vdmVJdGVtIiwiaW5wdXQiLCJyZWYiLCJ1bCIsInN0eWxlIiwid2lkdGgiLCJoZWlnaHQiLCJvdmVyZmxvdyIsImxlbmd0aCIsIm1hcCIsImkiLCJsaSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/homepage.js\n"));

/***/ })

});