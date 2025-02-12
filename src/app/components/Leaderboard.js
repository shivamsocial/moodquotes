"use client";

import Questions from "./Questions";
import { useState, useEffect } from "react";

export default function Leaderboard() {
  const [leaderboard, setLeaderboard] = useState([]);
  const [isQuizStarted, setIsQuizStarted] = useState(false);

  const fetchLeaderboard = async () => {
    try {
      const response = await fetch("/api/leaderboard");
      const data = await response.json();
      setLeaderboard(data);
    } catch (error) {
      console.error("Error fetching leaderboard:", error);
    }
  };

  useEffect(() => {
    fetchLeaderboard();
  }, []);

  // Handle starting the quiz
  const startQuiz = () => {
    setIsQuizStarted(true);
  };

  return (
    <div className="bg-red-50 p-6">
      <h3 className="text-3xl font-bold text-red-600 mb-4">Leaderboard</h3>
      <ul className="space-y-2">
        {leaderboard.map((player, idx) => (
          <li
            key={idx}
            className="flex justify-between items-center p-3 bg-white border border-red-200 rounded-lg shadow-sm"
          >
            <span className="font-semibold text-red-700">{player.name}</span>
            <span className="text-red-500">{player.score} points</span>
          </li>
        ))}
      </ul>

      {isQuizStarted && (
        <Questions
          setLeaderboard={(updatedLeaderboard) =>
            setLeaderboard(updatedLeaderboard)
          }
        />
      )}
    </div>
  );
}
