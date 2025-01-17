"use client";

import { useState, useEffect, useRef } from "react";

// Function to shuffle an array randomly
const shuffleArray = (array) => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

const questions = [
  {
    id: 1,
    question: "'The only thing we have to fear is ____ itself.'",
    options: ["Nothing", "Time", "Failure", "Fear"],
    answer: "Fear",
  },
  {
    id: 2,
    question: "'In the middle of every difficulty lies ____.'",
    options: ["Hope", "Fear", "Success", "Opportunity"],
    answer: "Opportunity",
  },
  {
    id: 3,
    question:
      "'It is not the years in your life that count, but the ____ in your years.'",
    options: ["Passion", "Life", "Love", "Joy"],
    answer: "Life",
  },
  {
    id: 4,
    question:
      "'Success is not final, failure is not ____: it is the courage to continue that counts.'",
    options: ["End", "Fatal", "Devastating", "Permanent"],
    answer: "Fatal",
  },
  {
    id: 5,
    question: "'Be yourself; everyone else is already ____.'",
    options: ["Lost", "A copy", "Confused", "Taken"],
    answer: "Taken",
  },
  {
    id: 6,
    question: "'The best way to predict the future is to ____ it.'",
    options: ["Live", "Explore", "Dream", "Create"],
    answer: "Create",
  },
  {
    id: 7,
    question: "'Don’t cry because it’s over, smile because it’s ____.'",
    options: ["Beautiful", "Done", "Memorable", "Over"],
    answer: "Done",
  },
  {
    id: 8,
    question: "'Life is what happens when you're busy making other ____.'",
    options: ["Dreams", "Plans", "Decisions", "Memories"],
    answer: "Plans",
  },
  {
    id: 9,
    question:
      "'To be yourself in a world that is constantly trying to make you something else is the greatest ____.'",
    options: ["Wisdom", "Courage", "Love", "Peace"],
    answer: "Courage",
  },
  {
    id: 10,
    question:
      "'Not everything that is faced can be changed, but nothing can be changed until it is ____.'",
    options: ["Accepted", "Thought", "Faced", "Recognized"],
    answer: "Faced",
  },
  {
    id: 11,
    question: "'You miss 100% of the shots you don’t ____.'",
    options: ["Make", "Take", "Try", "Think"],
    answer: "Take",
  },
  {
    id: 12,
    question: "'The only way to do great work is to love what you ____.'",
    options: ["Achieve", "Create", "Try", "Do"],
    answer: "Do",
  },
  {
    id: 13,
    question: "'Life is either a daring adventure or nothing at ____.'",
    options: ["The end", "All", "All at all", "All"],
    answer: "All",
  },
  {
    id: 14,
    question: "'You must be the change you wish to see in the ____.'",
    options: ["Future", "World", "People", "Universe"],
    answer: "World",
  },
  {
    id: 15,
    question:
      "'Happiness is not something ready-made. It comes from your own ____.'",
    options: ["Choice", "Heart", "Thoughts", "Actions"],
    answer: "Actions",
  },
  {
    id: 16,
    question: "'Believe you can and you're ____.'",
    options: ["There", "Halfway there", "On the road", "Done"],
    answer: "Halfway there",
  },
  {
    id: 17,
    question:
      "'Success is not the key to happiness. Happiness is the key to ____.'",
    options: ["Wealth", "Success", "Love", "Peace"],
    answer: "Success",
  },
  {
    id: 18,
    question: "'It always seems impossible until it’s ____.'",
    options: ["Over", "Done", "Achieved", "Completed"],
    answer: "Done",
  },
  {
    id: 19,
    question:
      "'Two things are infinite: the universe and human stupidity; and I’m not sure about the ____.'",
    options: ["World", "Mind", "Intelligence", "Universe"],
    answer: "Universe",
  },
  {
    id: 20,
    question: "'Do what you can, with what you have, where you ____.'",
    options: ["Live", "Stand", "Wait", "Are"],
    answer: "Are",
  },
];

export default function Questions({ onComplete }) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(300);
  const [gameOver, setGameOver] = useState(false);
  const [feedback, setFeedback] = useState("");
  const [selectedOption, setSelectedOption] = useState("");
  const [playerName, setPlayerName] = useState(""); // Track player name input

  // Shuffle the questions array at the start
  const shuffledQuestions = useRef(
    shuffleArray(questions).slice(0, 10)
  ).current;

  useEffect(() => {
    if (timeLeft <= 0) {
      handleGameEnd();
    }
    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft]);

  const handleAnswer = (selectedOption) => {
    setSelectedOption(selectedOption);
    const isCorrect =
      selectedOption === shuffledQuestions[currentQuestion].answer;

    setFeedback(isCorrect ? "correct" : "incorrect");
    // Increment score based on whether the answer is correct or incorrect
    setScore((prevScore) => prevScore + (isCorrect ? 10 : 0)); // Deduct 5 points for wrong answers

    setTimeout(() => {
      setFeedback("");
      if (currentQuestion + 1 < shuffledQuestions.length) {
        setCurrentQuestion(currentQuestion + 1);
      } else {
        handleGameEnd();
      }
    }, 1000);
  };

  const handleGameEnd = () => {
    setGameOver(true);
  };

  const handlePlayAgain = () => {
    setCurrentQuestion(0);
    setScore(0);
    setTimeLeft(300);
    setGameOver(false);
  };

  const handleSubmitName = () => {
    if (playerName.trim()) {
      fetch("/api/leaderboard", {
        method: "POST",
        body: JSON.stringify({ name: playerName, score }),
        headers: { "Content-Type": "application/json" },
      })
        .then((res) => res.json())
        .then((data) => {
          console.log("Leaderboard updated:", data);
          alert(
            "Your score has been added to the leaderboard. Please refresh the page"
          );
        })
        .catch((err) => console.error("Error:", err));
    } else {
      alert("Please enter your name");
    }
  };

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes}:${secs < 10 ? "0" : ""}${secs}`;
  };

  if (gameOver) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-white text-gray-800 p-8">
        <h1 className="text-5xl font-bold mb-6 animate__animated animate__fadeIn">
          Game Over!
        </h1>
        <p className="text-2xl mb-6 animate__animated animate__fadeIn">
          Your Score: {score}
        </p>
        {/* Input form for leaderboard */}
        <input
          type="text"
          placeholder="Enter your name"
          value={playerName}
          onChange={(e) => setPlayerName(e.target.value)}
          className="mb-4 px-4 py-2 border rounded"
        />
        <button
          onClick={handleSubmitName}
          className="px-8 py-4 rounded-lg font-semibold text-lg shadow-lg transition-transform transform hover:scale-105"
        >
          Submit to Leaderboard
        </button>
        <button
          onClick={handlePlayAgain}
          className="px-8 py-4 rounded-lg font-semibold text-lg shadow-lg transition-transform transform hover:scale-105 mt-4"
        >
          Play Again
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white text-gray-800">
      {/* Timer and Score Display */}
      <div className="flex justify-between w-full max-w-3xl px-6 py-4 mb-6 bg-white bg-opacity-90 rounded-lg shadow-lg animate__animated animate__fadeIn">
        <div className="text-3xl font-semibold">
          ⏱️ Time Left: {formatTime(timeLeft)}
        </div>
        <div className="text-3xl font-semibold">🏆 Score: {score}</div>
      </div>

      {/* Question and Options */}
      <div className="w-full max-w-4xl p-6 bg-white bg-opacity-90 rounded-lg shadow-lg">
        <h2
          className={`text-3xl font-bold mb-6 ${
            feedback === "correct"
              ? "text-green-500 animate__animated animate__pulse animate__infinite"
              : feedback === "incorrect"
              ? "text-red-500 animate__animated animate__shakeX"
              : ""
          }`}
        >
          {shuffledQuestions[currentQuestion].question}
        </h2>

        <ul className="space-y-4">
          {shuffledQuestions[currentQuestion].options.map((option, index) => (
            <li key={index} className="transition-all duration-300">
              <button
                onClick={() => handleAnswer(option)}
                className={`w-full py-3 px-5 text-lg font-medium rounded-lg shadow-lg transition-all transform ${
                  selectedOption === option
                    ? feedback === "correct"
                      ? "bg-green-500 text-white"
                      : feedback === "incorrect"
                      ? "bg-red-500 text-white"
                      : ""
                    : "bg-gray-200 hover:bg-gray-300 text-black"
                } ${selectedOption === option ? "scale-105 z-10" : ""}`}
              >
                {feedback === "correct" && selectedOption === option
                  ? "✅ "
                  : ""}
                {feedback === "incorrect" && selectedOption === option
                  ? "❌ "
                  : ""}
                {option}
              </button>
            </li>
          ))}
        </ul>

        {/* Progress Bar */}
        <div className="mt-8 w-full bg-gray-300 rounded-full">
          <div
            className="bg-blue-500 text-xs font-medium text-blue-100 text-center p-1 leading-none rounded-full animate__animated animate__fadeIn"
            style={{
              width: `${
                ((currentQuestion + 1) / shuffledQuestions.length) * 100
              }%`,
            }}
          >
            {(((currentQuestion + 1) / shuffledQuestions.length) * 100).toFixed(
              2
            )}
            %
          </div>
        </div>
      </div>
    </div>
  );
}
