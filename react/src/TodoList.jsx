import { useState } from "react";
import CompletedList from "./CompletedLIst";
import NavBar from "./NavBar";
const TodoList = () => {
  const [task, setTask] = useState("");
  const [list, setList] = useState([]);
  const [completedList, setCompletedList] = useState([]);
  const count = list.length;
  const completeCount = completedList.length;
  const navcount = count + completeCount;

  const addTask = () => {
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
    <div>
      <div>
        <NavBar count={navcount} />
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
        ></input>
        <button onClick={() => addTask()}>Add</button>
        <ul>
          {list.map((item, index) => {
            return (
              <li key={index}>
                {index}
                {item.text}
                <button onClick={() => deleteTask(index)}> Delete</button>
                <button onClick={() => taskStatus(index)}>Status</button>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default TodoList;
