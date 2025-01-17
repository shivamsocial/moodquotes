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
        className="inline-block px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white text-2xl font-bold rounded-full shadow-lg hover:from-pink-600 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-400"
      >
        Start the Game
      </Link>

      <div className="min-h-screen bg-gray-100 text-black flex flex-col items-start justify-start space-y-12 px-8 py-16">
        {/* About Section */}
        <div className="max-w-full space-y-6 text-lg text-gray-800">
          <h2 className="text-3xl font-semibold text-left text-blue-500">
            About the Game
          </h2>
          <p className="text-left">
            Welcome to the Quotes Game, a fun and exciting challenge where you
            can test your knowledge of some of the most iconic quotes from
            history, literature, movies, and pop culture. In this game,
            you&rsquo;ll be given a series of famous quotes with a word missing,
            and you&rsquo;ll have to choose the correct word to complete the
            quote. Whether you&rsquo;re a history buff, a movie lover, or a
            literature enthusiast, this game will test how well you know these
            famous lines. You can compete with friends, see how well you score,
            and compare your results on the leaderboard!
          </p>
          <p className="text-left">
            The game is designed for people of all ages and knowledge levels. If
            you enjoy trivia games and love a good challenge, you&rsquo;re in
            the right place. The faster you answer, the more points you earn, so
            speed is key to achieving the highest score.
          </p>
        </div>

        {/* Rules Section */}
        <div className="max-w-full space-y-6 text-lg text-gray-800">
          <h2 className="text-3xl font-semibold text-left text-blue-500">
            Game Rules
          </h2>
          <ul className="list-disc pl-6 space-y-4 text-left">
            <li>
              <strong>Question Format:</strong> Each question consists of a
              famous quote with one missing word. You will be provided with four
              multiple-choice options, and you must select the one that
              correctly fills in the blank.
            </li>
            <li>
              <strong>Timing:</strong> You have 5 minutes (300 seconds) to
              answer all 10 questions. The timer will count down as you progress
              through the quiz. If the timer runs out before you complete all
              questions, the game will end automatically.
            </li>
            <li>
              <strong>Scoring:</strong> Each correct answer earns you 10 points.
              Your score will be updated after each question. Incorrect answers
              do not impact your score, so feel free to guess if you&rsquo;re
              unsure, but remember that getting more correct answers will give
              you a higher final score.
            </li>
            <li>
              <strong>Answering:</strong> You can only select one answer per
              question, so take your time to read the options carefully before
              choosing. Once you&rsquo;ve selected an answer, you&rsquo;ll
              receive immediate feedback showing whether it was correct (in
              green) or incorrect (in red).
            </li>
            <li>
              <strong>Game End:</strong> The game will end either when
              you&rsquo;ve completed all 10 questions or when the time runs out.
              Once the game ends, your final score will be displayed, and
              you&rsquo;ll be given the option to enter your name and submit
              your score to the leaderboard.
            </li>
            <li>
              <strong>Leaderboard:</strong> After finishing the game, you can
              view the leaderboard to see how your score compares to others. If
              your score is high enough, you&rsquo;ll earn a spot on the
              leaderboard. Challenge your friends to beat your score!
            </li>
            <li>
              <strong>Play Again:</strong> Once you&rsquo;ve finished the game,
              you can click the &quot;Play Again&quot; button to start a new
              round and try to improve your score. Challenge yourself and see if
              you can score higher!
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
