// components/Navbar.js
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="bg-blue-600 text-white py-4 shadow-lg">
      <nav className="container mx-auto flex justify-between items-center px-4">
        <Link href="/" className="text-2xl font-bold hover:underline">
          Quotes Game
        </Link>
        <ul className="flex gap-6 text-lg">
          <li>
            <Link href="/" className="hover:underline">
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className="hover:underline">
              About
            </Link>
          </li>
          <li>
            <Link href="/contact" className="hover:underline">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
