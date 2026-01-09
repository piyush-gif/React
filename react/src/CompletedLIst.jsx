const CompletedList = ({
  completeList,
  setList,
  setCompleteList,
  completeCount,
}) => {
  const addBack = (id) => {
    const back = completeList[id];
    setCompleteList((prev) => prev.filter((_, index) => index !== id));
    setList((prev) => [...prev, back]);
  };
  return (
    <div>
      <h1>Completed List : Tasks {completeCount}</h1>
      <div>
        {completeList.map((li, index) => {
          return (
            <p key={index}>
              {index} {li.text}
              <button onClick={() => addBack(index)}>add back</button>
            </p>
          );
        })}
      </div>
    </div>
  );
};

export default CompletedList;
