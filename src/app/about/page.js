import Link from "next/link";
import { FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";
import Navbar from "../components/Navbar";

const AboutPage = () => {
  return (
    <>
      <div className="flex flex-wrap p-10 bg-inherit space-x-4">
        {/* Main Content */}
        <div className="flex-1 p-5 max-w-3xl min-w-[300px]">
          <h1 className="text-4xl text-white font-bold mb-6">
            Welcome to Quote Quiz
          </h1>

          <h2 className="text-2xl text-[#D32F2F] mb-5">Our Story</h2>
          <p className="text-lg leading-7 mb-4">
            Quote Quiz was created with one goal in mind: to provide a fun and
            engaging way for people to test their knowledge of famous quotes. As
            a developer with a passion for both literature and interactive
            experiences, I, Shivam Upadhyay, wanted to create a platform where
            users can explore and challenge themselves with quotes from various
            genres and time periods.
          </p>
          <p className="text-lg leading-7 mb-6">
            Inspired by my love for words and trivia, I developed Quote Quiz as
            a space to bring people closer to the timeless wisdom and wit
            captured in quotes.
          </p>

          <h2 className="text-2xl text-[#D32F2F] mt-10 mb-5">Our Mission</h2>
          <p className="text-lg leading-7 mb-4">
            At Quote Quiz, our mission is simple: to make discovering and
            learning famous quotes enjoyable. Through our quizzes, we aim to
            educate, entertain, and challenge users with quotes that have shaped
            history and culture.
          </p>
          <ul className="text-lg list-inside list-disc pl-5 mb-6">
            <li>
              <strong>Purpose:</strong> To offer an engaging platform for
              discovering and testing knowledge of famous quotes.
            </li>
            <li>
              <strong>Values:</strong> Fun, learning, and a deep appreciation
              for the power of words.
            </li>
            <li>
              <strong>Goals:</strong> To provide a variety of quizzes that cover
              different categories of quotes and to continuously expand our
              database with new and exciting content.
            </li>
          </ul>

          <h2 className="text-2xl text-[#D32F2F] mt-10 mb-5">
            Why Quote Quiz?
          </h2>
          <ul className="text-lg list-inside list-disc pl-5 mb-6">
            <li>
              <strong>Interactive:</strong> Our quizzes are designed to be both
              challenging and fun, offering users a chance to test their
              knowledge.
            </li>
            <li>
              <strong>Educational:</strong> Each quiz is an opportunity to learn
              something new, whether it&apos;s a quote from a famous
              philosopher, historical figure, or popular culture.
            </li>
            <li>
              <strong>Diverse:</strong> We feature quotes from various genres,
              ranging from literature and history to movies and music.
            </li>
          </ul>

          <h2 className="text-2xl text-[#D32F2F] mt-10 mb-5">Social Proof</h2>
          <p className="text-lg leading-7 mb-6">
            Quote Quiz has quickly become a favorite among quote enthusiasts and
            trivia lovers. Here&apos;s what some of our users have said:
          </p>
          <blockquote className="text-xl italic border-l-4 border-[#D32F2F] pl-5 mb-6 text-yellow-500">
            “I never knew I knew so many quotes! The quizzes are fun and I’ve
            learned a lot!” – Lisa M.
          </blockquote>
          <blockquote className="text-xl italic border-l-4 border-[#D32F2F] pl-5 mb-6 text-yellow-500">
            “A perfect blend of entertainment and education. I’m hooked on these
            quizzes!” – John D.
          </blockquote>
        </div>

        {/* Sidebar */}
        <div className="flex-1 p-5 border-l border-gray-300 text-center bg-white shadow-lg rounded-lg min-w-[250px]">
          <div className="flex justify-center mb-6">
            <img
              src="/images/shivam.jpg"
              alt="Shivam Upadhyay Photo"
              width={200}
              height={200}
              className="rounded-full border-4 border-[#D32F2F]"
            />
          </div>
          <h3 className="text-2xl text-gray-800 mb-5">Connect with Me</h3>
          <ul className="flex justify-center gap-5 mb-6">
            <li>
              <Link href="https://www.linkedin.com/in/shivupa/">
                <FaLinkedin className="text-4xl text-[#0077b5] transition-colors cursor-pointer hover:text-[#005582]" />
              </Link>
            </li>
            <li>
              <Link href="https://x.com/shivamupdate">
                <FaTwitter className="text-4xl text-[#1da1f2] transition-colors cursor-pointer hover:text-[#1681bf]" />
              </Link>
            </li>
            <li>
              <Link href="mailto:shivamupadhyaysocial@gmail.com">
                <FaEnvelope className="text-4xl text-[#1da1f2] transition-colors cursor-pointer hover:text-[#1681bf]" />
              </Link>
            </li>
          </ul>

          <h2 className="text-2xl text-gray-800 mt-10 mb-5">
            Join the Quote Quiz Community
          </h2>
          <p className="text-lg leading-7 mb-6">
            We’re building a community of quote lovers, trivia enthusiasts, and
            learners. Join us and put your knowledge to the test!
          </p>
        </div>
      </div>
    </>
  );
};

export default AboutPage;
