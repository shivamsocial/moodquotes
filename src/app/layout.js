// app/layout.js
import "./globals.css";
import Navbar from "../app/components/Navbar";
import Footer from "../app/components/Footer";
import ThemeSwitcher from "../app/components/ThemeSwitcher"; // Import the client-side component
import Head from "next/head";
import Link from "next/link";

export default function RootLayout({ children, title }) {
  const pageTitle = title
    ? `${title} | Quotes Game`
    : "Quotes Game - Guess the Quotes Quiz";
  const pageDescription =
    "Test your knowledge of famous quotes in this fun quotes game. Play now and see how many quotes you can guess! Compete on the leaderboard with friends and players around the world.";
  const keywords =
    "quotes game, quotes quiz, guess the quotes, quote game, quote challenge, quiz game, famous quotes, fun quiz, guess the quote, trivia game, leaderboard";
  const siteUrl = "https://www.quotesgame.com";

  return (
    <html lang="en">
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

        {/* Link to Google Fonts */}
        <Link
          href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800&display=swap"
          rel="stylesheet"
        ></Link>
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
