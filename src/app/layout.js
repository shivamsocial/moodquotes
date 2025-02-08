import "./globals.css";
import Navbar from "../app/components/Navbar";
import Footer from "../app/components/Footer";
import { Analytics } from "@vercel/analytics/react";
import { Metadata } from "next";

export const metadata = {
  title: "Bible Quotes Quiz - Test Your Knowledge of Scripture",
  description:
    "Challenge yourself with this Bible Quotes Quiz! See how well you know the Word of God by guessing famous Bible verses. Play now and grow your knowledge of scripture!",
  keywords:
    "Bible quiz, scripture quiz, Bible verses, guess the Bible quote, Bible trivia, Christian quiz, faith-based quiz, New Testament, Old Testament, religious quiz",
  author: "Your Name",
  openGraph: {
    title: "Bible Quotes Quiz - Test Your Knowledge of Scripture",
    description:
      "See how well you know the Word of God by guessing famous Bible verses in this engaging quiz. Play now and strengthen your faith!",
    url: "https://www.mood2quotes.com",
  },
  twitter: {
    card: "summary_large_image",
    site: "@biblequotesquiz",
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
