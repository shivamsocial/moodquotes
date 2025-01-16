// app/game/page.js
import Question from "../components/Questions";
import Timer from "../components/Timer";
import Leaderboard from "../components/Leaderboard";

export default function GamePage() {
  return (
    <div>
      <h2 className="text-3xl font-bold text-center text-blue-600">
        Quotes Game
      </h2>
      <Timer />
      <Question />
      <Leaderboard />
    </div>
  );
}
