import { createContext, useReducer } from "react";

export const DataContext = createContext(null);
export const DispatchContext = createContext(null);

function reducer(state, action) {
  switch (action.type) {
    case "Add_Item":
      return [...state, action.payload];
    case "Delete_Item":
      return state.filter((task) => task.id !== action.payload);
    case "Edit_Item":
      return state.map((task) =>
        task.id === action.payload.id
          ? { ...task, name: action.payload.name }
          : task,
      );
    case "Toggle_Item":
      return state.map((task) =>
        task.id === action.payload
          ? { ...task, completed: !task.completed }
          : task,
      );
    default:
      return state;
  }
}

function getData(data) {
  const parsed = localStorage.getItem(data);
  return parsed ? JSON.parse(parsed) : [];
}

export function ReducerProvider({ children }) {
  const [data, dispatch] = useReducer(reducer, "data", getData);

  return (
    <DataContext.Provider value={data}>
      <DispatchContext.Provider value={dispatch}>
        {children}
      </DispatchContext.Provider>
    </DataContext.Provider>
  );
}
