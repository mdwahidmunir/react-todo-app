const TodoItem1 = ({ name, dueDate, id, onDeleteItem: handleRemoveItem }) => {
  return (
    <div className="container">
      <div className="row kg-row">
        <div className="col-6">{name}</div>
        <div className="col-4">{dueDate}</div>
        <div
          className="col-2 btn btn-danger kg-button"
          onClick={() => handleRemoveItem(name)}
        >
          Remove
        </div>
      </div>
    </div>
  );
};

export default TodoItem1;
