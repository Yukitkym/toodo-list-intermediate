import React from "react";
import { useState } from "react";

import "./App.css";
import DoingArea from "./components/DoingArea";
import DoneArea from "./components/DoneArea";
import InputArea from "./components/InputArea";
import YetArea from "./components/YetArea";

export const TodosContext: any = React.createContext("");

export function App() {
  const [todo, setTodo]: Array<any> = useState("");
  const [todos, setTodos]: Array<any> = useState([]);
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
      <TodosContext.Provider
        value={{ todo, setTodo, todos, setTodos, clickChange, clickDelete }}
      >
        <InputArea />
        <YetArea />
        <DoingArea />
        <DoneArea />
      </TodosContext.Provider>
    </>
  );
}
