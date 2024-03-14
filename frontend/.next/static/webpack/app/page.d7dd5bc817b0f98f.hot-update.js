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

/***/ "(app-pages-browser)/./app/components/TodoApp.jsx":
/*!************************************!*\
  !*** ./app/components/TodoApp.jsx ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\nconst TodoApp = ()=>{\n    _s();\n    const [todos, setTodos] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [newTodo, setNewTodo] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [editIndex, setEditIndex] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(-1);\n    const [editValue, setEditValue] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    // function for updating the todo\n    const fetchData = async ()=>{\n        try {\n            const response = await fetch(\"http://localhost:3000/todo\");\n            const result = await response.json();\n            console.log(result);\n            setTodos(result);\n        } catch (error) {\n            console.error(\"Error fetching data:\", error);\n        }\n    };\n    // render the todos from the server\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        fetchData();\n    }, []);\n    const handleAddTodo = async ()=>{\n        console.log(newTodo);\n        if (newTodo.trim() !== \"\") {\n            try {\n                const response = await fetch(\"http://localhost:3000/todo\", {\n                    method: \"POST\",\n                    headers: {\n                        \"Content-Type\": \"application/json\"\n                    },\n                    body: JSON.stringify({\n                        title: newTodo\n                    })\n                });\n                if (response.ok) {\n                // Optionally, handle successful insertion, such as updating component state\n                } else {\n                    // Handle the case where insertion was not successful\n                    console.error(\"Insertion failed:\", response.statusText);\n                }\n            } catch (error) {\n                console.error(\"Error inserting data:\", error);\n            }\n            setNewTodo(\"\");\n        }\n    };\n    const handleDeleteTodo = (index)=>{\n        setTodos(todos.filter((_, i)=>i !== index));\n        setEditIndex(-1);\n    };\n    const handleEditTodo = (index)=>{\n        setEditIndex(index);\n        setEditValue(todos[index]);\n    };\n    const handleSaveEdit = (index)=>{\n        const updatedTodos = todos.map((todo, i)=>i === index ? editValue : todo);\n        setTodos(updatedTodos);\n        setEditIndex(-1);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"max-w-md mx-auto mt-8 p-4 bg-gray-100 rounded shadow-md\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"text-2xl font-bold mb-4\",\n                children: \"Todo App\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\Todo-app\\\\frontend\\\\app\\\\components\\\\TodoApp.jsx\",\n                lineNumber: 75,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        className: \"flex-1 border rounded p-2 mr-2\",\n                        placeholder: \"Enter todo\",\n                        value: newTodo,\n                        onChange: (e)=>setNewTodo(e.target.value)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\Todo-app\\\\frontend\\\\app\\\\components\\\\TodoApp.jsx\",\n                        lineNumber: 77,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"bg-blue-500 text-white px-4 py-2 rounded\",\n                        onClick: handleAddTodo,\n                        children: \"Add\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\Todo-app\\\\frontend\\\\app\\\\components\\\\TodoApp.jsx\",\n                        lineNumber: 84,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\Todo-app\\\\frontend\\\\app\\\\components\\\\TodoApp.jsx\",\n                lineNumber: 76,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                className: \"mt-4\",\n                children: todos.map((todo, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        className: \"flex items-center justify-between py-2\",\n                        children: [\n                            index === editIndex ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"text\",\n                                className: \"flex-1 border rounded p-1 mr-2\",\n                                value: editValue,\n                                onChange: (e)=>setEditValue(e.target.value)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\Todo-app\\\\frontend\\\\app\\\\components\\\\TodoApp.jsx\",\n                                lineNumber: 95,\n                                columnNumber: 15\n                            }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                children: todo.title\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\Todo-app\\\\frontend\\\\app\\\\components\\\\TodoApp.jsx\",\n                                lineNumber: 102,\n                                columnNumber: 15\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: [\n                                    index === editIndex ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        className: \"text-green-500 mr-2\",\n                                        onClick: ()=>handleSaveEdit(index),\n                                        children: \"Save\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\Todo-app\\\\frontend\\\\app\\\\components\\\\TodoApp.jsx\",\n                                        lineNumber: 106,\n                                        columnNumber: 17\n                                    }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        className: \"text-blue-500 mr-2\",\n                                        onClick: ()=>handleEditTodo(index),\n                                        children: \"Edit\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\Todo-app\\\\frontend\\\\app\\\\components\\\\TodoApp.jsx\",\n                                        lineNumber: 113,\n                                        columnNumber: 17\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        className: \"text-red-500\",\n                                        onClick: ()=>handleDeleteTodo(index),\n                                        children: \"Delete\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\Todo-app\\\\frontend\\\\app\\\\components\\\\TodoApp.jsx\",\n                                        lineNumber: 120,\n                                        columnNumber: 15\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\Todo-app\\\\frontend\\\\app\\\\components\\\\TodoApp.jsx\",\n                                lineNumber: 104,\n                                columnNumber: 13\n                            }, undefined)\n                        ]\n                    }, index, true, {\n                        fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\Todo-app\\\\frontend\\\\app\\\\components\\\\TodoApp.jsx\",\n                        lineNumber: 93,\n                        columnNumber: 11\n                    }, undefined))\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\Todo-app\\\\frontend\\\\app\\\\components\\\\TodoApp.jsx\",\n                lineNumber: 91,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\Todo-app\\\\frontend\\\\app\\\\components\\\\TodoApp.jsx\",\n        lineNumber: 74,\n        columnNumber: 5\n    }, undefined);\n};\n_s(TodoApp, \"3e1etGqmDAdgqm/+NU4Px+UaqNQ=\");\n_c = TodoApp;\n/* harmony default export */ __webpack_exports__[\"default\"] = (TodoApp);\nvar _c;\n$RefreshReg$(_c, \"TodoApp\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jb21wb25lbnRzL1RvZG9BcHAuanN4IiwibWFwcGluZ3MiOiI7Ozs7OztBQUNtRDtBQUduRCxNQUFNRyxVQUFVOztJQUNkLE1BQU0sQ0FBQ0MsT0FBT0MsU0FBUyxHQUFHSCwrQ0FBUUEsQ0FBQyxFQUFFO0lBQ3JDLE1BQU0sQ0FBQ0ksU0FBU0MsV0FBVyxHQUFHTCwrQ0FBUUEsQ0FBQztJQUN2QyxNQUFNLENBQUNNLFdBQVdDLGFBQWEsR0FBR1AsK0NBQVFBLENBQUMsQ0FBQztJQUM1QyxNQUFNLENBQUNRLFdBQVdDLGFBQWEsR0FBR1QsK0NBQVFBLENBQUM7SUFHM0MsaUNBQWlDO0lBQ2pDLE1BQU1VLFlBQVk7UUFDaEIsSUFBSTtZQUNGLE1BQU1DLFdBQVcsTUFBTUMsTUFBTTtZQUM3QixNQUFNQyxTQUFTLE1BQU1GLFNBQVNHLElBQUk7WUFDbkNDLFFBQVFDLEdBQUcsQ0FBQ0g7WUFDWFYsU0FBU1U7UUFDWCxFQUFFLE9BQU9JLE9BQU87WUFDZEYsUUFBUUUsS0FBSyxDQUFDLHdCQUF3QkE7UUFDeEM7SUFDRjtJQUVBLG1DQUFtQztJQUNuQ2xCLGdEQUFTQSxDQUFDO1FBQ05XO0lBQ0osR0FBRyxFQUFFO0lBSUwsTUFBTVEsZ0JBQWdCO1FBQ3BCSCxRQUFRQyxHQUFHLENBQUNaO1FBQ1osSUFBSUEsUUFBUWUsSUFBSSxPQUFPLElBQUk7WUFDekIsSUFBSTtnQkFDRixNQUFNUixXQUFXLE1BQU1DLE1BQU0sOEJBQThCO29CQUN6RFEsUUFBUTtvQkFDUkMsU0FBUzt3QkFDUCxnQkFBZ0I7b0JBQ2xCO29CQUNBQyxNQUFNQyxLQUFLQyxTQUFTLENBQUM7d0JBQUVDLE9BQU9yQjtvQkFBUTtnQkFDeEM7Z0JBQ0EsSUFBSU8sU0FBU2UsRUFBRSxFQUFFO2dCQUNmLDRFQUE0RTtnQkFDOUUsT0FBTztvQkFDTCxxREFBcUQ7b0JBQ3JEWCxRQUFRRSxLQUFLLENBQUMscUJBQXFCTixTQUFTZ0IsVUFBVTtnQkFDeEQ7WUFDRixFQUFFLE9BQU9WLE9BQU87Z0JBQ2RGLFFBQVFFLEtBQUssQ0FBQyx5QkFBeUJBO1lBQ3pDO1lBQ0FaLFdBQVc7UUFDYjtJQUNGO0lBRUEsTUFBTXVCLG1CQUFtQixDQUFDQztRQUN4QjFCLFNBQVNELE1BQU00QixNQUFNLENBQUMsQ0FBQ0MsR0FBR0MsSUFBTUEsTUFBTUg7UUFDdEN0QixhQUFhLENBQUM7SUFDaEI7SUFFQSxNQUFNMEIsaUJBQWlCLENBQUNKO1FBQ3RCdEIsYUFBYXNCO1FBQ2JwQixhQUFhUCxLQUFLLENBQUMyQixNQUFNO0lBQzNCO0lBRUEsTUFBTUssaUJBQWlCLENBQUNMO1FBQ3RCLE1BQU1NLGVBQWVqQyxNQUFNa0MsR0FBRyxDQUFDLENBQUNDLE1BQU1MLElBQ3BDQSxNQUFNSCxRQUFRckIsWUFBWTZCO1FBRTVCbEMsU0FBU2dDO1FBQ1Q1QixhQUFhLENBQUM7SUFDaEI7SUFFQSxxQkFDRSw4REFBQytCO1FBQUlDLFdBQVU7OzBCQUNiLDhEQUFDQztnQkFBR0QsV0FBVTswQkFBMEI7Ozs7OzswQkFDeEMsOERBQUNEO2dCQUFJQyxXQUFVOztrQ0FDYiw4REFBQ0U7d0JBQ0NDLE1BQUs7d0JBQ0xILFdBQVU7d0JBQ1ZJLGFBQVk7d0JBQ1pDLE9BQU94Qzt3QkFDUHlDLFVBQVUsQ0FBQ0MsSUFBTXpDLFdBQVd5QyxFQUFFQyxNQUFNLENBQUNILEtBQUs7Ozs7OztrQ0FFNUMsOERBQUNJO3dCQUNDVCxXQUFVO3dCQUNWVSxTQUFTL0I7a0NBQ1Y7Ozs7Ozs7Ozs7OzswQkFJSCw4REFBQ2dDO2dCQUFHWCxXQUFVOzBCQUNYckMsTUFBTWtDLEdBQUcsQ0FBQyxDQUFDQyxNQUFNUixzQkFDaEIsOERBQUNzQjt3QkFBZVosV0FBVTs7NEJBQ3ZCVixVQUFVdkIsMEJBQ1QsOERBQUNtQztnQ0FDQ0MsTUFBSztnQ0FDTEgsV0FBVTtnQ0FDVkssT0FBT3BDO2dDQUNQcUMsVUFBVSxDQUFDQyxJQUFNckMsYUFBYXFDLEVBQUVDLE1BQU0sQ0FBQ0gsS0FBSzs7Ozs7MERBRzlDLDhEQUFDUTswQ0FBTWYsS0FBS1osS0FBSzs7Ozs7OzBDQUVuQiw4REFBQ2E7O29DQUNFVCxVQUFVdkIsMEJBQ1QsOERBQUMwQzt3Q0FDQ1QsV0FBVTt3Q0FDVlUsU0FBUyxJQUFNZixlQUFlTDtrREFDL0I7Ozs7O2tFQUlELDhEQUFDbUI7d0NBQ0NULFdBQVU7d0NBQ1ZVLFNBQVMsSUFBTWhCLGVBQWVKO2tEQUMvQjs7Ozs7O2tEQUlILDhEQUFDbUI7d0NBQ0NULFdBQVU7d0NBQ1ZVLFNBQVMsSUFBTXJCLGlCQUFpQkM7a0RBQ2pDOzs7Ozs7Ozs7Ozs7O3VCQTlCSUE7Ozs7Ozs7Ozs7Ozs7Ozs7QUF1Q25CO0dBL0hNNUI7S0FBQUE7QUFpSU4sK0RBQWVBLE9BQU9BLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2NvbXBvbmVudHMvVG9kb0FwcC5qc3g/MTlmOCJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcclxuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcblxyXG5cclxuY29uc3QgVG9kb0FwcCA9ICgpID0+IHtcclxuICBjb25zdCBbdG9kb3MsIHNldFRvZG9zXSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbbmV3VG9kbywgc2V0TmV3VG9kb10gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3QgW2VkaXRJbmRleCwgc2V0RWRpdEluZGV4XSA9IHVzZVN0YXRlKC0xKTtcclxuICBjb25zdCBbZWRpdFZhbHVlLCBzZXRFZGl0VmFsdWVdID0gdXNlU3RhdGUoJycpO1xyXG5cclxuXHJcbiAgLy8gZnVuY3Rpb24gZm9yIHVwZGF0aW5nIHRoZSB0b2RvXHJcbiAgY29uc3QgZmV0Y2hEYXRhID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnaHR0cDovL2xvY2FsaG9zdDozMDAwL3RvZG8nKTtcclxuICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4gICAgIGNvbnNvbGUubG9nKHJlc3VsdCk7XHJcbiAgICAgIHNldFRvZG9zKHJlc3VsdCk7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBmZXRjaGluZyBkYXRhOicsIGVycm9yKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICAvLyByZW5kZXIgdGhlIHRvZG9zIGZyb20gdGhlIHNlcnZlclxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgIGZldGNoRGF0YSgpO1xyXG4gIH0sIFtdKTtcclxuXHJcblxyXG5cclxuICBjb25zdCBoYW5kbGVBZGRUb2RvID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgY29uc29sZS5sb2cobmV3VG9kbyk7XHJcbiAgICBpZiAobmV3VG9kby50cmltKCkgIT09ICcnKSB7XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnaHR0cDovL2xvY2FsaG9zdDozMDAwL3RvZG8nLCB7XHJcbiAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7IHRpdGxlOiBuZXdUb2RvIH0pLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGlmIChyZXNwb25zZS5vaykge1xyXG4gICAgICAgICAgLy8gT3B0aW9uYWxseSwgaGFuZGxlIHN1Y2Nlc3NmdWwgaW5zZXJ0aW9uLCBzdWNoIGFzIHVwZGF0aW5nIGNvbXBvbmVudCBzdGF0ZVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAvLyBIYW5kbGUgdGhlIGNhc2Ugd2hlcmUgaW5zZXJ0aW9uIHdhcyBub3Qgc3VjY2Vzc2Z1bFxyXG4gICAgICAgICAgY29uc29sZS5lcnJvcignSW5zZXJ0aW9uIGZhaWxlZDonLCByZXNwb25zZS5zdGF0dXNUZXh0KTtcclxuICAgICAgICB9XHJcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgaW5zZXJ0aW5nIGRhdGE6JywgZXJyb3IpO1xyXG4gICAgICB9XHJcbiAgICAgIHNldE5ld1RvZG8oJycpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY29uc3QgaGFuZGxlRGVsZXRlVG9kbyA9IChpbmRleCkgPT4ge1xyXG4gICAgc2V0VG9kb3ModG9kb3MuZmlsdGVyKChfLCBpKSA9PiBpICE9PSBpbmRleCkpO1xyXG4gICAgc2V0RWRpdEluZGV4KC0xKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVFZGl0VG9kbyA9IChpbmRleCkgPT4ge1xyXG4gICAgc2V0RWRpdEluZGV4KGluZGV4KTtcclxuICAgIHNldEVkaXRWYWx1ZSh0b2Rvc1tpbmRleF0pO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZVNhdmVFZGl0ID0gKGluZGV4KSA9PiB7XHJcbiAgICBjb25zdCB1cGRhdGVkVG9kb3MgPSB0b2Rvcy5tYXAoKHRvZG8sIGkpID0+XHJcbiAgICAgIGkgPT09IGluZGV4ID8gZWRpdFZhbHVlIDogdG9kb1xyXG4gICAgKTtcclxuICAgIHNldFRvZG9zKHVwZGF0ZWRUb2Rvcyk7XHJcbiAgICBzZXRFZGl0SW5kZXgoLTEpO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm1heC13LW1kIG14LWF1dG8gbXQtOCBwLTQgYmctZ3JheS0xMDAgcm91bmRlZCBzaGFkb3ctbWRcIj5cclxuICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtMnhsIGZvbnQtYm9sZCBtYi00XCI+VG9kbyBBcHA8L2gxPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXhcIj5cclxuICAgICAgICA8aW5wdXRcclxuICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgIGNsYXNzTmFtZT1cImZsZXgtMSBib3JkZXIgcm91bmRlZCBwLTIgbXItMlwiXHJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIHRvZG9cIlxyXG4gICAgICAgICAgdmFsdWU9e25ld1RvZG99XHJcbiAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldE5ld1RvZG8oZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwiYmctYmx1ZS01MDAgdGV4dC13aGl0ZSBweC00IHB5LTIgcm91bmRlZFwiXHJcbiAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVBZGRUb2RvfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIEFkZFxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPHVsIGNsYXNzTmFtZT1cIm10LTRcIj5cclxuICAgICAgICB7dG9kb3MubWFwKCh0b2RvLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgPGxpIGtleT17aW5kZXh9IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiBweS0yXCI+XHJcbiAgICAgICAgICAgIHtpbmRleCA9PT0gZWRpdEluZGV4ID8gKFxyXG4gICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmxleC0xIGJvcmRlciByb3VuZGVkIHAtMSBtci0yXCJcclxuICAgICAgICAgICAgICAgIHZhbHVlPXtlZGl0VmFsdWV9XHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldEVkaXRWYWx1ZShlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICA8c3Bhbj57dG9kby50aXRsZX08L3NwYW4+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAge2luZGV4ID09PSBlZGl0SW5kZXggPyAoXHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtZ3JlZW4tNTAwIG1yLTJcIlxyXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVTYXZlRWRpdChpbmRleCl9XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIFNhdmVcclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtYmx1ZS01MDAgbXItMlwiXHJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZUVkaXRUb2RvKGluZGV4KX1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgRWRpdFxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LXJlZC01MDBcIlxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlRGVsZXRlVG9kbyhpbmRleCl9XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgRGVsZXRlXHJcbiAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9saT5cclxuICAgICAgICApKX1cclxuICAgICAgPC91bD5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUb2RvQXBwO1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIlRvZG9BcHAiLCJ0b2RvcyIsInNldFRvZG9zIiwibmV3VG9kbyIsInNldE5ld1RvZG8iLCJlZGl0SW5kZXgiLCJzZXRFZGl0SW5kZXgiLCJlZGl0VmFsdWUiLCJzZXRFZGl0VmFsdWUiLCJmZXRjaERhdGEiLCJyZXNwb25zZSIsImZldGNoIiwicmVzdWx0IiwianNvbiIsImNvbnNvbGUiLCJsb2ciLCJlcnJvciIsImhhbmRsZUFkZFRvZG8iLCJ0cmltIiwibWV0aG9kIiwiaGVhZGVycyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwidGl0bGUiLCJvayIsInN0YXR1c1RleHQiLCJoYW5kbGVEZWxldGVUb2RvIiwiaW5kZXgiLCJmaWx0ZXIiLCJfIiwiaSIsImhhbmRsZUVkaXRUb2RvIiwiaGFuZGxlU2F2ZUVkaXQiLCJ1cGRhdGVkVG9kb3MiLCJtYXAiLCJ0b2RvIiwiZGl2IiwiY2xhc3NOYW1lIiwiaDEiLCJpbnB1dCIsInR5cGUiLCJwbGFjZWhvbGRlciIsInZhbHVlIiwib25DaGFuZ2UiLCJlIiwidGFyZ2V0IiwiYnV0dG9uIiwib25DbGljayIsInVsIiwibGkiLCJzcGFuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/components/TodoApp.jsx\n"));

/***/ })

});