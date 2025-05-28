
import React, { useState, useCallback } from 'react';

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');
  const [error, setError] = useState('');

  const addTodo = useCallback(
    (e) => {
      e.preventDefault();
      if (newTodo.trim()) {
        setTodos((prevTodos) => [
          ...prevTodos,
          {
            id: Date.now() + newTodo.trim(),
            text: newTodo.trim(),
            completed: false,
          },
        ]);
        setNewTodo('');
        setError('');
      } else {
        setError('Cannot add an empty todo');
      }
    },
    [newTodo]
  );

  const toggleTodo = useCallback((id) => {
    setTodos((prevTodos) => prevTodos.map((todo) => (todo.id === id ? { ...todo, completed: !todo.completed } : todo)));
  }, []);

  const removeTodo = useCallback((id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  }, []);

  return (
    <div style={{ margin: '0 20px' }}>
      <h1>Todo List</h1>
      <form
        onSubmit={addTodo}
        aria-label='Add New Todo'
        data-testid='todo-form'
        style={{
          display: 'flex',
          gap: '10px',
          marginBottom: '10px',
        }}
      >
        <label htmlFor='new-todo'>New Todo</label>
        <input
          id='new-todo'
          type='text'
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder='Enter a new todo'
          data-testid='new-todo-input'
        />
        <button type='submit' data-testid='add-todo-button' >
          Add Todo
        </button>
      </form>
      {error && (
        <p role='alert' data-testid='error-message'>
          {error}
        </p>
      )}
      <ul data-testid='todo-list'>
        {todos.map((todo) => (
          <li
            key={todo.id}
            style={{
              display: 'flex',
              gap: '10px',
              marginBottom: '10px',
            }}
          >
            <input
              type='checkbox'
              checked={todo.completed}
              onChange={() => toggleTodo(todo.id)}
              data-testid={`todo-item-${todo.id}-checkbox`}
            />
            <span
              style={{
                textDecoration: todo.completed ? 'line-through' : 'none',
              }}
              data-testid={`todo-item-${todo.id}-text`}
            >
              {todo.text}
            </span>
            <button
              onClick={() => removeTodo(todo.id)}
              aria-label={`Remove ${todo.text}`}
              data-testid={`todo-item-${todo.id}-remove-button`}
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;