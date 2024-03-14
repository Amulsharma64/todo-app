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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\nconst TodoApp = ()=>{\n    _s();\n    const [todos, setTodos] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [newTodo, setNewTodo] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [editIndex, setEditIndex] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(-1);\n    const [editValue, setEditValue] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    // function for updating the todo\n    const fetchData = async ()=>{\n        try {\n            const response = await fetch(\"http://localhost:3000/todo\");\n            const result = await response.json();\n            console.log(result);\n            setTodos(result);\n        } catch (error) {\n            console.error(\"Error fetching data:\", error);\n        }\n    };\n    // render the todos from the server\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        fetchData();\n    }, []);\n    const handleAddTodo = async ()=>{\n        console.log(newTodo);\n        if (newTodo.trim() !== \"\") {\n            try {\n                const response = await fetch(\"http://localhost:3000/todo\", {\n                    method: \"POST\",\n                    headers: {\n                        \"Content-Type\": \"application/json\"\n                    },\n                    body: JSON.stringify({\n                        title: newTodo\n                    })\n                });\n                if (response.ok) {\n                // Optionally, handle successful insertion, such as updating component state\n                } else {\n                    // Handle the case where insertion was not successful\n                    console.error(\"Insertion failed:\", response.statusText);\n                }\n            } catch (error) {\n                console.error(\"Error inserting data:\", error);\n            }\n            setNewTodo(\"\");\n        }\n        fetchData();\n    };\n    const handleDeleteTodo = async (index)=>{\n        try {\n            await fetch(\"http://localhost:3000/todo/\".concat(index), {\n                method: \"DELETE\"\n            });\n            fetchData();\n        } catch (error) {\n            console.error(\"Error deleting data:\", error);\n        }\n    };\n    const handleEditTodo = (index)=>{\n        setEditIndex(index);\n        setEditValue(editValue);\n    };\n    const handleSaveEdit = async (index)=>{\n        console.log(editValue, index);\n        try {\n            await fetch(\"http://localhost:3000/todo/\".concat(index), {\n                method: \"PUT\",\n                headers: {\n                    \"Content-Type\": \"application/json\"\n                },\n                body: JSON.stringify({\n                    title: editValue\n                })\n            });\n            // refresh the data\n            fetchData();\n        } catch (error) {\n            console.error(\"Error updating data:\", error);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"max-w-md mx-auto mt-8 p-4 bg-gray-100 rounded shadow-md\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"text-2xl font-bold mb-4\",\n                children: \"Todo App\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\Todo-app\\\\frontend\\\\app\\\\components\\\\TodoApp.jsx\",\n                lineNumber: 91,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        className: \"flex-1 border rounded p-2 mr-2\",\n                        placeholder: \"Enter todo\",\n                        value: newTodo,\n                        onChange: (e)=>setNewTodo(e.target.value)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\Todo-app\\\\frontend\\\\app\\\\components\\\\TodoApp.jsx\",\n                        lineNumber: 93,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"bg-blue-500 text-white px-4 py-2 rounded\",\n                        onClick: handleAddTodo,\n                        children: \"Add\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\Todo-app\\\\frontend\\\\app\\\\components\\\\TodoApp.jsx\",\n                        lineNumber: 100,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\Todo-app\\\\frontend\\\\app\\\\components\\\\TodoApp.jsx\",\n                lineNumber: 92,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                className: \"mt-4\",\n                children: todos.map((todo, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        className: \"flex items-center justify-between py-2\",\n                        children: [\n                            todo._id === editIndex ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"text\",\n                                className: \"flex-1 border rounded p-1 mr-2\",\n                                value: todo.title,\n                                onChange: (e)=>setEditValue(e.target.value)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\Todo-app\\\\frontend\\\\app\\\\components\\\\TodoApp.jsx\",\n                                lineNumber: 111,\n                                columnNumber: 15\n                            }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                children: todo.title\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\Todo-app\\\\frontend\\\\app\\\\components\\\\TodoApp.jsx\",\n                                lineNumber: 118,\n                                columnNumber: 15\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: [\n                                    todo._id === editIndex ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        className: \"text-green-500 mr-2\",\n                                        onClick: ()=>handleSaveEdit(todo._id),\n                                        children: \"Save\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\Todo-app\\\\frontend\\\\app\\\\components\\\\TodoApp.jsx\",\n                                        lineNumber: 122,\n                                        columnNumber: 17\n                                    }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        className: \"text-blue-500 mr-2\",\n                                        onClick: ()=>handleEditTodo(todo._id),\n                                        children: \"Edit\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\Todo-app\\\\frontend\\\\app\\\\components\\\\TodoApp.jsx\",\n                                        lineNumber: 129,\n                                        columnNumber: 17\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        className: \"text-red-500\",\n                                        onClick: ()=>handleDeleteTodo(todo._id),\n                                        children: \"Delete\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\Todo-app\\\\frontend\\\\app\\\\components\\\\TodoApp.jsx\",\n                                        lineNumber: 136,\n                                        columnNumber: 15\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\Todo-app\\\\frontend\\\\app\\\\components\\\\TodoApp.jsx\",\n                                lineNumber: 120,\n                                columnNumber: 13\n                            }, undefined)\n                        ]\n                    }, index, true, {\n                        fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\Todo-app\\\\frontend\\\\app\\\\components\\\\TodoApp.jsx\",\n                        lineNumber: 109,\n                        columnNumber: 11\n                    }, undefined))\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\Todo-app\\\\frontend\\\\app\\\\components\\\\TodoApp.jsx\",\n                lineNumber: 107,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\Todo-app\\\\frontend\\\\app\\\\components\\\\TodoApp.jsx\",\n        lineNumber: 90,\n        columnNumber: 5\n    }, undefined);\n};\n_s(TodoApp, \"3e1etGqmDAdgqm/+NU4Px+UaqNQ=\");\n_c = TodoApp;\n/* harmony default export */ __webpack_exports__[\"default\"] = (TodoApp);\nvar _c;\n$RefreshReg$(_c, \"TodoApp\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jb21wb25lbnRzL1RvZG9BcHAuanN4IiwibWFwcGluZ3MiOiI7Ozs7OztBQUNtRDtBQUduRCxNQUFNRyxVQUFVOztJQUNkLE1BQU0sQ0FBQ0MsT0FBT0MsU0FBUyxHQUFHSCwrQ0FBUUEsQ0FBQyxFQUFFO0lBQ3JDLE1BQU0sQ0FBQ0ksU0FBU0MsV0FBVyxHQUFHTCwrQ0FBUUEsQ0FBQztJQUN2QyxNQUFNLENBQUNNLFdBQVdDLGFBQWEsR0FBR1AsK0NBQVFBLENBQUMsQ0FBQztJQUM1QyxNQUFNLENBQUNRLFdBQVdDLGFBQWEsR0FBR1QsK0NBQVFBLENBQUM7SUFHM0MsaUNBQWlDO0lBQ2pDLE1BQU1VLFlBQVk7UUFDaEIsSUFBSTtZQUNGLE1BQU1DLFdBQVcsTUFBTUMsTUFBTTtZQUM3QixNQUFNQyxTQUFTLE1BQU1GLFNBQVNHLElBQUk7WUFDbkNDLFFBQVFDLEdBQUcsQ0FBQ0g7WUFDWFYsU0FBU1U7UUFDWCxFQUFFLE9BQU9JLE9BQU87WUFDZEYsUUFBUUUsS0FBSyxDQUFDLHdCQUF3QkE7UUFDeEM7SUFDRjtJQUVBLG1DQUFtQztJQUNuQ2xCLGdEQUFTQSxDQUFDO1FBQ05XO0lBQ0osR0FBRyxFQUFFO0lBSUwsTUFBTVEsZ0JBQWdCO1FBQ3BCSCxRQUFRQyxHQUFHLENBQUNaO1FBQ1osSUFBSUEsUUFBUWUsSUFBSSxPQUFPLElBQUk7WUFDekIsSUFBSTtnQkFDRixNQUFNUixXQUFXLE1BQU1DLE1BQU0sOEJBQThCO29CQUN6RFEsUUFBUTtvQkFDUkMsU0FBUzt3QkFDUCxnQkFBZ0I7b0JBQ2xCO29CQUNBQyxNQUFNQyxLQUFLQyxTQUFTLENBQUM7d0JBQUVDLE9BQU9yQjtvQkFBUTtnQkFDeEM7Z0JBQ0EsSUFBSU8sU0FBU2UsRUFBRSxFQUFFO2dCQUNmLDRFQUE0RTtnQkFDOUUsT0FBTztvQkFDTCxxREFBcUQ7b0JBQ3JEWCxRQUFRRSxLQUFLLENBQUMscUJBQXFCTixTQUFTZ0IsVUFBVTtnQkFDeEQ7WUFDRixFQUFFLE9BQU9WLE9BQU87Z0JBQ2RGLFFBQVFFLEtBQUssQ0FBQyx5QkFBeUJBO1lBQ3pDO1lBQ0FaLFdBQVc7UUFDYjtRQUNBSztJQUNGO0lBRUEsTUFBTWtCLG1CQUFtQixPQUFPQztRQUM5QixJQUFJO1lBQ0YsTUFBTWpCLE1BQU0sOEJBQW9DLE9BQU5pQixRQUFTO2dCQUNqRFQsUUFBUTtZQUNWO1lBQ0RWO1FBQ0QsRUFBRSxPQUFPTyxPQUFPO1lBQ2RGLFFBQVFFLEtBQUssQ0FBQyx3QkFBd0JBO1FBQ3hDO0lBQ0Y7SUFFQSxNQUFNYSxpQkFBaUIsQ0FBQ0Q7UUFDdEJ0QixhQUFhc0I7UUFDYnBCLGFBQWFEO0lBQ2Y7SUFFQSxNQUFNdUIsaUJBQWlCLE9BQU9GO1FBQzVCZCxRQUFRQyxHQUFHLENBQUNSLFdBQVdxQjtRQUN2QixJQUFJO1lBQ0YsTUFBTWpCLE1BQU0sOEJBQW9DLE9BQU5pQixRQUFTO2dCQUNqRFQsUUFBUTtnQkFDUkMsU0FBUztvQkFDUCxnQkFBZ0I7Z0JBQ2xCO2dCQUNBQyxNQUFNQyxLQUFLQyxTQUFTLENBQUM7b0JBQUVDLE9BQU9qQjtnQkFBVTtZQUMxQztZQUNBLG1CQUFtQjtZQUNuQkU7UUFDRixFQUFFLE9BQU9PLE9BQU87WUFDZEYsUUFBUUUsS0FBSyxDQUFDLHdCQUF3QkE7UUFDeEM7SUFDRjtJQUVBLHFCQUNFLDhEQUFDZTtRQUFJQyxXQUFVOzswQkFDYiw4REFBQ0M7Z0JBQUdELFdBQVU7MEJBQTBCOzs7Ozs7MEJBQ3hDLDhEQUFDRDtnQkFBSUMsV0FBVTs7a0NBQ2IsOERBQUNFO3dCQUNDQyxNQUFLO3dCQUNMSCxXQUFVO3dCQUNWSSxhQUFZO3dCQUNaQyxPQUFPbEM7d0JBQ1BtQyxVQUFVLENBQUNDLElBQU1uQyxXQUFXbUMsRUFBRUMsTUFBTSxDQUFDSCxLQUFLOzs7Ozs7a0NBRTVDLDhEQUFDSTt3QkFDQ1QsV0FBVTt3QkFDVlUsU0FBU3pCO2tDQUNWOzs7Ozs7Ozs7Ozs7MEJBSUgsOERBQUMwQjtnQkFBR1gsV0FBVTswQkFDWC9CLE1BQU0yQyxHQUFHLENBQUMsQ0FBQ0MsTUFBTWpCLHNCQUNoQiw4REFBQ2tCO3dCQUFlZCxXQUFVOzs0QkFDdkJhLEtBQUtFLEdBQUcsS0FBSzFDLDBCQUNaLDhEQUFDNkI7Z0NBQ0NDLE1BQUs7Z0NBQ0xILFdBQVU7Z0NBQ1ZLLE9BQU9RLEtBQUtyQixLQUFLO2dDQUNqQmMsVUFBVSxDQUFDQyxJQUFNL0IsYUFBYStCLEVBQUVDLE1BQU0sQ0FBQ0gsS0FBSzs7Ozs7MERBRzlDLDhEQUFDVzswQ0FBTUgsS0FBS3JCLEtBQUs7Ozs7OzswQ0FFbkIsOERBQUNPOztvQ0FDRWMsS0FBS0UsR0FBRyxLQUFLMUMsMEJBQ1osOERBQUNvQzt3Q0FDQ1QsV0FBVTt3Q0FDVlUsU0FBUyxJQUFNWixlQUFlZSxLQUFLRSxHQUFHO2tEQUN2Qzs7Ozs7a0VBSUQsOERBQUNOO3dDQUNDVCxXQUFVO3dDQUNWVSxTQUFTLElBQU1iLGVBQWVnQixLQUFLRSxHQUFHO2tEQUN2Qzs7Ozs7O2tEQUlILDhEQUFDTjt3Q0FDQ1QsV0FBVTt3Q0FDVlUsU0FBUyxJQUFNZixpQkFBaUJrQixLQUFLRSxHQUFHO2tEQUN6Qzs7Ozs7Ozs7Ozs7Ozt1QkE5QkluQjs7Ozs7Ozs7Ozs7Ozs7OztBQXVDbkI7R0EvSU01QjtLQUFBQTtBQWlKTiwrREFBZUEsT0FBT0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvY29tcG9uZW50cy9Ub2RvQXBwLmpzeD8xOWY4Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuXHJcblxyXG5jb25zdCBUb2RvQXBwID0gKCkgPT4ge1xyXG4gIGNvbnN0IFt0b2Rvcywgc2V0VG9kb3NdID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFtuZXdUb2RvLCBzZXROZXdUb2RvXSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBbZWRpdEluZGV4LCBzZXRFZGl0SW5kZXhdID0gdXNlU3RhdGUoLTEpO1xyXG4gIGNvbnN0IFtlZGl0VmFsdWUsIHNldEVkaXRWYWx1ZV0gPSB1c2VTdGF0ZSgnJyk7XHJcblxyXG5cclxuICAvLyBmdW5jdGlvbiBmb3IgdXBkYXRpbmcgdGhlIHRvZG9cclxuICBjb25zdCBmZXRjaERhdGEgPSBhc3luYyAoKSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKCdodHRwOi8vbG9jYWxob3N0OjMwMDAvdG9kbycpO1xyXG4gICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgICAgY29uc29sZS5sb2cocmVzdWx0KTtcclxuICAgICAgc2V0VG9kb3MocmVzdWx0KTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGZldGNoaW5nIGRhdGE6JywgZXJyb3IpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIC8vIHJlbmRlciB0aGUgdG9kb3MgZnJvbSB0aGUgc2VydmVyXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgZmV0Y2hEYXRhKCk7XHJcbiAgfSwgW10pO1xyXG5cclxuXHJcblxyXG4gIGNvbnN0IGhhbmRsZUFkZFRvZG8gPSBhc3luYyAoKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhuZXdUb2RvKTtcclxuICAgIGlmIChuZXdUb2RvLnRyaW0oKSAhPT0gJycpIHtcclxuICAgICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKCdodHRwOi8vbG9jYWxob3N0OjMwMDAvdG9kbycsIHtcclxuICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgdGl0bGU6IG5ld1RvZG8gfSksXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgaWYgKHJlc3BvbnNlLm9rKSB7XHJcbiAgICAgICAgICAvLyBPcHRpb25hbGx5LCBoYW5kbGUgc3VjY2Vzc2Z1bCBpbnNlcnRpb24sIHN1Y2ggYXMgdXBkYXRpbmcgY29tcG9uZW50IHN0YXRlXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIC8vIEhhbmRsZSB0aGUgY2FzZSB3aGVyZSBpbnNlcnRpb24gd2FzIG5vdCBzdWNjZXNzZnVsXHJcbiAgICAgICAgICBjb25zb2xlLmVycm9yKCdJbnNlcnRpb24gZmFpbGVkOicsIHJlc3BvbnNlLnN0YXR1c1RleHQpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBpbnNlcnRpbmcgZGF0YTonLCBlcnJvcik7XHJcbiAgICAgIH1cclxuICAgICAgc2V0TmV3VG9kbygnJyk7XHJcbiAgICB9XHJcbiAgICBmZXRjaERhdGEoKTtcclxuICB9XHJcblxyXG4gIGNvbnN0IGhhbmRsZURlbGV0ZVRvZG8gPSBhc3luYyAoaW5kZXgpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGF3YWl0IGZldGNoKGBodHRwOi8vbG9jYWxob3N0OjMwMDAvdG9kby8ke2luZGV4fWAsIHtcclxuICAgICAgICBtZXRob2Q6ICdERUxFVEUnLFxyXG4gICAgICB9KTtcclxuICAgICBmZXRjaERhdGEoKTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGRlbGV0aW5nIGRhdGE6JywgZXJyb3IpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZUVkaXRUb2RvID0gKGluZGV4KSA9PiB7XHJcbiAgICBzZXRFZGl0SW5kZXgoaW5kZXgpO1xyXG4gICAgc2V0RWRpdFZhbHVlKGVkaXRWYWx1ZSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlU2F2ZUVkaXQgPSBhc3luYyAoaW5kZXgpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKGVkaXRWYWx1ZSwgaW5kZXgpO1xyXG4gICAgdHJ5IHtcclxuICAgICAgYXdhaXQgZmV0Y2goYGh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC90b2RvLyR7aW5kZXh9YCwge1xyXG4gICAgICAgIG1ldGhvZDogJ1BVVCcsIC8vIG9yICdQQVRDSCdcclxuICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyB0aXRsZTogZWRpdFZhbHVlIH0pLFxyXG4gICAgICB9KTtcclxuICAgICAgLy8gcmVmcmVzaCB0aGUgZGF0YVxyXG4gICAgICBmZXRjaERhdGEoKTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIHVwZGF0aW5nIGRhdGE6JywgZXJyb3IpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm1heC13LW1kIG14LWF1dG8gbXQtOCBwLTQgYmctZ3JheS0xMDAgcm91bmRlZCBzaGFkb3ctbWRcIj5cclxuICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtMnhsIGZvbnQtYm9sZCBtYi00XCI+VG9kbyBBcHA8L2gxPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXhcIj5cclxuICAgICAgICA8aW5wdXRcclxuICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgIGNsYXNzTmFtZT1cImZsZXgtMSBib3JkZXIgcm91bmRlZCBwLTIgbXItMlwiXHJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIHRvZG9cIlxyXG4gICAgICAgICAgdmFsdWU9e25ld1RvZG99XHJcbiAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldE5ld1RvZG8oZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwiYmctYmx1ZS01MDAgdGV4dC13aGl0ZSBweC00IHB5LTIgcm91bmRlZFwiXHJcbiAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVBZGRUb2RvfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIEFkZFxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPHVsIGNsYXNzTmFtZT1cIm10LTRcIj5cclxuICAgICAgICB7dG9kb3MubWFwKCh0b2RvLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgPGxpIGtleT17aW5kZXh9IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiBweS0yXCI+XHJcbiAgICAgICAgICAgIHt0b2RvLl9pZCA9PT0gZWRpdEluZGV4ID8gKFxyXG4gICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmxleC0xIGJvcmRlciByb3VuZGVkIHAtMSBtci0yXCJcclxuICAgICAgICAgICAgICAgIHZhbHVlPXt0b2RvLnRpdGxlfVxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRFZGl0VmFsdWUoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgPHNwYW4+e3RvZG8udGl0bGV9PC9zcGFuPlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgIHt0b2RvLl9pZCA9PT0gZWRpdEluZGV4ID8gKFxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LWdyZWVuLTUwMCBtci0yXCJcclxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlU2F2ZUVkaXQodG9kby5faWQpfVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICBTYXZlXHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LWJsdWUtNTAwIG1yLTJcIlxyXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVFZGl0VG9kbyh0b2RvLl9pZCl9XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIEVkaXRcclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC1yZWQtNTAwXCJcclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZURlbGV0ZVRvZG8odG9kby5faWQpfVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIERlbGV0ZVxyXG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgKSl9XHJcbiAgICAgIDwvdWw+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgVG9kb0FwcDtcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJUb2RvQXBwIiwidG9kb3MiLCJzZXRUb2RvcyIsIm5ld1RvZG8iLCJzZXROZXdUb2RvIiwiZWRpdEluZGV4Iiwic2V0RWRpdEluZGV4IiwiZWRpdFZhbHVlIiwic2V0RWRpdFZhbHVlIiwiZmV0Y2hEYXRhIiwicmVzcG9uc2UiLCJmZXRjaCIsInJlc3VsdCIsImpzb24iLCJjb25zb2xlIiwibG9nIiwiZXJyb3IiLCJoYW5kbGVBZGRUb2RvIiwidHJpbSIsIm1ldGhvZCIsImhlYWRlcnMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsInRpdGxlIiwib2siLCJzdGF0dXNUZXh0IiwiaGFuZGxlRGVsZXRlVG9kbyIsImluZGV4IiwiaGFuZGxlRWRpdFRvZG8iLCJoYW5kbGVTYXZlRWRpdCIsImRpdiIsImNsYXNzTmFtZSIsImgxIiwiaW5wdXQiLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwiZSIsInRhcmdldCIsImJ1dHRvbiIsIm9uQ2xpY2siLCJ1bCIsIm1hcCIsInRvZG8iLCJsaSIsIl9pZCIsInNwYW4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/components/TodoApp.jsx\n"));

/***/ })

});