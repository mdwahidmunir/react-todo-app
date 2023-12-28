const TodoItem2 = () => {
  const todoName = "Gym";
  const todoDate = "28/12/2023";
  return (
    <div class="container">
      <div class="row kg-row">
        <div class="col-6">{todoName}</div>
        <div class="col-4">{todoDate}</div>
        <div class="col-2 btn btn-danger kg-button">Remove</div>
      </div>
    </div>
  );
};

export default TodoItem2;
