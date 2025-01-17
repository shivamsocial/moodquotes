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
            Welcome to Mood Songs
          </h1>

          <h2 className="text-2xl text-[#4CAF50] mb-5">Our Story</h2>
          <p className="text-lg leading-7 mb-4">
            Mood Songs was developed on a simple idea: to match songs based on
            mood and genre. As a passionate developer, I, Shivam Upadhyay,
            created a platform that goes beyond playlists to offer mood and
            genre-specific YouTube playlists.
          </p>
          <p className="text-lg leading-7 mb-6">
            My love for music has driven me to create a space where people can
            find the perfect song for any moment.
          </p>

          <h2 className="text-2xl text-[#4CAF50] mt-10 mb-5">Our Mission</h2>
          <p className="text-lg leading-7 mb-4">
            At Mood Songs, our mission is to make music discovery easier and
            more personal. With just one click, anyone can access a playlist
            that fits their mood. We cover over 20 moods and 10 languages,
            ensuring there is always a song that matches your emotional state.
          </p>
          <ul className="text-lg list-inside list-disc pl-5 mb-6">
            <li>
              <strong>Purpose:</strong> Provide an intuitive platform for mood
              and genre-based music discovery.
            </li>
            <li>
              <strong>Values:</strong> Simplicity, personalization, and a deep
              love for music.
            </li>
            <li>
              <strong>Goals:</strong> To offer personalized song recommendations
              based on mood and genre.
            </li>
          </ul>

          <h2 className="text-2xl text-[#4CAF50] mt-10 mb-5">
            Why Mood Songs?
          </h2>
          <ul className="text-lg list-inside list-disc pl-5 mb-6">
            <li>
              <strong>Unique:</strong> Every song and playlist is handpicked
              with research in all 10 languages.
            </li>
            <li>
              <strong>Global and Local:</strong> Mood Songs integrates with 10
              languages, making music recommendations accessible worldwide.
            </li>
          </ul>

          <h2 className="text-2xl text-[#4CAF50] mt-10 mb-5">Social Proof</h2>
          <p className="text-lg leading-7 mb-6">
            Mood Songs has resonated with music enthusiasts across the internet.
            Here’s what some of our users have said on social media:
          </p>
          <blockquote className="text-xl italic border-l-4 border-[#4CAF50] pl-5 mb-6 text-yellow-500">
            “Mood Songs is my daily go-to for finding songs that lift me up or
            calm me down. It’s like having a musical friend who gets me.” –
            Sarah L.
          </blockquote>
          <blockquote className="text-xl italic border-l-4 border-[#4CAF50] pl-5 mb-6 text-yellow-500">
            “Finally, a platform that doesn’t just dump random playlists but
            actually feels like it knows my vibe.” – Ankit K.
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
              className="rounded-full border-4 border-[#4CAF50]"
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
            Join the Mood Songs Community
          </h2>
          <p className="text-lg leading-7 mb-6">
            We’re not just a website; we’re a community of music lovers. Join us
            on this journey.
          </p>
        </div>
      </div>
    </>
  );
};

export default AboutPage;
