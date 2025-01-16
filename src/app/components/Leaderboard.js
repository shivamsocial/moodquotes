"use client";

import { useState, useEffect } from "react";

export default function Leaderboard() {
  const [leaderboard, setLeaderboard] = useState([]);

  useEffect(() => {
    const fetchLeaderboard = async () => {
      try {
        const response = await fetch("/api/leaderboard");
        const data = await response.json();
        setLeaderboard(data);
      } catch (error) {
        console.error("Error fetching leaderboard:", error);
      }
    };

    fetchLeaderboard();
  }, []);

  return (
    <div>
      <h3 className="text-2xl font-bold mb-4">Leaderboard</h3>
      <ul className="space-y-2">
        {leaderboard.map((player, idx) => (
          <li
            key={idx}
            className="flex justify-between items-center p-2 border rounded"
          >
            <span className="font-semibold">{player.name}</span>
            <span>{player.score} points</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
