import { MdDelete } from "react-icons/md";
import { useContext } from "react";
import { TodoItemsContext } from "../store/todoItemsStore";

const TodoItem = ({ uid, name, dueDate }) => {
  const { deleteItems } = useContext(TodoItemsContext);
  return (
    <div className="container">
      <div className="row kg-row">
        <div className="col-6">{name}</div>
        <div className="col-4">{dueDate}</div>
        <div
          className="col-2 btn btn-danger kg-button"
          onClick={() => deleteItems(uid)}
        >
          Remove <MdDelete />
        </div>
      </div>
    </div>
  );
};

export default TodoItem;
