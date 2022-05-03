import { useContext } from "react";

import { TodosContext } from "../contexts/TodosContext";
import TodoList from "./TodoList";

const AllTodosArea = () => {
  const { sort } = useContext(TodosContext);

  if (sort === "all") {
    return (
      <div className="all-area">
        <p className="area-title">タスク</p>
        <TodoList states="all" />
      </div>
    );
  } else {
    return <></>;
  }
};

export default AllTodosArea;
