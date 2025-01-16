// app/game/page.js
import Head from "next/head";
import Question from "../components/Questions";
import Timer from "../components/Timer";
import Leaderboard from "../components/Leaderboard";

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
      <Head>
        <meta name="description" content={pageDescription} />
        <meta name="keywords" content={keywords} />
        <meta name="author" content="Your Name" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        {/* Open Graph meta tags */}
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:url" content={siteUrl} />

        {/* Twitter meta tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@quotesgame" />
        <meta name="twitter:creator" content="@yourhandle" />

        {/* Structured Data (JSON-LD) */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Game",
              "name": "Quotes Game - Guess the Quotes Quiz",
              "description": "${pageDescription}",
              "url": "${siteUrl}",
              "author": {
                "@type": "Person",
                "name": "Your Name"
              },
              "genre": "Trivia",
              "keywords": "${keywords}"
            }
          `}
        </script>

        {/* Dynamic Title */}
        <title>{pageTitle}</title>
      </Head>

      <div>
        <h2 className="text-3xl font-bold text-center text-blue-600">
          Quotes Game
        </h2>
        <Timer />
        <Question />
        <Leaderboard />
      </div>
    </>
  );
}
