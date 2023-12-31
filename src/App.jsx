import "./App.css";
import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const items = [
    {
      name: "Buy Milk",
      dueDate: "12/12/2023",
    },
    {
      name: "Study React",
      dueDate: "23/12/2023",
    },
    {
      name: "DSA Prep",
      dueDate: "31/12/2023",
    },
  ];
  return (
    <>
      <center className="todo-container">
        <AppName />
        <AddTodo />
        <TodoItems items={items} />
      </center>
    </>
  );
}

export default App;
