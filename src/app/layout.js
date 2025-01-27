import "./globals.css";
import Navbar from "../app/components/Navbar";
import Footer from "../app/components/Footer";
import { Analytics } from "@vercel/analytics/react";
import { Metadata } from "next";

export const metadata = {
  title: "Quotes Quiz - Guess the Quotes Quiz",
  description:
    "Test your knowledge of famous quotes in this fun quotes quiz. Play now and see how many quotes you can guess! Compete on the leaderboard with friends and players around the world.",
  keywords:
    "quotes quiz, guess the quotes, quote quiz, quote challenge, quiz quiz, famous quotes, fun quiz, guess the quote, trivia game, leaderboard",
  author: "Your Name",
  openGraph: {
    title: "Quotes Quiz - Guess the Quotes Quiz",
    description:
      "Test your knowledge of famous quotes in this fun quotes Quiz. Play now and see how many quotes you can guess!",
    url: "https://www.mood2quotes.com",
  },
  twitter: {
    card: "summary_large_image",
    site: "@quotesquiz",
    creator: "@yourhandle",
  },
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen bg-white text-gray-800 font-nunito">
        <Navbar />
        <main className="container mx-auto flex-grow py-8 px-4 sm:px-6 lg:px-8">
          {children}
        </main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
