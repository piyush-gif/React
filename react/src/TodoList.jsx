import { useState } from "react";
import CompletedList from "./CompletedLIst";
import NavBar from "./NavBar";
const TodoList = () => {
  const [task, setTask] = useState("");
  const [list, setList] = useState([]);
  const [completedList, setCompletedList] = useState([]);
  const [count, setCount] = useState(0);
  const [completeCount, setCompleteCount] = useState(0);
  // console.log(completedList, 1);
  const addTask = () => {
    setCount(count + 1);
    setList([...list, { text: task, completed: false }]);
    setTask("");
    <NavBar num={1} />;
  };
  const deleteTask = (idToDelete) => {
    setList(list.filter((item, index) => index != idToDelete));
    setCount(count - 1);
    <NavBar num={-1} />;
  };

  const taskStatus = (id) => {
    setCompleteCount(completeCount + 1);
    setCount(count - 1);
    list[id].completed = !list[id].completed;
    let test = list.filter((li) => li.completed == true);
    setCompletedList([...completedList, ...test]);
    setList(list.filter((li) => li.completed == false));
  };

  return (
    <div>
      <div>
        <NavBar num={1} />
        <CompletedList
          completeList={completedList}
          setList={setList}
          list={list}
          setCompleteList={setCompletedList}
          completeCount={completeCount}
          setCompleteCount={setCompleteCount}
          count={count}
          setCount={setCount}
        />
        <h1>To-do List</h1>
        <p>Total Tasks to do: {count}</p>
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
