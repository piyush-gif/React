import { useState } from "react";
import CompletedList from "./completedLIst";
const TodoList = () => {
  console.log(3);
  const [task, setTask] = useState("");
  const [list, setList] = useState([]);
  const [completedList, setCompletedList] = useState([]);
  // console.log(completedList, 1);
  const addTask = () => {
    setList([...list, { text: task, completed: false }]);
    setTask("");
  };

  const deleteTask = (idToDelete) => {
    setList(list.filter((item, index) => index != idToDelete));
  };

  const taskStatus = (id) => {
    list[id].completed = !list[id].completed;
    let test = list.filter((li) => li.completed == true);
    setCompletedList([...completedList, ...test]);
    setList(list.filter((li) => li.completed == false));
  };

  return (
    <div>
      <div>
        <CompletedList
          completeList={completedList}
          setList={setList}
          list={list}
          setCompleteList={setCompletedList}
        />
        <h1>To-do List</h1>
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
                {item.text} {item.completed.toString()}
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
