const TodoItem1 = ({ uid, name, dueDate, onDeleteItem: handleRemoveItem }) => {
  return (
    <div className="container">
      <div className="row kg-row">
        <div className="col-6">{name}</div>
        <div className="col-4">{dueDate}</div>
        <div
          className="col-2 btn btn-danger kg-button"
          onClick={() => handleRemoveItem(uid)}
        >
          Remove
        </div>
      </div>
    </div>
  );
};

export default TodoItem1;
