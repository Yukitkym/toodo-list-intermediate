import TodoList from "./TodoList";

const YetArea = () => {
  return (
    <div className="yet-area">
      <p className="area-title">未着手</p>
      <TodoList states="yet" />
    </div>
  );
};

export default YetArea;
