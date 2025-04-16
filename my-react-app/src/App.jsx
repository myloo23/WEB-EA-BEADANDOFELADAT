// App.jsx
import React, { useState } from 'react';
import Calculator from './Calculator';
import TodoList from './TodoList';

function App() {
  const [page, setPage] = useState('calculator');

  return (
    <div className="p-4 font-sans">
      <nav className="mb-4 flex gap-4">
        <button onClick={() => setPage('calculator')} className="bg-blue-200 px-4 py-2 rounded hover:bg-blue-300">
          Számológép
        </button>
        <button onClick={() => setPage('todo')} className="bg-purple-200 px-4 py-2 rounded hover:bg-purple-300">
          Teendők
        </button>
      </nav>
      {page === 'calculator' ? <Calculator /> : <TodoList />}
    </div>
  );
}

export default App;