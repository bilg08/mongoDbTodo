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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var _swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @swc/helpers/src/_ts_generator.mjs */ \"./node_modules/@swc/helpers/src/_ts_generator.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n\n\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\nvar HomePage = function() {\n    var logOut = function logOut() {\n        localStorage.removeItem(\"accessToken\");\n        router.push(\"loginPage\");\n    };\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]), todos = ref[0], setTodos = ref[1];\n    var userInputRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)();\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false), isAgainGetData = ref1[0], setIsAgainGetData = ref1[1];\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false), isLoading = ref2[0], setIsLoading = ref2[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        function handleGetDatasFromServer() {\n            return _handleGetDatasFromServer.apply(this, arguments);\n        }\n        function _handleGetDatasFromServer() {\n            _handleGetDatasFromServer = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(function() {\n                var accessToken, data, error;\n                return (0,_swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(this, function(_state) {\n                    switch(_state.label){\n                        case 0:\n                            _state.trys.push([\n                                0,\n                                2,\n                                ,\n                                3\n                            ]);\n                            accessToken = localStorage.getItem(\"accessToken\");\n                            return [\n                                4,\n                                axios__WEBPACK_IMPORTED_MODULE_1__[\"default\"].get(\"http://localhost:8000/myInfo\", {\n                                    headers: {\n                                        accessToken: accessToken\n                                    }\n                                })\n                            ];\n                        case 1:\n                            data = _state.sent();\n                            setTodos(data.data.data.todos);\n                            return [\n                                3,\n                                3\n                            ];\n                        case 2:\n                            error = _state.sent();\n                            router.push(\"loginPage\");\n                            return [\n                                3,\n                                3\n                            ];\n                        case 3:\n                            return [\n                                2\n                            ];\n                    }\n                });\n            });\n            return _handleGetDatasFromServer.apply(this, arguments);\n        }\n        handleGetDatasFromServer();\n        return function() {\n            return handleGetDatasFromServer();\n        };\n    }, [\n        isAgainGetData\n    ]);\n    function handleAddTodo() {\n        return _handleAddTodo.apply(this, arguments);\n    }\n    function _handleAddTodo() {\n        _handleAddTodo = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(function() {\n            var todo, accesstoken, error;\n            return (0,_swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(this, function(_state) {\n                switch(_state.label){\n                    case 0:\n                        todo = userInputRef.current.value;\n                        setIsLoading(true);\n                        _state.label = 1;\n                    case 1:\n                        _state.trys.push([\n                            1,\n                            3,\n                            ,\n                            4\n                        ]);\n                        accesstoken = localStorage.getItem(\"accessToken\");\n                        return [\n                            4,\n                            axios__WEBPACK_IMPORTED_MODULE_1__[\"default\"].post(\"http://localhost:8000/todos/addTodo\", {\n                                todo: todo\n                            }, {\n                                headers: {\n                                    accesstoken: accesstoken\n                                }\n                            }).then(function(res) {\n                                if (res) {\n                                    if (res.data.status === true) {\n                                        setIsLoading(false);\n                                        setIsAgainGetData(function(prev) {\n                                            return !prev;\n                                        });\n                                    }\n                                }\n                            })\n                        ];\n                    case 2:\n                        _state.sent();\n                        return [\n                            3,\n                            4\n                        ];\n                    case 3:\n                        error = _state.sent();\n                        console.log(error);\n                        return [\n                            3,\n                            4\n                        ];\n                    case 4:\n                        return [\n                            2\n                        ];\n                }\n            });\n        });\n        return _handleAddTodo.apply(this, arguments);\n    }\n    function deleteTodo(todo) {\n        return _deleteTodo.apply(this, arguments);\n    }\n    function _deleteTodo() {\n        _deleteTodo = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(function(todo) {\n            var accesstoken, error;\n            return (0,_swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(this, function(_state) {\n                switch(_state.label){\n                    case 0:\n                        console.log(todo, \"totoo\");\n                        _state.label = 1;\n                    case 1:\n                        _state.trys.push([\n                            1,\n                            3,\n                            ,\n                            4\n                        ]);\n                        accesstoken = localStorage.getItem(\"accessToken\");\n                        console.log(accesstoken);\n                        return [\n                            4,\n                            axios__WEBPACK_IMPORTED_MODULE_1__[\"default\"].get(\"http://localhost:8000/todos/deleteTodo\", {\n                                headers: accesstoken,\n                                todo: todo\n                            }).then(console.log(\"il\"))\n                        ];\n                    case 2:\n                        _state.sent();\n                        return [\n                            3,\n                            4\n                        ];\n                    case 3:\n                        error = _state.sent();\n                        return [\n                            3,\n                            4\n                        ];\n                    case 4:\n                        return [\n                            2\n                        ];\n                }\n            });\n        });\n        return _deleteTodo.apply(this, arguments);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            isLoading === true ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: \"Loading\"\n            }, void 0, false, {\n                fileName: \"/Users/bilguunleap2/Desktop/mongoDbTodo/frontend/pages/homepage.js\",\n                lineNumber: 79,\n                columnNumber: 30\n            }, _this) : \"\",\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"HomePage\"\n            }, void 0, false, {\n                fileName: \"/Users/bilguunleap2/Desktop/mongoDbTodo/frontend/pages/homepage.js\",\n                lineNumber: 80,\n                columnNumber: 9\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: logOut,\n                children: \"ГАРАХ\"\n            }, void 0, false, {\n                fileName: \"/Users/bilguunleap2/Desktop/mongoDbTodo/frontend/pages/homepage.js\",\n                lineNumber: 81,\n                columnNumber: 9\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                ref: userInputRef\n            }, void 0, false, {\n                fileName: \"/Users/bilguunleap2/Desktop/mongoDbTodo/frontend/pages/homepage.js\",\n                lineNumber: 82,\n                columnNumber: 9\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: handleAddTodo,\n                children: \"НЭМЭХ\"\n            }, void 0, false, {\n                fileName: \"/Users/bilguunleap2/Desktop/mongoDbTodo/frontend/pages/homepage.js\",\n                lineNumber: 83,\n                columnNumber: 9\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    width: \"auto\",\n                    height: \"100px\",\n                    overflow: \"scroll\"\n                },\n                children: todos.length > 0 ? todos.map(function(todo, i) {\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        style: {\n                            display: \"flex\",\n                            width: \"50%\",\n                            justifyContent: \"space-around\"\n                        },\n                        children: [\n                            todo,\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                onClick: function() {\n                                    return deleteTodo(todo);\n                                },\n                                children: \"ХАСАХ\"\n                            }, void 0, false, {\n                                fileName: \"/Users/bilguunleap2/Desktop/mongoDbTodo/frontend/pages/homepage.js\",\n                                lineNumber: 89,\n                                columnNumber: 19\n                            }, _this)\n                        ]\n                    }, todo + i, true, {\n                        fileName: \"/Users/bilguunleap2/Desktop/mongoDbTodo/frontend/pages/homepage.js\",\n                        lineNumber: 87,\n                        columnNumber: 24\n                    }, _this);\n                }) : \"\"\n            }, void 0, false, {\n                fileName: \"/Users/bilguunleap2/Desktop/mongoDbTodo/frontend/pages/homepage.js\",\n                lineNumber: 84,\n                columnNumber: 9\n            }, _this)\n        ]\n    }, void 0, true);\n};\n_s(HomePage, \"+UKqWGc/24+1C2oxKU4LHUaIY6Y=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter\n    ];\n});\n_c = HomePage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (HomePage);\nvar _c;\n$RefreshReg$(_c, \"HomePage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QWE7MEJBQUUsT0FBSzs7Ozs7cUJBQVM7MEJBQzlDLDhEQUFDbUIsS0FBRztnQkFBQ0MsS0FBSyxFQUFFO29CQUFDQyxLQUFLLEVBQUMsTUFBTTtvQkFBQ0MsTUFBTSxFQUFFLE9BQUs7b0JBQUVDLFFBQVEsRUFBQyxRQUFRO2lCQUFDOzBCQUN4RHJDLEtBQUssQ0FBQ3NDLE1BQU0sR0FBRyxDQUFDLEdBQ2J0QyxLQUFLLENBQUN1QyxHQUFHLENBQUMsU0FBQ3hCLElBQUksRUFBRXlCLENBQUMsRUFBSztvQkFDckIscUJBQU8sOERBQUNQLEtBQUc7d0JBQUNDLEtBQUssRUFBRTs0QkFBQ08sT0FBTyxFQUFDLE1BQU07NEJBQUNOLEtBQUssRUFBRSxLQUFHOzRCQUFFTyxjQUFjLEVBQUMsY0FBYzt5QkFBQzs7NEJBQzFFM0IsSUFBSTswQ0FDTCw4REFBQ2MsUUFBTTtnQ0FBQ0MsT0FBTyxFQUFFOzJDQUFJSixVQUFVLENBQUNYLElBQUksQ0FBQztpQ0FBQTswQ0FBRSxPQUFLOzs7OztxQ0FBUzs7dUJBRjZCQSxJQUFJLEdBQUd5QixDQUFDOzs7OzZCQUd0RixDQUFDO2dCQUNULENBQUMsQ0FBQyxHQUNGLEVBQUU7Ozs7O3FCQUNGOztvQkFDTCxDQUNIO0FBQ04sQ0FBQztHQTVGSzlDLFFBQVE7O1FBSUtELGtEQUFTOzs7QUFKdEJDLEtBQUFBLFFBQVE7QUE2RmQsK0RBQWVBLFFBQVEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaG9tZXBhZ2UuanM/MzY2OCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSx1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7dXNlUm91dGVyfSBmcm9tICduZXh0L3JvdXRlcidcbmNvbnN0IEhvbWVQYWdlID0gKCkgPT4ge1xuICAgIGNvbnN0IFt0b2Rvcywgc2V0VG9kb3NdID0gdXNlU3RhdGUoW10pO1xuICAgIGNvbnN0IHVzZXJJbnB1dFJlZiA9IHVzZVJlZigpXG4gICAgY29uc3QgW2lzQWdhaW5HZXREYXRhLHNldElzQWdhaW5HZXREYXRhXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxuICAgICBjb25zdCBbaXNMb2FkaW5nLHNldElzTG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSlcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgYXN5bmMgZnVuY3Rpb24gaGFuZGxlR2V0RGF0YXNGcm9tU2VydmVyKCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIGNvbnN0IGFjY2Vzc1Rva2VuID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJhY2Nlc3NUb2tlblwiKTtcbiAgICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgYXhpb3MuZ2V0KFwiaHR0cDovL2xvY2FsaG9zdDo4MDAwL215SW5mb1wiLCB7XG4gICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgIGFjY2Vzc1Rva2VuOiBhY2Nlc3NUb2tlbixcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSk7XG4gICAgICAgICAgc2V0VG9kb3MoZGF0YS5kYXRhLmRhdGEudG9kb3MpO1xuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgIHJvdXRlci5wdXNoKCdsb2dpblBhZ2UnKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaGFuZGxlR2V0RGF0YXNGcm9tU2VydmVyKCk7XG4gICAgICByZXR1cm4gKCk9PiBoYW5kbGVHZXREYXRhc0Zyb21TZXJ2ZXIoKVxuICAgIH0sIFtpc0FnYWluR2V0RGF0YV0pO1xuXG5cblxuICAgIGZ1bmN0aW9uIGxvZ091dCgpIHtcbiAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCdhY2Nlc3NUb2tlbicpO1xuICAgICAgcm91dGVyLnB1c2goJ2xvZ2luUGFnZScpXG4gICAgfVxuXG5cblxuXG4gIGFzeW5jIGZ1bmN0aW9uIGhhbmRsZUFkZFRvZG8oKSB7XG4gICAgY29uc3QgdG9kbyA9IHVzZXJJbnB1dFJlZi5jdXJyZW50LnZhbHVlO1xuICAgIHNldElzTG9hZGluZyh0cnVlKVxuICAgICAgIHRyeSB7XG4gICAgICAgICBjb25zdCBhY2Nlc3N0b2tlbiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiYWNjZXNzVG9rZW5cIik7XG4gICAgICAgIGF3YWl0IGF4aW9zLnBvc3QoXCJodHRwOi8vbG9jYWxob3N0OjgwMDAvdG9kb3MvYWRkVG9kb1wiLHt0b2RvfSwge1xuICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgYWNjZXNzdG9rZW5cbiAgICAgICAgICAgfSxcbiAgICAgICAgIH0pLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICAgIGlmKHJlcykge1xuICAgICAgICAgICAgaWYocmVzLmRhdGEuc3RhdHVzPT09dHJ1ZSkge1xuICAgICAgICAgICAgICBzZXRJc0xvYWRpbmcoZmFsc2UpO1xuICAgICAgICAgICAgICBzZXRJc0FnYWluR2V0RGF0YShwcmV2PT4hcHJldilcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICB9KVxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKVxuICAgICAgICB9XG4gICAgICBcbiAgICAgICAgXG4gICAgfVxuXG5cblxuXG4gICBhc3luYyBmdW5jdGlvbiBkZWxldGVUb2RvKHRvZG8pIHtcbiAgICBjb25zb2xlLmxvZyh0b2RvLCd0b3RvbycpICAgICAgIFxuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3QgYWNjZXNzdG9rZW4gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImFjY2Vzc1Rva2VuXCIpO1xuY29uc29sZS5sb2coYWNjZXNzdG9rZW4pXG4gICAgICBhd2FpdCBheGlvcy5nZXQoYGh0dHA6Ly9sb2NhbGhvc3Q6ODAwMC90b2Rvcy9kZWxldGVUb2RvYCx7aGVhZGVyczphY2Nlc3N0b2tlbix0b2RvLH0pLnRoZW4oY29uc29sZS5sb2coJ2lsJykpXG4gICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBcbiAgICAgIH1cbiAgICB9XG5cbiAgIFxuICAgIHJldHVybiAoXG4gICAgICA8PlxuICAgICAgICB7aXNMb2FkaW5nID09PXRydWUgPyA8cD5Mb2FkaW5nPC9wPjonJ31cbiAgICAgICAgPGgxPkhvbWVQYWdlPC9oMT5cbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtsb2dPdXR9PtCT0JDQoNCQ0KU8L2J1dHRvbj5cbiAgICAgICAgPGlucHV0IHJlZj17dXNlcklucHV0UmVmfSAvPlxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2hhbmRsZUFkZFRvZG99PtCd0K3QnNCt0KU8L2J1dHRvbj5cbiAgICAgICAgPGRpdiBzdHlsZT17e3dpZHRoOidhdXRvJyxoZWlnaHQ6YDEwMHB4YCxvdmVyZmxvdzonc2Nyb2xsJ319PlxuICAgICAgICAgIHt0b2Rvcy5sZW5ndGggPiAwXG4gICAgICAgICAgICA/IHRvZG9zLm1hcCgodG9kbywgaSkgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiA8ZGl2IHN0eWxlPXt7ZGlzcGxheTonZmxleCcsd2lkdGg6YDUwJWAsanVzdGlmeUNvbnRlbnQ6J3NwYWNlLWFyb3VuZCd9fSBrZXk9e3RvZG8gKyBpfT5cbiAgICAgICAgICAgICAgICAgIHt0b2RvfVxuICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKT0+ZGVsZXRlVG9kbyh0b2RvKX0+0KXQkNCh0JDQpTwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvZGl2PjtcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIDogXCJcIn1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8Lz5cbiAgICApO1xufVxuZXhwb3J0IGRlZmF1bHQgSG9tZVBhZ2UiXSwibmFtZXMiOlsiYXhpb3MiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInVzZVJlZiIsInVzZVJvdXRlciIsIkhvbWVQYWdlIiwibG9nT3V0IiwibG9jYWxTdG9yYWdlIiwicmVtb3ZlSXRlbSIsInJvdXRlciIsInB1c2giLCJ0b2RvcyIsInNldFRvZG9zIiwidXNlcklucHV0UmVmIiwiaXNBZ2FpbkdldERhdGEiLCJzZXRJc0FnYWluR2V0RGF0YSIsImlzTG9hZGluZyIsInNldElzTG9hZGluZyIsImhhbmRsZUdldERhdGFzRnJvbVNlcnZlciIsImFjY2Vzc1Rva2VuIiwiZGF0YSIsImVycm9yIiwiZ2V0SXRlbSIsImdldCIsImhlYWRlcnMiLCJoYW5kbGVBZGRUb2RvIiwidG9kbyIsImFjY2Vzc3Rva2VuIiwiY3VycmVudCIsInZhbHVlIiwicG9zdCIsInRoZW4iLCJyZXMiLCJzdGF0dXMiLCJwcmV2IiwiY29uc29sZSIsImxvZyIsImRlbGV0ZVRvZG8iLCJwIiwiaDEiLCJidXR0b24iLCJvbkNsaWNrIiwiaW5wdXQiLCJyZWYiLCJkaXYiLCJzdHlsZSIsIndpZHRoIiwiaGVpZ2h0Iiwib3ZlcmZsb3ciLCJsZW5ndGgiLCJtYXAiLCJpIiwiZGlzcGxheSIsImp1c3RpZnlDb250ZW50Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/homepage.js\n"));

/***/ })

});