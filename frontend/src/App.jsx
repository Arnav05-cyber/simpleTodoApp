

import './App.css'
import { CreateTodo } from './components/CreateTodo'
import { Todos } from './components/Todos'
import { useState } from 'react';


function App() {
  const [todos, setTodos] = useState(0);

  fetch("http://localhost:3000/todo")
  .then(async (res)=>{
    const json = await res.json();
    setTodos(json.todos);
  })

  return (
      <div>
        <CreateTodo />
        <Todos> todos = {todos}</Todos>
      </div>
  )
}

export default App
