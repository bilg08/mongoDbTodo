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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var _swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @swc/helpers/src/_ts_generator.mjs */ \"./node_modules/@swc/helpers/src/_ts_generator.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n\n\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\nvar HomePage = function() {\n    var logOut = function logOut() {\n        localStorage.removeItem(\"accessToken\");\n        router.push(\"loginPage\");\n    };\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]), todos = ref[0], setTodos = ref[1];\n    var userInputRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)();\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false), isAgainGetData = ref1[0], setIsAgainGetData = ref1[1];\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false), isLoading = ref2[0], setIsLoading = ref2[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        function handleGetDatasFromServer() {\n            return _handleGetDatasFromServer.apply(this, arguments);\n        }\n        function _handleGetDatasFromServer() {\n            _handleGetDatasFromServer = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(function() {\n                var accessToken, data, error;\n                return (0,_swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(this, function(_state) {\n                    switch(_state.label){\n                        case 0:\n                            _state.trys.push([\n                                0,\n                                2,\n                                ,\n                                3\n                            ]);\n                            accessToken = localStorage.getItem(\"accessToken\");\n                            return [\n                                4,\n                                axios__WEBPACK_IMPORTED_MODULE_1__[\"default\"].get(\"http://localhost:8000/myInfo\", {\n                                    headers: {\n                                        accessToken: accessToken\n                                    }\n                                })\n                            ];\n                        case 1:\n                            data = _state.sent();\n                            setTodos(data.data.data.todos);\n                            return [\n                                3,\n                                3\n                            ];\n                        case 2:\n                            error = _state.sent();\n                            console.log(error);\n                            return [\n                                3,\n                                3\n                            ];\n                        case 3:\n                            return [\n                                2\n                            ];\n                    }\n                });\n            });\n            return _handleGetDatasFromServer.apply(this, arguments);\n        }\n        handleGetDatasFromServer();\n        return function() {\n            return handleGetDatasFromServer();\n        };\n    }, [\n        isAgainGetData\n    ]);\n    function handleAddTodo() {\n        return _handleAddTodo.apply(this, arguments);\n    }\n    function _handleAddTodo() {\n        _handleAddTodo = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(function() {\n            var todo, accesstoken, data, error;\n            return (0,_swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(this, function(_state) {\n                switch(_state.label){\n                    case 0:\n                        todo = userInputRef.current.value;\n                        setIsLoading(true);\n                        _state.label = 1;\n                    case 1:\n                        _state.trys.push([\n                            1,\n                            3,\n                            ,\n                            4\n                        ]);\n                        accesstoken = localStorage.getItem(\"accessToken\");\n                        return [\n                            4,\n                            axios__WEBPACK_IMPORTED_MODULE_1__[\"default\"].post(\"http://localhost:8000/todos/addTodo\", {\n                                todo: todo\n                            }, {\n                                headers: {\n                                    accesstoken: accesstoken\n                                }\n                            }).then(function(res) {\n                                if (res) {\n                                    if (res.data.status === true) {\n                                        setIsLoading(false);\n                                        setIsAgainGetData(function(prev) {\n                                            return !prev;\n                                        });\n                                    }\n                                }\n                            })\n                        ];\n                    case 2:\n                        data = _state.sent();\n                        return [\n                            3,\n                            4\n                        ];\n                    case 3:\n                        error = _state.sent();\n                        console.log(error);\n                        return [\n                            3,\n                            4\n                        ];\n                    case 4:\n                        return [\n                            2\n                        ];\n                }\n            });\n        });\n        return _handleAddTodo.apply(this, arguments);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            isLoading === true ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: \"Loading\"\n            }, void 0, false, {\n                fileName: \"/Users/bilguunleap2/Desktop/mongoDbTodo/frontend/pages/homepage.js\",\n                lineNumber: 66,\n                columnNumber: 30\n            }, _this) : \"\",\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"HomePage\"\n            }, void 0, false, {\n                fileName: \"/Users/bilguunleap2/Desktop/mongoDbTodo/frontend/pages/homepage.js\",\n                lineNumber: 67,\n                columnNumber: 9\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: logOut,\n                children: \"ГАРАХ\"\n            }, void 0, false, {\n                fileName: \"/Users/bilguunleap2/Desktop/mongoDbTodo/frontend/pages/homepage.js\",\n                lineNumber: 68,\n                columnNumber: 9\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                ref: userInputRef\n            }, void 0, false, {\n                fileName: \"/Users/bilguunleap2/Desktop/mongoDbTodo/frontend/pages/homepage.js\",\n                lineNumber: 69,\n                columnNumber: 9\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: handleAddTodo,\n                children: \"НЭМЭХ\"\n            }, void 0, false, {\n                fileName: \"/Users/bilguunleap2/Desktop/mongoDbTodo/frontend/pages/homepage.js\",\n                lineNumber: 70,\n                columnNumber: 9\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    width: \"auto\",\n                    height: \"100px\",\n                    overflow: \"scroll\"\n                },\n                children: todos.length > 0 ? todos.map(function(todo, i) {\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        style: {\n                            display: \"flex\",\n                            width: \"50%\",\n                            justifyContent: \"space-around\"\n                        },\n                        children: [\n                            todo,\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                children: \"ХАСАХ\"\n                            }, void 0, false, {\n                                fileName: \"/Users/bilguunleap2/Desktop/mongoDbTodo/frontend/pages/homepage.js\",\n                                lineNumber: 76,\n                                columnNumber: 19\n                            }, _this)\n                        ]\n                    }, todo + i, true, {\n                        fileName: \"/Users/bilguunleap2/Desktop/mongoDbTodo/frontend/pages/homepage.js\",\n                        lineNumber: 74,\n                        columnNumber: 24\n                    }, _this);\n                }) : \"\"\n            }, void 0, false, {\n                fileName: \"/Users/bilguunleap2/Desktop/mongoDbTodo/frontend/pages/homepage.js\",\n                lineNumber: 71,\n                columnNumber: 9\n            }, _this)\n        ]\n    }, void 0, true);\n};\n_s(HomePage, \"+UKqWGc/24+1C2oxKU4LHUaIY6Y=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter\n    ];\n});\n_c = HomePage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (HomePage);\nvar _c;\n$RefreshReg$(_c, \"HomePage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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OztxQkFDRjs7b0JBQ0wsQ0FDSDtBQUNOLENBQUM7R0EvRUs3QyxRQUFROztRQUlLRCxrREFBUzs7O0FBSnRCQyxLQUFBQSxRQUFRO0FBZ0ZkLCtEQUFlQSxRQUFRIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2hvbWVwYWdlLmpzPzM2NjgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuaW1wb3J0IHsgdXNlU3RhdGUsdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQge3VzZVJvdXRlcn0gZnJvbSAnbmV4dC9yb3V0ZXInXG5jb25zdCBIb21lUGFnZSA9ICgpID0+IHtcbiAgICBjb25zdCBbdG9kb3MsIHNldFRvZG9zXSA9IHVzZVN0YXRlKFtdKTtcbiAgICBjb25zdCB1c2VySW5wdXRSZWYgPSB1c2VSZWYoKVxuICAgIGNvbnN0IFtpc0FnYWluR2V0RGF0YSxzZXRJc0FnYWluR2V0RGF0YV0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcbiAgICAgY29uc3QgW2lzTG9hZGluZyxzZXRJc0xvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgIGFzeW5jIGZ1bmN0aW9uIGhhbmRsZUdldERhdGFzRnJvbVNlcnZlcigpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBjb25zdCBhY2Nlc3NUb2tlbiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiYWNjZXNzVG9rZW5cIik7XG4gICAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IGF4aW9zLmdldChcImh0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9teUluZm9cIiwge1xuICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICBhY2Nlc3NUb2tlbjogYWNjZXNzVG9rZW4sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0pO1xuICAgICAgICAgIHNldFRvZG9zKGRhdGEuZGF0YS5kYXRhLnRvZG9zKTtcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcilcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaGFuZGxlR2V0RGF0YXNGcm9tU2VydmVyKCk7XG4gICAgICByZXR1cm4gKCk9PiBoYW5kbGVHZXREYXRhc0Zyb21TZXJ2ZXIoKVxuICAgIH0sIFtpc0FnYWluR2V0RGF0YV0pO1xuXG5cblxuICAgIGZ1bmN0aW9uIGxvZ091dCgpIHtcbiAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCdhY2Nlc3NUb2tlbicpO1xuICAgICAgcm91dGVyLnB1c2goJ2xvZ2luUGFnZScpXG4gICAgfVxuXG5cblxuXG4gIGFzeW5jIGZ1bmN0aW9uIGhhbmRsZUFkZFRvZG8oKSB7XG4gICAgY29uc3QgdG9kbyA9IHVzZXJJbnB1dFJlZi5jdXJyZW50LnZhbHVlO1xuICAgIHNldElzTG9hZGluZyh0cnVlKVxuICAgICAgIHRyeSB7XG4gICAgICAgICBjb25zdCBhY2Nlc3N0b2tlbiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiYWNjZXNzVG9rZW5cIik7XG4gICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgYXhpb3MucG9zdChcImh0dHA6Ly9sb2NhbGhvc3Q6ODAwMC90b2Rvcy9hZGRUb2RvXCIse3RvZG99LCB7XG4gICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICBhY2Nlc3N0b2tlblxuICAgICAgICAgICB9LFxuICAgICAgICAgfSkudGhlbigocmVzKSA9PiB7XG4gICAgICAgICAgaWYocmVzKSB7XG4gICAgICAgICAgICBpZihyZXMuZGF0YS5zdGF0dXM9PT10cnVlKSB7XG4gICAgICAgICAgICAgIHNldElzTG9hZGluZyhmYWxzZSk7XG4gICAgICAgICAgICAgIHNldElzQWdhaW5HZXREYXRhKHByZXY9PiFwcmV2KVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgIH0pXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpXG4gICAgICAgIH1cbiAgICAgIFxuICAgICAgICBcbiAgICB9XG5cblxuICAgXG4gICAgcmV0dXJuIChcbiAgICAgIDw+XG4gICAgICAgIHtpc0xvYWRpbmcgPT09dHJ1ZSA/IDxwPkxvYWRpbmc8L3A+OicnfVxuICAgICAgICA8aDE+SG9tZVBhZ2U8L2gxPlxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2xvZ091dH0+0JPQkNCg0JDQpTwvYnV0dG9uPlxuICAgICAgICA8aW5wdXQgcmVmPXt1c2VySW5wdXRSZWZ9IC8+XG4gICAgICAgIDxidXR0b24gb25DbGljaz17aGFuZGxlQWRkVG9kb30+0J3QrdCc0K3QpTwvYnV0dG9uPlxuICAgICAgICA8ZGl2IHN0eWxlPXt7d2lkdGg6J2F1dG8nLGhlaWdodDpgMTAwcHhgLG92ZXJmbG93OidzY3JvbGwnfX0+XG4gICAgICAgICAge3RvZG9zLmxlbmd0aCA+IDBcbiAgICAgICAgICAgID8gdG9kb3MubWFwKCh0b2RvLCBpKSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIDxkaXYgc3R5bGU9e3tkaXNwbGF5OidmbGV4Jyx3aWR0aDpgNTAlYCxqdXN0aWZ5Q29udGVudDonc3BhY2UtYXJvdW5kJ319IGtleT17dG9kbyArIGl9PlxuICAgICAgICAgICAgICAgICAge3RvZG99XG4gICAgICAgICAgICAgICAgICA8YnV0dG9uPtCl0JDQodCQ0KU8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj47XG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICA6IFwiXCJ9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC8+XG4gICAgKTtcbn1cbmV4cG9ydCBkZWZhdWx0IEhvbWVQYWdlIl0sIm5hbWVzIjpbImF4aW9zIiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJ1c2VSZWYiLCJ1c2VSb3V0ZXIiLCJIb21lUGFnZSIsImxvZ091dCIsImxvY2FsU3RvcmFnZSIsInJlbW92ZUl0ZW0iLCJyb3V0ZXIiLCJwdXNoIiwidG9kb3MiLCJzZXRUb2RvcyIsInVzZXJJbnB1dFJlZiIsImlzQWdhaW5HZXREYXRhIiwic2V0SXNBZ2FpbkdldERhdGEiLCJpc0xvYWRpbmciLCJzZXRJc0xvYWRpbmciLCJoYW5kbGVHZXREYXRhc0Zyb21TZXJ2ZXIiLCJhY2Nlc3NUb2tlbiIsImRhdGEiLCJlcnJvciIsImdldEl0ZW0iLCJnZXQiLCJoZWFkZXJzIiwiY29uc29sZSIsImxvZyIsImhhbmRsZUFkZFRvZG8iLCJ0b2RvIiwiYWNjZXNzdG9rZW4iLCJjdXJyZW50IiwidmFsdWUiLCJwb3N0IiwidGhlbiIsInJlcyIsInN0YXR1cyIsInByZXYiLCJwIiwiaDEiLCJidXR0b24iLCJvbkNsaWNrIiwiaW5wdXQiLCJyZWYiLCJkaXYiLCJzdHlsZSIsIndpZHRoIiwiaGVpZ2h0Iiwib3ZlcmZsb3ciLCJsZW5ndGgiLCJtYXAiLCJpIiwiZGlzcGxheSIsImp1c3RpZnlDb250ZW50Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/homepage.js\n"));

/***/ })

});