import { useState } from "react";
const FlashCard = () => {
  const [answer, setAnswer] = useState("");
  const score = 0;
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

  const checkAnswer = (cA, que_id) => {
    if (cA == que_id) {
      setAnswer("Right");
    } else if (cA != que_id) {
      setAnswer("wrong");
    } else {
      setAnswer("");
    }
  };
  return (
    <>
      <div>
        <h1>Score: {score}</h1>
        {questions.map((que, index) => {
          return (
            <div key={index}>
              <p>
                {que.id} {que.question}
              </p>
              {que.options.map((qu, index) => (
                <button
                  key={index}
                  onClick={() => checkAnswer(qu, que.correctAnswer)}
                >
                  {qu}
                </button>
              ))}
              {answer}
            </div>
          );
        })}
      </div>
    </>
  );
};

export default FlashCard;
