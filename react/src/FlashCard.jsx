import { useState } from "react";
const FlashCard = () => {
  let score = 0;
  const [page, setPage] = useState(1);
  const [button, setButton] = useState("next");
  const [answer, setAnswer] = useState(null);
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
      options: ["3", "4", "2", "6"],
      correctAnswer: "6",
    },
    {
      id: 3,
      question: "what is 2x3",
      options: ["3", "10", "11", "6"],
      correctAnswer: "6",
    },
  ];

  const handleClick = () => {
    setAnswer(null);
    if (page < 3) {
      setPage((prev) => prev + 1);
    } else setButton("submit");
  };

  const checkAnswer = (answer, correctAnswer) => {
    if (answer == correctAnswer) {
      setAnswer({ isCorrect: true });
    } else {
      setAnswer({ isCorrect: false });
    }
  };

  return (
    <>
      <div>
        <h1>Score: {score}</h1>
        <div>
          {questions
            .filter((quest) => quest.id === page)
            .map((ques, index) => {
              return (
                <div key={index}>
                  <p>
                    {ques.id} {ques.question}
                  </p>
                  {ques.options.map((que, id) => {
                    return (
                      <button
                        key={id}
                        onClick={() => checkAnswer(que, ques.correctAnswer)}
                      >
                        {" "}
                        {que}
                      </button>
                    );
                  })}
                  {answer && <p>{answer.isCorrect ? "Right" : "Wrong"}</p>}
                </div>
              );
            })}
        </div>
        <button onClick={handleClick}>{button}</button>
      </div>
    </>
  );
};

export default FlashCard;
