import React, { useState } from 'react'
import { CreateTodo } from './components/CreateTodo';
import './App.css'
import { Todos } from './components/Todos';

function App() {
  const [todos, setTodos] = useState([]);

  fetch("http://localhost:3000/todos").then(async function (req, res) {
    const json = await res.json();
    setTodos(json.todos);
  })

  return (
    <div>
      <CreateTodo />
      <Todos todos={todos} />
    </div>
  )
}

export default App