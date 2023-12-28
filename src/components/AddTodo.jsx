const AddTodo = () => {
  return (
    <div class="container text-center">
      <div class="row kg-row">
        <div class="col-6">
          <input type="text" placeholder="Add Note...."></input>
        </div>
        <div class="col-4">
          <input type="date"></input>
        </div>
        <div class="col-2 btn btn-success kg-button">Add</div>
      </div>
    </div>
  );
};

export default AddTodo;
