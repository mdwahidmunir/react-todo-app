import TodoItem from "./TodoItem";
import { v4 } from "uuid";

const TodoItems = ({ items, onDeleteItem }) => {
  return (
    <div className="items-container">
      {items.map((item) => {
        const uuid = v4();
        return (
          <TodoItem
            key={uuid}
            id={uuid}
            name={item.name}
            dueDate={item.dueDate}
            onDeleteItem={onDeleteItem}
          />
        );
      })}
    </div>
  );
};

export default TodoItems;
