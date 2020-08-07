import React, { useState } from "react";
//import { todos, setTodos } from "./TodoList";

function App() {
  const [todos, setTodos] = useState([
    { name: "charles", id: "5", sex: "male" },
  ]);

  const Todo = ({ todo }) => <h1 className="todo">{todo.name}</h1>;
  //const Todo in return () -> todos gets mapped to "todo, index" -> Todo gets called
  //<Todo .... So the parameters from todos.map() are being loaded into todo as well as the index
  return (
    <div className="app">
      <div className="todo-list">
        {todos.map((todo, index) => (
          <Todo key={index} index={index} todo={todo} />
        ))}
      </div>
    </div>
  );
}

export default App;
