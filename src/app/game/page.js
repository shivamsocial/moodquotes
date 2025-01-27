// app/game/page.js
import Question from "../components/Questions";
import Timer from "../components/Timer";
import Leaderboard from "../components/Leaderboard";
import QuizContent from "../components/QuizContent";

export default function GamePage({ title }) {
  const pageTitle = title
    ? `${title} | Quotes Game`
    : "Quotes Game - Guess the Quotes Quiz";
  const pageDescription =
    "Test your knowledge of famous quotes in this fun and challenging quiz game. Compete with friends and players around the world on the leaderboard.";
  const keywords =
    "quotes game, quotes quiz, guess the quotes, trivia game, quiz challenge, leaderboard, fun quiz game";
  const siteUrl = "https://www.quotesgame.com/game";

  return (
    <>
      <div>
        <h2 className="text-3xl font-bold text-center text-blue-600">
          Quotes Game
        </h2>
        <Timer />
        <Question />
        <Leaderboard />
        <QuizContent />
      </div>
    </>
  );
}
