import { TypeAnimation } from "react-type-animation";

const Hero = () => {
  return (
    <div id="home" className="w-full pt-10 md:pt-20 lg:pt-32 ">
      <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center justify-between gap-10 px-4 ">
        
        {/* ==== Text Section ==== */}
        <div className="flex-1 text-center lg:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 leading-tight">
            Hi! I'm{" "}
            <span className="text-[#00BBA7]">Md Mehedi Hasan</span>
          </h1>

          <TypeAnimation
            sequence={[
              "Frontend Developer",
              2000,
              "MERN Stack Developer",
              2000,
              "React Developer",
              2000,
              "Full Stack Learner",
              2000,
            ]}
            wrapper="span"
            speed={50}
            className="block text-lg sm:text-xl text-[#00BBA7] font-semibold mb-4"
            repeat={Infinity}
          />

          <p className="py-3 text-gray-600 dark:text-gray-300 max-w-lg mx-auto lg:mx-0">
            I love crafting clean, responsive, and user-centric web apps.
          </p>

          <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base leading-relaxed max-w-lg mx-auto lg:mx-0">
            💻 Skilled in React.js, Node.js, Express, MongoDB, and Firebase. <br />
            🚀 Currently learning advanced full-stack development. <br />
            🌍 Based in Debiganj, Bangladesh | Open to remote opportunities.
          </p>

          {/* ==== Buttons ==== */}
          <div className="flex gap-3 flex-wrap justify-center lg:justify-start mt-6">
            <a href="/Mehedi_Resume.pdf" download>
              <button className="btn bg-[#00BBA7] hover:text-[#00BBA7] text-white hover:bg-transparent border-[#00BBA7] px-5">
                Resume
              </button>
            </a>
            <a href="https://github.com/mehedidevx" target="_blank" rel="noreferrer">
              <button className="btn border-gray-300 hover:border-none hover:bg-[#00BBA7] hover:text-white dark:hover:text-black px-5">
                GitHub
              </button>
            </a>
            <a href="https://linkedin.com/mehedidevx" target="_blank" rel="noreferrer">
              <button className="btn border-gray-300 hover:border-none hover:bg-[#00BBA7] hover:text-white dark:hover:text-black px-5">
                LinkedIn
              </button>
            </a>
          </div>
        </div>

        {/* ==== Image Section ==== */}
        <div className="flex-1 flex justify-center lg:justify-end">
          <div className="relative w-56 h-56 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
            {/* Spinning dashed border */}
            <div className="absolute inset-0 z-10 rounded-full border-4 border-dashed border-[#00BBA7] animate-spin-slow"></div>

            {/* Profile Image */}
            <img
              src="https://i.postimg.cc/JnpCrNk9/IMG-20250728-035339.jpg"
              alt="mehedi"
              className="relative w-full h-full object-cover rounded-full shadow-lg transition duration-500"
            />
          </div>
        </div>

      </div>
    </div>
  );
};

export default Hero;
