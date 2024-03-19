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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\nconst BASE_URL = \"http://localhost:3000\";\nconst TodoApp = ()=>{\n    _s();\n    const [todos, setTodos] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [newTodo, setNewTodo] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [editIndex, setEditIndex] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(-1);\n    const [editValue, setEditValue] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    // function for updating the todo\n    const fetchData = async ()=>{\n        try {\n            const response = await fetch(\"\".concat(BASE_URL, \"/todo\"));\n            const result = await response.json();\n            console.log(result);\n            setTodos(result);\n        } catch (error) {\n            console.error(\"Error fetching data:\", error);\n        }\n    };\n    // render the todos from the server\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        fetchData();\n    }, []);\n    const handleAddTodo = async ()=>{\n        console.log(newTodo);\n        if (newTodo.trim() === \"\") {\n            alert(\"Please enter a todo\");\n            return;\n        }\n        if (newTodo.trim() !== \"\") {\n            try {\n                const response = await fetch(\"\".concat(BASE_URL, \"/todo\"), {\n                    method: \"POST\",\n                    headers: {\n                        \"Content-Type\": \"application/json\"\n                    },\n                    body: JSON.stringify({\n                        title: newTodo\n                    })\n                });\n                if (response.ok) {\n                // Optionally, handle successful insertion, such as updating component state\n                } else {\n                    // Handle the case where insertion was not successful\n                    console.error(\"Insertion failed:\", response.statusText);\n                }\n            } catch (error) {\n                console.error(\"Error inserting data:\", error);\n            }\n            setNewTodo(\"\");\n        }\n        fetchData();\n    };\n    const handleDeleteTodo = async (index)=>{\n        try {\n            await fetch(\"\".concat(BASE_URL, \"/todo/\").concat(index), {\n                method: \"DELETE\"\n            });\n            fetchData();\n        } catch (error) {\n            console.error(\"Error deleting data:\", error);\n        }\n    };\n    const handleEditTodo = (index, title)=>{\n        setEditIndex(index);\n        setEditValue(title);\n    };\n    const handleSaveEdit = async (index)=>{\n        try {\n            await fetch(\"\".concat(BASE_URL, \"/todo/\").concat(index), {\n                method: \"PUT\",\n                headers: {\n                    \"Content-Type\": \"application/json\"\n                },\n                body: JSON.stringify({\n                    title: editValue\n                })\n            });\n            // refresh the data\n            fetchData();\n        } catch (error) {\n            console.error(\"Error updating data:\", error);\n        }\n        setEditIndex(-1);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"max-w-md mx-auto mt-8 p-4 bg-gray-100 rounded shadow-md\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"text-2xl font-bold mb-4\",\n                children: \"Todo App\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\Todo-app\\\\frontend\\\\app\\\\components\\\\TodoApp.jsx\",\n                lineNumber: 97,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        className: \"flex-1 border rounded p-2 mr-2\",\n                        placeholder: \"Enter todo\",\n                        value: newTodo,\n                        onChange: (e)=>setNewTodo(e.target.value)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\Todo-app\\\\frontend\\\\app\\\\components\\\\TodoApp.jsx\",\n                        lineNumber: 99,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"bg-blue-500 text-white px-4 py-2 rounded\",\n                        onClick: handleAddTodo,\n                        children: \"Add\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\Todo-app\\\\frontend\\\\app\\\\components\\\\TodoApp.jsx\",\n                        lineNumber: 106,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\Todo-app\\\\frontend\\\\app\\\\components\\\\TodoApp.jsx\",\n                lineNumber: 98,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                className: \"mt-4\",\n                children: todos.map((todo, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        className: \"flex items-center justify-between py-2\",\n                        children: [\n                            todo._id === editIndex ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"text\",\n                                className: \"flex-1 border rounded p-1 mr-2\",\n                                value: editValue,\n                                onChange: (e)=>setEditValue(e.target.value)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\Todo-app\\\\frontend\\\\app\\\\components\\\\TodoApp.jsx\",\n                                lineNumber: 117,\n                                columnNumber: 15\n                            }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                children: todo.title\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\Todo-app\\\\frontend\\\\app\\\\components\\\\TodoApp.jsx\",\n                                lineNumber: 124,\n                                columnNumber: 15\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: [\n                                    todo._id === editIndex ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        className: \"text-green-500 mr-2\",\n                                        onClick: ()=>handleSaveEdit(todo._id),\n                                        children: \"Save\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\Todo-app\\\\frontend\\\\app\\\\components\\\\TodoApp.jsx\",\n                                        lineNumber: 128,\n                                        columnNumber: 17\n                                    }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        className: \"text-blue-500 mr-2\",\n                                        onClick: ()=>handleEditTodo(todo._id, todo.title),\n                                        children: \"Edit\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\Todo-app\\\\frontend\\\\app\\\\components\\\\TodoApp.jsx\",\n                                        lineNumber: 135,\n                                        columnNumber: 17\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        className: \"text-red-500\",\n                                        onClick: ()=>handleDeleteTodo(todo._id),\n                                        children: \"Delete\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\Todo-app\\\\frontend\\\\app\\\\components\\\\TodoApp.jsx\",\n                                        lineNumber: 142,\n                                        columnNumber: 15\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\Todo-app\\\\frontend\\\\app\\\\components\\\\TodoApp.jsx\",\n                                lineNumber: 126,\n                                columnNumber: 13\n                            }, undefined)\n                        ]\n                    }, index, true, {\n                        fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\Todo-app\\\\frontend\\\\app\\\\components\\\\TodoApp.jsx\",\n                        lineNumber: 115,\n                        columnNumber: 11\n                    }, undefined))\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\Todo-app\\\\frontend\\\\app\\\\components\\\\TodoApp.jsx\",\n                lineNumber: 113,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\Todo-app\\\\frontend\\\\app\\\\components\\\\TodoApp.jsx\",\n        lineNumber: 96,\n        columnNumber: 5\n    }, undefined);\n};\n_s(TodoApp, \"3e1etGqmDAdgqm/+NU4Px+UaqNQ=\");\n_c = TodoApp;\n/* harmony default export */ __webpack_exports__[\"default\"] = (TodoApp);\nvar _c;\n$RefreshReg$(_c, \"TodoApp\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jb21wb25lbnRzL1RvZG9BcHAuanN4IiwibWFwcGluZ3MiOiI7Ozs7OztBQUNtRDtBQUNuRCxNQUFNRyxXQUFXO0FBRWpCLE1BQU1DLFVBQVU7O0lBQ2QsTUFBTSxDQUFDQyxPQUFPQyxTQUFTLEdBQUdKLCtDQUFRQSxDQUFDLEVBQUU7SUFDckMsTUFBTSxDQUFDSyxTQUFTQyxXQUFXLEdBQUdOLCtDQUFRQSxDQUFDO0lBQ3ZDLE1BQU0sQ0FBQ08sV0FBV0MsYUFBYSxHQUFHUiwrQ0FBUUEsQ0FBQyxDQUFDO0lBQzVDLE1BQU0sQ0FBQ1MsV0FBV0MsYUFBYSxHQUFHViwrQ0FBUUEsQ0FBQztJQUUzQyxpQ0FBaUM7SUFDakMsTUFBTVcsWUFBWTtRQUNoQixJQUFJO1lBQ0YsTUFBTUMsV0FBVyxNQUFNQyxNQUFNLEdBQVksT0FBVFosVUFBUztZQUN6QyxNQUFNYSxTQUFTLE1BQU1GLFNBQVNHLElBQUk7WUFDbkNDLFFBQVFDLEdBQUcsQ0FBQ0g7WUFDWFYsU0FBU1U7UUFDWCxFQUFFLE9BQU9JLE9BQU87WUFDZEYsUUFBUUUsS0FBSyxDQUFDLHdCQUF3QkE7UUFDeEM7SUFDRjtJQUVBLG1DQUFtQztJQUNuQ25CLGdEQUFTQSxDQUFDO1FBQ05ZO0lBQ0osR0FBRyxFQUFFO0lBSUwsTUFBTVEsZ0JBQWdCO1FBRXBCSCxRQUFRQyxHQUFHLENBQUNaO1FBRVosSUFBR0EsUUFBUWUsSUFBSSxPQUFPLElBQUc7WUFDdkJDLE1BQU07WUFDTjtRQUNGO1FBRUEsSUFBSWhCLFFBQVFlLElBQUksT0FBTyxJQUFJO1lBQ3pCLElBQUk7Z0JBQ0YsTUFBTVIsV0FBVyxNQUFNQyxNQUFNLEdBQVksT0FBVFosVUFBUyxVQUFRO29CQUMvQ3FCLFFBQVE7b0JBQ1JDLFNBQVM7d0JBQ1AsZ0JBQWdCO29CQUNsQjtvQkFDQUMsTUFBTUMsS0FBS0MsU0FBUyxDQUFDO3dCQUFFQyxPQUFPdEI7b0JBQVE7Z0JBQ3hDO2dCQUNBLElBQUlPLFNBQVNnQixFQUFFLEVBQUU7Z0JBQ2YsNEVBQTRFO2dCQUM5RSxPQUFPO29CQUNMLHFEQUFxRDtvQkFDckRaLFFBQVFFLEtBQUssQ0FBQyxxQkFBcUJOLFNBQVNpQixVQUFVO2dCQUN4RDtZQUNGLEVBQUUsT0FBT1gsT0FBTztnQkFDZEYsUUFBUUUsS0FBSyxDQUFDLHlCQUF5QkE7WUFDekM7WUFDQVosV0FBVztRQUNiO1FBQ0FLO0lBQ0Y7SUFFQSxNQUFNbUIsbUJBQW1CLE9BQU9DO1FBQzlCLElBQUk7WUFDRixNQUFNbEIsTUFBTSxHQUFvQmtCLE9BQWpCOUIsVUFBUyxVQUFjLE9BQU44QixRQUFTO2dCQUN2Q1QsUUFBUTtZQUNWO1lBQ0RYO1FBQ0QsRUFBRSxPQUFPTyxPQUFPO1lBQ2RGLFFBQVFFLEtBQUssQ0FBQyx3QkFBd0JBO1FBQ3hDO0lBQ0Y7SUFFQSxNQUFNYyxpQkFBaUIsQ0FBQ0QsT0FBTUo7UUFDNUJuQixhQUFhdUI7UUFDYnJCLGFBQWFpQjtJQUNmO0lBRUEsTUFBTU0saUJBQWlCLE9BQU9GO1FBQzVCLElBQUk7WUFDRixNQUFNbEIsTUFBTSxHQUFvQmtCLE9BQWpCOUIsVUFBUyxVQUFjLE9BQU44QixRQUFTO2dCQUN2Q1QsUUFBUTtnQkFDUkMsU0FBUztvQkFDUCxnQkFBZ0I7Z0JBQ2xCO2dCQUNBQyxNQUFNQyxLQUFLQyxTQUFTLENBQUM7b0JBQUVDLE9BQU9sQjtnQkFBVTtZQUMxQztZQUNBLG1CQUFtQjtZQUNuQkU7UUFDRixFQUFFLE9BQU9PLE9BQU87WUFDZEYsUUFBUUUsS0FBSyxDQUFDLHdCQUF3QkE7UUFDeEM7UUFDQVYsYUFBYSxDQUFDO0lBQ2hCO0lBRUEscUJBQ0UsOERBQUMwQjtRQUFJQyxXQUFVOzswQkFDYiw4REFBQ0M7Z0JBQUdELFdBQVU7MEJBQTBCOzs7Ozs7MEJBQ3hDLDhEQUFDRDtnQkFBSUMsV0FBVTs7a0NBQ2IsOERBQUNFO3dCQUNDQyxNQUFLO3dCQUNMSCxXQUFVO3dCQUNWSSxhQUFZO3dCQUNaQyxPQUFPbkM7d0JBQ1BvQyxVQUFVLENBQUNDLElBQU1wQyxXQUFXb0MsRUFBRUMsTUFBTSxDQUFDSCxLQUFLOzs7Ozs7a0NBRTVDLDhEQUFDSTt3QkFDQ1QsV0FBVTt3QkFDVlUsU0FBUzFCO2tDQUNWOzs7Ozs7Ozs7Ozs7MEJBSUgsOERBQUMyQjtnQkFBR1gsV0FBVTswQkFDWGhDLE1BQU00QyxHQUFHLENBQUMsQ0FBQ0MsTUFBTWpCLHNCQUNoQiw4REFBQ2tCO3dCQUFlZCxXQUFVOzs0QkFDdkJhLEtBQUtFLEdBQUcsS0FBSzNDLDBCQUNaLDhEQUFDOEI7Z0NBQ0NDLE1BQUs7Z0NBQ0xILFdBQVU7Z0NBQ1ZLLE9BQU8vQjtnQ0FDUGdDLFVBQVUsQ0FBQ0MsSUFBTWhDLGFBQWFnQyxFQUFFQyxNQUFNLENBQUNILEtBQUs7Ozs7OzBEQUc5Qyw4REFBQ1c7MENBQU1ILEtBQUtyQixLQUFLOzs7Ozs7MENBRW5CLDhEQUFDTzs7b0NBQ0VjLEtBQUtFLEdBQUcsS0FBSzNDLDBCQUNaLDhEQUFDcUM7d0NBQ0NULFdBQVU7d0NBQ1ZVLFNBQVMsSUFBTVosZUFBZWUsS0FBS0UsR0FBRztrREFDdkM7Ozs7O2tFQUlELDhEQUFDTjt3Q0FDQ1QsV0FBVTt3Q0FDVlUsU0FBUyxJQUFNYixlQUFlZ0IsS0FBS0UsR0FBRyxFQUFFRixLQUFLckIsS0FBSztrREFDbkQ7Ozs7OztrREFJSCw4REFBQ2lCO3dDQUNDVCxXQUFVO3dDQUNWVSxTQUFTLElBQU1mLGlCQUFpQmtCLEtBQUtFLEdBQUc7a0RBQ3pDOzs7Ozs7Ozs7Ozs7O3VCQTlCSW5COzs7Ozs7Ozs7Ozs7Ozs7O0FBdUNuQjtHQXJKTTdCO0tBQUFBO0FBdUpOLCtEQUFlQSxPQUFPQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9jb21wb25lbnRzL1RvZG9BcHAuanN4PzE5ZjgiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XHJcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5jb25zdCBCQVNFX1VSTCA9IFwiaHR0cDovL2xvY2FsaG9zdDozMDAwXCI7XHJcblxyXG5jb25zdCBUb2RvQXBwID0gKCkgPT4ge1xyXG4gIGNvbnN0IFt0b2Rvcywgc2V0VG9kb3NdID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFtuZXdUb2RvLCBzZXROZXdUb2RvXSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBbZWRpdEluZGV4LCBzZXRFZGl0SW5kZXhdID0gdXNlU3RhdGUoLTEpO1xyXG4gIGNvbnN0IFtlZGl0VmFsdWUsIHNldEVkaXRWYWx1ZV0gPSB1c2VTdGF0ZSgnJyk7XHJcblxyXG4gIC8vIGZ1bmN0aW9uIGZvciB1cGRhdGluZyB0aGUgdG9kb1xyXG4gIGNvbnN0IGZldGNoRGF0YSA9IGFzeW5jICgpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYCR7QkFTRV9VUkx9L3RvZG9gKTtcclxuICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4gICAgIGNvbnNvbGUubG9nKHJlc3VsdCk7XHJcbiAgICAgIHNldFRvZG9zKHJlc3VsdCk7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBmZXRjaGluZyBkYXRhOicsIGVycm9yKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICAvLyByZW5kZXIgdGhlIHRvZG9zIGZyb20gdGhlIHNlcnZlclxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgIGZldGNoRGF0YSgpO1xyXG4gIH0sIFtdKTtcclxuXHJcblxyXG5cclxuICBjb25zdCBoYW5kbGVBZGRUb2RvID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgXHJcbiAgICBjb25zb2xlLmxvZyhuZXdUb2RvKTtcclxuICAgIFxyXG4gICAgaWYobmV3VG9kby50cmltKCkgPT09ICcnKXtcclxuICAgICAgYWxlcnQoJ1BsZWFzZSBlbnRlciBhIHRvZG8nKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChuZXdUb2RvLnRyaW0oKSAhPT0gJycpIHtcclxuICAgICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGAke0JBU0VfVVJMfS90b2RvYCwge1xyXG4gICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyB0aXRsZTogbmV3VG9kbyB9KSxcclxuICAgICAgICB9KTtcclxuICAgICAgICBpZiAocmVzcG9uc2Uub2spIHtcclxuICAgICAgICAgIC8vIE9wdGlvbmFsbHksIGhhbmRsZSBzdWNjZXNzZnVsIGluc2VydGlvbiwgc3VjaCBhcyB1cGRhdGluZyBjb21wb25lbnQgc3RhdGVcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgLy8gSGFuZGxlIHRoZSBjYXNlIHdoZXJlIGluc2VydGlvbiB3YXMgbm90IHN1Y2Nlc3NmdWxcclxuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0luc2VydGlvbiBmYWlsZWQ6JywgcmVzcG9uc2Uuc3RhdHVzVGV4dCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGluc2VydGluZyBkYXRhOicsIGVycm9yKTtcclxuICAgICAgfVxyXG4gICAgICBzZXROZXdUb2RvKCcnKTtcclxuICAgIH1cclxuICAgIGZldGNoRGF0YSgpO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgaGFuZGxlRGVsZXRlVG9kbyA9IGFzeW5jIChpbmRleCkgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgYXdhaXQgZmV0Y2goYCR7QkFTRV9VUkx9L3RvZG8vJHtpbmRleH1gLCB7XHJcbiAgICAgICAgbWV0aG9kOiAnREVMRVRFJyxcclxuICAgICAgfSk7XHJcbiAgICAgZmV0Y2hEYXRhKCk7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBkZWxldGluZyBkYXRhOicsIGVycm9yKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVFZGl0VG9kbyA9IChpbmRleCx0aXRsZSkgPT4ge1xyXG4gICAgc2V0RWRpdEluZGV4KGluZGV4KTtcclxuICAgIHNldEVkaXRWYWx1ZSh0aXRsZSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlU2F2ZUVkaXQgPSBhc3luYyAoaW5kZXgpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGF3YWl0IGZldGNoKGAke0JBU0VfVVJMfS90b2RvLyR7aW5kZXh9YCwge1xyXG4gICAgICAgIG1ldGhvZDogJ1BVVCcsIC8vIG9yICdQQVRDSCdcclxuICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyB0aXRsZTogZWRpdFZhbHVlIH0pLFxyXG4gICAgICB9KTtcclxuICAgICAgLy8gcmVmcmVzaCB0aGUgZGF0YVxyXG4gICAgICBmZXRjaERhdGEoKTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIHVwZGF0aW5nIGRhdGE6JywgZXJyb3IpO1xyXG4gICAgfVxyXG4gICAgc2V0RWRpdEluZGV4KC0xKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJtYXgtdy1tZCBteC1hdXRvIG10LTggcC00IGJnLWdyYXktMTAwIHJvdW5kZWQgc2hhZG93LW1kXCI+XHJcbiAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCBmb250LWJvbGQgbWItNFwiPlRvZG8gQXBwPC9oMT5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4XCI+XHJcbiAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJmbGV4LTEgYm9yZGVyIHJvdW5kZWQgcC0yIG1yLTJcIlxyXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciB0b2RvXCJcclxuICAgICAgICAgIHZhbHVlPXtuZXdUb2RvfVxyXG4gICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXROZXdUb2RvKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAvPlxyXG4gICAgICAgIDxidXR0b25cclxuICAgICAgICAgIGNsYXNzTmFtZT1cImJnLWJsdWUtNTAwIHRleHQtd2hpdGUgcHgtNCBweS0yIHJvdW5kZWRcIlxyXG4gICAgICAgICAgb25DbGljaz17aGFuZGxlQWRkVG9kb31cclxuICAgICAgICA+XHJcbiAgICAgICAgICBBZGRcclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDx1bCBjbGFzc05hbWU9XCJtdC00XCI+XHJcbiAgICAgICAge3RvZG9zLm1hcCgodG9kbywgaW5kZXgpID0+IChcclxuICAgICAgICAgIDxsaSBrZXk9e2luZGV4fSBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gcHktMlwiPlxyXG4gICAgICAgICAgICB7dG9kby5faWQgPT09IGVkaXRJbmRleCA/IChcclxuICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZsZXgtMSBib3JkZXIgcm91bmRlZCBwLTEgbXItMlwiXHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17ZWRpdFZhbHVlfVxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRFZGl0VmFsdWUoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgPHNwYW4+e3RvZG8udGl0bGV9PC9zcGFuPlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgIHt0b2RvLl9pZCA9PT0gZWRpdEluZGV4ID8gKFxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LWdyZWVuLTUwMCBtci0yXCJcclxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlU2F2ZUVkaXQodG9kby5faWQpfVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICBTYXZlXHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LWJsdWUtNTAwIG1yLTJcIlxyXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVFZGl0VG9kbyh0b2RvLl9pZCwgdG9kby50aXRsZSl9XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIEVkaXRcclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC1yZWQtNTAwXCJcclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZURlbGV0ZVRvZG8odG9kby5faWQpfVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIERlbGV0ZVxyXG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgKSl9XHJcbiAgICAgIDwvdWw+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgVG9kb0FwcDtcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJCQVNFX1VSTCIsIlRvZG9BcHAiLCJ0b2RvcyIsInNldFRvZG9zIiwibmV3VG9kbyIsInNldE5ld1RvZG8iLCJlZGl0SW5kZXgiLCJzZXRFZGl0SW5kZXgiLCJlZGl0VmFsdWUiLCJzZXRFZGl0VmFsdWUiLCJmZXRjaERhdGEiLCJyZXNwb25zZSIsImZldGNoIiwicmVzdWx0IiwianNvbiIsImNvbnNvbGUiLCJsb2ciLCJlcnJvciIsImhhbmRsZUFkZFRvZG8iLCJ0cmltIiwiYWxlcnQiLCJtZXRob2QiLCJoZWFkZXJzIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJ0aXRsZSIsIm9rIiwic3RhdHVzVGV4dCIsImhhbmRsZURlbGV0ZVRvZG8iLCJpbmRleCIsImhhbmRsZUVkaXRUb2RvIiwiaGFuZGxlU2F2ZUVkaXQiLCJkaXYiLCJjbGFzc05hbWUiLCJoMSIsImlucHV0IiwidHlwZSIsInBsYWNlaG9sZGVyIiwidmFsdWUiLCJvbkNoYW5nZSIsImUiLCJ0YXJnZXQiLCJidXR0b24iLCJvbkNsaWNrIiwidWwiLCJtYXAiLCJ0b2RvIiwibGkiLCJfaWQiLCJzcGFuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/components/TodoApp.jsx\n"));

/***/ })

});