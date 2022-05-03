import { useContext } from "react";

import { TodosContext } from "../contexts/TodosContext";
import TodoList from "./TodoList";

const DoingArea = () => {
  const { sort } = useContext(TodosContext);

  if (sort === "doing") {
    return (
      <div className="doing-area">
        <p className="area-title">進行中タスク</p>
        <TodoList states="doing" />
      </div>
    );
  } else {
    return <></>;
  }
};

export default DoingArea;
