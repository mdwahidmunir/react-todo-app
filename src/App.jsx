import "./App.css";
import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import Welcome from "./components/Welcome";

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

  const handleAddItem = (item) => {
    const newItems = [item, ...items];
    setItems(newItems);
  };

  const handleRemoveItem = (item_id) => {
    const newItems = items.filter((item) => item.id !== item_id);
    setItems(newItems);
  };

  return (
    <>
      <center className="todo-container">
        <AppName />
        <AddTodo onAddItem={handleAddItem} />
        {items.length === 0 ? (
          <Welcome className="lead" />
        ) : (
          <TodoItems items={items} onDeleteItem={handleRemoveItem} />
        )}
      </center>
    </>
  );
}

export default App;
