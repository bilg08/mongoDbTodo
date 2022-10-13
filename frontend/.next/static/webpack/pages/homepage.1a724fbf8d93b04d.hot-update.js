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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var _swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @swc/helpers/src/_ts_generator.mjs */ \"./node_modules/@swc/helpers/src/_ts_generator.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\n\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\nvar HomePage = function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]), todos = ref[0], setTodos = ref[1];\n    var userInputRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)();\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false), isAgainGetData = ref1[0], setIsAgainGetData = ref1[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        function handleGetDatasFromServer() {\n            return _handleGetDatasFromServer.apply(this, arguments);\n        }\n        function _handleGetDatasFromServer() {\n            _handleGetDatasFromServer = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(function() {\n                var accessToken, data, error;\n                return (0,_swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(this, function(_state) {\n                    switch(_state.label){\n                        case 0:\n                            _state.trys.push([\n                                0,\n                                2,\n                                ,\n                                3\n                            ]);\n                            accessToken = localStorage.getItem(\"accessToken\");\n                            return [\n                                4,\n                                axios__WEBPACK_IMPORTED_MODULE_1__[\"default\"].get(\"http://localhost:8000/myInfo\", {\n                                    headers: {\n                                        accessToken: accessToken\n                                    }\n                                })\n                            ];\n                        case 1:\n                            data = _state.sent();\n                            setTodos(data.data.data.todos);\n                            return [\n                                3,\n                                3\n                            ];\n                        case 2:\n                            error = _state.sent();\n                            return [\n                                3,\n                                3\n                            ];\n                        case 3:\n                            return [\n                                2\n                            ];\n                    }\n                });\n            });\n            return _handleGetDatasFromServer.apply(this, arguments);\n        }\n        handleGetDatasFromServer();\n    }, [\n        isAgainGetData\n    ]);\n    function handleAddTodo() {\n        return _handleAddTodo.apply(this, arguments);\n    }\n    function _handleAddTodo() {\n        _handleAddTodo = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(function() {\n            var accessToken, data, error;\n            return (0,_swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(this, function(_state) {\n                switch(_state.label){\n                    case 0:\n                        _state.trys.push([\n                            0,\n                            2,\n                            ,\n                            3\n                        ]);\n                        accessToken = localStorage.getItem(\"accessToken\");\n                        console.log(accessToken);\n                        return [\n                            4,\n                            axios__WEBPACK_IMPORTED_MODULE_1__[\"default\"].post(\"http://localhost:8000/todos/addTodo\", {\n                                headers: {\n                                    accessToken: accessToken\n                                }\n                            })\n                        ];\n                    case 1:\n                        data = _state.sent();\n                        setTodos(data.data.data.todos);\n                        return [\n                            3,\n                            3\n                        ];\n                    case 2:\n                        error = _state.sent();\n                        return [\n                            3,\n                            3\n                        ];\n                    case 3:\n                        return [\n                            2\n                        ];\n                }\n            });\n        });\n        return _handleAddTodo.apply(this, arguments);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"HomePage\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\loginWithMongodb\\\\frontend\\\\pages\\\\homepage.js\",\n                lineNumber: 43,\n                columnNumber: 9\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                ref: userInputRef\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\loginWithMongodb\\\\frontend\\\\pages\\\\homepage.js\",\n                lineNumber: 44,\n                columnNumber: 9\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: function() {\n                    return handleAddTodo();\n                },\n                children: \"НЭМЭХ\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\loginWithMongodb\\\\frontend\\\\pages\\\\homepage.js\",\n                lineNumber: 45,\n                columnNumber: 9\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: function() {\n                    return setIsAgainGetData(function(e) {\n                        return !e;\n                    });\n                },\n                children: \"ДЭЛГЭРЭНГҮЙ\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\loginWithMongodb\\\\frontend\\\\pages\\\\homepage.js\",\n                lineNumber: 46,\n                columnNumber: 9\n            }, _this),\n            todos.length > 0 ? todos.map(function(todo) {\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                    children: todo\n                }, todo, false, {\n                    fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\loginWithMongodb\\\\frontend\\\\pages\\\\homepage.js\",\n                    lineNumber: 51,\n                    columnNumber: 22\n                }, _this);\n            }) : \"\"\n        ]\n    }, void 0, true);\n};\n_s(HomePage, \"P6Lbz5VBCvcyxEsnpxWSw4PDVD0=\");\n_c = HomePage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (HomePage);\nvar _c;\n$RefreshReg$(_c, \"HomePage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0dBckRLMUIsUUFBUTtBQUFSQSxLQUFBQSxRQUFRO0FBc0RkLCtEQUFlQSxRQUFRIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2hvbWVwYWdlLmpzPzM2NjgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSx1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gJ3JlYWN0J1xyXG5jb25zdCBIb21lUGFnZSA9ICgpID0+IHtcclxuICAgIGNvbnN0IFt0b2Rvcywgc2V0VG9kb3NdID0gdXNlU3RhdGUoW10pO1xyXG4gICAgY29uc3QgdXNlcklucHV0UmVmID0gdXNlUmVmKClcclxuICAgIGNvbnN0IFtpc0FnYWluR2V0RGF0YSxzZXRJc0FnYWluR2V0RGF0YV0gPSB1c2VTdGF0ZShmYWxzZSkgXHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgYXN5bmMgZnVuY3Rpb24gaGFuZGxlR2V0RGF0YXNGcm9tU2VydmVyKCkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICBjb25zdCBhY2Nlc3NUb2tlbiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiYWNjZXNzVG9rZW5cIik7XHJcbiAgICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgYXhpb3MuZ2V0KFwiaHR0cDovL2xvY2FsaG9zdDo4MDAwL215SW5mb1wiLCB7XHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICBhY2Nlc3NUb2tlbjogYWNjZXNzVG9rZW4sXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICAgIHNldFRvZG9zKGRhdGEuZGF0YS5kYXRhLnRvZG9zKTtcclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge31cclxuICAgICAgfVxyXG4gICAgICBoYW5kbGVHZXREYXRhc0Zyb21TZXJ2ZXIoKTtcclxuICAgIH0sIFtpc0FnYWluR2V0RGF0YV0pO1xyXG5cclxuICAgIGFzeW5jIGZ1bmN0aW9uIGhhbmRsZUFkZFRvZG8oKSB7XHJcbiAgICAgICB0cnkge1xyXG4gICAgICAgICAgIGNvbnN0IGFjY2Vzc1Rva2VuID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJhY2Nlc3NUb2tlblwiKTtcclxuICAgICAgICAgY29uc29sZS5sb2coYWNjZXNzVG9rZW4pXHJcbiAgICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBheGlvcy5wb3N0KFwiaHR0cDovL2xvY2FsaG9zdDo4MDAwL3RvZG9zL2FkZFRvZG9cIiwge1xyXG4gICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgIGFjY2Vzc1Rva2VuOiBhY2Nlc3NUb2tlbixcclxuICAgICAgICAgICB9LFxyXG4gICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICBzZXRUb2RvcyhkYXRhLmRhdGEuZGF0YS50b2Rvcyk7XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHt9XHJcbiAgICAgIFxyXG4gICAgICAgIFxyXG4gICAgfVxyXG5cclxuXHJcbiAgIFxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPD5cclxuICAgICAgICA8aDE+SG9tZVBhZ2U8L2gxPlxyXG4gICAgICAgIDxpbnB1dCByZWY9e3VzZXJJbnB1dFJlZn0gLz5cclxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpPT5oYW5kbGVBZGRUb2RvKCl9PtCd0K3QnNCt0KU8L2J1dHRvbj5cclxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHNldElzQWdhaW5HZXREYXRhKChlKSA9PiAhZSl9PlxyXG4gICAgICAgICAg0JTQrdCb0JPQrdCg0K3QndCT0q7QmVxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIHt0b2Rvcy5sZW5ndGggPiAwXHJcbiAgICAgICAgICA/IHRvZG9zLm1hcCgodG9kbykgPT4ge1xyXG4gICAgICAgICAgICAgIHJldHVybiA8bGkga2V5PXt0b2RvfT57dG9kb308L2xpPjtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgIDogXCJcIn1cclxuICAgICAgPC8+XHJcbiAgICApO1xyXG59XHJcbmV4cG9ydCBkZWZhdWx0IEhvbWVQYWdlIl0sIm5hbWVzIjpbImF4aW9zIiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJ1c2VSZWYiLCJIb21lUGFnZSIsInRvZG9zIiwic2V0VG9kb3MiLCJ1c2VySW5wdXRSZWYiLCJpc0FnYWluR2V0RGF0YSIsInNldElzQWdhaW5HZXREYXRhIiwiaGFuZGxlR2V0RGF0YXNGcm9tU2VydmVyIiwiYWNjZXNzVG9rZW4iLCJkYXRhIiwiZXJyb3IiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiZ2V0IiwiaGVhZGVycyIsImhhbmRsZUFkZFRvZG8iLCJjb25zb2xlIiwibG9nIiwicG9zdCIsImgxIiwiaW5wdXQiLCJyZWYiLCJidXR0b24iLCJvbkNsaWNrIiwiZSIsImxlbmd0aCIsIm1hcCIsInRvZG8iLCJsaSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/homepage.js\n"));

/***/ })

});