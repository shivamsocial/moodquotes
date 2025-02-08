"use client";

// components/Footer.js
import Link from "next/link";
import { motion } from "framer-motion";
import { Facebook, Twitter, Instagram, Mail } from "lucide-react";
import { FaLinkedin, FaTwitter } from "react-icons/fa";

export default function Footer() {
  const footerLinks = [
    {
      title: "Quick Links",
      items: [
        { name: "About Us", href: "/about" },
        { name: "Contact", href: "/contact" },
      ],
    },
    {
      title: "Legal",
      items: [
        { name: "Privacy Policy", href: "/privacy" },
        { name: "Terms of Service", href: "/terms" },
      ],
    },
  ];

  const socialLinks = [
    { icon: <FaTwitter />, href: "https://x.com/shivamupdate" },
    { icon: <FaLinkedin />, href: "https://www.linkedin.com/in/shivupa/" },
    { icon: <Mail />, href: "mailto:shivamupadhyaysocial@gmail.com" },
  ];

  return (
    <footer className="bg-gray-900 text-white pt-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 pb-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <span className="text-3xl">✝️</span>
              <span className="text-2xl font-bold bg-gradient-to-r from-gold-400 to-white bg-clip-text text-transparent">
                Bible Mastery
              </span>
            </Link>
            <p className="text-gray-400">
              Deepen your scripture knowledge through engaging quizzes.
            </p>
          </div>

          {/* Footer Links */}
          {footerLinks.map((section) => (
            <div key={section.title} className="space-y-4">
              <h3 className="text-lg font-semibold text-gold-400">
                {section.title}
              </h3>
              <ul className="space-y-2">
                {section.items.map((item) => (
                  <motion.li
                    key={item.name}
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring" }}
                  >
                    <Link
                      href={item.href}
                      className="text-gray-300 hover:text-yellow-300 transition-colors"
                    >
                      {item.name}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Social & Copyright */}
        <div className="border-t border-gray-800 py-6 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex space-x-6">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2 }}
                  className="text-gray-400 hover:text-yellow-400 text-2xl"
                >
                  {link.icon}
                </motion.a>
              ))}
            </div>
            <p className="text-gray-400 text-center">
              © {new Date().getFullYear()} Bible Mastery. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
