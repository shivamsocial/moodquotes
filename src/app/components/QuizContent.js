import React from "react";

const QuizContent = () => {
  return (
    <div className="mt-8 w-full p-6 bg-red-50 rounded-lg shadow-lg border border-red-200">
      <h3 className="text-4xl font-bold mb-6 text-red-600 underline decoration-red-400">
        Enhance Your Knowledge
      </h3>
      <p className="mb-6 text-lg leading-relaxed text-gray-800">
        Quizzes are a fantastic way to test your knowledge and learn new
        information. They can help reinforce what you already know and introduce
        you to new concepts. Engaging with quizzes can also improve your memory
        retention and critical thinking skills.
      </p>
      <p className="mb-6 text-lg leading-relaxed text-gray-800">
        Here are some tips to maximize your learning experience:
      </p>
      <ul className="list-disc list-inside mb-6 text-lg leading-relaxed text-gray-800">
        <li>
          Review the material before taking the quiz to refresh your memory.
        </li>
        <li>
          Take notes during the quiz to highlight areas where you need
          improvement.
        </li>
        <li>
          After completing the quiz, research any questions you found
          challenging.
        </li>
      </ul>
      <p className="mb-6 text-lg leading-relaxed text-gray-800">
        Remember, the goal of a quiz is not just to score well but to learn and
        grow. Embrace the challenge and view each question as an opportunity to
        expand your knowledge.
      </p>
      <p className="mb-6 text-lg leading-relaxed text-gray-800">
        Additionally, consider joining study groups or online forums where you
        can discuss quiz topics with others. Sharing insights and learning from
        peers can significantly enhance your understanding of the subject
        matter.
      </p>
      <p className="mb-6 text-lg leading-relaxed text-gray-800">
        Here are some motivational quotes to inspire you:
      </p>
      <blockquote className="italic mb-6 text-lg leading-relaxed border-l-4 border-red-500 pl-4 bg-red-100">
        &quot;The future belongs to those who believe in the beauty of their
        dreams.&quot; - Eleanor Roosevelt
      </blockquote>
      <blockquote className="italic mb-6 text-lg leading-relaxed border-l-4 border-red-500 pl-4 bg-red-100">
        &quot;Success is not final, failure is not fatal: It is the courage to
        continue that counts.&quot; - Winston S. Churchill
      </blockquote>
      <p className="mb-6 text-lg leading-relaxed text-gray-800">
        Finally, remember that learning is a lifelong journey. Each quiz you
        take is a step towards greater knowledge and understanding. Keep
        challenging yourself, and don&apos;t hesitate to explore new topics that
        pique your interest.
      </p>
    </div>
  );
};

export default QuizContent;
