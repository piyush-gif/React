import "./App.css";
import TaskList from "./Component/TaskList";
import { useEffect, useState, useReducer } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "Add_Item":
      return [...state, action.payload];
    case "Delete_Item":
      return state.filter((item) => item.id !== action.payload);
    case "Toggle_Item":
      return state.map((item) =>
        item.id === action.payload
          ? { ...item, completed: !item.completed }
          : item,
      );
    case "Edit_Item":
      return state.map((task) =>
        task.id === action.payload.id
          ? { ...task, name: action.payload.name }
          : task,
      );
    default:
      return state;
  }
}
const loadData = (storageName) => {
  const parsed = localStorage.getItem(storageName);
  return parsed ? JSON.parse(parsed) : [];
};

function App() {
  const [data, dispatch] = useReducer(reducer, "data", loadData);
  const [input, setInput] = useState("");

  useEffect(() => {
    localStorage.setItem("data", JSON.stringify(data));
  }, [data]);

  const handleAdd = () => {
    dispatch({
      type: "Add_Item",
      payload: { id: Date.now(), name: input, completed: false },
    });
    setInput("");
  };

  return (
    <>
      <input value={input} onChange={(e) => setInput(e.target.value)} />
      <button onClick={handleAdd}>Add</button>
      <TaskList data={data} dispatch={dispatch} />
    </>
  );
}

export default App;
