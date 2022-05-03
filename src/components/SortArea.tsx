import { useContext } from "react";

import { TodosContext } from "../contexts/TodosContext";

const SortArea = () => {
  const { sort, changeTodosSort } = useContext(TodosContext);
  return (
    <div className="sort-area">
      <select name="todos-sort" value={sort} onChange={changeTodosSort}>
        <option value="all">全てのタスクを表示</option>
        <option value="yet">未着手のみ表示</option>
        <option value="doing">進行中のみ表示</option>
        <option value="done">完了のみ表示</option>
      </select>
    </div>
  );
};

export default SortArea;
