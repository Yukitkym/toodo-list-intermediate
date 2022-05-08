import "./App.css";
import InputArea from "./components/InputArea";
import SortArea from "./components/SortArea";
import StatesArea from "./components/StatesArea";
import TodosContextProvider from "./contexts/TodosContext";

export function App() {
  return (
    <>
      <TodosContextProvider>
        <InputArea />
        <SortArea />
        <StatesArea />
      </TodosContextProvider>
    </>
  );
}
