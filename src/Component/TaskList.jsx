import { useContext, useState, memo, useCallback, useMemo } from "react";
import TaskItem from "./TaskItem";
import { DispatchContext, DataContext } from "../context/ReducerContext";
const TaskList = memo(() => {
  const data = useContext(DataContext);
  const dispatch = useContext(DispatchContext);
  const [filter, setFilter] = useState("all");
  const [sortOrder, setSortOrder] = useState("newest");

  const filteredData = useMemo(() => {
    return data.filter((task) => {
      if (filter === "active") return !task.completed;
      if (filter === "completed") return task.completed;
      return true;
    });
  }, [data, filter]);

  const sortedData = useMemo(() => {
    return [...filteredData].sort((a, b) => {
      if (sortOrder === "newest") return b.id - a.id;
      return a.id - b.id;
    });
  }, [filteredData, sortOrder]);
  const handleDelete = useCallback(
    (id) => {
      dispatch({ type: "Delete_Item", payload: id });
    },
    [dispatch],
  );

  const handleToggleComplete = useCallback(
    (id) => {
      dispatch({ type: "Toggle_Item", payload: id });
    },
    [dispatch],
  );

  return (
    <div>
      <button onClick={() => setFilter("all")}>all</button>
      <button onClick={() => setFilter("active")}>active</button>
      <button onClick={() => setFilter("completed")}>completed</button>
      <button onClick={() => setSortOrder("newest")}>newest</button>
      <button onClick={() => setSortOrder("oldest")}>oldest</button>
      {sortedData.map((TaskItems, index) => (
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
});

export default TaskList;
