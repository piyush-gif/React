import { useState } from "react";
const FlashCard = () => {
  const [page, setPage] = useState(1);
  const [answer, setAnswer] = useState(null);
  const [score, setScore] = useState(0);
  const [quizFinished, setQuizFinished] = useState(false);
  const [hasAnswered, setHasAnswered] = useState(false);
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

  const handleNext = () => {
    setAnswer(null);
    setHasAnswered(false);
    if (page < questions.length) {
      setPage((prev) => prev + 1);
    } else setQuizFinished(true);
  };

  const checkAnswer = (answer, correctAnswer) => {
    setHasAnswered(true);
    if (answer == correctAnswer) {
      setAnswer({ isCorrect: true });
      setScore((prev) => prev + 1);
    } else {
      setAnswer({ isCorrect: false });
    }
  };

  const restartQuiz = () => {
    setAnswer(null);
    setPage(1);
    setScore(0);
    setQuizFinished(false);
    setHasAnswered(false);
  };
  return (
    <>
      <div>
        {!quizFinished ? (
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
                            disabled={hasAnswered}
                          >
                            {" "}
                            {que}
                          </button>
                        );
                      })}
                    </div>
                  );
                })}
              <div>
                {" "}
                {answer && <p>{answer.isCorrect ? "Right!" : `Wrong!`}</p>}
              </div>
            </div>
            <button onClick={handleNext}>next</button>
          </div>
        ) : (
          <div>
            <h1>Quiz Complete!</h1>
            <h2>
              Final Score: {score}/{questions.length}
            </h2>
            <button onClick={restartQuiz}>Restart</button>
          </div>
        )}
      </div>
    </>
  );
};

export default FlashCard;
