import { createContext, useReducer } from "react";

export const TodoItemsContext = createContext({
  todoItems: [],
  addItems: () => {},
  deleteItems: () => {},
});

function todoItemsReducer(currentTodoItems, action) {
  /*     state
  {
    id: str,
    name : str,
    dueDate : str
  }
  */
  let newTodoItems = currentTodoItems;
  if (action.type === "ADD_TODO_ITEMS") {
    const newItem = action.payload;
    newTodoItems = [...currentTodoItems, newItem];
  } else if (action.type === "DELETE_TODO_ITEMS") {
    newTodoItems = currentTodoItems.filter(
      (item) => item.id !== action.payload.item_id
    );
  }
  return newTodoItems;
}

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

const TodoItemsContextProvider = ({ children }) => {
  const [items, dispatchTodoItems] = useReducer(
    todoItemsReducer,
    INITIAL_ITEMS
  );

  const addItem = (item) => {
    const newItemAction = {
      type: "ADD_TODO_ITEMS",
      payload: item,
    };
    dispatchTodoItems(newItemAction);
  };

  const removeItem = (item_id) => {
    const deleteItemAction = {
      type: "DELETE_TODO_ITEMS",
      payload: { item_id: item_id },
    };
    dispatchTodoItems(deleteItemAction);
  };

  return (
    <TodoItemsContext.Provider
      value={{
        todoItems: items,
        addItems: addItem,
        deleteItems: removeItem,
      }}
    >
      {children}
    </TodoItemsContext.Provider>
  );
};

export default TodoItemsContextProvider;
