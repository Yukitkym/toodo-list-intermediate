import TodoList from "./TodoList";

const DoneArea = () => {
  return (
    <div className="done-area">
      <p className="area-title">完了</p>
      <TodoList states="done" />
    </div>
  );
};

export default DoneArea;
