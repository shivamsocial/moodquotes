import Image from "next/image";
import Link from "next/link";
import { FaTelegram, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa"; // Importing social media icons

const Contact = () => {
  return (
    <>
      <div className="flex flex-col items-center p-6 border-l border-gray-300 bg-white shadow-lg rounded-lg min-w-[250px]">
        <img
          src="/images/shivam.jpg"
          alt="Shivam Upadhyay Photo"
          width={200}
          height={200}
          className="rounded-full mb-6 border-4 border-green-500"
        />
        <h3 className="text-2xl text-gray-800 mb-6">Connect with Me</h3>
        <ul className="flex justify-center gap-6 mb-6">
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

        <h2 className="text-2xl text-gray-800 mt-10 mb-6">
          Join the Quiz Quotes Community
        </h2>

        <div></div>
      </div>
    </>
  );
};

export default Contact;
