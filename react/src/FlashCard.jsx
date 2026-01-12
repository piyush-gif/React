import { useState } from "react";
const FlashCard = () => {
  const [question, setQuestion] = useState([]);
  const score = 0;
  const [page, setPage] = useState();
  const questions = [
    {
      id: 1,
      question: "what is 2x2",
      options: ["3", "4", "5", "6"],
      correctAnswer: "4",
    },
    {
      id: 2,
      question: "what is 3x2",
      options: ["3", "4", "5", "6"],
      correctAnswer: "6",
    },
    {
      id: 3,
      question: "what is 2x3",
      options: ["3", "4", "5", "6"],
      correctAnswer: "6",
    },
  ];

  const handleClick = () => {
    if (page <= 3) {
      page += 1;
    }
    console.log(page);
  };
  const show = () => {
    const change = questions.filter((ques) => ques.id === page);
    setQuestion(change);
  };
  return (
    <>
      <div>
        <h1>Score: {score}</h1>
        <button onClick={show}>show questions</button>
        <div>
          {question.map((ques, index) => {
            return (
              <div key={index}>
                <p>
                  {ques.id} {ques.question}
                </p>
                {ques.options.map((que, index) => {
                  return <button key={index}>{que}</button>;
                })}
              </div>
            );
          })}
        </div>
        <button onClick={handleClick}>next</button>
      </div>
    </>
  );
};

export default FlashCard;
