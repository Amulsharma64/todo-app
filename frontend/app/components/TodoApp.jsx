"use client";
import React, { useEffect, useState } from 'react';
const BASE_URL = "http://localhost:3000";

const TodoApp = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');
  const [editIndex, setEditIndex] = useState(-1);
  const [editValue, setEditValue] = useState('');

  // function for updating the todo
  const fetchData = async () => {
    try {
      const response = await fetch(`${BASE_URL}/todo`);
      const result = await response.json();
     console.log(result);
      setTodos(result);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  // render the todos from the server
  useEffect(() => {
      fetchData();
  }, []);



  const handleAddTodo = async () => {
    
    console.log(newTodo);
    
    if(newTodo.trim() === ''){
      alert('Please enter a todo');
      return;
    }

    if (newTodo.trim() !== '') {
      try {
        const response = await fetch(`${BASE_URL}/todo`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ title: newTodo }),
        });
        if (response.ok) {
          // Optionally, handle successful insertion, such as updating component state
        } else {
          // Handle the case where insertion was not successful
          console.error('Insertion failed:', response.statusText);
        }
      } catch (error) {
        console.error('Error inserting data:', error);
      }
      setNewTodo('');
    }
    fetchData();
  }

  const handleDeleteTodo = async (index) => {
    try {
      await fetch(`${BASE_URL}/todo/${index}`, {
        method: 'DELETE',
      });
     fetchData();
    } catch (error) {
      console.error('Error deleting data:', error);
    }
  };

  const handleEditTodo = (index,title) => {
    setEditIndex(index);
    setEditValue(title);
  };

  const handleSaveEdit = async (index) => {
    try {
      await fetch(`${BASE_URL}/todo/${index}`, {
        method: 'PUT', // or 'PATCH'
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ title: editValue }),
      });
      // refresh the data
      fetchData();
    } catch (error) {
      console.error('Error updating data:', error);
    }
    setEditIndex(-1);
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-4 bg-gray-100 rounded shadow-md">
      <h1 className="text-2xl font-bold mb-4">Todo App</h1>
      <div className="flex">
        <input
          type="text"
          className="flex-1 border rounded p-2 mr-2"
          placeholder="Enter todo"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
        />
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded"
          onClick={handleAddTodo}
        >
          Add
        </button>
      </div>
      <ul className="mt-4">
        {todos.map((todo, index) => (
          <li key={index} className="flex items-center justify-between py-2">
            {todo._id === editIndex ? (
              <input
                type="text"
                className="flex-1 border rounded p-1 mr-2"
                value={editValue}
                onChange={(e) => setEditValue(e.target.value)}
              />
            ) : (
              <span>{todo.title}</span>
            )}
            <div>
              {todo._id === editIndex ? (
                <button
                  className="text-green-500 mr-2"
                  onClick={() => handleSaveEdit(todo._id)}
                >
                  Save
                </button>
              ) : (
                <button
                  className="text-blue-500 mr-2"
                  onClick={() => handleEditTodo(todo._id, todo.title)}
                >
                  Edit
                </button>
              )}
              <button
                className="text-red-500"
                onClick={() => handleDeleteTodo(todo._id)}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoApp;
