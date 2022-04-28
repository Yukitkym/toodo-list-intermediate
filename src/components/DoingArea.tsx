import { useContext } from "react";

import { TodosContext } from "../App";

const DoingArea = () => {
  const { todos, clickChange, clickDelete } = useContext(TodosContext);
  return (
    <div className="doing-area">
      <p className="area-title">進行中</p>
      <ul>
        {todos.map((todo: any, index: number) => {
          if (todo.states === "doing") {
            return (
              <li key={todo.id}>
                <p>ID:{index}</p>
                <p>{todo.text}</p>
                <select>
                  <option value="yet">未着手</option>
                  <option value="doing" selected>
                    進行中
                  </option>
                  <option value="done">完了</option>
                </select>
                <button className="change-btn" onClick={clickChange}>
                  変更
                </button>
                <button className="delete-btn" onClick={clickDelete}>
                  削除
                </button>
              </li>
            );
          }
        })}
      </ul>
    </div>
  );
};

export default DoingArea;
