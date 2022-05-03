import { useContext } from "react";

import { TodosContext } from "../contexts/TodosContext";

const TodoList = ({ states }: any) => {
  const {
    todos,
    editFlag,
    clickDelete,
    clickEdit,
    clickDone,
    changeTodoText,
    changeTodoDeadline,
    changeTodoStates,
  } = useContext(TodosContext);
  return (
    <ul>
      {todos.map((todo: any, index: number) => {
        if (todo.states === states) {
          return (
            <li key={todo.id}>
              {editFlag ? (
                <div className="editing">
                  <p>ID:{index}</p>
                  <select
                    name="todo-select"
                    id={`states-${todo.id.toString()}`}
                    value={todo.states}
                    onChange={changeTodoStates}
                  >
                    <option value="yet">未着手</option>
                    <option value="doing">進行中</option>
                    <option value="done">完了</option>
                  </select>
                  <input
                    name="todo-text"
                    id={todo.id.toString()}
                    type="text"
                    placeholder="Input todo's text"
                    value={todo.text}
                    onChange={changeTodoText}
                  />
                  <input
                    name="todo-deadline"
                    id={`deadline-${todo.id.toString()}`}
                    type="date"
                    placeholder="Input todo's deadline"
                    value={todo.deadline}
                    onChange={changeTodoDeadline}
                  />
                  <button className="edit-btn" onClick={clickDone}>
                    編集完了
                  </button>
                  <button className="delete-btn" onClick={clickDelete}>
                    削除
                  </button>
                </div>
              ) : (
                <div className="not-editing">
                  <p>ID:{index}</p>
                  <p>{todo.text}</p>
                  <p>{`締め切り:${todo.deadline || "なし"}`}</p>
                  <button className="edit-btn" onClick={clickEdit}>
                    編集
                  </button>
                  <button className="delete-btn" onClick={clickDelete}>
                    削除
                  </button>
                </div>
              )}
            </li>
          );
        } else if (states === "all") {
          return (
            <li key={todo.id}>
              {editFlag ? (
                <div className="editing">
                  <p>ID:{index}</p>
                  <select
                    name="todo-select"
                    id={`states-${todo.id.toString()}`}
                    value={todo.states}
                    onChange={changeTodoStates}
                  >
                    <option value="yet">未着手</option>
                    <option value="doing">進行中</option>
                    <option value="done">完了</option>
                  </select>
                  <input
                    name="todo-text"
                    id={todo.id.toString()}
                    type="text"
                    placeholder="Input todo's text"
                    value={todo.text}
                    onChange={changeTodoText}
                  />
                  <input
                    name="todo-deadline"
                    id={`deadline-${todo.id.toString()}`}
                    type="date"
                    placeholder="Input todo's deadline"
                    value={todo.deadline}
                    onChange={changeTodoDeadline}
                  />
                  <button className="edit-btn" onClick={clickDone}>
                    編集完了
                  </button>
                  <button className="delete-btn" onClick={clickDelete}>
                    削除
                  </button>
                </div>
              ) : (
                <div className="not-editing">
                  <p>ID:{index}</p>
                  <p>
                    {todo.states === "yet"
                      ? "未着手"
                      : todo.states === "doing"
                      ? "進行中"
                      : "完了"}
                  </p>
                  <p>{todo.text}</p>
                  <p>{`締め切り:${todo.deadline || "なし"}`}</p>
                  <button className="edit-btn" onClick={clickEdit}>
                    編集
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
  );
};

export default TodoList;
