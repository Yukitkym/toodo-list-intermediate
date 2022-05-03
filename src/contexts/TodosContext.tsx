import React, { useState } from "react";

export const TodosContext: any = React.createContext("");

const TodosContextProvider = (props: any) => {
  const [todo, setTodo]: Array<any> = useState("");
  const [todos, setTodos]: Array<any> = useState([]);
  const [editFlag, setEditFlag]: Array<any> = useState(false);
  const [sort, setSort]: Array<any> = useState("all");
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
  const changeTodoStates = (e: any) => {
    const indexToChange: number = todos.findIndex(
      ({ id }: any) => "states-" + id.toString() === e.target.id
    );
    let todosAfterChange = [];

    for (let i = 0; i < todos.length; i++) {
      i === indexToChange
        ? todosAfterChange.push({
            id: todos[i].id,
            text: todos[i].text,
            states: e.target.value,
            deadline: todos[i].deadline,
          })
        : todosAfterChange.push(todos[i]);
    }
    setTodos(todosAfterChange);
  };
  const changeTodosSort = (e: any) => {
    setSort(e.target.value);
  };
  return (
    <TodosContext.Provider
      value={{
        todo,
        setTodo,
        todos,
        setTodos,
        editFlag,
        setEditFlag,
        sort,
        setSort,
        clickDelete,
        clickEdit,
        clickDone,
        changeTodoText,
        changeTodoDeadline,
        changeTodoStates,
        changeTodosSort,
      }}
    >
      {props.children}
    </TodosContext.Provider>
  );
};

export default TodosContextProvider;
