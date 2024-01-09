import { MdOutlineAddCircleOutline } from "react-icons/md";
import { useState } from "react";
import { v4 } from "uuid";

const AddTodo = ({ onAddItem: handleAddItem }) => {
  const [input, setInput] = useState("");
  const [date, setDate] = useState("");

  const handleInputChange = (event) => {
    const newInput = event.target.value;
    setInput(newInput);
  };

  const handleDateChange = (event) => {
    const newDate = event.target.value;
    setDate(newDate);
  };

  const handleAddButtonClick = () => {
    const item = {
      id: v4(),
      name: input,
      dueDate: date,
    };
    handleAddItem(item);
    setInput("");
    setDate("");
  };

  return (
    <div className="container text-center">
      <div className="row kg-row">
        <div className="col-6">
          <input
            type="text"
            placeholder="Add Note...."
            value={input}
            onChange={(event) => handleInputChange(event)}
          ></input>
        </div>
        <div className="col-4">
          <input
            type="date"
            value={date}
            onChange={(event) => handleDateChange(event)}
          ></input>
        </div>
        <div
          className="col-2 btn btn-success kg-button"
          onClick={handleAddButtonClick}
        >
          Add <MdOutlineAddCircleOutline />
        </div>
      </div>
    </div>
  );
};

export default AddTodo;
