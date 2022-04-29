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
  const [editFlag, setEditFlag]: Array<any> = useState(false);
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
  const clickEdit = (e: any) => {
    setEditFlag(true);
  };
  const clickDone = (e: any) => {
    setEditFlag(false);
  };
  const changeTodoText = (e: any) => {
    const indexToChange: number = todos.findIndex(
      ({ id }: any) => id.toString() === e.target.id
    );
    let todosAfterChange = [];

    for (let i = 0; i < todos.length; i++) {
      i === indexToChange
        ? todosAfterChange.push({
            id: todos[i].id,
            text: e.target.value,
            states: todos[i].states,
            deadline: todos[i].deadline,
          })
        : todosAfterChange.push(todos[i]);
    }
    setTodos(todosAfterChange);
  };
  const changeTodoDeadline = (e: any) => {
    const indexToChange: number = todos.findIndex(
      ({ id }: any) => "deadline-" + id.toString() === e.target.id
    );
    let todosAfterChange = [];

    for (let i = 0; i < todos.length; i++) {
      i === indexToChange
        ? todosAfterChange.push({
            id: todos[i].id,
            text: todos[i].text,
            states: todos[i].states,
            deadline: e.target.value,
          })
        : todosAfterChange.push(todos[i]);
    }
    setTodos(todosAfterChange);
  };

  return (
    <>
      <TodosContext.Provider
        value={{
          todo,
          setTodo,
          todos,
          setTodos,
          editFlag,
          setEditFlag,
          clickChange,
          clickDelete,
          clickEdit,
          clickDone,
          changeTodoText,
          changeTodoDeadline,
        }}
      >
        <InputArea />
        <YetArea />
        <DoingArea />
        <DoneArea />
      </TodosContext.Provider>
    </>
  );
}
