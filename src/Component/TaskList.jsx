import TaskItem from "./TaskItem";
const TaskList = ({ data, dispatch }) => {
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
          dispatch={dispatch}
        />
      ))}
    </div>
  );
};

export default TaskList;
