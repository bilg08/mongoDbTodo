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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var _swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @swc/helpers/src/_ts_generator.mjs */ \"./node_modules/@swc/helpers/src/_ts_generator.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n\n\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\nvar HomePage = function() {\n    var logOut = function logOut() {\n        localStorage.removeItem(\"accessToken\");\n        router.push(\"loginPage\");\n    };\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]), todos = ref[0], setTodos = ref[1];\n    var userInputRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)();\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false), isAgainGetData = ref1[0], setIsAgainGetData = ref1[1];\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false), isLoading = ref2[0], setIsLoading = ref2[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        function handleGetDatasFromServer() {\n            return _handleGetDatasFromServer.apply(this, arguments);\n        }\n        function _handleGetDatasFromServer() {\n            _handleGetDatasFromServer = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(function() {\n                var accessToken, data, error;\n                return (0,_swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(this, function(_state) {\n                    switch(_state.label){\n                        case 0:\n                            _state.trys.push([\n                                0,\n                                2,\n                                ,\n                                3\n                            ]);\n                            accessToken = localStorage.getItem(\"accessToken\");\n                            return [\n                                4,\n                                axios__WEBPACK_IMPORTED_MODULE_1__[\"default\"].get(\"http://localhost:8000/myInfo\", {\n                                    headers: {\n                                        accessToken: accessToken\n                                    }\n                                })\n                            ];\n                        case 1:\n                            data = _state.sent();\n                            setTodos(data.data.data.todos);\n                            return [\n                                3,\n                                3\n                            ];\n                        case 2:\n                            error = _state.sent();\n                            router.push(\"loginPage\");\n                            return [\n                                3,\n                                3\n                            ];\n                        case 3:\n                            return [\n                                2\n                            ];\n                    }\n                });\n            });\n            return _handleGetDatasFromServer.apply(this, arguments);\n        }\n        handleGetDatasFromServer();\n        return function() {\n            return handleGetDatasFromServer();\n        };\n    }, [\n        isAgainGetData\n    ]);\n    function handleAddTodo() {\n        return _handleAddTodo.apply(this, arguments);\n    }\n    function _handleAddTodo() {\n        _handleAddTodo = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(function() {\n            var todo, accesstoken, error;\n            return (0,_swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(this, function(_state) {\n                switch(_state.label){\n                    case 0:\n                        todo = userInputRef.current.value;\n                        setIsLoading(true);\n                        _state.label = 1;\n                    case 1:\n                        _state.trys.push([\n                            1,\n                            3,\n                            ,\n                            4\n                        ]);\n                        accesstoken = localStorage.getItem(\"accessToken\");\n                        return [\n                            4,\n                            axios__WEBPACK_IMPORTED_MODULE_1__[\"default\"].post(\"http://localhost:8000/todos/addTodo\", {\n                                todo: todo\n                            }, {\n                                headers: {\n                                    accesstoken: accesstoken\n                                }\n                            }).then(function(res) {\n                                if (res) {\n                                    if (res.data.status === true) {\n                                        setIsLoading(false);\n                                        setIsAgainGetData(function(prev) {\n                                            return !prev;\n                                        });\n                                    }\n                                }\n                            })\n                        ];\n                    case 2:\n                        _state.sent();\n                        return [\n                            3,\n                            4\n                        ];\n                    case 3:\n                        error = _state.sent();\n                        console.log(error);\n                        return [\n                            3,\n                            4\n                        ];\n                    case 4:\n                        return [\n                            2\n                        ];\n                }\n            });\n        });\n        return _handleAddTodo.apply(this, arguments);\n    }\n    function deleteTodo(todo) {\n        return _deleteTodo.apply(this, arguments);\n    }\n    function _deleteTodo() {\n        _deleteTodo = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(function(todo) {\n            var accesstoken, error;\n            return (0,_swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(this, function(_state) {\n                switch(_state.label){\n                    case 0:\n                        console.log(todo, \"todo\");\n                        _state.label = 1;\n                    case 1:\n                        _state.trys.push([\n                            1,\n                            3,\n                            ,\n                            4\n                        ]);\n                        accesstoken = localStorage.getItem(\"accessToken\");\n                        console.log(accesstoken);\n                        return [\n                            4,\n                            axios__WEBPACK_IMPORTED_MODULE_1__[\"default\"][\"delete\"](\"http://localhost:8000/todos/deleteTodo/\".concat(todo), {\n                                headers: {\n                                    accesstoken: accesstoken\n                                }\n                            }, {\n                                todo: todo\n                            })\n                        ];\n                    case 2:\n                        _state.sent();\n                        return [\n                            3,\n                            4\n                        ];\n                    case 3:\n                        error = _state.sent();\n                        return [\n                            3,\n                            4\n                        ];\n                    case 4:\n                        return [\n                            2\n                        ];\n                }\n            });\n        });\n        return _deleteTodo.apply(this, arguments);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            isLoading === true ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: \"Loading\"\n            }, void 0, false, {\n                fileName: \"/Users/bilguunleap2/Desktop/mongoDbTodo/frontend/pages/homepage.js\",\n                lineNumber: 85,\n                columnNumber: 29\n            }, _this) : \"\",\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"HomePage\"\n            }, void 0, false, {\n                fileName: \"/Users/bilguunleap2/Desktop/mongoDbTodo/frontend/pages/homepage.js\",\n                lineNumber: 86,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: logOut,\n                children: \"ГАРАХ\"\n            }, void 0, false, {\n                fileName: \"/Users/bilguunleap2/Desktop/mongoDbTodo/frontend/pages/homepage.js\",\n                lineNumber: 87,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                ref: userInputRef\n            }, void 0, false, {\n                fileName: \"/Users/bilguunleap2/Desktop/mongoDbTodo/frontend/pages/homepage.js\",\n                lineNumber: 88,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: handleAddTodo,\n                children: \"НЭМЭХ\"\n            }, void 0, false, {\n                fileName: \"/Users/bilguunleap2/Desktop/mongoDbTodo/frontend/pages/homepage.js\",\n                lineNumber: 89,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    width: \"auto\",\n                    height: \"100px\",\n                    overflow: \"scroll\"\n                },\n                children: todos.length > 0 ? todos.map(function(todo, i) {\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        style: {\n                            display: \"flex\",\n                            width: \"50%\",\n                            justifyContent: \"space-around\"\n                        },\n                        children: [\n                            todo,\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                onClick: function() {\n                                    return deleteTodo(todo);\n                                },\n                                children: \"ХАСАХ\"\n                            }, void 0, false, {\n                                fileName: \"/Users/bilguunleap2/Desktop/mongoDbTodo/frontend/pages/homepage.js\",\n                                lineNumber: 95,\n                                columnNumber: 15\n                            }, _this)\n                        ]\n                    }, todo + i, true, {\n                        fileName: \"/Users/bilguunleap2/Desktop/mongoDbTodo/frontend/pages/homepage.js\",\n                        lineNumber: 93,\n                        columnNumber: 20\n                    }, _this);\n                }) : \"\"\n            }, void 0, false, {\n                fileName: \"/Users/bilguunleap2/Desktop/mongoDbTodo/frontend/pages/homepage.js\",\n                lineNumber: 90,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true);\n};\n_s(HomePage, \"+UKqWGc/24+1C2oxKU4LHUaIY6Y=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter\n    ];\n});\n_c = HomePage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (HomePage);\nvar _c;\n$RefreshReg$(_c, \"HomePage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QWE7MEJBQUUsT0FBSzs7Ozs7cUJBQVM7MEJBQzlDLDhEQUFDb0IsS0FBRztnQkFBQ0MsS0FBSyxFQUFFO29CQUFFQyxLQUFLLEVBQUUsTUFBTTtvQkFBRUMsTUFBTSxFQUFHLE9BQUs7b0JBQUdDLFFBQVEsRUFBRSxRQUFRO2lCQUFFOzBCQUMvRHRDLEtBQUssQ0FBQ3VDLE1BQU0sR0FBRyxDQUFDLEdBQ2J2QyxLQUFLLENBQUN3QyxHQUFHLENBQUMsU0FBQ3pCLElBQUksRUFBRTBCLENBQUMsRUFBSztvQkFDdkIscUJBQU8sOERBQUNQLEtBQUc7d0JBQUNDLEtBQUssRUFBRTs0QkFBRU8sT0FBTyxFQUFFLE1BQU07NEJBQUVOLEtBQUssRUFBRyxLQUFHOzRCQUFHTyxjQUFjLEVBQUUsY0FBYzt5QkFBRTs7NEJBQ2pGNUIsSUFBSTswQ0FDTCw4REFBQ2UsUUFBTTtnQ0FBQ0MsT0FBTyxFQUFFOzJDQUFNTCxVQUFVLENBQUNYLElBQUksQ0FBQztpQ0FBQTswQ0FBRSxPQUFLOzs7OztxQ0FBUzs7dUJBRmtDQSxJQUFJLEdBQUcwQixDQUFDOzs7OzZCQUc3RixDQUFDO2dCQUNULENBQUMsQ0FBQyxHQUNBLEVBQUU7Ozs7O3FCQUNGOztvQkFDTCxDQUNIO0FBQ0osQ0FBQztHQWxHSy9DLFFBQVE7O1FBSUdELGtEQUFTOzs7QUFKcEJDLEtBQUFBLFFBQVE7QUFtR2QsK0RBQWVBLFFBQVEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaG9tZXBhZ2UuanM/MzY2OCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcbmNvbnN0IEhvbWVQYWdlID0gKCkgPT4ge1xuICBjb25zdCBbdG9kb3MsIHNldFRvZG9zXSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3QgdXNlcklucHV0UmVmID0gdXNlUmVmKClcbiAgY29uc3QgW2lzQWdhaW5HZXREYXRhLCBzZXRJc0FnYWluR2V0RGF0YV0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXG4gIGNvbnN0IFtpc0xvYWRpbmcsIHNldElzTG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSlcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBhc3luYyBmdW5jdGlvbiBoYW5kbGVHZXREYXRhc0Zyb21TZXJ2ZXIoKSB7XG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCBhY2Nlc3NUb2tlbiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiYWNjZXNzVG9rZW5cIik7XG4gICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBheGlvcy5nZXQoXCJodHRwOi8vbG9jYWxob3N0OjgwMDAvbXlJbmZvXCIsIHtcbiAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICBhY2Nlc3NUb2tlbjogYWNjZXNzVG9rZW4sXG4gICAgICAgICAgfSxcbiAgICAgICAgfSk7XG4gICAgICAgIHNldFRvZG9zKGRhdGEuZGF0YS5kYXRhLnRvZG9zKTtcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIHJvdXRlci5wdXNoKCdsb2dpblBhZ2UnKTtcbiAgICAgIH1cbiAgICB9XG4gICAgaGFuZGxlR2V0RGF0YXNGcm9tU2VydmVyKCk7XG4gICAgcmV0dXJuICgpID0+IGhhbmRsZUdldERhdGFzRnJvbVNlcnZlcigpXG4gIH0sIFtpc0FnYWluR2V0RGF0YV0pO1xuXG5cblxuICBmdW5jdGlvbiBsb2dPdXQoKSB7XG4gICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ2FjY2Vzc1Rva2VuJyk7XG4gICAgcm91dGVyLnB1c2goJ2xvZ2luUGFnZScpXG4gIH1cblxuXG5cblxuICBhc3luYyBmdW5jdGlvbiBoYW5kbGVBZGRUb2RvKCkge1xuICAgIGNvbnN0IHRvZG8gPSB1c2VySW5wdXRSZWYuY3VycmVudC52YWx1ZTtcbiAgICBzZXRJc0xvYWRpbmcodHJ1ZSlcbiAgICB0cnkge1xuICAgICAgY29uc3QgYWNjZXNzdG9rZW4gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImFjY2Vzc1Rva2VuXCIpO1xuICAgICAgYXdhaXQgYXhpb3MucG9zdChcImh0dHA6Ly9sb2NhbGhvc3Q6ODAwMC90b2Rvcy9hZGRUb2RvXCIsIHsgdG9kbyB9LCB7XG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICBhY2Nlc3N0b2tlblxuICAgICAgICB9LFxuICAgICAgfSkudGhlbigocmVzKSA9PiB7XG4gICAgICAgIGlmIChyZXMpIHtcbiAgICAgICAgICBpZiAocmVzLmRhdGEuc3RhdHVzID09PSB0cnVlKSB7XG4gICAgICAgICAgICBzZXRJc0xvYWRpbmcoZmFsc2UpO1xuICAgICAgICAgICAgc2V0SXNBZ2FpbkdldERhdGEocHJldiA9PiAhcHJldilcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUubG9nKGVycm9yKVxuICAgIH1cblxuXG4gIH1cblxuXG5cblxuICBhc3luYyBmdW5jdGlvbiBkZWxldGVUb2RvKHRvZG8pIHtcbiAgICBjb25zb2xlLmxvZyh0b2RvLCAndG9kbycpXG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IGFjY2Vzc3Rva2VuID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJhY2Nlc3NUb2tlblwiKTtcbiAgICAgIGNvbnNvbGUubG9nKGFjY2Vzc3Rva2VuKVxuICAgICAgYXdhaXQgYXhpb3MuZGVsZXRlKGBodHRwOi8vbG9jYWxob3N0OjgwMDAvdG9kb3MvZGVsZXRlVG9kby8ke3RvZG99YCwge1xuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgYWNjZXNzdG9rZW5cbiAgICAgICAgfSxcblxuICAgICAgfSwgIHt0b2RvfSApXG4gICAgICAvLyBhd2FpdCBheGlvcy5nZXQoYGh0dHA6Ly9sb2NhbGhvc3Q6ODAwMC90b2Rvcy9kZWxldGVUb2RvYCx7aGVhZGVyczphY2Nlc3N0b2tlbn0se2hlYWRlcnM6YWNjZXNzdG9rZW59KS50aGVuKGNvbnNvbGUubG9nKCdpbCcpKVxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG5cbiAgICB9XG4gIH1cblxuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIHtpc0xvYWRpbmcgPT09IHRydWUgPyA8cD5Mb2FkaW5nPC9wPiA6ICcnfVxuICAgICAgPGgxPkhvbWVQYWdlPC9oMT5cbiAgICAgIDxidXR0b24gb25DbGljaz17bG9nT3V0fT7Qk9CQ0KDQkNClPC9idXR0b24+XG4gICAgICA8aW5wdXQgcmVmPXt1c2VySW5wdXRSZWZ9IC8+XG4gICAgICA8YnV0dG9uIG9uQ2xpY2s9e2hhbmRsZUFkZFRvZG99PtCd0K3QnNCt0KU8L2J1dHRvbj5cbiAgICAgIDxkaXYgc3R5bGU9e3sgd2lkdGg6ICdhdXRvJywgaGVpZ2h0OiBgMTAwcHhgLCBvdmVyZmxvdzogJ3Njcm9sbCcgfX0+XG4gICAgICAgIHt0b2Rvcy5sZW5ndGggPiAwXG4gICAgICAgICAgPyB0b2Rvcy5tYXAoKHRvZG8sIGkpID0+IHtcbiAgICAgICAgICAgIHJldHVybiA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4Jywgd2lkdGg6IGA1MCVgLCBqdXN0aWZ5Q29udGVudDogJ3NwYWNlLWFyb3VuZCcgfX0ga2V5PXt0b2RvICsgaX0+XG4gICAgICAgICAgICAgIHt0b2RvfVxuICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IGRlbGV0ZVRvZG8odG9kbyl9PtCl0JDQodCQ0KU8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PjtcbiAgICAgICAgICB9KVxuICAgICAgICAgIDogXCJcIn1cbiAgICAgIDwvZGl2PlxuICAgIDwvPlxuICApO1xufVxuZXhwb3J0IGRlZmF1bHQgSG9tZVBhZ2UiXSwibmFtZXMiOlsiYXhpb3MiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInVzZVJlZiIsInVzZVJvdXRlciIsIkhvbWVQYWdlIiwibG9nT3V0IiwibG9jYWxTdG9yYWdlIiwicmVtb3ZlSXRlbSIsInJvdXRlciIsInB1c2giLCJ0b2RvcyIsInNldFRvZG9zIiwidXNlcklucHV0UmVmIiwiaXNBZ2FpbkdldERhdGEiLCJzZXRJc0FnYWluR2V0RGF0YSIsImlzTG9hZGluZyIsInNldElzTG9hZGluZyIsImhhbmRsZUdldERhdGFzRnJvbVNlcnZlciIsImFjY2Vzc1Rva2VuIiwiZGF0YSIsImVycm9yIiwiZ2V0SXRlbSIsImdldCIsImhlYWRlcnMiLCJoYW5kbGVBZGRUb2RvIiwidG9kbyIsImFjY2Vzc3Rva2VuIiwiY3VycmVudCIsInZhbHVlIiwicG9zdCIsInRoZW4iLCJyZXMiLCJzdGF0dXMiLCJwcmV2IiwiY29uc29sZSIsImxvZyIsImRlbGV0ZVRvZG8iLCJkZWxldGUiLCJwIiwiaDEiLCJidXR0b24iLCJvbkNsaWNrIiwiaW5wdXQiLCJyZWYiLCJkaXYiLCJzdHlsZSIsIndpZHRoIiwiaGVpZ2h0Iiwib3ZlcmZsb3ciLCJsZW5ndGgiLCJtYXAiLCJpIiwiZGlzcGxheSIsImp1c3RpZnlDb250ZW50Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/homepage.js\n"));

/***/ })

});