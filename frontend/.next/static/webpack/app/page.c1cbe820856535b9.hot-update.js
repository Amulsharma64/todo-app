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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _WarningAlert__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./WarningAlert */ \"(app-pages-browser)/./app/components/WarningAlert.jsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nconst TodoApp = ()=>{\n    _s();\n    const [todos, setTodos] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [newTodo, setNewTodo] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [editIndex, setEditIndex] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(-1);\n    const [editValue, setEditValue] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    // function for updating the todo\n    const fetchData = async ()=>{\n        try {\n            const response = await fetch(\"http://localhost:3000/todo\");\n            const result = await response.json();\n            //  console.log(result);\n            setTodos(result);\n        } catch (error) {\n            console.error(\"Error fetching data:\", error);\n        }\n    };\n    // render the todos from the server\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        fetchData();\n    }, []);\n    const handleAddTodo = async ()=>{\n        console.log(newTodo);\n        if (newTodo.trim() === \"\") {\n            window.alert(\"Please enter a todo\");\n            return;\n        }\n        if (newTodo.trim() !== \"\") {\n            try {\n                const response = await fetch(\"http://localhost:3000/todo\", {\n                    method: \"POST\",\n                    headers: {\n                        \"Content-Type\": \"application/json\"\n                    },\n                    body: JSON.stringify({\n                        title: newTodo\n                    })\n                });\n                if (response.ok) {\n                // Optionally, handle successful insertion, such as updating component state\n                } else {\n                    // Handle the case where insertion was not successful\n                    console.error(\"Insertion failed:\", response.statusText);\n                }\n            } catch (error) {\n                console.error(\"Error inserting data:\", error);\n            }\n            setNewTodo(\"\");\n        }\n        fetchData();\n    };\n    const handleDeleteTodo = async (index)=>{\n        try {\n            await fetch(\"http://localhost:3000/todo/\".concat(index), {\n                method: \"DELETE\"\n            });\n            fetchData();\n        } catch (error) {\n            console.error(\"Error deleting data:\", error);\n        }\n    };\n    const handleEditTodo = (index, title)=>{\n        setEditIndex(index);\n        setEditValue(title);\n    };\n    const handleSaveEdit = async (index)=>{\n        try {\n            await fetch(\"http://localhost:3000/todo/\".concat(index), {\n                method: \"PUT\",\n                headers: {\n                    \"Content-Type\": \"application/json\"\n                },\n                body: JSON.stringify({\n                    title: editValue\n                })\n            });\n            // refresh the data\n            fetchData();\n        } catch (error) {\n            console.error(\"Error updating data:\", error);\n        }\n        setEditIndex(-1);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"max-w-md mx-auto mt-8 p-4 bg-gray-100 rounded shadow-md\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"text-2xl font-bold mb-4\",\n                children: \"Todo App\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\Todo-app\\\\frontend\\\\app\\\\components\\\\TodoApp.jsx\",\n                lineNumber: 99,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        className: \"flex-1 border rounded p-2 mr-2\",\n                        placeholder: \"Enter todo\",\n                        value: newTodo,\n                        onChange: (e)=>setNewTodo(e.target.value)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\Todo-app\\\\frontend\\\\app\\\\components\\\\TodoApp.jsx\",\n                        lineNumber: 101,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"bg-blue-500 text-white px-4 py-2 rounded\",\n                        onClick: handleAddTodo,\n                        children: \"Add\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\Todo-app\\\\frontend\\\\app\\\\components\\\\TodoApp.jsx\",\n                        lineNumber: 108,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\Todo-app\\\\frontend\\\\app\\\\components\\\\TodoApp.jsx\",\n                lineNumber: 100,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                className: \"mt-4\",\n                children: todos.map((todo, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        className: \"flex items-center justify-between py-2\",\n                        children: [\n                            todo._id === editIndex ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"text\",\n                                className: \"flex-1 border rounded p-1 mr-2\",\n                                value: editValue,\n                                onChange: (e)=>setEditValue(e.target.value)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\Todo-app\\\\frontend\\\\app\\\\components\\\\TodoApp.jsx\",\n                                lineNumber: 119,\n                                columnNumber: 15\n                            }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                children: todo.title\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\Todo-app\\\\frontend\\\\app\\\\components\\\\TodoApp.jsx\",\n                                lineNumber: 126,\n                                columnNumber: 15\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: [\n                                    todo._id === editIndex ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        className: \"text-green-500 mr-2\",\n                                        onClick: ()=>handleSaveEdit(todo._id),\n                                        children: \"Save\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\Todo-app\\\\frontend\\\\app\\\\components\\\\TodoApp.jsx\",\n                                        lineNumber: 130,\n                                        columnNumber: 17\n                                    }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        className: \"text-blue-500 mr-2\",\n                                        onClick: ()=>handleEditTodo(todo._id, todo.title),\n                                        children: \"Edit\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\Todo-app\\\\frontend\\\\app\\\\components\\\\TodoApp.jsx\",\n                                        lineNumber: 137,\n                                        columnNumber: 17\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        className: \"text-red-500\",\n                                        onClick: ()=>handleDeleteTodo(todo._id),\n                                        children: \"Delete\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\Todo-app\\\\frontend\\\\app\\\\components\\\\TodoApp.jsx\",\n                                        lineNumber: 144,\n                                        columnNumber: 15\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\Todo-app\\\\frontend\\\\app\\\\components\\\\TodoApp.jsx\",\n                                lineNumber: 128,\n                                columnNumber: 13\n                            }, undefined)\n                        ]\n                    }, index, true, {\n                        fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\Todo-app\\\\frontend\\\\app\\\\components\\\\TodoApp.jsx\",\n                        lineNumber: 117,\n                        columnNumber: 11\n                    }, undefined))\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\Todo-app\\\\frontend\\\\app\\\\components\\\\TodoApp.jsx\",\n                lineNumber: 115,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\Todo-app\\\\frontend\\\\app\\\\components\\\\TodoApp.jsx\",\n        lineNumber: 98,\n        columnNumber: 5\n    }, undefined);\n};\n_s(TodoApp, \"3e1etGqmDAdgqm/+NU4Px+UaqNQ=\");\n_c = TodoApp;\n/* harmony default export */ __webpack_exports__[\"default\"] = (TodoApp);\nvar _c;\n$RefreshReg$(_c, \"TodoApp\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jb21wb25lbnRzL1RvZG9BcHAuanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFDbUQ7QUFDVDtBQUcxQyxNQUFNSSxVQUFVOztJQUNkLE1BQU0sQ0FBQ0MsT0FBT0MsU0FBUyxHQUFHSiwrQ0FBUUEsQ0FBQyxFQUFFO0lBQ3JDLE1BQU0sQ0FBQ0ssU0FBU0MsV0FBVyxHQUFHTiwrQ0FBUUEsQ0FBQztJQUN2QyxNQUFNLENBQUNPLFdBQVdDLGFBQWEsR0FBR1IsK0NBQVFBLENBQUMsQ0FBQztJQUM1QyxNQUFNLENBQUNTLFdBQVdDLGFBQWEsR0FBR1YsK0NBQVFBLENBQUM7SUFHM0MsaUNBQWlDO0lBQ2pDLE1BQU1XLFlBQVk7UUFDaEIsSUFBSTtZQUNGLE1BQU1DLFdBQVcsTUFBTUMsTUFBTTtZQUM3QixNQUFNQyxTQUFTLE1BQU1GLFNBQVNHLElBQUk7WUFDcEMsd0JBQXdCO1lBQ3RCWCxTQUFTVTtRQUNYLEVBQUUsT0FBT0UsT0FBTztZQUNkQyxRQUFRRCxLQUFLLENBQUMsd0JBQXdCQTtRQUN4QztJQUNGO0lBRUEsbUNBQW1DO0lBQ25DakIsZ0RBQVNBLENBQUM7UUFDTlk7SUFDSixHQUFHLEVBQUU7SUFJTCxNQUFNTyxnQkFBZ0I7UUFFcEJELFFBQVFFLEdBQUcsQ0FBQ2Q7UUFFWixJQUFHQSxRQUFRZSxJQUFJLE9BQU8sSUFBRztZQUN2QkMsT0FBT0MsS0FBSyxDQUFDO1lBQ2I7UUFDRjtRQUVBLElBQUlqQixRQUFRZSxJQUFJLE9BQU8sSUFBSTtZQUN6QixJQUFJO2dCQUNGLE1BQU1SLFdBQVcsTUFBTUMsTUFBTSw4QkFBOEI7b0JBQ3pEVSxRQUFRO29CQUNSQyxTQUFTO3dCQUNQLGdCQUFnQjtvQkFDbEI7b0JBQ0FDLE1BQU1DLEtBQUtDLFNBQVMsQ0FBQzt3QkFBRUMsT0FBT3ZCO29CQUFRO2dCQUN4QztnQkFDQSxJQUFJTyxTQUFTaUIsRUFBRSxFQUFFO2dCQUNmLDRFQUE0RTtnQkFDOUUsT0FBTztvQkFDTCxxREFBcUQ7b0JBQ3JEWixRQUFRRCxLQUFLLENBQUMscUJBQXFCSixTQUFTa0IsVUFBVTtnQkFDeEQ7WUFDRixFQUFFLE9BQU9kLE9BQU87Z0JBQ2RDLFFBQVFELEtBQUssQ0FBQyx5QkFBeUJBO1lBQ3pDO1lBQ0FWLFdBQVc7UUFDYjtRQUNBSztJQUNGO0lBRUEsTUFBTW9CLG1CQUFtQixPQUFPQztRQUM5QixJQUFJO1lBQ0YsTUFBTW5CLE1BQU0sOEJBQW9DLE9BQU5tQixRQUFTO2dCQUNqRFQsUUFBUTtZQUNWO1lBQ0RaO1FBQ0QsRUFBRSxPQUFPSyxPQUFPO1lBQ2RDLFFBQVFELEtBQUssQ0FBQyx3QkFBd0JBO1FBQ3hDO0lBQ0Y7SUFFQSxNQUFNaUIsaUJBQWlCLENBQUNELE9BQU1KO1FBQzVCcEIsYUFBYXdCO1FBQ2J0QixhQUFha0I7SUFDZjtJQUVBLE1BQU1NLGlCQUFpQixPQUFPRjtRQUM1QixJQUFJO1lBQ0YsTUFBTW5CLE1BQU0sOEJBQW9DLE9BQU5tQixRQUFTO2dCQUNqRFQsUUFBUTtnQkFDUkMsU0FBUztvQkFDUCxnQkFBZ0I7Z0JBQ2xCO2dCQUNBQyxNQUFNQyxLQUFLQyxTQUFTLENBQUM7b0JBQUVDLE9BQU9uQjtnQkFBVTtZQUMxQztZQUNBLG1CQUFtQjtZQUNuQkU7UUFDRixFQUFFLE9BQU9LLE9BQU87WUFDZEMsUUFBUUQsS0FBSyxDQUFDLHdCQUF3QkE7UUFDeEM7UUFDQVIsYUFBYSxDQUFDO0lBQ2hCO0lBRUEscUJBQ0UsOERBQUMyQjtRQUFJQyxXQUFVOzswQkFDYiw4REFBQ0M7Z0JBQUdELFdBQVU7MEJBQTBCOzs7Ozs7MEJBQ3hDLDhEQUFDRDtnQkFBSUMsV0FBVTs7a0NBQ2IsOERBQUNFO3dCQUNDQyxNQUFLO3dCQUNMSCxXQUFVO3dCQUNWSSxhQUFZO3dCQUNaQyxPQUFPcEM7d0JBQ1BxQyxVQUFVLENBQUNDLElBQU1yQyxXQUFXcUMsRUFBRUMsTUFBTSxDQUFDSCxLQUFLOzs7Ozs7a0NBRTVDLDhEQUFDSTt3QkFDQ1QsV0FBVTt3QkFDVlUsU0FBUzVCO2tDQUNWOzs7Ozs7Ozs7Ozs7MEJBSUgsOERBQUM2QjtnQkFBR1gsV0FBVTswQkFDWGpDLE1BQU02QyxHQUFHLENBQUMsQ0FBQ0MsTUFBTWpCLHNCQUNoQiw4REFBQ2tCO3dCQUFlZCxXQUFVOzs0QkFDdkJhLEtBQUtFLEdBQUcsS0FBSzVDLDBCQUNaLDhEQUFDK0I7Z0NBQ0NDLE1BQUs7Z0NBQ0xILFdBQVU7Z0NBQ1ZLLE9BQU9oQztnQ0FDUGlDLFVBQVUsQ0FBQ0MsSUFBTWpDLGFBQWFpQyxFQUFFQyxNQUFNLENBQUNILEtBQUs7Ozs7OzBEQUc5Qyw4REFBQ1c7MENBQU1ILEtBQUtyQixLQUFLOzs7Ozs7MENBRW5CLDhEQUFDTzs7b0NBQ0VjLEtBQUtFLEdBQUcsS0FBSzVDLDBCQUNaLDhEQUFDc0M7d0NBQ0NULFdBQVU7d0NBQ1ZVLFNBQVMsSUFBTVosZUFBZWUsS0FBS0UsR0FBRztrREFDdkM7Ozs7O2tFQUlELDhEQUFDTjt3Q0FDQ1QsV0FBVTt3Q0FDVlUsU0FBUyxJQUFNYixlQUFlZ0IsS0FBS0UsR0FBRyxFQUFFRixLQUFLckIsS0FBSztrREFDbkQ7Ozs7OztrREFJSCw4REFBQ2lCO3dDQUNDVCxXQUFVO3dDQUNWVSxTQUFTLElBQU1mLGlCQUFpQmtCLEtBQUtFLEdBQUc7a0RBQ3pDOzs7Ozs7Ozs7Ozs7O3VCQTlCSW5COzs7Ozs7Ozs7Ozs7Ozs7O0FBdUNuQjtHQXRKTTlCO0tBQUFBO0FBd0pOLCtEQUFlQSxPQUFPQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9jb21wb25lbnRzL1RvZG9BcHAuanN4PzE5ZjgiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XHJcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgV2FybmluZ0FsZXJ0IGZyb20gJy4vV2FybmluZ0FsZXJ0JztcclxuXHJcblxyXG5jb25zdCBUb2RvQXBwID0gKCkgPT4ge1xyXG4gIGNvbnN0IFt0b2Rvcywgc2V0VG9kb3NdID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFtuZXdUb2RvLCBzZXROZXdUb2RvXSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBbZWRpdEluZGV4LCBzZXRFZGl0SW5kZXhdID0gdXNlU3RhdGUoLTEpO1xyXG4gIGNvbnN0IFtlZGl0VmFsdWUsIHNldEVkaXRWYWx1ZV0gPSB1c2VTdGF0ZSgnJyk7XHJcblxyXG5cclxuICAvLyBmdW5jdGlvbiBmb3IgdXBkYXRpbmcgdGhlIHRvZG9cclxuICBjb25zdCBmZXRjaERhdGEgPSBhc3luYyAoKSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKCdodHRwOi8vbG9jYWxob3N0OjMwMDAvdG9kbycpO1xyXG4gICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgICAvLyAgY29uc29sZS5sb2cocmVzdWx0KTtcclxuICAgICAgc2V0VG9kb3MocmVzdWx0KTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGZldGNoaW5nIGRhdGE6JywgZXJyb3IpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIC8vIHJlbmRlciB0aGUgdG9kb3MgZnJvbSB0aGUgc2VydmVyXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgZmV0Y2hEYXRhKCk7XHJcbiAgfSwgW10pO1xyXG5cclxuXHJcblxyXG4gIGNvbnN0IGhhbmRsZUFkZFRvZG8gPSBhc3luYyAoKSA9PiB7XHJcbiAgICBcclxuICAgIGNvbnNvbGUubG9nKG5ld1RvZG8pO1xyXG4gICAgXHJcbiAgICBpZihuZXdUb2RvLnRyaW0oKSA9PT0gJycpe1xyXG4gICAgICB3aW5kb3cuYWxlcnQoXCJQbGVhc2UgZW50ZXIgYSB0b2RvXCIpO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKG5ld1RvZG8udHJpbSgpICE9PSAnJykge1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMC90b2RvJywge1xyXG4gICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyB0aXRsZTogbmV3VG9kbyB9KSxcclxuICAgICAgICB9KTtcclxuICAgICAgICBpZiAocmVzcG9uc2Uub2spIHtcclxuICAgICAgICAgIC8vIE9wdGlvbmFsbHksIGhhbmRsZSBzdWNjZXNzZnVsIGluc2VydGlvbiwgc3VjaCBhcyB1cGRhdGluZyBjb21wb25lbnQgc3RhdGVcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgLy8gSGFuZGxlIHRoZSBjYXNlIHdoZXJlIGluc2VydGlvbiB3YXMgbm90IHN1Y2Nlc3NmdWxcclxuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0luc2VydGlvbiBmYWlsZWQ6JywgcmVzcG9uc2Uuc3RhdHVzVGV4dCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGluc2VydGluZyBkYXRhOicsIGVycm9yKTtcclxuICAgICAgfVxyXG4gICAgICBzZXROZXdUb2RvKCcnKTtcclxuICAgIH1cclxuICAgIGZldGNoRGF0YSgpO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgaGFuZGxlRGVsZXRlVG9kbyA9IGFzeW5jIChpbmRleCkgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgYXdhaXQgZmV0Y2goYGh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC90b2RvLyR7aW5kZXh9YCwge1xyXG4gICAgICAgIG1ldGhvZDogJ0RFTEVURScsXHJcbiAgICAgIH0pO1xyXG4gICAgIGZldGNoRGF0YSgpO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZGVsZXRpbmcgZGF0YTonLCBlcnJvcik7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlRWRpdFRvZG8gPSAoaW5kZXgsdGl0bGUpID0+IHtcclxuICAgIHNldEVkaXRJbmRleChpbmRleCk7XHJcbiAgICBzZXRFZGl0VmFsdWUodGl0bGUpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZVNhdmVFZGl0ID0gYXN5bmMgKGluZGV4KSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICBhd2FpdCBmZXRjaChgaHR0cDovL2xvY2FsaG9zdDozMDAwL3RvZG8vJHtpbmRleH1gLCB7XHJcbiAgICAgICAgbWV0aG9kOiAnUFVUJywgLy8gb3IgJ1BBVENIJ1xyXG4gICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7IHRpdGxlOiBlZGl0VmFsdWUgfSksXHJcbiAgICAgIH0pO1xyXG4gICAgICAvLyByZWZyZXNoIHRoZSBkYXRhXHJcbiAgICAgIGZldGNoRGF0YSgpO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgdXBkYXRpbmcgZGF0YTonLCBlcnJvcik7XHJcbiAgICB9XHJcbiAgICBzZXRFZGl0SW5kZXgoLTEpO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm1heC13LW1kIG14LWF1dG8gbXQtOCBwLTQgYmctZ3JheS0xMDAgcm91bmRlZCBzaGFkb3ctbWRcIj5cclxuICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtMnhsIGZvbnQtYm9sZCBtYi00XCI+VG9kbyBBcHA8L2gxPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXhcIj5cclxuICAgICAgICA8aW5wdXRcclxuICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgIGNsYXNzTmFtZT1cImZsZXgtMSBib3JkZXIgcm91bmRlZCBwLTIgbXItMlwiXHJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIHRvZG9cIlxyXG4gICAgICAgICAgdmFsdWU9e25ld1RvZG99XHJcbiAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldE5ld1RvZG8oZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwiYmctYmx1ZS01MDAgdGV4dC13aGl0ZSBweC00IHB5LTIgcm91bmRlZFwiXHJcbiAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVBZGRUb2RvfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIEFkZFxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPHVsIGNsYXNzTmFtZT1cIm10LTRcIj5cclxuICAgICAgICB7dG9kb3MubWFwKCh0b2RvLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgPGxpIGtleT17aW5kZXh9IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiBweS0yXCI+XHJcbiAgICAgICAgICAgIHt0b2RvLl9pZCA9PT0gZWRpdEluZGV4ID8gKFxyXG4gICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmxleC0xIGJvcmRlciByb3VuZGVkIHAtMSBtci0yXCJcclxuICAgICAgICAgICAgICAgIHZhbHVlPXtlZGl0VmFsdWV9XHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldEVkaXRWYWx1ZShlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICA8c3Bhbj57dG9kby50aXRsZX08L3NwYW4+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAge3RvZG8uX2lkID09PSBlZGl0SW5kZXggPyAoXHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtZ3JlZW4tNTAwIG1yLTJcIlxyXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVTYXZlRWRpdCh0b2RvLl9pZCl9XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIFNhdmVcclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtYmx1ZS01MDAgbXItMlwiXHJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZUVkaXRUb2RvKHRvZG8uX2lkLCB0b2RvLnRpdGxlKX1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgRWRpdFxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LXJlZC01MDBcIlxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlRGVsZXRlVG9kbyh0b2RvLl9pZCl9XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgRGVsZXRlXHJcbiAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9saT5cclxuICAgICAgICApKX1cclxuICAgICAgPC91bD5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUb2RvQXBwO1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIldhcm5pbmdBbGVydCIsIlRvZG9BcHAiLCJ0b2RvcyIsInNldFRvZG9zIiwibmV3VG9kbyIsInNldE5ld1RvZG8iLCJlZGl0SW5kZXgiLCJzZXRFZGl0SW5kZXgiLCJlZGl0VmFsdWUiLCJzZXRFZGl0VmFsdWUiLCJmZXRjaERhdGEiLCJyZXNwb25zZSIsImZldGNoIiwicmVzdWx0IiwianNvbiIsImVycm9yIiwiY29uc29sZSIsImhhbmRsZUFkZFRvZG8iLCJsb2ciLCJ0cmltIiwid2luZG93IiwiYWxlcnQiLCJtZXRob2QiLCJoZWFkZXJzIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJ0aXRsZSIsIm9rIiwic3RhdHVzVGV4dCIsImhhbmRsZURlbGV0ZVRvZG8iLCJpbmRleCIsImhhbmRsZUVkaXRUb2RvIiwiaGFuZGxlU2F2ZUVkaXQiLCJkaXYiLCJjbGFzc05hbWUiLCJoMSIsImlucHV0IiwidHlwZSIsInBsYWNlaG9sZGVyIiwidmFsdWUiLCJvbkNoYW5nZSIsImUiLCJ0YXJnZXQiLCJidXR0b24iLCJvbkNsaWNrIiwidWwiLCJtYXAiLCJ0b2RvIiwibGkiLCJfaWQiLCJzcGFuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/components/TodoApp.jsx\n"));

/***/ })

});