import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-base-200 text-base-content py-8 mt-12 border-t border-gray-300 dark:border-gray-700">
      <div className="container mx-auto px-6 ">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Left */}
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-extrabold text-[#00BBA7] mb-2 select-none">
              Md Mehedi Hasan
            </h2>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Frontend Developer | MERN Stack Enthusiast <br />
              &copy; {new Date().getFullYear()} All rights reserved.
            </p>
          </div>

          {/* Center - Social Icons */}
          <div className="flex space-x-8 text-3xl text-gray-600 dark:text-gray-400">
            <a
              href="https://github.com/mehedidevx"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#00BBA7] transition transform hover:scale-110"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
            <a
              href="https://linkedin.com/in/mehedidevx"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#00BBA7] transition transform hover:scale-110"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
            <a
              href="mailto:mehedi.devx@gmail.com"
              className="hover:text-[#00BBA7] transition transform hover:scale-110"
              aria-label="Email"
            >
              <FaEnvelope />
            </a>
          </div>

          {/* Right */}
          <div className="text-center md:text-right text-gray-600 dark:text-gray-400 text-sm select-none">
            Built with ❤️ using React & Tailwind CSS
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
