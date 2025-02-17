"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
  {
    question: "Is this app suitable for beginners?",
    answer:
      "Absolutely! We offer quizzes for all levels, from beginners to advanced Bible scholars.",
  },
  {
    question: "Can I use this for group Bible study?",
    answer: "Yes! Many use our platform for collective learning.",
  },
  {
    question: "Is the app free to use?",
    answer:
      "Yes! Our app is completely free, with optional premium features for an enhanced experience.",
  },
  {
    question: "Can I track my progress?",
    answer:
      "Definitely! You can track your quiz scores and revisit past attempts to improve over time.",
  },
];

export default function Home() {
  const [selectedOption, setSelectedOption] = useState(null);
  const [sampleFeedback, setSampleFeedback] = useState("");
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const sampleOptions = [
    { label: "Trusts", value: "trusts" },
    { label: "Believes", value: "believes" },
    { label: "Follows", value: "follows" },
    { label: "Loves", value: "loves" },
  ];

  const checkMCQAnswer = (e) => {
    e.preventDefault();
    if (selectedOption === "believes") {
      setSampleFeedback(
        "Correct! From John 3:16 - '...whoever believes in him...'"
      );
    } else {
      setSampleFeedback(
        "Oops! The correct answer is 'believes' from John 3:16."
      );
    }
  };

  return (
    <div className="text-center space-y-8 overflow-hidden">
      {/* Hero Section */}
      <motion.header
        transition={{ duration: 0.8 }}
        className="relative py-28 bg-gradient-to-br from-yellow-400 via-orange-500 to-orange-600 text-white overflow-hidden"
      >
        <div className="absolute inset-0 opacity-10 bg-[url('/grid.svg')]" />
        <div className="max-w-6xl mx-auto px-4 relative">
          <motion.h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight drop-shadow-xl bg-gradient-to-r from-amber-200 to-white bg-clip-text text-transparent">
            <span className="text-black">✝️</span> Bible Quotes Quiz
          </motion.h1>

          <motion.p
            transition={{ delay: 0.3 }}
            className="text-2xl mb-8 font-medium max-w-2xl mx-auto"
          >
            Deepen your faith and knowledge of Scripture through engaging
            quizzes and challenges.
          </motion.p>
          <motion.div transition={{ type: "spring", stiffness: 100 }}>
            <Link
              href="/game"
              className="inline-flex items-center px-8 py-4 space-x-3 bg-white text-purple-800 text-xl md:text-2xl font-black rounded-full transition-all hover:scale-105 shadow-2xl hover:shadow-purple-200 ring-4 ring-white/30"
            >
              <span className="animate-pulse">📖</span>
              <span>Start Your Journey</span>
              <span className="opacity-70">→</span>
            </Link>
          </motion.div>
        </div>
      </motion.header>

      {/* About Section */}
      <SectionWrapper>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div className="space-y-6 text-left">
            <h2 className="text-4xl font-black bg-gradient-to-r from-purple-800 to-blue-700 bg-clip-text text-transparent">
              Why Bible Quotes Quiz?
            </h2>
            <p className="text-lg text-gray-600">
              Our platform is designed to help you engage with Scripture in a
              meaningful way. Whether you&apos;re a seasoned Bible scholar or
              just starting your faith journey, our quizzes will challenge and
              inspire you.
            </p>
            <ul className="space-y-4">
              {[
                "🧠 Memorize Scripture: Learn and retain key Bible verses",
                "⏱️ Timed Challenges: Test your knowledge under pressure",
                "📊 Track Progress: See your spiritual growth over time",
                "🌱 Daily Devotionals: Start your day with a Bible verse",
                "🏆 Earn Badges: Unlock achievements for milestones",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-lg">
                  <span className="text-2xl shrink-0">
                    {item.split(" ")[0]}
                  </span>
                  <span>{item.slice(3)}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div className="relative h-96 rounded-2xl overflow-hidden shadow-xl border-8 border-white">
            <Image
              src="/images/leaderboard.png"
              alt="Bible study interface preview"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </motion.div>
        </div>
      </SectionWrapper>

      {/* Features Grid */}
      <SectionWrapper bg="dark">
        <h2 className="text-4xl font-black mb-12 text-white">
          What You&apos;ll Gain
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <FeatureCard
            icon="📑"
            title="Scripture Mastery"
            text="Master key verses from every book of the Bible"
            dark
          />
          <FeatureCard
            icon="✝️"
            title="Biblical Themes"
            text="Explore themes like grace, redemption, and faith"
            dark
          />
          <FeatureCard
            icon="🏅"
            title="Spiritual Growth"
            text="Track your progress and earn achievements"
            dark
          />
        </div>
      </SectionWrapper>

      {/* Sample MCQ Quiz Section */}
      <SectionWrapper>
        <div className="max-w-xl mx-auto text-center space-y-6">
          <motion.h2
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-4xl font-bold"
          >
            Try a Sample Quiz
          </motion.h2>

          <motion.p
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-lg text-gray-600"
          >
            Complete this famous Bible verse to test your knowledge:
          </motion.p>

          <motion.div
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="bg-white p-8 rounded-lg shadow-lg"
          >
            <p className="text-2xl font-semibold mb-4">
              &quot;For God so loved the world that he gave his one and only
              Son, that whoever <span className="underline">__________</span> in
              him shall not perish but have eternal life.&quot;
            </p>

            <form onSubmit={checkMCQAnswer} className="flex flex-col gap-4">
              <div className="flex flex-col space-y-3">
                {sampleOptions.map((option, index) => (
                  <motion.button
                    key={index}
                    type="button"
                    onClick={() => setSelectedOption(option.value)}
                    className={`p-3 border rounded-lg text-lg transition-all duration-300
                ${
                  selectedOption === option.value
                    ? "bg-blue-500 text-white scale-105"
                    : "bg-white text-gray-800 hover:bg-blue-100"
                }`}
                    transition={{
                      delay: 0.3 + index * 0.1,
                      duration: 0.4,
                      ease: "easeOut",
                    }}
                    whileHover={{ scale: 1.05 }}
                  >
                    {option.label}
                  </motion.button>
                ))}
              </div>

              <motion.button
                type="submit"
                className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Check Answer
              </motion.button>
            </form>

            {sampleFeedback && (
              <motion.p
                transition={{ delay: 0.2, duration: 0.5 }}
                className="mt-4 text-lg font-medium text-green-600"
              >
                {sampleFeedback}
              </motion.p>
            )}

            <motion.p
              transition={{ delay: 0.4, duration: 0.5 }}
              className="mt-2 text-gray-600 text-sm"
            >
              Hint: Gospel of John chapter 3 verse 16
            </motion.p>
          </motion.div>
        </div>
      </SectionWrapper>

      {/* Testimonials Section */}
      <SectionWrapper bg="gray">
        <h2 className="text-4xl font-black mb-12">What Our Users Say</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              name: "Sarah T.",
              testimonial:
                "This app has transformed my daily Bible study. I've memorized so many verses!",
              location: "Texas, USA",
            },
            {
              name: "David L.",
              testimonial:
                "The quizzes are challenging but so rewarding. My faith has grown tremendously.",
              location: "London, UK",
            },
            {
              name: "Maria G.",
              testimonial:
                "I love the daily challenges. It's the perfect way to start my day with God's Word.",
              location: "Madrid, Spain",
            },
          ].map((testimonial, index) => (
            <motion.div
              key={index}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:border-purple-100 transition-all"
            >
              <p className="text-gray-600 italic mb-4">
                &quot;{testimonial.testimonial} &quot;
              </p>
              <div className="text-lg font-bold">{testimonial.name}</div>
              <div className="text-sm text-gray-500">
                {testimonial.location}
              </div>
            </motion.div>
          ))}
        </div>
      </SectionWrapper>

      {/* FAQ Section */}
      <SectionWrapper>
        <h2 className="text-4xl font-black mb-12 text-center">
          Frequently Asked Questions
        </h2>
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={faq.question}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-5 rounded-xl shadow-md border border-gray-200 hover:shadow-lg transition-all cursor-pointer"
              onClick={() => toggleFAQ(index)}
            >
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-bold flex items-center gap-2 text-purple-600">
                  {faq.question}
                </h3>
                {openIndex === index ? (
                  <ChevronUp className="text-purple-500 transition-transform" />
                ) : (
                  <ChevronDown className="text-gray-400 transition-transform" />
                )}
              </div>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.p
                    exit={{ opacity: 0, height: 0 }}
                    className="text-gray-600 pt-3"
                  >
                    {faq.answer}
                  </motion.p>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </SectionWrapper>
    </div>
  );
}

// Reusable Components
const SectionWrapper = ({ children, bg = "light" }) => (
  <motion.section
    className={`py-16 px-4 ${
      bg === "dark"
        ? "bg-gray-900 text-white"
        : bg === "gradient"
        ? "bg-gradient-to-tr from-purple-600 to-blue-500 text-white"
        : bg === "gray"
        ? "bg-gray-50"
        : "bg-white"
    }`}
  >
    <div className="max-w-7xl mx-auto">{children}</div>
  </motion.section>
);

const FeatureCard = ({ icon, title, text, dark }) => (
  <motion.div
    whileHover={{ y: -10 }}
    className={`p-8 rounded-xl shadow-lg transition-all ${
      dark
        ? "bg-gray-800 hover:bg-gray-700 border border-gray-700"
        : "bg-white hover:border-purple-100 border border-gray-100"
    }`}
  >
    <div
      className={`text-6xl mb-4 animate-float ${
        dark ? "text-white" : "text-purple-500"
      }`}
    >
      {icon}
    </div>
    <h3
      className={`text-2xl font-black mb-4 ${
        dark ? "text-white" : "text-gray-900"
      }`}
    >
      {title}
    </h3>
    <p className={dark ? "text-gray-300" : "text-gray-600"}>{text}</p>
  </motion.div>
);

const StatBadge = ({ icon, value, label }) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    className="flex items-center gap-3 bg-white/10 px-6 py-3 rounded-full backdrop-blur-sm"
  >
    <span className="text-2xl">{icon}</span>
    <div className="text-left">
      <div className="text-xl font-bold">{value}</div>
      <div className="text-sm opacity-80">{label}</div>
    </div>
  </motion.div>
);
