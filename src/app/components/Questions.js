"use client";

import { useState, useEffect, useRef } from "react";
import QuizContent from "./QuizContent"; // Import the new component

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
    options: ["Failure", "Time", "Fear", "Nothing"],
    answer: "Fear",
  },
  {
    id: 2,
    question: "'In the middle of every difficulty lies ____.'",
    options: ["Hope", "Opportunity", "Success", "Fear"],
    answer: "Opportunity",
  },
  {
    id: 3,
    question: "'Be yourself; everyone else is already ____.'",
    options: ["Confused", "Gone", "Lost", "Taken"],
    answer: "Taken",
  },
  {
    id: 4,
    question: "'The best way to predict the future is to ____ it.'",
    options: ["Dream", "Create", "Plan", "Imagine"],
    answer: "Create",
  },
  {
    id: 5,
    question: "'Don't cry because it's over, smile because it ____.'",
    options: ["Lasted", "Finished", "Happened", "Ended"],
    answer: "Happened",
  },
  {
    id: 6,
    question: "'Life is what happens when you're busy making other ____.'",
    options: ["Plans", "Ideas", "Dreams", "Choices"],
    answer: "Plans",
  },
  {
    id: 7,
    question: "'You miss 100% of the shots you don't ____.'",
    options: ["Try", "Make", "Plan", "Take"],
    answer: "Take",
  },
  {
    id: 8,
    question: "'The only way to do great work is to love what you ____.'",
    options: ["Do", "Try", "Dream", "Achieve"],
    answer: "Do",
  },
  {
    id: 9,
    question: "'Believe you can and you're ____.'",
    options: ["Halfway there", "There", "Almost done", "On your way"],
    answer: "Halfway there",
  },
  {
    id: 10,
    question: "'It always seems impossible until it's ____.'",
    options: ["Achieved", "Done", "Completed", "Over"],
    answer: "Done",
  },
  {
    id: 11,
    question:
      "'Success is not the key to happiness. Happiness is the key to ____.'",
    options: ["Success", "Love", "Fulfillment", "Peace"],
    answer: "Success",
  },
  {
    id: 12,
    question: "'Two things are infinite: the universe and human ____.'",
    options: ["Stupidity", "Creativity", "Curiosity", "Intelligence"],
    answer: "Stupidity",
  },
  {
    id: 13,
    question: "'Do what you can, with what you have, where you ____.'",
    options: ["Stand", "Are", "Live", "Begin"],
    answer: "Are",
  },
  {
    id: 14,
    question:
      "'Happiness is not something ready-made. It comes from your own ____.'",
    options: ["Decisions", "Actions", "Thoughts", "Dreams"],
    answer: "Actions",
  },
  {
    id: 15,
    question: "'Life is either a daring adventure or nothing at ____.'",
    options: ["All", "The end", "Risk", "Start"],
    answer: "All",
  },
  {
    id: 16,
    question:
      "'Do not go where the path may lead, go instead where there is ____ and leave a trail.'",
    options: ["Opportunity", "Hope", "Imagination", "No path"],
    answer: "No path",
  },
  {
    id: 17,
    question:
      "'What lies behind us and what lies before us are tiny ____ compared to what lies within us.'",
    options: ["Miracles", "Obstacles", "Differences", "Matters"],
    answer: "Obstacles",
  },
  {
    id: 18,
    question:
      "'In three words I can sum up everything I've learned about life: it goes ____.'",
    options: ["On", "Fast", "Forever", "Slow"],
    answer: "On",
  },
  {
    id: 19,
    question:
      "'Life isn't about waiting for the storm to pass, it's about learning how to ____ in the rain.'",
    options: ["Dance", "Survive", "Run", "Wait"],
    answer: "Dance",
  },
  {
    id: 20,
    question:
      "'It does not matter how slowly you go as long as you do not ____.'",
    options: ["Stop", "Fall", "Get lost", "Look back"],
    answer: "Stop",
  },
];

export default function Questions({ onComplete, setLeaderboard }) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(300);
  const [gameOver, setGameOver] = useState(false);
  const [feedback, setFeedback] = useState("");
  const [selectedOption, setSelectedOption] = useState("");
  const [playerName, setPlayerName] = useState(""); // Track player name input
  const [validationMessage, setValidationMessage] = useState(""); // State for validation message

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
    setValidationMessage(""); // Reset validation message
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
          setValidationMessage(
            "Your score has been added to the leaderboard. Please refresh the page."
          );
          // Update leaderboard in parent component
          if (setLeaderboard) {
            setLeaderboard(data); // Update leaderboard with the response data
          }
        })
        .catch((err) => {
          console.error("Error:", err);
          setValidationMessage(
            "An error occurred while updating the leaderboard."
          );
        });
    } else {
      setValidationMessage("Please enter your name");
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
        <h1 className="text-5xl font-bold mb-6 text-red-600 animate__animated animate__fadeIn">
          Game Over!
        </h1>
        <p className="text-2xl mb-6 text-red-500 animate__animated animate__fadeIn">
          Your Score: {score}
        </p>
        {/* Input form for leaderboard */}
        <input
          type="text"
          placeholder="Enter your name"
          value={playerName}
          onChange={(e) => setPlayerName(e.target.value)}
          className="mb-4 px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
        />
        <button
          onClick={handleSubmitName}
          className="px-8 py-4 rounded-lg font-semibold text-lg shadow-lg transition-transform transform bg-red-500 text-white hover:bg-green-600"
        >
          Submit to Leaderboard
        </button>
        <button
          onClick={handlePlayAgain}
          className="px-8 py-4 rounded-lg font-semibold text-lg shadow-lg transition-transform transform bg-red-500 text-white hover:bg-green-600 mt-4"
        >
          Play Again
        </button>
        {validationMessage && (
          <span className="mt-4 text-green-500">{validationMessage}</span>
        )}
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white text-gray-800">
      {/* Timer and Score Display */}
      <div className="flex justify-between w-full max-w-3xl px-6 py-4 mb-6 bg-red-100 rounded-lg shadow-lg animate__animated animate__fadeIn">
        <div className="text-3xl font-semibold text-red-600">
          ⏱️ Time Left: {formatTime(timeLeft)}
        </div>
        <div className="text-3xl font-semibold text-red-600">
          🏆 Score: {score}
        </div>
      </div>
      {/* Question and Options */}
      <div className="w-full max-w-4xl p-6 bg-white rounded-lg shadow-lg">
        <h2
          className={`text-3xl font-bold mb-6 ${
            feedback === "correct"
              ? "text-green-500 animate__animated animate__pulse animate__infinite"
              : feedback === "incorrect"
              ? "text-red-500 animate__animated animate__shakeX"
              : "text-gray-800"
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
            className="bg-green-500 text-xs font-medium text-green-100 text-center p-1 leading-none rounded-full animate__animated animate__fadeIn"
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

      {/* Validation Message */}
      {validationMessage && (
        <span className="mt-4 text-red-500">{validationMessage}</span>
      )}
    </div>
  );
}
