// app/page.js
import Link from "next/link";

export default function Home() {
  return (
    <div className="text-center space-y-8">
      <h1 className="text-4xl font-bold text-blue-600">
        Welcome to Quotes Game
      </h1>
      <p className="text-lg">
        Test your knowledge of famous quotes by filling in the blanks. Compete
        with friends and see your name on the leaderboard!
      </p>
      <Link
        href="/game"
        className="inline-block px-6 py-3 bg-blue-600 text-white font-bold rounded-lg shadow hover:bg-blue-700"
      >
        Start the Game
      </Link>
    </div>
  );
}
