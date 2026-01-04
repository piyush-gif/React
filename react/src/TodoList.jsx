import { useState } from "react";

const TodoList = () => {
  const [task , setTask] = useState("");
  const [list , setList] = useState([]);

  const addTask = () => {
    setList([...list, task]);
    setTask("");
  }
  return ( 
    <div> 
      <div>
      <h1>To-do List</h1>
      <input type = "text" value ={task} onChange={e => setTask(e.target.value)}></input>
      <button onClick={()=> addTask()}>Add</button>
      <ul>
        {list.map((item, index) => {
         return <li key={index}> {item} </li>
        })}
      </ul>
      </div>
    </div>
   );
}
 
export default TodoList;