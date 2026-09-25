import { useContext } from "react";
import TaskItem from "./TaskItem";
import { DispatchContext, DataContext } from "../context/ReducerContext";
const TaskList = () => {
  const data = useContext(DataContext);
  const dispatch = useContext(DispatchContext);
  const handleDelete = (id) => {
    dispatch({ type: "Delete_Item", payload: id });
  };

  const handleToggleComplete = (id) => {
    dispatch({ type: "Toggle_Item", payload: id });
  };

  return (
    <div>
      {data.map((TaskItems, index) => (
        <TaskItem
          key={TaskItems.id}
          TaskItems={TaskItems}
          index={index}
          handleDelete={handleDelete}
          handleToggleComplete={handleToggleComplete}
        />
      ))}
    </div>
  );
};

export default TaskList;
