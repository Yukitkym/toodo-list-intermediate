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
  } = useContext(TodosContext);

  const todoStates = (states: any) => {
    switch (states) {
      case "yet":
        return "未着手";
      case "doing":
        return "進行中";
      case "done":
        return "完了";
      default:
        return "未着手";
    }
  };

  const taskStatesArr: any = [
    { title: "未着手", states: "yet" },
    { title: "進行中", states: "doing" },
    { title: "完了", states: "done" },
  ];

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
                  >
                    {taskStatesArr.map((taskStates: any) => {
                      if (todo.states === taskStates.states) {
                        return (
                          <option value={taskStates.states} selected>
                            {taskStates.title}
                          </option>
                        );
                      } else {
                        return (
                          <option
                            value={taskStates.states}
                          >{`${taskStates.title}に変更`}</option>
                        );
                      }
                    })}
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
                  <p>{todoStates(todo.states)}</p>
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
                  >
                    {taskStatesArr.map((taskStates: any) => {
                      if (todo.states === taskStates.states) {
                        return (
                          <option value={taskStates.states} selected>
                            {taskStates.title}
                          </option>
                        );
                      } else {
                        return (
                          <option
                            value={taskStates.states}
                          >{`${taskStates.title}に変更`}</option>
                        );
                      }
                    })}
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
                  <p>{todoStates(todo.states)}</p>
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
