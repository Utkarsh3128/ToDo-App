export default function Todo({ todo, dispatch }) {
  const handleToggle = () => {
    dispatch({ type: "TOGGLE_TODO", payload: { id: todo.id } });
  };

  const handleDelete = () => {
    dispatch({ type: "DELETE_TODO", payload: { id: todo.id } });
  };

  return (
    <>
      <div>
        <span
          style={{
            color: todo.complete ? "red" : "white",
            backgroundColor: todo.complete ? "white" : "red",
          }}
          className="text"
        >
          {todo.name}
        </span>
        <button onClick={handleToggle}>Toggle</button>
        <button onClick={handleDelete}>Delete</button>
      </div>
    </>
  );
}
