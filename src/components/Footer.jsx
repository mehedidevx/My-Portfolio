import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-base-200 text-base-content">
      <div className="container mx-auto px-4 py-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Left */}
          <div className="text-center md:text-left">
            <h2 className="text-xl font-bold text-[#00BBA7] mb-2">
              Md Mehedi Hasan
            </h2>
            <p className="text-sm">
              Frontend Developer | MERN Stack Enthusiast <br />
              &copy; {new Date().getFullYear()} All rights reserved.
            </p>
          </div>

          {/* Center - Social Icons */}
          <div className="flex space-x-6 text-2xl">
            <a
              href="https://github.com/mehedidevx"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#00BBA7]"
            >
              <FaGithub />
            </a>
            <a
              href="https://linkedin.com/in/mehedidevx"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#00BBA7]"
            >
              <FaLinkedin />
            </a>
            <a
              href="mailto:mehedi.devx@gmail.com"
              className="hover:text-[#00BBA7]"
            >
              <FaEnvelope />
            </a>
          </div>

          {/* Right */}
          <div className="text-center md:text-right">
            <p className="text-sm">
              Built with ❤️ using React & Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
