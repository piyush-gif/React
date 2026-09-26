import { useContext, useState, memo } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { DispatchContext } from "../context/ReducerContext";
const TaskItem = memo(
  ({ TaskItems, index, handleDelete, handleToggleComplete }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [draft, setDraft] = useState(TaskItems.name);
    const { theme } = useContext(ThemeContext);
    const dispatch = useContext(DispatchContext);
    const handleSave = () => {
      if (draft.trim() === "") {
        return;
      }
      dispatch({
        type: "Edit_Item",
        payload: { name: draft, id: TaskItems.id },
      });
      setIsEditing(false);
    };

    const handleCancel = () => {
      setDraft(TaskItems.name);
      setIsEditing(false);
    };

    return (
      <div>
        <p>{theme}</p>
        <p>{index + 1}</p>
        {isEditing ? (
          <div>
            <input value={draft} onChange={(e) => setDraft(e.target.value)} />
            <button onClick={handleSave}>save</button>
            <button onClick={handleCancel}>cancel</button>
          </div>
        ) : (
          <p>{TaskItems.name}</p>
        )}
        <p>{TaskItems.completed ? "Done" : "Pending"}</p>
        <button onClick={() => handleToggleComplete(TaskItems.id)}>
          toggle
        </button>
        <button onClick={() => handleDelete(TaskItems.id)}>Delete</button>
        <button onClick={() => setIsEditing(true)}>Edit</button>
      </div>
    );
  },
);

export default TaskItem;
