import { MdDelete } from "react-icons/md";

const TodoItem = ({ uid, name, dueDate, onDeleteItem: handleRemoveItem }) => {
  return (
    <div className="container">
      <div className="row kg-row">
        <div className="col-6">{name}</div>
        <div className="col-4">{dueDate}</div>
        <div
          className="col-2 btn btn-danger kg-button"
          onClick={() => handleRemoveItem(uid)}
        >
          Remove <MdDelete />
        </div>
      </div>
    </div>
  );
};

export default TodoItem;
