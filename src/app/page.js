// app/page.js
import Link from "next/link";

export default function Home() {
  return (
    <div className="text-center space-y-8">
      {/* Updated Header */}
      <h1 className="text-5xl font-extrabold text-red-700 mb-6 leading-tight text-center">
        🎉 Welcome to Quotes Quiz Challenge! 🎉
      </h1>
      <h2 className="text-2xl text-gray-600 mb-4">
        Are you ready to test your knowledge and have a blast with friends?
      </h2>

      {/* Updated Introduction Paragraph */}
      <p className="text-xl text-gray-800 max-w-3xl mx-auto mb-6 leading-relaxed">
        Get ready to dive into a world filled with iconic quotes! Whether
        you&apos;re a trivia whiz or just love a good challenge, our Quotes Quiz
        is crafted just for you! Join us on this exciting adventure where you
        can recognize famous lines from movies, literature, and pop culture.
        Let&apos;s see how well you know the words that have shaped our culture!
        🌟
      </p>

      {/* Updated Call to Action Button */}
      <div className="text-center">
        <Link
          href="/game"
          className="inline-block px-8 py-4 bg-gradient-to-r from-green-500 to-teal-600 text-white text-2xl font-bold rounded-full shadow-lg hover:from-green-600 hover:to-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-400 transition-all duration-300"
        >
          🚀 Start the Quiz Now!
        </Link>
      </div>

      {/* Hero Image Section */}
      <div className="flex justify-center mt-12">
        <div className="relative w-full max-w-4xl overflow-hidden rounded-lg shadow-2xl transform transition-transform duration-500 hover:scale-105">
          <img
            src="/images/quotes.png"
            alt="Quotes Quiz Poster"
            className="w-full h-auto object-cover rounded-lg transition-all duration-500 ease-in-out transform hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black opacity-30 rounded-lg"></div>
        </div>
      </div>

      {/* About Section */}
      <div className="min-h-screen bg-gradient-to-b from-red-50 to-red-100 text-black flex flex-col items-center justify-start space-y-12 px-8 py-16">
        <div className="max-w-4xl w-full space-y-6 text-lg text-gray-800">
          <h2 className="text-4xl font-semibold text-left text-red-600 transition-all duration-300 ease-in-out hover:text-red-700">
            What is the Quotes Quiz?
          </h2>
          <p className="text-left leading-relaxed">
            The Quotes Quiz is not just a game; it&apos;s an adventure! 🎈
            You&apos;ll face 10 thrilling questions, each featuring a famous
            quote with one word missing. Your mission? Choose the right word
            from four options. It&apos;s simple, yet exhilarating, especially as
            the timer counts down!
          </p>
          <p className="text-left leading-relaxed">
            With every correct answer, you&apos;ll earn points. The faster you
            answer, the more points you get! Even if you don&apos;t know all the
            answers, you&apos;ll learn new facts and brush up on famous lines
            from history and culture.
          </p>
          <p className="text-left leading-relaxed">
            Each quiz session is a chance to revisit famous lines and discover
            new insights about the quotes that have shaped our world. From
            timeless wisdom to witty one-liners, each question is designed to
            spark your curiosity and engage you in a fun intellectual challenge.
            🌍
          </p>
          <div className="flex justify-center mt-8 transition-all duration-300 ease-in-out transform hover:scale-105">
            <img
              src="/images/QUOTE.png"
              alt="My Favourite Quote"
              className="rounded-xl shadow-2xl max-w-full h-auto object-cover"
            />
          </div>
        </div>

        {/* Why Play Section */}
        <div className="max-w-4xl w-full space-y-6 text-lg text-gray-800">
          <h2 className="text-4xl font-semibold text-left text-red-600 transition-all duration-300 ease-in-out hover:text-blue-700">
            Why Should You Play the Quotes Quiz?
          </h2>
          <p className="text-left leading-relaxed">
            The Quotes Quiz isn&apos;t just about testing what you already know
            – it&apos;s about learning and discovering new quotes that you might
            not have encountered before. Each quote you see will bring you
            closer to becoming a true trivia champion! 🏆
          </p>
          <p className="text-left leading-relaxed">
            As you complete the quiz, you&apos;ll see how well you know the
            quotes. You&apos;ll also get to learn fun facts about each quote,
            making the game even more enjoyable. Whether you&apos;re playing
            alone or challenging friends, the Quotes Quiz will keep you engaged
            with exciting questions and fast-paced gameplay.
          </p>
          <p className="text-left leading-relaxed">
            The Quotes Quiz brings people together! Challenge friends, family,
            or colleagues to see who knows the most iconic lines from history,
            movies, and books. Share your quiz results and compare scores to see
            who truly reigns supreme as the trivia master. 🎊
          </p>
        </div>

        {/* Game Rules Section */}
        <div className="max-w-4xl w-full space-y-6 text-lg text-gray-800">
          <h2 className="text-4xl font-semibold text-left text-red-600 transition-all duration-300 ease-in-out hover:text-blue-700">
            Game Rules – How to Play the Quotes Quiz
          </h2>
          <ul className="list-disc pl-6 space-y-4 text-left leading-relaxed">
            <li>
              <strong>Fill in the Blank:</strong> Each question presents a
              famous quote missing one word. Select the correct word from four
              choices. The quotes come from various media, including movies,
              books, and speeches.
            </li>
            <li>
              <strong>Timer is Ticking:</strong> You have 5 minutes to answer
              all 10 questions. The clock is your enemy, so think fast! Every
              second counts, and the quicker you answer, the higher your score.
              ⏳
            </li>
            <li>
              <strong>Earn Points:</strong> Every correct answer gives you 10
              points. The quicker you answer correctly, the more points
              you&apos;ll earn! Incorrect answers don&apos;t take away points,
              so feel free to guess if you&apos;re not sure.
            </li>
            <li>
              <strong>Leaderboard:</strong> After finishing the quiz, submit
              your score to the leaderboard. Compare your performance with
              others and see if you can top the charts. 📈
            </li>
            <li>
              <strong>Play Again:</strong> If you didn&apos;t achieve your best
              score, play again to improve your results. The more you play, the
              better you&apos;ll get!
            </li>
          </ul>
          <div className="flex justify-center mt-8 transition-all duration-300 ease-in-out transform hover:scale-105">
            <img
              src="/images/leaderboard.png"
              alt="Explaining the quiz rules"
              className="rounded-xl shadow-2xl max-w-full h-auto object-cover"
            />
          </div>
        </div>

        {/* Fun Facts Section */}
        <div className="max-w-4xl w-full space-y-6 text-lg text-gray-800">
          <h2 className="text-4xl font-semibold text-left text-red-600 transition-all duration-300 ease-in-out hover:text-blue-700">
            Fun Facts About Famous Quotes
          </h2>
          <p className="text-left leading-relaxed">
            Here are some interesting tidbits about famous quotes that you may
            encounter in the Quotes Quiz:
          </p>
          <ul className="list-disc pl-6 space-y-4 text-left leading-relaxed">
            <li>
              Did you know that the quote &quot;May the Force be with you&quot;
              from *Star Wars* is one of the most quoted lines in movie history?
              🌌
            </li>
            <li>
              Shakespeare&apos;s famous &quot;To be, or not to be&quot; is
              recognized even by those who have never read his work.
            </li>
            <li>
              The quote &quot;Elementary, my dear Watson&quot; is often
              attributed to Sherlock Holmes, but it never appears in the
              original stories.
            </li>
            <li>
              The phrase &quot;I think, therefore I am,&quot; by René Descartes,
              is one of the most significant philosophical statements ever made.
            </li>
            <li>
              The iconic line &quot;Hasta la vista, baby&quot;from *Terminator
              2* became a cultural phenomenon, often used humorously in pop
              culture. 🎬
            </li>
          </ul>
        </div>

        {/* Pro Tips Section */}
        <div className="max-w-4xl w-full space-y-6 text-lg text-gray-800">
          <h2 className="text-4xl font-semibold text-left text-red-600 transition-all duration-300 ease-in-out hover:text-blue-700">
            Pro Tips to Ace the Quotes Quiz
          </h2>
          <p className="text-left leading-relaxed">
            Want to increase your chances of becoming a trivia champion? Here
            are a few tips:
          </p>
          <ul className="list-disc pl-6 space-y-4 text-left leading-relaxed">
            <li>
              <strong>Speed is Key:</strong> The faster you answer correctly,
              the more points you&apos;ll earn. Practice your speed without
              sacrificing accuracy.
            </li>
            <li>
              <strong>Learn the Quotes:</strong> Familiarize yourself with
              famous quotes from movies, books, and history.
            </li>
            <li>
              <strong>Use Context Clues:</strong> Often, you can guess the
              correct word based on the context of the quote. Think about the
              general meaning to narrow down your options.
            </li>
            <li>
              <strong>Stay Calm:</strong> Don&apos;t let the ticking timer get
              to you. Take a deep breath and trust your instincts. 🧘‍♂️
            </li>
          </ul>
        </div>

        {/* FAQ Section */}
        <div className="max-w-4xl w-full space-y-6 text-lg text-gray-800">
          <h2 className="text-4xl font-semibold text-left text-red-600 transition-all duration-300 ease-in-out hover:text-blue-700">
            Frequently Asked Questions (FAQ)
          </h2>
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold text-left text-red-600">
              How do I start the quiz?
            </h3>
            <p className="text-left leading-relaxed ">
              Simply click on the &quot;Start the Quiz&quot;button on the
              homepage. You&apos;ll be taken to the quiz page where you can
              start answering questions right away. 🎯
            </p>
            <h3 className="text-2xl font-semibold text-left text-red-600">
              Is there a time limit?
            </h3>
            <p className="text-left leading-relaxed">
              Yes, the quiz has a 5-minute timer. Try to answer as quickly as
              possible to score higher points.
            </p>
            <h3 className="text-2xl font-semibold text-left text-red-600">
              Can I play the quiz more than once?
            </h3>
            <p className="text-left leading-relaxed">
              Absolutely! Feel free to play as many times as you want to improve
              your score or just for fun. 🎉
            </p>
            <h3 className="text-2xl font-semibold text-left text-red-600">
              How can I improve my score?
            </h3>
            <p className="text-left leading-relaxed">
              Practice! The more you play, the faster you&apos;ll get at
              recognizing famous quotes. Try to answer as quickly as possible
              and learn new quotes to boost your trivia knowledge.
            </p>
            <h3 className="text-2xl font-semibold text-left text-red-600">
              Where can I see my quiz results?
            </h3>
            <p className="text-left leading-relaxed">
              After completing the quiz, you&apos;ll be shown your score. You
              can also check the leaderboard to compare your performance with
              other players. 📊
            </p>
            <h3 className="text-2xl font-semibold text-left text-red-600">
              Can I share my quiz results with friends?
            </h3>
            <p className="text-left leading-relaxed">
              Yes! After completing the quiz, you can easily share your results
              on social media or directly with friends to challenge them to beat
              your score! 📣
            </p>
            <h3 className="text-2xl font-semibold text-left text-red-600">
              Are there any hints available during the quiz?
            </h3>
            <p className="text-left leading-relaxed">
              Currently, there are no hints available, but we encourage you to
              use your knowledge and intuition to answer the questions. Good
              luck!
            </p>
            <h3 className="text-2xl font-semibold text-left text-red-600">
              What happens if I lose my internet connection during the quiz?
            </h3>
            <p className="text-left leading-relaxed">
              If you lose your internet connection, you may not be able to
              continue the quiz. We recommend ensuring a stable connection
              before starting. If you experience issues, you can restart the
              quiz.
            </p>
          </div>
        </div>

        {/* Final Call to Action */}
        <div className="max-w-4xl w-full text-center space-y-6">
          <h2 className="text-4xl font-semibold text-red-600">
            Ready to Start the Quiz? 🎉
          </h2>
          <p className="text-lg leading-relaxed">
            The quotes are waiting. Test your knowledge, challenge your friends,
            and become a trivia legend! Click below to get started and prove
            that you&apos;re the ultimate Quotes Quiz champion! 🏅
          </p>
          <Link
            href="/game"
            className="inline-block px-8 py-4 bg-gradient-to-r from-green-500 to-teal-600 text-white text-2xl font-bold rounded-full shadow-lg hover:from-green-600 hover:to-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-400 transition-all duration-300"
          >
            🚀 Start the Quiz Now!
          </Link>
        </div>
      </div>
    </div>
  );
}
