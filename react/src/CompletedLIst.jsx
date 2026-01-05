const CompletedList = ({ completeList, setList, list }) => {
  // console.log(completeList);
  const addBack = (id) => {
    console.log(id);
    let abList = completeList[id];
    console.log(abList);
    // abList.completed = true;
    setList(...list, abList);
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
