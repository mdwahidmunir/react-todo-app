import { useContext } from "react";
import { TodoItemsContext } from "../store/todoItemsStore";

const Welcome = ({ className }) => {
  const { todoItems } = useContext(TodoItemsContext);

  return (
    <>
      {todoItems.length === 0 && (
        <p className={className}>Welcome to the todo App ! Enjoy your Notes</p>
      )}
    </>
  );
};

export default Welcome;
