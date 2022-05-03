import { useContext } from "react";

import { TodosContext } from "../contexts/TodosContext";
import TodoList from "./TodoList";

const YetArea = () => {
  const { sort } = useContext(TodosContext);

  if (sort === "yet") {
    return (
      <div className="yet-area">
        <p className="area-title">未着手タスク</p>
        <TodoList states="yet" />
      </div>
    );
  } else {
    return <></>;
  }
};

export default YetArea;
