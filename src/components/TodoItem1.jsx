const TodoItem1 = () => {
  const todo = "Buy Milk 2";
  const date = "28/12/2023";
  return (
    <div class="container">
      <div class="row kg-row">
        <div class="col-6">{todo}</div>
        <div class="col-4">{date}</div>
        <div class="col-2 btn btn-danger kg-button">Remove</div>
      </div>
    </div>
  );
};

export default TodoItem1;
