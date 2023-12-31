import TodoItem from "./TodoItem";
import { v4 } from "uuid";

const TodoItems = ({ items }) => {
  return (
    <div className="items-container">
      {items.map((item) => (
        <TodoItem key={v4()} name={item.name} dueDate={item.dueDate} />
      ))}
    </div>
  );
};

export default TodoItems;
