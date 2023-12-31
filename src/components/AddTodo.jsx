const AddTodo = () => {
  return (
    <div className="container text-center">
      <div className="row kg-row">
        <div className="col-6">
          <input type="text" placeholder="Add Note...."></input>
        </div>
        <div className="col-4">
          <input type="date"></input>
        </div>
        <div className="col-2 btn btn-success kg-button">Add</div>
      </div>
    </div>
  );
};

export default AddTodo;
