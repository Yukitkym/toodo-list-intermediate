import { useState } from "react";
import "./App.css";

function App() {
  const [todo, setTodo]: Array<any> = useState("");
  const [todos, setTodos]: Array<any> = useState([]);
  const changeInput = (e: any) => {
    setTodo(e.target.value);
  };
  const createTask = () => {
    setTodos([
      ...todos,
      {
        id: new Date(),
        text: todo.trim(),
        states: "yet",
      },
    ]);
    setTodo("");
  };
  const clickChange = (e: any) => {
    const id = Number(
      e.target.parentElement.firstElementChild.textContent.substr(3)
    );
    const states = e.target.previousElementSibling.value;
    const changeTodo = todos.map((todo: any, index: number) => {
      if (index === id) {
        todo.states = states;
      }
      return todo;
    });
    setTodos(changeTodo);
  };
  const clickDelete = (e: any) => {
    const id = Number(
      e.target.parentElement.firstElementChild.textContent.substr(3)
    );
    const removeTodo = todos.filter((todo: any, index: number) => index !== id);
    setTodos(removeTodo);
  };
  return (
    <>
      <div className="input-area">
        <h1>Todo List</h1>
        <div className="create-area">
          <p className="input-title">新規タスク</p>
          <input
            name="todo"
            type="text"
            placeholder="Create new todo"
            value={todo}
            onChange={changeInput}
          />
          <button onClick={createTask}>作成</button>
        </div>
      </div>
      <div className="yet-area">
        <p className="area-title">未着手</p>
        <ul>
          {todos.map((todo: any, index: number) => {
            if (todo.states === "yet") {
              return (
                <li key={todo.id}>
                  <p>ID:{index}</p>
                  <p>{todo.text}</p>
                  <select>
                    <option value="yet" selected>
                      未着手
                    </option>
                    <option value="doing">進行中</option>
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
      <div className="done-area">
        <p className="area-title">完了</p>
        <ul>
          {todos.map((todo: any, index: number) => {
            if (todo.states === "done") {
              return (
                <li key={todo.id}>
                  <p>ID:{index}</p>
                  <p>{todo.text}</p>
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
                </li>
              );
            }
          })}
        </ul>
      </div>
    </>
  );
}

export default App;
