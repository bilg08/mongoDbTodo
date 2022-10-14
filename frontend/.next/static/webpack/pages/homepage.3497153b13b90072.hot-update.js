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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var _swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @swc/helpers/src/_ts_generator.mjs */ \"./node_modules/@swc/helpers/src/_ts_generator.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n\n\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\nvar HomePage = function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]), todos = ref[0], setTodos = ref[1];\n    var userInputRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)();\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false), isAgainGetData = ref1[0], setIsAgainGetData = ref1[1];\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false), isLoading = ref2[0], setIsLoading = ref2[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        function handleGetDatasFromServer() {\n            return _handleGetDatasFromServer.apply(this, arguments);\n        }\n        function _handleGetDatasFromServer() {\n            _handleGetDatasFromServer = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(function() {\n                var accessToken, data, error;\n                return (0,_swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(this, function(_state) {\n                    switch(_state.label){\n                        case 0:\n                            _state.trys.push([\n                                0,\n                                2,\n                                ,\n                                3\n                            ]);\n                            accessToken = localStorage.getItem(\"accessToken\");\n                            return [\n                                4,\n                                axios__WEBPACK_IMPORTED_MODULE_1__[\"default\"].get(\"http://localhost:8000/myInfo\", {\n                                    headers: {\n                                        accessToken: accessToken\n                                    }\n                                })\n                            ];\n                        case 1:\n                            data = _state.sent();\n                            setTodos(data.data.data.todos);\n                            return [\n                                3,\n                                3\n                            ];\n                        case 2:\n                            error = _state.sent();\n                            return [\n                                3,\n                                3\n                            ];\n                        case 3:\n                            return [\n                                2\n                            ];\n                    }\n                });\n            });\n            return _handleGetDatasFromServer.apply(this, arguments);\n        }\n        handleGetDatasFromServer();\n        return function() {\n            return handleGetDatasFromServer();\n        };\n    }, [\n        isAgainGetData\n    ]);\n    function handleAddTodo() {\n        return _handleAddTodo.apply(this, arguments);\n    }\n    function _handleAddTodo() {\n        _handleAddTodo = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(function() {\n            var todo, accesstoken, data, error;\n            return (0,_swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(this, function(_state) {\n                switch(_state.label){\n                    case 0:\n                        todo = userInputRef.current.value;\n                        setIsLoading(true);\n                        _state.label = 1;\n                    case 1:\n                        _state.trys.push([\n                            1,\n                            3,\n                            ,\n                            4\n                        ]);\n                        accesstoken = localStorage.getItem(\"accessToken\");\n                        return [\n                            4,\n                            axios__WEBPACK_IMPORTED_MODULE_1__[\"default\"].post(\"http://localhost:8000/todos/addTodo\", {\n                                todo: todo\n                            }, {\n                                headers: {\n                                    accesstoken: accesstoken\n                                }\n                            }).then(function(res) {\n                                if (res) {\n                                    if (res.data.status === true) {\n                                        setIsLoading(false);\n                                        setIsAgainGetData(function(prev) {\n                                            return !prev;\n                                        });\n                                    }\n                                }\n                            })\n                        ];\n                    case 2:\n                        data = _state.sent();\n                        return [\n                            3,\n                            4\n                        ];\n                    case 3:\n                        error = _state.sent();\n                        return [\n                            3,\n                            4\n                        ];\n                    case 4:\n                        return [\n                            2\n                        ];\n                }\n            });\n        });\n        return _handleAddTodo.apply(this, arguments);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            isLoading === true ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: \"Loading\"\n            }, void 0, false, {\n                fileName: \"/Users/bilguunleap2/Desktop/mongoDbTodo/frontend/pages/homepage.js\",\n                lineNumber: 52,\n                columnNumber: 30\n            }, _this) : \"\",\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"HomePage\"\n            }, void 0, false, {\n                fileName: \"/Users/bilguunleap2/Desktop/mongoDbTodo/frontend/pages/homepage.js\",\n                lineNumber: 53,\n                columnNumber: 9\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: function() {\n                    localStorage.removeItem(\"accessToken\");\n                },\n                children: \"ГАРАХ\"\n            }, void 0, false, {\n                fileName: \"/Users/bilguunleap2/Desktop/mongoDbTodo/frontend/pages/homepage.js\",\n                lineNumber: 54,\n                columnNumber: 9\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                ref: userInputRef\n            }, void 0, false, {\n                fileName: \"/Users/bilguunleap2/Desktop/mongoDbTodo/frontend/pages/homepage.js\",\n                lineNumber: 58,\n                columnNumber: 9\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: handleAddTodo,\n                children: \"НЭМЭХ\"\n            }, void 0, false, {\n                fileName: \"/Users/bilguunleap2/Desktop/mongoDbTodo/frontend/pages/homepage.js\",\n                lineNumber: 59,\n                columnNumber: 9\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    width: \"auto\",\n                    height: \"100px\",\n                    overflow: \"scroll\"\n                },\n                children: todos.length > 0 ? todos.map(function(todo, i) {\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        style: {\n                            display: \"flex\",\n                            width: \"50%\",\n                            justifyContent: \"space-around\"\n                        },\n                        children: [\n                            todo,\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                children: \"ХАСАХ\"\n                            }, void 0, false, {\n                                fileName: \"/Users/bilguunleap2/Desktop/mongoDbTodo/frontend/pages/homepage.js\",\n                                lineNumber: 65,\n                                columnNumber: 19\n                            }, _this)\n                        ]\n                    }, todo + i, true, {\n                        fileName: \"/Users/bilguunleap2/Desktop/mongoDbTodo/frontend/pages/homepage.js\",\n                        lineNumber: 63,\n                        columnNumber: 24\n                    }, _this);\n                }) : \"\"\n            }, void 0, false, {\n                fileName: \"/Users/bilguunleap2/Desktop/mongoDbTodo/frontend/pages/homepage.js\",\n                lineNumber: 60,\n                columnNumber: 9\n            }, _this)\n        ]\n    }, void 0, true);\n};\n_s(HomePage, \"+UKqWGc/24+1C2oxKU4LHUaIY6Y=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter\n    ];\n});\n_c = HomePage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (HomePage);\nvar _c;\n$RefreshReg$(_c, \"HomePage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuaW1wb3J0IHsgdXNlU3RhdGUsdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQge3VzZVJvdXRlcn0gZnJvbSAnbmV4dC9yb3V0ZXInXG5jb25zdCBIb21lUGFnZSA9ICgpID0+IHtcbiAgICBjb25zdCBbdG9kb3MsIHNldFRvZG9zXSA9IHVzZVN0YXRlKFtdKTtcbiAgICBjb25zdCB1c2VySW5wdXRSZWYgPSB1c2VSZWYoKVxuICAgIGNvbnN0IFtpc0FnYWluR2V0RGF0YSxzZXRJc0FnYWluR2V0RGF0YV0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcbiAgICAgY29uc3QgW2lzTG9hZGluZyxzZXRJc0xvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgIGFzeW5jIGZ1bmN0aW9uIGhhbmRsZUdldERhdGFzRnJvbVNlcnZlcigpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBjb25zdCBhY2Nlc3NUb2tlbiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiYWNjZXNzVG9rZW5cIik7XG4gICAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IGF4aW9zLmdldChcImh0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9teUluZm9cIiwge1xuICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICBhY2Nlc3NUb2tlbjogYWNjZXNzVG9rZW4sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0pO1xuICAgICAgICAgIHNldFRvZG9zKGRhdGEuZGF0YS5kYXRhLnRvZG9zKTtcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHt9XG4gICAgICB9XG4gICAgICBoYW5kbGVHZXREYXRhc0Zyb21TZXJ2ZXIoKTtcbiAgICAgIHJldHVybiAoKT0+IGhhbmRsZUdldERhdGFzRnJvbVNlcnZlcigpXG4gICAgfSwgW2lzQWdhaW5HZXREYXRhXSk7XG5cbiAgYXN5bmMgZnVuY3Rpb24gaGFuZGxlQWRkVG9kbygpIHtcbiAgICBjb25zdCB0b2RvID0gdXNlcklucHV0UmVmLmN1cnJlbnQudmFsdWU7XG4gICAgc2V0SXNMb2FkaW5nKHRydWUpXG4gICAgICAgdHJ5IHtcbiAgICAgICAgIGNvbnN0IGFjY2Vzc3Rva2VuID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJhY2Nlc3NUb2tlblwiKTtcbiAgICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBheGlvcy5wb3N0KFwiaHR0cDovL2xvY2FsaG9zdDo4MDAwL3RvZG9zL2FkZFRvZG9cIix7dG9kb30sIHtcbiAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgIGFjY2Vzc3Rva2VuXG4gICAgICAgICAgIH0sXG4gICAgICAgICB9KS50aGVuKChyZXMpID0+IHtcbiAgICAgICAgICBpZihyZXMpIHtcbiAgICAgICAgICAgIGlmKHJlcy5kYXRhLnN0YXR1cz09PXRydWUpIHtcbiAgICAgICAgICAgICAgc2V0SXNMb2FkaW5nKGZhbHNlKTtcbiAgICAgICAgICAgICAgc2V0SXNBZ2FpbkdldERhdGEocHJldj0+IXByZXYpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgfSlcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHt9XG4gICAgICBcbiAgICAgICAgXG4gICAgfVxuXG5cbiAgIFxuICAgIHJldHVybiAoXG4gICAgICA8PlxuICAgICAgICB7aXNMb2FkaW5nID09PXRydWUgPyA8cD5Mb2FkaW5nPC9wPjonJ31cbiAgICAgICAgPGgxPkhvbWVQYWdlPC9oMT5cbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ2FjY2Vzc1Rva2VuJyk7XG4gICAgICAgICAgXG4gICAgICAgIH19PtCT0JDQoNCQ0KU8L2J1dHRvbj5cbiAgICAgICAgPGlucHV0IHJlZj17dXNlcklucHV0UmVmfSAvPlxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2hhbmRsZUFkZFRvZG99PtCd0K3QnNCt0KU8L2J1dHRvbj5cbiAgICAgICAgPGRpdiBzdHlsZT17e3dpZHRoOidhdXRvJyxoZWlnaHQ6YDEwMHB4YCxvdmVyZmxvdzonc2Nyb2xsJ319PlxuICAgICAgICAgIHt0b2Rvcy5sZW5ndGggPiAwXG4gICAgICAgICAgICA/IHRvZG9zLm1hcCgodG9kbywgaSkgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiA8ZGl2IHN0eWxlPXt7ZGlzcGxheTonZmxleCcsd2lkdGg6YDUwJWAsanVzdGlmeUNvbnRlbnQ6J3NwYWNlLWFyb3VuZCd9fSBrZXk9e3RvZG8gKyBpfT5cbiAgICAgICAgICAgICAgICAgIHt0b2RvfVxuICAgICAgICAgICAgICAgICAgPGJ1dHRvbj7QpdCQ0KHQkNClPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPC9kaXY+O1xuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgOiBcIlwifVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvPlxuICAgICk7XG59XG5leHBvcnQgZGVmYXVsdCBIb21lUGFnZSJdLCJuYW1lcyI6WyJheGlvcyIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwidXNlUmVmIiwidXNlUm91dGVyIiwiSG9tZVBhZ2UiLCJ0b2RvcyIsInNldFRvZG9zIiwidXNlcklucHV0UmVmIiwiaXNBZ2FpbkdldERhdGEiLCJzZXRJc0FnYWluR2V0RGF0YSIsInJvdXRlciIsImlzTG9hZGluZyIsInNldElzTG9hZGluZyIsImhhbmRsZUdldERhdGFzRnJvbVNlcnZlciIsImFjY2Vzc1Rva2VuIiwiZGF0YSIsImVycm9yIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsImdldCIsImhlYWRlcnMiLCJoYW5kbGVBZGRUb2RvIiwidG9kbyIsImFjY2Vzc3Rva2VuIiwiY3VycmVudCIsInZhbHVlIiwicG9zdCIsInRoZW4iLCJyZXMiLCJzdGF0dXMiLCJwcmV2IiwicCIsImgxIiwiYnV0dG9uIiwib25DbGljayIsInJlbW92ZUl0ZW0iLCJpbnB1dCIsInJlZiIsImRpdiIsInN0eWxlIiwid2lkdGgiLCJoZWlnaHQiLCJvdmVyZmxvdyIsImxlbmd0aCIsIm1hcCIsImkiLCJkaXNwbGF5IiwianVzdGlmeUNvbnRlbnQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/homepage.js\n"));

/***/ })

});