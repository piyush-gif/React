import { useState } from "react";
const FlashCard = () => {
  const [answer, setAnswer] = useState("");
  const [question, setQuestion] = useState(1);
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
  const hello = questions.filter((ques) => ques.id === question);
  console.log(hello[0].id);
  const checkAnswer = () => {};
  return (
    <>
      <div>
        <h1>Score: {score}</h1>
        {hello[question].id}
      </div>
    </>
  );
};

export default FlashCard;
