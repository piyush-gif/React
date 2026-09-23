import TaskItem from "./TaskItem";
const TaskList = ({ data, setData }) => {
  const handleDelete = (id) => {
    const filteredData = data.filter((task) => task.id !== id);
    setData(filteredData);
  };

  const handleToggleComplete = (id) => {
    const updatedData = data.map((task) =>
      task.id === id ? { ...task, completed: !task.completed } : task,
    );
    setData(updatedData);
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
