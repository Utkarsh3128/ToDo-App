import { useReducer, useState } from "react";
import "./App.css";
import Todo from "./Components/Todo";

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return [...state, newTodo(action.payload.name)];
    case "TOGGLE_TODO":
      return state.map((todo) => {
        if (todo.id === action.payload.id) {
          return { ...todo, complete: !todo.complete };
        }
        return todo;
      });
    case "DELETE_TODO":
      return state.filter((todo) => todo.id !== action.payload.id);
  }
};

const newTodo = (name) => {
  return {
    id: Date.now(),
    name: name,
    complete: false,
  };
};

function App() {
  const [todos, dispatch] = useReducer(reducer, []);
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: "ADD_TODO", payload: { name: name } });
    setName("");
  };

  // console.log(todos);

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter your todo here"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="input"
        ></input>
      </form>

      {todos.map((todo) => {
        return <Todo key={todos.id} todo={todo} dispatch={dispatch} />;
      })}
    </>
  );
}

export default App;
