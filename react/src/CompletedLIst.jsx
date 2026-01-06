const CompletedList = ({ completeList, setList, list, setCompleteList }) => {
  console.log(2);
  const addBack = (id) => {
    let abList = completeList[id];
    abList.completed = false;
    setCompleteList(completeList.filter((li) => li.text != abList.text));

    setList([...list, abList]);
  };
  return (
    <div>
      <h1>Completed List</h1>
      <div>
        {completeList.map((li, index) => {
          return (
            <p key={index}>
              {li.text} {li.completed.toString()}
              <button onClick={() => addBack(index)}>add back</button>
            </p>
          );
        })}
      </div>
    </div>
  );
};

export default CompletedList;
