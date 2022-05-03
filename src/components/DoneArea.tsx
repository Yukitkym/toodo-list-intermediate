import { useContext } from "react";

import { TodosContext } from "../contexts/TodosContext";
import TodoList from "./TodoList";

const DoneArea = () => {
  const { sort } = useContext(TodosContext);

  if (sort === "done") {
    return (
      <div className="done-area">
        <p className="area-title">完了タスク</p>
        <TodoList states="done" />
      </div>
    );
  } else {
    return <></>;
  }
};

export default DoneArea;
