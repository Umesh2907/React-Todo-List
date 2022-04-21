import "./App.css";

const Todo = ({
  todos,
  completeTodo,
  removeTodo,
  editTodo,
  editId,
  handleEditChange,
  inputValue,
  setInputValue,
}) => {
  return todos.map((todo) => (
    <div className="todo-row">
      {editId === todo.id ? (
        <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)}/>
      ) : (
        <div key={todo.id} className={todo.isComplete ? "complete" : ""} onClick={() => completeTodo(todo.id)}>
          {todo.text}
        </div>
      )}
      {editId === todo.id ? (
        <button onClick={() => editTodo(todo.id, inputValue)}>Update todo</button>
      ) : (
        <>
          <button onClick={() => removeTodo(todo.id)}>Delete</button>
          <button onClick={() => handleEditChange(todo.id, todo.text)}>Update</button>
        </>
      )}
    </div>
  ));
};

export default Todo;