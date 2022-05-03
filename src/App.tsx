import "./App.css";
import AllTodosArea from "./components/AllTodosArea";
import DoingArea from "./components/DoingArea";
import DoneArea from "./components/DoneArea";
import InputArea from "./components/InputArea";
import SortArea from "./components/SortArea";
import YetArea from "./components/YetArea";
import TodosContextProvider from "./contexts/TodosContext";

export function App() {
  return (
    <>
      <TodosContextProvider>
        <InputArea />
        <SortArea />
        <AllTodosArea />
        <YetArea />
        <DoingArea />
        <DoneArea />
      </TodosContextProvider>
    </>
  );
}
