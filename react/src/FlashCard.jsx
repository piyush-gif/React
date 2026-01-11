import { useState } from "react";
const FlashCard = () => {
  const [answer, setAnswer] = useState("");
  const [question, setQuestion] = useState(0);
  const score = 0;
  const page = 1;
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
  const checkAnswer = () => {};
  return (
    <>
      <div>
        <h1>Score: {score}</h1>
        {questions
          .filter((question) => question.id == page)
          .map((ques, index) => {
            return (
              <div key={index}>
                <p>
                  {ques.id}. {ques.question}
                </p>
                {ques.options.map((que, index) => {
                  return <button key={index}>{que}</button>;
                })}
                <button onClick={page}>Next Question</button>
              </div>
            );
          })}
      </div>
    </>
  );
};

export default FlashCard;
