import TodoItem from "./TodoItem";
import { useContext } from "react";
import { TodoItemsContext } from "../store/todoItemsStore";

const TodoItems = () => {
  const { todoItems } = useContext(TodoItemsContext);
  return (
    <div className="items-container">
      {todoItems.map((item) => {
        return (
          <TodoItem
            key={item.id}
            uid={item.id}
            name={item.name}
            dueDate={item.dueDate}
          />
        );
      })}
    </div>
  );
};

export default TodoItems;
