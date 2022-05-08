import { useContext } from "react";

import { TodosContext } from "../contexts/TodosContext";
import TodoList from "./TodoList";

const StatesArea = () => {
  const { sort } = useContext(TodosContext);
  const areaTitle = (states: any) => {
    switch (states) {
      case "all":
        return "全てのタスク";
      case "yet":
        return "未着手タスク";
      case "doing":
        return "進行中タスク";
      case "done":
        return "完了タスク";
      default:
        return "全てのタスク";
    }
  };
  return (
    <div className={`${sort}-area`}>
      <p className="area-title">{areaTitle(sort)}</p>
      <TodoList states={sort} />
    </div>
  );
};

export default StatesArea;
