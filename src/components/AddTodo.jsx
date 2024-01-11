import { MdOutlineAddCircleOutline } from "react-icons/md";
import { useRef } from "react";
import { v4 } from "uuid";
import { useContext } from "react";
import { TodoItemsContext } from "../store/todoItemsStore";

const AddTodo = () => {
  const { addItems } = useContext(TodoItemsContext);
  const input = useRef("");
  const date = useRef("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const item = {
      id: v4(),
      name: input.current.value,
      dueDate: date.current.value,
    };
    addItems(item);
    input.current.value = "";
    date.current.value = "";
  };

  return (
    <div className="container text-center">
      <form className="row kg-row" onSubmit={(event) => handleSubmit(event)}>
        <div className="col-6">
          <input ref={input} type="text" placeholder="Add Note...."></input>
        </div>
        <div className="col-4">
          <input ref={date} type="date"></input>
        </div>
        <button className="col-2 btn btn-success kg-button">
          Add <MdOutlineAddCircleOutline />
        </button>
      </form>
    </div>
  );
};

export default AddTodo;
