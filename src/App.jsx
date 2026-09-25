import "./App.css";
import TaskList from "./Component/TaskList";
import { useEffect, useState, useContext } from "react";
import { ThemeContext } from "./context/ThemeContext";
import { CountContext } from "./context/CountContext";
import { DataContext, DispatchContext } from "./context/ReducerContext";

function App() {
  const data = useContext(DataContext);
  const dispatch = useContext(DispatchContext);
  const { count, setCount } = useContext(CountContext);
  const { theme, setTheme } = useContext(ThemeContext);
  const [input, setInput] = useState("");

  useEffect(() => {
    localStorage.setItem("data", JSON.stringify(data));
    setCount(data.length);
  }, [data]);

  const handleAdd = () => {
    dispatch({
      type: "Add_Item",
      payload: { id: Date.now(), name: input, completed: false },
    });
    setInput("");
  };

  const handleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div className={theme}>
      <p>Count {count}</p>
      <button onClick={handleTheme}>switch</button>
      <input value={input} onChange={(e) => setInput(e.target.value)} />
      <button onClick={handleAdd}>Add</button>
      <TaskList />
    </div>
  );
}

export default App;
