import "./App.css";
import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";
import "bootstrap/dist/css/bootstrap.min.css";
import Welcome from "./components/Welcome";
import TodoItemsContextProvider from "./store/todoItemsStore";

function App() {
  return (
    <TodoItemsContextProvider>
      <center className="todo-container">
        <AppName />
        <AddTodo />
        <Welcome className="lead" />
        <TodoItems />
      </center>
    </TodoItemsContextProvider>
  );
}

export default App;
