// components/Footer.js
export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="container mx-auto flex justify-between items-center">
        <p>
          &copy; {new Date().getFullYear()} Quotes Game. All rights reserved.
        </p>
        <ul className="flex gap-4">
          <li>
            <a href="/terms" className="hover:underline">
              Terms & Conditions
            </a>
          </li>
          <li>
            <a href="/privacy" className="hover:underline">
              Privacy Policy
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
