import "./App.css";
import TaskList from "./Component/TaskList";
import { useEffect, useState } from "react";
function App() {
  const [data, setData] = useState(() => {
    const saved = localStorage.getItem("data");
    return saved ? JSON.parse(saved) : [];
  });

  const [input, setInput] = useState("");
  useEffect(() => {
    console.log("input was:", input);
  }, []);

  useEffect(() => {
    localStorage.setItem("data", JSON.stringify(data));
  }, [data]);

  const handleAdd = () => {
    const addedData = [
      ...data,
      { id: Date.now(), name: input, completed: false },
    ];
    setData(addedData);
  };

  return (
    <>
      <input value={input} onChange={(e) => setInput(e.target.value)} />
      <button onClick={handleAdd}>Add</button>
      <TaskList data={data} setData={setData} />
    </>
  );
}

export default App;
