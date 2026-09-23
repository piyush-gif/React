const TaskItem = ({ TaskItems, index, handleDelete, handleToggleComplete }) => {
  return (
    <div key={TaskItems.id}>
      <p>{index + 1}</p>
      <p>{TaskItems.name}</p>
      <p>{TaskItems.completed ? "Done" : "Pending"}</p>
      <button onClick={() => handleToggleComplete(TaskItems.id)}>toggle</button>
      <button onClick={() => handleDelete(TaskItems.id)}>Delete</button>
    </div>
  );
};

export default TaskItem;
