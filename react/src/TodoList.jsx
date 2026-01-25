import { useContext, useState, useEffect } from "react";
import { Context } from "./Context";
import CompletedList from "./CompletedLIst";
const TodoList = () => {
  const [task, setTask] = useState("");
  const [list, setList] = useState([]);
  const [completedList, setCompletedList] = useState([]);
  const count = list.length;
  const completeCount = completedList.length;
  const { navCount, setNavCount } = useContext(Context);
  useEffect(() => {
    const savedList = localStorage.getItem("todoList");
    const savedCompletedList = localStorage.getItem("completedList");

    if (savedList) {
      setList(JSON.parse(savedList));
    }
    if (savedCompletedList) {
      setCompletedList(JSON.parse(savedCompletedList));
    }
  }, []);

  useEffect(() => {
    if (list.length > 0 || completedList.length > 0) {
      localStorage.setItem("todoList", JSON.stringify(list));
      localStorage.setItem("completedList", JSON.stringify(completedList));
    }
  }, [list, completedList]);

  useEffect(() => {
    setNavCount(count + completeCount);
  }, [count, completeCount, setNavCount]);

  const addTask = () => {
    if (task === "") return;
    setList((prev) => [...prev, { text: task }]);
    setTask("");
  };

  const deleteTask = (idToDelete) => {
    setList((prev) => prev.filter((_, index) => index !== idToDelete));
  };

  const taskStatus = (id) => {
    const taskToMove = list[id];
    setCompletedList((prev) => [...prev, taskToMove]);
    setList((prev) => prev.filter((_, index) => index !== id));
  };

  return (
    <div className="todo-container">
      <div className="todo-component">
        <CompletedList
          completeList={completedList}
          setList={setList}
          setCompleteList={setCompletedList}
          completeCount={completeCount}
        />
        <h1>To-do List : Tasks {count}</h1>
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && addTask()}
        ></input>
        <button onClick={() => addTask()}>Add</button>
        <ul>
          {list.map((item, index) => {
            return (
              <li key={index}>
                {item.text}
                <button onClick={() => deleteTask(index)}> Delete</button>
                <button onClick={() => taskStatus(index)}>Complete</button>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default TodoList;
