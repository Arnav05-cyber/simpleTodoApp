import { useEffect, useState } from "react";
import { UpdateTodo } from "./UpdateTodo";

function Todos() {
  const [todos, setTodos] = useState([]);

  function fetchTodos() {
    fetch("http://localhost:3000/todos")
      .then(function (res) {
        return res.json();
      })
      .then(function (data) {
        setTodos(data.todos);
      })
      .catch(function (err) {
        console.error("Error fetching todos:", err);
      });
  }

  useEffect(fetchTodos, []); // ✅ Fetch todos on component mount

  return (
    <div>
      <h1>Todo List</h1>
      {todos.length === 0 ? (
        <p>No todos available</p>
      ) : (
        todos.map(function (todo) {
          return (
            <div key={todo._id} style={{ border: "1px solid gray", padding: 10, margin: 10 }}>
              <h2>{todo.title}</h2>
              <p>{todo.description}</p>
              <p>Status: {todo.completed ? "✅ Completed" : "❌ Not Done"}</p>
              <UpdateTodo id={todo._id} onUpdate={fetchTodos} /> {/* ✅ Pass fetchTodos to refresh */}
            </div>
          );
        })
      )}
    </div>
  );
}

export { Todos };
