import TodoList from "./TodoList";

const DoingArea = () => {
  return (
    <div className="doing-area">
      <p className="area-title">進行中</p>
      <TodoList states="doing" />
    </div>
  );
};

export default DoingArea;
