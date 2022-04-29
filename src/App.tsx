import "./App.css";
import DoingArea from "./components/DoingArea";
import DoneArea from "./components/DoneArea";
import InputArea from "./components/InputArea";
import YetArea from "./components/YetArea";
import TodosContextProvider from "./contexts/TodosContext";

export function App() {
  return (
    <>
      <TodosContextProvider>
        <InputArea />
        <YetArea />
        <DoingArea />
        <DoneArea />
      </TodosContextProvider>
    </>
  );
}
