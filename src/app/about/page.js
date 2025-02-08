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
            Welcome to Bible Quotes Quiz
          </h1>

          <h2 className="text-2xl text-[#D32F2F] mb-5">Our Story</h2>
          <p className="text-lg leading-7 mb-4">
            Bible Quotes Quiz was created with one goal in mind: to provide a
            fun and engaging way for people to test their knowledge of famous
            Bible quotes. As a developer with a passion for scripture and
            interactive experiences, I, Shivam Upadhyay, wanted to create a
            platform where users can explore and challenge themselves with
            timeless words of wisdom from the Bible.
          </p>
          <p className="text-lg leading-7 mb-6">
            Inspired by my deep appreciation for the Bible and trivia, I
            developed Bible Quotes Quiz as a space to bring people closer to the
            inspiring messages found within scripture.
          </p>

          <h2 className="text-2xl text-[#D32F2F] mt-10 mb-5">Our Mission</h2>
          <p className="text-lg leading-7 mb-4">
            At Bible Quotes Quiz, our mission is simple: to make discovering and
            learning famous Bible quotes both enjoyable and enlightening.
            Through our quizzes, we aim to educate, entertain, and challenge
            users with verses and passages that have shaped faith and guided
            countless lives.
          </p>
          <ul className="text-lg list-inside list-disc pl-5 mb-6">
            <li>
              <strong>Purpose:</strong> To offer an engaging platform for
              discovering and testing knowledge of Bible quotes.
            </li>
            <li>
              <strong>Values:</strong> Faith, learning, and a deep respect for
              sacred texts.
            </li>
            <li>
              <strong>Goals:</strong> To provide a variety of quizzes covering
              different books and themes from the Bible, while continuously
              expanding our database with new and inspiring content.
            </li>
          </ul>

          <h2 className="text-2xl text-[#D32F2F] mt-10 mb-5">
            Why Bible Quotes Quiz?
          </h2>
          <ul className="text-lg list-inside list-disc pl-5 mb-6">
            <li>
              <strong>Interactive:</strong> Our quizzes are designed to be both
              challenging and fun, offering users a chance to test their
              biblical knowledge.
            </li>
            <li>
              <strong>Educational:</strong> Each quiz is an opportunity to learn
              more about the Bible—whether it’s a verse from the Old Testament,
              a parable of Jesus, or the wisdom of the Psalms.
            </li>
            <li>
              <strong>Diverse:</strong> We feature quotes from various parts of
              the Bible, spanning different genres and historical periods.
            </li>
          </ul>

          <h2 className="text-2xl text-[#D32F2F] mt-10 mb-5">Social Proof</h2>
          <p className="text-lg leading-7 mb-6">
            Bible Quotes Quiz has quickly become a favorite among Bible
            enthusiasts and trivia lovers. Here’s what some of our users have
            said:
          </p>
          <blockquote className="text-xl italic border-l-4 border-[#D32F2F] pl-5 mb-6 text-red-500">
            “I never knew I could connect so deeply with scripture! The quizzes
            are both fun and spiritually uplifting!” – Lisa M.
          </blockquote>
          <blockquote className="text-xl italic border-l-4 border-[#D32F2F] pl-5 mb-6 text-red-500">
            “A perfect blend of faith, entertainment, and education. I’m
            inspired every time I take a quiz!” – John D.
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
            Join the Bible Quotes Quiz Community
          </h2>
          <p className="text-lg leading-7 mb-6">
            We’re building a community of Bible lovers, trivia enthusiasts, and
            lifelong learners. Join us and put your biblical knowledge to the
            test!
          </p>
        </div>
      </div>
    </>
  );
};

export default AboutPage;
