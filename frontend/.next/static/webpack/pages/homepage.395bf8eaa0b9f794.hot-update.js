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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var _swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @swc/helpers/src/_ts_generator.mjs */ \"./node_modules/@swc/helpers/src/_ts_generator.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n\n\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\nvar HomePage = function() {\n    var logOut = function logOut() {\n        localStorage.removeItem(\"accessToken\");\n        router.push(\"loginPage\");\n    };\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]), todos = ref[0], setTodos = ref[1];\n    var userInputRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)();\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false), isAgainGetData = ref1[0], setIsAgainGetData = ref1[1];\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false), isLoading = ref2[0], setIsLoading = ref2[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        function handleGetDatasFromServer() {\n            return _handleGetDatasFromServer.apply(this, arguments);\n        }\n        function _handleGetDatasFromServer() {\n            _handleGetDatasFromServer = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(function() {\n                var accessToken, data, error;\n                return (0,_swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(this, function(_state) {\n                    switch(_state.label){\n                        case 0:\n                            _state.trys.push([\n                                0,\n                                2,\n                                ,\n                                3\n                            ]);\n                            accessToken = localStorage.getItem(\"accessToken\");\n                            return [\n                                4,\n                                axios__WEBPACK_IMPORTED_MODULE_1__[\"default\"].get(\"http://localhost:8000/myInfo\", {\n                                    headers: {\n                                        accessToken: accessToken\n                                    }\n                                })\n                            ];\n                        case 1:\n                            data = _state.sent();\n                            setTodos(data.data.data.todos);\n                            return [\n                                3,\n                                3\n                            ];\n                        case 2:\n                            error = _state.sent();\n                            router.push(\"loginPage\");\n                            return [\n                                3,\n                                3\n                            ];\n                        case 3:\n                            return [\n                                2\n                            ];\n                    }\n                });\n            });\n            return _handleGetDatasFromServer.apply(this, arguments);\n        }\n        handleGetDatasFromServer();\n        return function() {\n            return handleGetDatasFromServer();\n        };\n    }, [\n        isAgainGetData\n    ]);\n    function handleAddTodo() {\n        return _handleAddTodo.apply(this, arguments);\n    }\n    function _handleAddTodo() {\n        _handleAddTodo = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(function() {\n            var todo, accesstoken, error;\n            return (0,_swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(this, function(_state) {\n                switch(_state.label){\n                    case 0:\n                        todo = userInputRef.current.value;\n                        setIsLoading(true);\n                        _state.label = 1;\n                    case 1:\n                        _state.trys.push([\n                            1,\n                            3,\n                            ,\n                            4\n                        ]);\n                        accesstoken = localStorage.getItem(\"accessToken\");\n                        return [\n                            4,\n                            axios__WEBPACK_IMPORTED_MODULE_1__[\"default\"].post(\"http://localhost:8000/todos/addTodo\", {\n                                todo: todo\n                            }, {\n                                headers: {\n                                    accesstoken: accesstoken\n                                }\n                            }).then(function(res) {\n                                if (res) {\n                                    if (res.data.status === true) {\n                                        setIsLoading(false);\n                                        setIsAgainGetData(function(prev) {\n                                            return !prev;\n                                        });\n                                    }\n                                }\n                            })\n                        ];\n                    case 2:\n                        _state.sent();\n                        return [\n                            3,\n                            4\n                        ];\n                    case 3:\n                        error = _state.sent();\n                        console.log(error);\n                        return [\n                            3,\n                            4\n                        ];\n                    case 4:\n                        return [\n                            2\n                        ];\n                }\n            });\n        });\n        return _handleAddTodo.apply(this, arguments);\n    }\n    function deleteTodo(todo, i) {\n        return _deleteTodo.apply(this, arguments);\n    }\n    function _deleteTodo() {\n        _deleteTodo = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(function(todo, i) {\n            var accesstoken, error;\n            return (0,_swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(this, function(_state) {\n                switch(_state.label){\n                    case 0:\n                        console.log(i);\n                        _state.label = 1;\n                    case 1:\n                        _state.trys.push([\n                            1,\n                            3,\n                            ,\n                            4\n                        ]);\n                        accesstoken = localStorage.getItem(\"accessToken\");\n                        return [\n                            4,\n                            axios__WEBPACK_IMPORTED_MODULE_1__[\"default\"][\"delete\"](\"http://localhost:8000/todos/deleteTodo/\".concat(todo), {\n                                headers: {\n                                    accesstoken: accesstoken\n                                }\n                            }).then(function(res) {\n                                if (res) {\n                                    if (res.data.status === true) {\n                                        setIsLoading(false);\n                                        setIsAgainGetData(function(prev) {\n                                            return !prev;\n                                        });\n                                    }\n                                }\n                            })\n                        ];\n                    case 2:\n                        _state.sent();\n                        return [\n                            3,\n                            4\n                        ];\n                    case 3:\n                        error = _state.sent();\n                        return [\n                            3,\n                            4\n                        ];\n                    case 4:\n                        return [\n                            2\n                        ];\n                }\n            });\n        });\n        return _deleteTodo.apply(this, arguments);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            isLoading === true ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: \"Loading\"\n            }, void 0, false, {\n                fileName: \"/Users/bilguunleap2/Desktop/mongoDbTodo/frontend/pages/homepage.js\",\n                lineNumber: 90,\n                columnNumber: 29\n            }, _this) : \"\",\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"HomePage\"\n            }, void 0, false, {\n                fileName: \"/Users/bilguunleap2/Desktop/mongoDbTodo/frontend/pages/homepage.js\",\n                lineNumber: 91,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: logOut,\n                children: \"ГАРАХ\"\n            }, void 0, false, {\n                fileName: \"/Users/bilguunleap2/Desktop/mongoDbTodo/frontend/pages/homepage.js\",\n                lineNumber: 92,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                ref: userInputRef\n            }, void 0, false, {\n                fileName: \"/Users/bilguunleap2/Desktop/mongoDbTodo/frontend/pages/homepage.js\",\n                lineNumber: 93,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: handleAddTodo,\n                children: \"НЭМЭХ\"\n            }, void 0, false, {\n                fileName: \"/Users/bilguunleap2/Desktop/mongoDbTodo/frontend/pages/homepage.js\",\n                lineNumber: 94,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    width: \"auto\",\n                    height: \"100px\",\n                    overflow: \"scroll\"\n                },\n                children: todos.length > 0 ? todos.map(function(todo, i) {\n                    console.log(i, todo);\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        style: {\n                            display: \"flex\",\n                            width: \"50%\",\n                            justifyContent: \"space-around\"\n                        },\n                        children: [\n                            todo,\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                onClick: function() {\n                                    return deleteTodo(todo, i);\n                                },\n                                children: \"ХАСАХ\"\n                            }, void 0, false, {\n                                fileName: \"/Users/bilguunleap2/Desktop/mongoDbTodo/frontend/pages/homepage.js\",\n                                lineNumber: 101,\n                                columnNumber: 15\n                            }, _this)\n                        ]\n                    }, todo + i, true, {\n                        fileName: \"/Users/bilguunleap2/Desktop/mongoDbTodo/frontend/pages/homepage.js\",\n                        lineNumber: 99,\n                        columnNumber: 20\n                    }, _this);\n                }) : \"\"\n            }, void 0, false, {\n                fileName: \"/Users/bilguunleap2/Desktop/mongoDbTodo/frontend/pages/homepage.js\",\n                lineNumber: 95,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true);\n};\n_s(HomePage, \"+UKqWGc/24+1C2oxKU4LHUaIY6Y=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter\n    ];\n});\n_c = HomePage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (HomePage);\nvar _c;\n$RefreshReg$(_c, \"HomePage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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cz8zNjY4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xuY29uc3QgSG9tZVBhZ2UgPSAoKSA9PiB7XG4gIGNvbnN0IFt0b2Rvcywgc2V0VG9kb3NdID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCB1c2VySW5wdXRSZWYgPSB1c2VSZWYoKVxuICBjb25zdCBbaXNBZ2FpbkdldERhdGEsIHNldElzQWdhaW5HZXREYXRhXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcbiAgY29uc3QgW2lzTG9hZGluZywgc2V0SXNMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKVxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGFzeW5jIGZ1bmN0aW9uIGhhbmRsZUdldERhdGFzRnJvbVNlcnZlcigpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IGFjY2Vzc1Rva2VuID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJhY2Nlc3NUb2tlblwiKTtcbiAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IGF4aW9zLmdldChcImh0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9teUluZm9cIiwge1xuICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgIGFjY2Vzc1Rva2VuOiBhY2Nlc3NUb2tlbixcbiAgICAgICAgICB9LFxuICAgICAgICB9KTtcbiAgICAgICAgc2V0VG9kb3MoZGF0YS5kYXRhLmRhdGEudG9kb3MpO1xuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgcm91dGVyLnB1c2goJ2xvZ2luUGFnZScpO1xuICAgICAgfVxuICAgIH1cbiAgICBoYW5kbGVHZXREYXRhc0Zyb21TZXJ2ZXIoKTtcbiAgICByZXR1cm4gKCkgPT4gaGFuZGxlR2V0RGF0YXNGcm9tU2VydmVyKClcbiAgfSwgW2lzQWdhaW5HZXREYXRhXSk7XG5cblxuXG4gIGZ1bmN0aW9uIGxvZ091dCgpIHtcbiAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgnYWNjZXNzVG9rZW4nKTtcbiAgICByb3V0ZXIucHVzaCgnbG9naW5QYWdlJylcbiAgfVxuXG5cblxuXG4gIGFzeW5jIGZ1bmN0aW9uIGhhbmRsZUFkZFRvZG8oKSB7XG4gICAgY29uc3QgdG9kbyA9IHVzZXJJbnB1dFJlZi5jdXJyZW50LnZhbHVlO1xuICAgIHNldElzTG9hZGluZyh0cnVlKVxuICAgIHRyeSB7XG4gICAgICBjb25zdCBhY2Nlc3N0b2tlbiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiYWNjZXNzVG9rZW5cIik7XG4gICAgICBhd2FpdCBheGlvcy5wb3N0KFwiaHR0cDovL2xvY2FsaG9zdDo4MDAwL3RvZG9zL2FkZFRvZG9cIiwgeyB0b2RvIH0sIHtcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgIGFjY2Vzc3Rva2VuXG4gICAgICAgIH0sXG4gICAgICB9KS50aGVuKChyZXMpID0+IHtcbiAgICAgICAgaWYgKHJlcykge1xuICAgICAgICAgIGlmIChyZXMuZGF0YS5zdGF0dXMgPT09IHRydWUpIHtcbiAgICAgICAgICAgIHNldElzTG9hZGluZyhmYWxzZSk7XG4gICAgICAgICAgICBzZXRJc0FnYWluR2V0RGF0YShwcmV2ID0+ICFwcmV2KVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5sb2coZXJyb3IpXG4gICAgfVxuXG5cbiAgfVxuXG5cblxuXG4gIGFzeW5jIGZ1bmN0aW9uIGRlbGV0ZVRvZG8odG9kbyxpKSB7XG4gICAgY29uc29sZS5sb2coaSlcbiAgICB0cnkge1xuICAgICAgY29uc3QgYWNjZXNzdG9rZW4gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImFjY2Vzc1Rva2VuXCIpO1xuICAgICAgYXdhaXQgYXhpb3MuZGVsZXRlKGBodHRwOi8vbG9jYWxob3N0OjgwMDAvdG9kb3MvZGVsZXRlVG9kby8ke3RvZG99YCwge1xuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgYWNjZXNzdG9rZW5cbiAgICAgICAgfVxuICAgICAgfSBcbiAgICAgICkudGhlbihyZXM9PiB7XG4gICAgICAgIGlmIChyZXMpIHtcbiAgICAgICAgICBpZiAocmVzLmRhdGEuc3RhdHVzID09PSB0cnVlKSB7XG4gICAgICAgICAgICBzZXRJc0xvYWRpbmcoZmFsc2UpO1xuICAgICAgICAgICAgc2V0SXNBZ2FpbkdldERhdGEocHJldiA9PiAhcHJldilcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0gKVxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG5cbiAgICB9XG4gIH1cblxuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIHtpc0xvYWRpbmcgPT09IHRydWUgPyA8cD5Mb2FkaW5nPC9wPiA6ICcnfVxuICAgICAgPGgxPkhvbWVQYWdlPC9oMT5cbiAgICAgIDxidXR0b24gb25DbGljaz17bG9nT3V0fT7Qk9CQ0KDQkNClPC9idXR0b24+XG4gICAgICA8aW5wdXQgcmVmPXt1c2VySW5wdXRSZWZ9IC8+XG4gICAgICA8YnV0dG9uIG9uQ2xpY2s9e2hhbmRsZUFkZFRvZG99PtCd0K3QnNCt0KU8L2J1dHRvbj5cbiAgICAgIDxkaXYgc3R5bGU9e3sgd2lkdGg6ICdhdXRvJywgaGVpZ2h0OiBgMTAwcHhgLCBvdmVyZmxvdzogJ3Njcm9sbCcgfX0+XG4gICAgICAgIHt0b2Rvcy5sZW5ndGggPiAwXG4gICAgICAgICAgPyB0b2Rvcy5tYXAoKHRvZG8sIGkpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGksdG9kbylcbiAgICAgICAgICAgIHJldHVybiA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4Jywgd2lkdGg6IGA1MCVgLCBqdXN0aWZ5Q29udGVudDogJ3NwYWNlLWFyb3VuZCcgfX0ga2V5PXt0b2RvICsgaX0+XG4gICAgICAgICAgICAgIHt0b2RvfVxuICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IGRlbGV0ZVRvZG8odG9kbyxpKX0+0KXQkNCh0JDQpTwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+O1xuICAgICAgICAgIH0pXG4gICAgICAgICAgOiBcIlwifVxuICAgICAgPC9kaXY+XG4gICAgPC8+XG4gICk7XG59XG5leHBvcnQgZGVmYXVsdCBIb21lUGFnZSJdLCJuYW1lcyI6WyJheGlvcyIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwidXNlUmVmIiwidXNlUm91dGVyIiwiSG9tZVBhZ2UiLCJsb2dPdXQiLCJsb2NhbFN0b3JhZ2UiLCJyZW1vdmVJdGVtIiwicm91dGVyIiwicHVzaCIsInRvZG9zIiwic2V0VG9kb3MiLCJ1c2VySW5wdXRSZWYiLCJpc0FnYWluR2V0RGF0YSIsInNldElzQWdhaW5HZXREYXRhIiwiaXNMb2FkaW5nIiwic2V0SXNMb2FkaW5nIiwiaGFuZGxlR2V0RGF0YXNGcm9tU2VydmVyIiwiYWNjZXNzVG9rZW4iLCJkYXRhIiwiZXJyb3IiLCJnZXRJdGVtIiwiZ2V0IiwiaGVhZGVycyIsImhhbmRsZUFkZFRvZG8iLCJ0b2RvIiwiYWNjZXNzdG9rZW4iLCJjdXJyZW50IiwidmFsdWUiLCJwb3N0IiwidGhlbiIsInJlcyIsInN0YXR1cyIsInByZXYiLCJjb25zb2xlIiwibG9nIiwiZGVsZXRlVG9kbyIsImkiLCJkZWxldGUiLCJwIiwiaDEiLCJidXR0b24iLCJvbkNsaWNrIiwiaW5wdXQiLCJyZWYiLCJkaXYiLCJzdHlsZSIsIndpZHRoIiwiaGVpZ2h0Iiwib3ZlcmZsb3ciLCJsZW5ndGgiLCJtYXAiLCJkaXNwbGF5IiwianVzdGlmeUNvbnRlbnQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/homepage.js\n"));

/***/ })

});