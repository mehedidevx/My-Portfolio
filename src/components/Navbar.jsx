import React, { useEffect, useState } from "react";
import Theme from "./Theme";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "skills", "projects", "contact"];
      const scrollPos = window.scrollY + 150;

      for (let id of sections) {
        const section = document.getElementById(id);
        if (section) {
          const offsetTop = section.offsetTop;
          const offsetHeight = section.offsetHeight;

          if (scrollPos >= offsetTop && scrollPos < offsetTop + offsetHeight) {
            setActiveSection(id);
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = (
    <>
      {["home", "about", "skills", "projects", "contact"].map((item) => (
        <li key={item} className="list-none">
          <a
            href={`#${item}`}
            className="relative group font-medium px-3 py-2 text-[16px] tracking-wide transition-colors duration-300"
          >
            <span
              className={
                activeSection === item
                  ? "text-[#00BBA7]"
                  : "  group-hover:text-[#00BBA7]"
              }
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </span>

            {/* Underline */}
            <span
              className={`absolute left-0 bottom-0 h-[2px] bg-[#00BBA7] transition-all duration-500
          ${activeSection === item ? "w-full" : "w-0 group-hover:w-full"}`}
            ></span>
          </a>
        </li>
      ))}
    </>
  );

  return (
    <div className="navbar bg-base-100 backdrop-blur-lg shadow-md sticky top-0 z-50 transition duration-300">
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        {/* Navbar Start */}
        <div className="text-2xl font-bold text-[#00BBA7] hover:text-[#009688] transition duration-300">
          <a href="#home">
            Mehedi<span className="text-gray-700 dark:text-white">.</span>
          </a>
        </div>

        {/* Navbar Center */}
        <div className="hidden lg:flex">
          <ul className="flex space-x-6 items-center">{navItems}</ul>
        </div>

        {/* Navbar End */}
        <div className="flex items-center gap-3">
          <Theme />
          <a
            href="/Mehedi_Resume.pdf"
            download
            className="hidden lg:inline-flex px-4 py-2 border border-[#00BBA7] rounded-lg font-semibold text-[#00BBA7] hover:bg-[#00BBA7] hover:text-white transition duration-300"
          >
            Resume
          </a>

          {/* Mobile Dropdown */}
          <div className="dropdown dropdown-end lg:hidden">
            <label tabIndex={0} className="btn btn-ghost">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow-lg bg-base-100 rounded-box w-52 space-y-2"
            >
              {navItems}
              <li>
                <a
                  href="/Mehedi_Resume.pdf"
                  download
                  className="btn btn-outline text-sm"
                >
                  Download Resume
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
