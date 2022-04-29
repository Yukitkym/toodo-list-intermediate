import { useContext } from "react";

import { TodosContext } from "../App";

const DoneArea = () => {
  const {
    todos,
    editFlag,
    clickChange,
    clickDelete,
    clickEdit,
    clickDone,
    changeTodoText,
  } = useContext(TodosContext);
  return (
    <div className="done-area">
      <p className="area-title">完了</p>
      <ul>
        {todos.map((todo: any, index: number) => {
          if (todo.states === "done") {
            return (
              <li key={todo.id}>
                {editFlag ? (
                  <div className="editing">
                    <p>ID:{index}</p>
                    <input
                      name="todo-text"
                      id={todo.id.toString()}
                      type="text"
                      placeholder="Change todo's text"
                      value={todo.text}
                      onChange={changeTodoText}
                    />
                    <button className="edit-btn" onClick={clickDone}>
                      完了
                    </button>
                  </div>
                ) : (
                  <div className="not-editing">
                    <p>ID:{index}</p>
                    <p>{todo.text}</p>
                    <button className="edit-btn" onClick={clickEdit}>
                      編集
                    </button>
                    <select>
                      <option value="yet">未着手</option>
                      <option value="doing">進行中</option>
                      <option value="done" selected>
                        完了
                      </option>
                    </select>
                    <button className="change-btn" onClick={clickChange}>
                      変更
                    </button>
                    <button className="delete-btn" onClick={clickDelete}>
                      削除
                    </button>
                  </div>
                )}
              </li>
            );
          }
        })}
      </ul>
    </div>
  );
};

export default DoneArea;
