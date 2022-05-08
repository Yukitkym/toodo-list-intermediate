import { useContext } from "react";

import { TodosContext } from "../contexts/TodosContext";

const SortArea = () => {
  const { sort, changeTodosSort } = useContext(TodosContext);
  const taskStatesArr: any = [
    { title: "全てのタスク", states: "all" },
    { title: "未着手タスク", states: "yet" },
    { title: "進行中タスク", states: "doing" },
    { title: "完了タスク", states: "done" },
  ];

  return (
    <div className="sort-area">
      <select name="todos-sort" value={sort} onChange={changeTodosSort}>
        {taskStatesArr.map((taskStates: any) => (
          <option
            value={taskStates.states}
          >{`${taskStates.title}を表示`}</option>
        ))}
      </select>
    </div>
  );
};

export default SortArea;
