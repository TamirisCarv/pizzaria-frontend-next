"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/app/lista/index.css":
/*!*********************************!*\
  !*** ./src/app/lista/index.css ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"1b269c4b193a\");\nif (true) { module.hot.accept() }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvbGlzdGEvaW5kZXguY3NzIiwibWFwcGluZ3MiOiI7QUFBQSwrREFBZSxjQUFjO0FBQzdCLElBQUksSUFBVSxJQUFJLGlCQUFpQiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL2xpc3RhL2luZGV4LmNzcz8zNWE4Il0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IFwiMWIyNjljNGIxOTNhXCJcbmlmIChtb2R1bGUuaG90KSB7IG1vZHVsZS5ob3QuYWNjZXB0KCkgfVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/lista/index.css\n"));

/***/ }),

/***/ "(app-pages-browser)/./src/app/lista/page.tsx":
/*!********************************!*\
  !*** ./src/app/lista/page.tsx ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.css */ \"(app-pages-browser)/./src/app/lista/index.css\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n // Assumindo que você salva o CSS acima em um arquivo chamado ProductList.css\nconst ProductList = (param)=>{\n    let { categoryId } = param;\n    _s();\n    const [products, setProducts] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const fetchProducts = async ()=>{\n            try {\n                const token = localStorage.getItem(\"token\");\n                if (!token) {\n                    throw new Error(\"Token n\\xe3o encontrado. Fa\\xe7a login novamente.\");\n                }\n                const response = await axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"].get(\"http://localhost:3333/category/product\", {\n                    params: {\n                        id_categoria: categoryId\n                    },\n                    headers: {\n                        Authorization: \"Bearer \".concat(token)\n                    }\n                });\n                setProducts(response.data);\n            } catch (error) {\n                console.error(\"Erro ao buscar produtos:\", error);\n            }\n        };\n        fetchProducts();\n    }, [\n        categoryId\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"product-list-container\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                className: \"product-list-title\",\n                children: \"Produtos da Categoria\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\clien\\\\OneDrive - Fatec Centro Paula Souza\\\\pizzaria-boer_certo\\\\projeto-pizzaria\\\\src\\\\app\\\\lista\\\\page.tsx\",\n                lineNumber: 51,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                className: \"product-list\",\n                children: products.map((product)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        className: \"product-item\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                src: product.url,\n                                alt: product.nome,\n                                width: \"100\",\n                                height: \"100\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\clien\\\\OneDrive - Fatec Centro Paula Souza\\\\pizzaria-boer_certo\\\\projeto-pizzaria\\\\src\\\\app\\\\lista\\\\page.tsx\",\n                                lineNumber: 55,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                children: product.nome\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\clien\\\\OneDrive - Fatec Centro Paula Souza\\\\pizzaria-boer_certo\\\\projeto-pizzaria\\\\src\\\\app\\\\lista\\\\page.tsx\",\n                                lineNumber: 56,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: product.descricao\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\clien\\\\OneDrive - Fatec Centro Paula Souza\\\\pizzaria-boer_certo\\\\projeto-pizzaria\\\\src\\\\app\\\\lista\\\\page.tsx\",\n                                lineNumber: 57,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: [\n                                    \"Pre\\xe7o: \",\n                                    product.preco\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\clien\\\\OneDrive - Fatec Centro Paula Souza\\\\pizzaria-boer_certo\\\\projeto-pizzaria\\\\src\\\\app\\\\lista\\\\page.tsx\",\n                                lineNumber: 58,\n                                columnNumber: 13\n                            }, undefined)\n                        ]\n                    }, product.id, true, {\n                        fileName: \"C:\\\\Users\\\\clien\\\\OneDrive - Fatec Centro Paula Souza\\\\pizzaria-boer_certo\\\\projeto-pizzaria\\\\src\\\\app\\\\lista\\\\page.tsx\",\n                        lineNumber: 54,\n                        columnNumber: 11\n                    }, undefined))\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\clien\\\\OneDrive - Fatec Centro Paula Souza\\\\pizzaria-boer_certo\\\\projeto-pizzaria\\\\src\\\\app\\\\lista\\\\page.tsx\",\n                lineNumber: 52,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\clien\\\\OneDrive - Fatec Centro Paula Souza\\\\pizzaria-boer_certo\\\\projeto-pizzaria\\\\src\\\\app\\\\lista\\\\page.tsx\",\n        lineNumber: 50,\n        columnNumber: 5\n    }, undefined);\n};\n_s(ProductList, \"f86L6rLANGURv6GE6gupp7+oOp4=\");\n_c = ProductList;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProductList);\nvar _c;\n$RefreshReg$(_c, \"ProductList\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvbGlzdGEvcGFnZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFFNEM7QUFDbEI7QUFDTCxDQUFFLDZFQUE2RTtBQWlCcEcsTUFBTUcsY0FBYztRQUFDLEVBQUVDLFVBQVUsRUFBb0I7O0lBQ25ELE1BQU0sQ0FBQ0MsVUFBVUMsWUFBWSxHQUFHTCwrQ0FBUUEsQ0FBWSxFQUFFO0lBRXRERCxnREFBU0EsQ0FBQztRQUNSLE1BQU1PLGdCQUFnQjtZQUNwQixJQUFJO2dCQUNGLE1BQU1DLFFBQVFDLGFBQWFDLE9BQU8sQ0FBQztnQkFDbkMsSUFBSSxDQUFDRixPQUFPO29CQUNWLE1BQU0sSUFBSUcsTUFBTTtnQkFDbEI7Z0JBRUEsTUFBTUMsV0FBVyxNQUFNViw2Q0FBS0EsQ0FBQ1csR0FBRyxDQUFDLDBDQUEwQztvQkFDekVDLFFBQVE7d0JBQUVDLGNBQWNYO29CQUFXO29CQUNuQ1ksU0FBUzt3QkFDUEMsZUFBZSxVQUFnQixPQUFOVDtvQkFDM0I7Z0JBQ0Y7Z0JBRUFGLFlBQVlNLFNBQVNNLElBQUk7WUFDM0IsRUFBRSxPQUFPQyxPQUFPO2dCQUNkQyxRQUFRRCxLQUFLLENBQUMsNEJBQTRCQTtZQUM1QztRQUNGO1FBRUFaO0lBQ0YsR0FBRztRQUFDSDtLQUFXO0lBRWYscUJBQ0UsOERBQUNpQjtRQUFJQyxXQUFVOzswQkFDYiw4REFBQ0M7Z0JBQUdELFdBQVU7MEJBQXFCOzs7Ozs7MEJBQ25DLDhEQUFDRTtnQkFBR0YsV0FBVTswQkFDWGpCLFNBQVNvQixHQUFHLENBQUNDLENBQUFBLHdCQUNaLDhEQUFDQzt3QkFBb0JMLFdBQVU7OzBDQUM3Qiw4REFBQ007Z0NBQUlDLEtBQUtILFFBQVFJLEdBQUc7Z0NBQUVDLEtBQUtMLFFBQVFNLElBQUk7Z0NBQUVDLE9BQU07Z0NBQU1DLFFBQU87Ozs7OzswQ0FDN0QsOERBQUNDOzBDQUFJVCxRQUFRTSxJQUFJOzs7Ozs7MENBQ2pCLDhEQUFDSTswQ0FBR1YsUUFBUVcsU0FBUzs7Ozs7OzBDQUNyQiw4REFBQ0Q7O29DQUFFO29DQUFRVixRQUFRWSxLQUFLOzs7Ozs7Ozt1QkFKakJaLFFBQVFhLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7QUFVN0I7R0ExQ01wQztLQUFBQTtBQTRDTiwrREFBZUEsV0FBV0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL2xpc3RhL3BhZ2UudHN4P2Q1NDEiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnO1xyXG5cclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IFwiLi9pbmRleC5jc3NcIjsgIC8vIEFzc3VtaW5kbyBxdWUgdm9jw6ogc2FsdmEgbyBDU1MgYWNpbWEgZW0gdW0gYXJxdWl2byBjaGFtYWRvIFByb2R1Y3RMaXN0LmNzc1xyXG5cclxuLy8gRGVmaW5pbmRvIGEgaW50ZXJmYWNlIGRvIHByb2R1dG9cclxuaW50ZXJmYWNlIFByb2R1Y3Qge1xyXG4gIGlkOiBzdHJpbmc7XHJcbiAgbm9tZTogc3RyaW5nO1xyXG4gIHByZWNvOiBzdHJpbmc7XHJcbiAgZGVzY3JpY2FvOiBzdHJpbmc7XHJcbiAgYmFubmVyOiBzdHJpbmc7XHJcbiAgdXJsOiBzdHJpbmc7XHJcbn1cclxuXHJcbi8vIERlZmluaW5kbyBhIGludGVyZmFjZSBkYXMgcHJvcHNcclxuaW50ZXJmYWNlIFByb2R1Y3RMaXN0UHJvcHMge1xyXG4gIGNhdGVnb3J5SWQ6IHN0cmluZztcclxufVxyXG5cclxuY29uc3QgUHJvZHVjdExpc3QgPSAoeyBjYXRlZ29yeUlkIH06IFByb2R1Y3RMaXN0UHJvcHMpID0+IHtcclxuICBjb25zdCBbcHJvZHVjdHMsIHNldFByb2R1Y3RzXSA9IHVzZVN0YXRlPFByb2R1Y3RbXT4oW10pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgZmV0Y2hQcm9kdWN0cyA9IGFzeW5jICgpID0+IHtcclxuICAgICAgdHJ5IHtcclxuICAgICAgICBjb25zdCB0b2tlbiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b2tlbicpO1xyXG4gICAgICAgIGlmICghdG9rZW4pIHtcclxuICAgICAgICAgIHRocm93IG5ldyBFcnJvcignVG9rZW4gbsOjbyBlbmNvbnRyYWRvLiBGYcOnYSBsb2dpbiBub3ZhbWVudGUuJyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLmdldCgnaHR0cDovL2xvY2FsaG9zdDozMzMzL2NhdGVnb3J5L3Byb2R1Y3QnLCB7XHJcbiAgICAgICAgICBwYXJhbXM6IHsgaWRfY2F0ZWdvcmlhOiBjYXRlZ29yeUlkIH0sXHJcbiAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgIEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHt0b2tlbn1gLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgc2V0UHJvZHVjdHMocmVzcG9uc2UuZGF0YSk7XHJcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJybyBhbyBidXNjYXIgcHJvZHV0b3M6JywgZXJyb3IpO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIGZldGNoUHJvZHVjdHMoKTtcclxuICB9LCBbY2F0ZWdvcnlJZF0pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0LWxpc3QtY29udGFpbmVyXCI+XHJcbiAgICAgIDxoMiBjbGFzc05hbWU9XCJwcm9kdWN0LWxpc3QtdGl0bGVcIj5Qcm9kdXRvcyBkYSBDYXRlZ29yaWE8L2gyPlxyXG4gICAgICA8dWwgY2xhc3NOYW1lPVwicHJvZHVjdC1saXN0XCI+XHJcbiAgICAgICAge3Byb2R1Y3RzLm1hcChwcm9kdWN0ID0+IChcclxuICAgICAgICAgIDxsaSBrZXk9e3Byb2R1Y3QuaWR9IGNsYXNzTmFtZT1cInByb2R1Y3QtaXRlbVwiPlxyXG4gICAgICAgICAgICA8aW1nIHNyYz17cHJvZHVjdC51cmx9IGFsdD17cHJvZHVjdC5ub21lfSB3aWR0aD1cIjEwMFwiIGhlaWdodD1cIjEwMFwiIC8+XHJcbiAgICAgICAgICAgIDxoMz57cHJvZHVjdC5ub21lfTwvaDM+XHJcbiAgICAgICAgICAgIDxwPntwcm9kdWN0LmRlc2NyaWNhb308L3A+XHJcbiAgICAgICAgICAgIDxwPlByZcOnbzoge3Byb2R1Y3QucHJlY299PC9wPlxyXG4gICAgICAgICAgPC9saT5cclxuICAgICAgICApKX1cclxuICAgICAgPC91bD5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQcm9kdWN0TGlzdDtcclxuIl0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiYXhpb3MiLCJQcm9kdWN0TGlzdCIsImNhdGVnb3J5SWQiLCJwcm9kdWN0cyIsInNldFByb2R1Y3RzIiwiZmV0Y2hQcm9kdWN0cyIsInRva2VuIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsIkVycm9yIiwicmVzcG9uc2UiLCJnZXQiLCJwYXJhbXMiLCJpZF9jYXRlZ29yaWEiLCJoZWFkZXJzIiwiQXV0aG9yaXphdGlvbiIsImRhdGEiLCJlcnJvciIsImNvbnNvbGUiLCJkaXYiLCJjbGFzc05hbWUiLCJoMiIsInVsIiwibWFwIiwicHJvZHVjdCIsImxpIiwiaW1nIiwic3JjIiwidXJsIiwiYWx0Iiwibm9tZSIsIndpZHRoIiwiaGVpZ2h0IiwiaDMiLCJwIiwiZGVzY3JpY2FvIiwicHJlY28iLCJpZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/lista/page.tsx\n"));

/***/ })

});