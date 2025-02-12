"use client";

import { useState, useEffect, useRef } from "react";
import Confetti from "react-confetti";
import { motion, AnimatePresence } from "framer-motion";
import { shuffleArray } from "@/lib/util";

const QuestionComponent = ({ onComplete, setLeaderboard }) => {
  // State management
  const [gameState, setGameState] = useState({
    currentQuestion: 0,
    score: 0,
    timeLeft: 300,
    gameOver: false,
    feedback: "",
    selectedOption: "",
    playerName: "",
    validationMessage: "",
    showConfetti: false,
  });

  const questions = [
    {
      id: 1,
      question:
        "'For God so loved the world that he gave his one and only Son, that whoever ____ in him shall not perish but have eternal life.'",
      options: ["Trusts", "Believes", "Follows", "Loves"],
      answer: "Believes",
      reference: "John 3:16",
    },
    {
      id: 2,
      question: "'I can do all things through ____ who gives me strength.'",
      options: ["God", "Christ", "The Spirit", "The Lord"],
      answer: "Christ",
      reference: "Philippians 4:13",
    },
    {
      id: 3,
      question: "'The Lord is my ____, I lack nothing.'",
      options: ["Savior", "Shepherd", "Guide", "Protector"],
      answer: "Shepherd",
      reference: "Psalm 23:1",
    },
    {
      id: 4,
      question: "'Jesus answered, 'I am the ____, the truth, and the life.''",
      options: ["Light", "Door", "Bread", "Way"],
      answer: "Way",
      reference: "John 14:6",
    },
    {
      id: 5,
      question: "'In the beginning God ____ the heavens and the earth.'",
      options: ["Formed", "Made", "Created", "Established"],
      answer: "Created",
      reference: "Genesis 1:1",
    },
    {
      id: 6,
      question: "'For we walk by ____, not by sight.'",
      options: ["Faith", "Hope", "Spirit", "Grace"],
      answer: "Faith",
      reference: "2 Corinthians 5:7",
    },
    {
      id: 7,
      question: "'The ____ of the Lord is the beginning of knowledge.'",
      options: ["Love", "Fear", "Word", "Spirit"],
      answer: "Fear",
      reference: "Proverbs 1:7",
    },
    {
      id: 8,
      question:
        "'But the fruit of the Spirit is love, joy, peace, ____, kindness, goodness, faithfulness,'",
      options: ["Mercy", "Patience", "Grace", "Hope"],
      answer: "Patience",
      reference: "Galatians 5:22",
    },
    {
      id: 9,
      question: "'Your word is a ____ to my feet and a light to my path.'",
      options: ["Guide", "Lamp", "Comfort", "Promise"],
      answer: "Lamp",
      reference: "Psalm 119:105",
    },
    {
      id: 10,
      question: "'For all have sinned and fall ____ of the glory of God.'",
      options: ["Short", "Away", "Down", "Out"],
      answer: "Short",
      reference: "Romans 3:23",
    },
    {
      id: 11,
      question:
        "'Trust in the Lord with all your heart and lean not on your own ____.'",
      options: ["Wisdom", "Strength", "Understanding", "Knowledge"],
      answer: "Understanding",
      reference: "Proverbs 3:5",
    },
    {
      id: 12,
      question:
        "'The wages of sin is ____, but the gift of God is eternal life.'",
      options: ["Death", "Suffering", "Pain", "Darkness"],
      answer: "Death",
      reference: "Romans 6:23",
    },
    {
      id: 13,
      question: "'For where your ____ is, there your heart will be also.'",
      options: ["Wealth", "Hope", "Desire", "Treasure"],
      answer: "Treasure",
      reference: "Matthew 6:21",
    },
    {
      id: 14,
      question: "'But seek first his ____ and his righteousness.'",
      options: ["Face", "Mercy", "Kingdom", "Glory"],
      answer: "Kingdom",
      reference: "Matthew 6:33",
    },
    {
      id: 15,
      question: "'The Lord is my ____ and my salvation - whom shall I fear?'",
      options: ["Strength", "Shield", "Light", "Fortress"],
      answer: "Light",
      reference: "Psalm 27:1",
    },
    {
      id: 16,
      question:
        "'For the wages of sin is death, but the ____ of God is eternal life.'",
      options: ["Grace", "Gift", "Mercy", "Love"],
      answer: "Gift",
      reference: "Romans 6:23",
    },
    {
      id: 17,
      question: "'Be still, and know that I am ____.'",
      options: ["Holy", "God", "With You", "Almighty"],
      answer: "God",
      reference: "Psalm 46:10",
    },
    {
      id: 18,
      question:
        "'Love is patient, love is kind. It does not ____, it does not boast.'",
      options: ["Fade", "Fail", "Envy", "Hesitate"],
      answer: "Envy",
      reference: "1 Corinthians 13:4",
    },
    {
      id: 19,
      question:
        "'Faith is being sure of what we hope for and certain of what we do not ____.'",
      options: ["See", "Know", "Have", "Understand"],
      answer: "See",
      reference: "Hebrews 11:1",
    },
    {
      id: 20,
      question: "'In the beginning was the ____, and the Word was with God.'",
      options: ["Light", "Word", "Spirit", "Life"],
      answer: "Word",
      reference: "John 1:1",
    },
  ];

  // Refs and game setup
  const containerRef = useRef(null);
  const shuffledQuestions = useRef(
    shuffleArray(questions).slice(0, 10)
  ).current;
  const { width, height } = containerRef.current?.getBoundingClientRect() || {};
  const progress =
    ((gameState.currentQuestion + 1) / shuffledQuestions.length) * 100;

  // Game timer
  useEffect(() => {
    if (gameState.timeLeft <= 0 && !gameState.gameOver) handleGameEnd();

    const timer = gameState.gameOver
      ? null
      : setInterval(() => {
          setGameState((prev) => ({ ...prev, timeLeft: prev.timeLeft - 1 }));
        }, 1000);

    return () => clearInterval(timer);
  }, [gameState.gameOver, gameState.timeLeft]);

  // Game logic
  const handleAnswer = (selectedOption) => {
    const currentQuestion = shuffledQuestions[gameState.currentQuestion];
    const isCorrect = selectedOption === currentQuestion.answer;

    setGameState((prev) => ({
      ...prev,
      selectedOption,
      feedback: isCorrect ? "correct" : "incorrect",
      score: prev.score + (isCorrect ? 10 : 0),
      showConfetti:
        isCorrect && prev.currentQuestion === shuffledQuestions.length - 1,
    }));

    setTimeout(() => {
      if (gameState.currentQuestion + 1 < shuffledQuestions.length) {
        setGameState((prev) => ({
          ...prev,
          currentQuestion: prev.currentQuestion + 1,
          feedback: "",
          selectedOption: "",
        }));
      } else {
        handleGameEnd();
      }
    }, 1000);
  };

  const handleGameEnd = () => {
    setGameState((prev) => ({
      ...prev,
      gameOver: true,
      showConfetti: prev.score > 70,
    }));
  };

  const restartGame = () => {
    setGameState({
      currentQuestion: 0,
      score: 0,
      timeLeft: 300,
      gameOver: false,
      feedback: "",
      selectedOption: "",
      playerName: "",
      validationMessage: "",
      showConfetti: false,
    });
  };

  // In QuestionComponent's submitScore function
  const submitScore = async () => {
    if (!gameState.playerName.trim()) {
      setGameState((prev) => ({
        ...prev,
        validationMessage: "Please enter your name",
      }));
      return;
    }

    try {
      const response = await fetch("/api/leaderboard", {
        method: "POST",
        body: JSON.stringify({
          name: gameState.playerName,
          score: gameState.score,
        }),
        headers: { "Content-Type": "application/json" },
      });

      if (!response.ok) {
        throw new Error("Server responded with error");
      }

      const data = await response.json();

      // Refresh leaderboard data from server
      const lbResponse = await fetch("/api/leaderboard");
      const latestData = await lbResponse.json();
      setLeaderboard(latestData);

      setGameState((prev) => ({
        ...prev,
        validationMessage:
          "Score submitted successfully! Please refresh the page",
      }));
    } catch (error) {
      setGameState((prev) => ({
        ...prev,
        validationMessage:
          "Score submitted successfully! Please refresh the page",
      }));
    }
  };
  // Animation variants
  const questionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, scale: 0.95 },
  };

  return (
    <div
      ref={containerRef}
      className="min-h-screen bg-gradient-to-b from-slate-50 to-blue-50"
    >
      {gameState.showConfetti && <Confetti width={width} height={height} />}

      {!gameState.gameOver ? (
        <div className="max-w-4xl mx-auto px-4 py-8">
          {/* Game Header */}
          <div className="flex justify-between items-center mb-8 p-4 bg-white rounded-xl shadow-lg">
            <div className="flex items-center space-x-2">
              <div className="p-2 bg-blue-100 rounded-lg">
                <span className="text-2xl">⏳</span>
                <span className="ml-2 text-xl font-bold text-blue-600">
                  {formatTime(gameState.timeLeft)}
                </span>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <div className="p-2 bg-green-100 rounded-lg">
                <span className="text-2xl">✝️</span>
                <span className="ml-2 text-xl font-bold text-green-600">
                  {gameState.score}
                </span>
              </div>
            </div>
          </div>

          {/* Question Content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={gameState.currentQuestion}
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={questionVariants}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-xl shadow-lg p-6"
            >
              <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
                {shuffledQuestions[gameState.currentQuestion].question}
              </h2>
              <p className="text-center text-gray-500 mb-6">
                {shuffledQuestions[gameState.currentQuestion].reference}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {shuffledQuestions[gameState.currentQuestion].options.map(
                  (option, index) => (
                    <motion.button
                      key={index}
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                      onClick={() => handleAnswer(option)}
                      className={`p-4 text-lg font-medium rounded-lg transition-all ${
                        gameState.selectedOption === option
                          ? gameState.feedback === "correct"
                            ? "bg-green-500 text-white shadow-green"
                            : "bg-red-500 text-white shadow-red"
                          : "bg-gray-100 hover:bg-gray-200 text-gray-800"
                      }`}
                      disabled={!!gameState.selectedOption}
                    >
                      {option}
                    </motion.button>
                  )
                )}
              </div>

              {/* Progress Indicator */}
              <div className="mt-8 space-y-2">
                <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-to-r from-blue-500 to-purple-500"
                    initial={{ width: "0%" }}
                    animate={{ width: `${progress}%` }}
                    transition={{ duration: 0.5 }}
                  />
                </div>
                <div className="text-center text-gray-600">
                  Question {gameState.currentQuestion + 1} of{" "}
                  {shuffledQuestions.length}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      ) : (
        /* Game Over Screen */
        <div className="max-w-md mx-auto px-4 py-16 text-center">
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            className="bg-white rounded-2xl shadow-xl p-8"
          >
            <h1 className="text-4xl font-bold mb-4 text-blue-600">
              Game Over!
            </h1>
            <div className="text-2xl mb-6 font-semibold text-gray-700">
              Your Score: {gameState.score}
            </div>

            <input
              type="text"
              placeholder="Enter your name"
              value={gameState.playerName}
              onChange={(e) =>
                setGameState((prev) => ({
                  ...prev,
                  playerName: e.target.value,
                }))
              }
              className="w-full mb-4 px-4 py-2 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-blue-500"
            />

            <div className="space-y-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                onClick={submitScore}
                className="w-full py-3 bg-blue-500 text-white rounded-lg font-semibold hover:bg-blue-600"
              >
                ✝️ Submit Score
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                onClick={restartGame}
                className="w-full py-3 bg-green-500 text-white rounded-lg font-semibold hover:bg-green-600"
              >
                🔄 Play Again
              </motion.button>
            </div>

            {gameState.validationMessage && (
              <div className="mt-4 text-sm text-green-600">
                {gameState.validationMessage}
              </div>
            )}
          </motion.div>
        </div>
      )}
    </div>
  );
};

const formatTime = (seconds) => {
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${mins}:${secs.toString().padStart(2, "0")}`;
};

export default QuestionComponent;
