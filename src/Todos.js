import { useState } from 'react';

export default function Todos() {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState('');

  return (
    <>
      <label>Todo Name</label>
      <input
        type='text'
        value={todo}
        onChange={(event) => {
          setTodo(event.target.value);
        }}
      />
      <button
        onClick={() => {
          const newTodos = todos.concat(todo);
          setTodos(newTodos);
        }}
      >
        Add Todo
      </button>

      <div>
        {todos.map((todo) => (
          <h1>{todo}</h1>
        ))}
      </div>
    </>
  );
}
