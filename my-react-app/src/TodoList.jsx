import React, { useState } from 'react';

function TodoList() {
  const [input, setInput] = useState('');
  const [todos, setTodos] = useState([]);

  const addTodo = () => {
    if (input.trim()) {
      setTodos([...todos, input]);
      setInput('');
    }
  };

  const removeTodo = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  return (
    <div className="p-4">
      <h2 className="text-xl mb-2">Teendők</h2>
      <input
        className="border p-2 mb-2 w-full"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Új teendő..."
      />
      <button onClick={addTodo} className="bg-green-200 px-4 py-2 rounded hover:bg-green-300 mb-4">
        Hozzáadás
      </button>
      <ul className="list-disc pl-5">
        {todos.map((todo, index) => (
          <li
            key={index}
            onClick={() => removeTodo(index)}
            className="cursor-pointer hover:line-through"
          >
            {todo}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;