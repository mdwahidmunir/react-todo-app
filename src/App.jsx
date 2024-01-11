import "./App.css";
import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import Welcome from "./components/Welcome";
import { TodoItemsContext } from "./store/todoItemsStore";

const INITIAL_ITEMS = [
  // {
  //   name: "Buy Milk",
  //   dueDate: "12/12/2023",
  // },
  // {
  //   name: "Study React",
  //   dueDate: "23/12/2023",
  // },
  // {
  //   name: "DSA Prep",
  //   dueDate: "31/12/2023",
  // },
];

function App() {
  const [items, setItems] = useState(INITIAL_ITEMS);

  const addItem = (item) => {
    // Method 1
    // const newItems = [item, ...items];
    // setItems(newItems);

    // Method 2 NOTE: This is recommended when your state depends on the previous state
    setItems((prevState) => {
      const newItems = [item, ...prevState];
      return newItems;
    });
  };

  const removeItem = (item_id) => {
    // Method - 1
    // const newItems = items.filter((item) => item.id !== item_id);
    // setItems(newItems);

    // Method 2
    setItems((prevState) => {
      const newItems = items.filter((item) => item.id !== item_id);
      return newItems;
    });
  };

  return (
    <TodoItemsContext.Provider
      value={{
        todoItems: items,
        addItems: addItem,
        deleteItems: removeItem,
      }}
    >
      <center className="todo-container">
        <AppName />
        <AddTodo />
        {items.length === 0 ? <Welcome className="lead" /> : <TodoItems />}
      </center>
    </TodoItemsContext.Provider>
  );
}

export default App;
