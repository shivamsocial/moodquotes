// app/layout.js
import "./globals.css";
import Navbar from "../app/components/Navbar";
import Footer from "../app/components/Footer";
import ThemeSwitcher from "../app/components/ThemeSwitcher"; // Import the client-side component
import Head from "next/head";
import Link from "next/link";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <meta
          name="description"
          content="Test your knowledge of famous quotes in this fun quotes game. Play now and see how many quotes you can guess! Compete on the leaderboard with friends and players around the world."
        />
        <meta
          name="keywords"
          content="quotes game, quotes quiz, guess the quotes, quote game, quote challenge, quiz game, famous quotes, fun quiz, guess the quote, trivia game, leaderboard"
        />
        <meta name="author" content="Your Name" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          property="og:title"
          content="Quotes Game - Guess the Quotes Quiz"
        />
        <meta
          property="og:description"
          content="Test your knowledge of famous quotes in this fun quotes game. Play now and see how many quotes you can guess! Compete on the leaderboard with friends and players around the world."
        />
        <Link
          href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800&display=swap"
          rel="stylesheet"
        ></Link>
        <meta property="og:image" content="/images/og-image.jpg" />
        <meta property="og:url" content="https://www.quotesgame.com" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@quotesgame" />
        <meta name="twitter:creator" content="@yourhandle" />
        <title>Quotes Game - Guess the Quotes Quiz</title>
      </Head>
      <body className="flex flex-col min-h-screen bg-white text-gray-800 font-nunito">
        <Navbar />

        <main className="container mx-auto flex-grow py-8 px-4 sm:px-6 lg:px-8">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}
