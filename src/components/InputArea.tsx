import { useContext } from "react";

import { TodosContext } from "../contexts/TodosContext";

const InputArea = () => {
  const { todo, setTodo, todos, setTodos } = useContext(TodosContext);
  const changeInput = (e: any) => {
    setTodo(e.target.value);
  };
  const createTask = () => {
    setTodos([
      ...todos,
      {
        id: new Date(),
        text: todo.trim(),
        states: "yet",
        deadline: "",
      },
    ]);
    setTodo("");
  };
  return (
    <div className="input-area">
      <h1>Todo List</h1>
      <div className="create-area">
        <p className="input-title">新規タスク</p>
        <input
          name="todo"
          type="text"
          placeholder="Create new todo"
          value={todo}
          onChange={changeInput}
        />
        <button onClick={createTask}>作成</button>
      </div>
    </div>
  );
};

export default InputArea;
