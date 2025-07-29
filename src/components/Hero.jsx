import { TypeAnimation } from "react-type-animation";

const Hero = () => {
  return (
    <div id="home" className="w-full pt-40 py-20">
      <div className=" mx-auto flex flex-col-reverse lg:flex-row items-center justify-between gap-10 px-4 py-9">
        {/* Text Section */}
        <div className="flex-1">
          <h1 className="text-5xl font-bold mb-4">
            Hi! I'm <span className="text-primary">Md Mehedi Hasan</span>
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
            className="text-xl text-primary font-semibold"
            repeat={Infinity}
          />

          <p className="py-6 text-gray-600">
            Passionate about building user-friendly web applications.
          </p>

          <div className="flex gap-4 flex-wrap">
            <a href="/Mehedi_Resume.pdf" download>
              <button className="btn btn-primary hover:bg-transparent">Download Resume</button>
            </a>
            <a
              href="https://github.com/mehedidevx"
              target="_blank"
              className="btn btn-outline"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/mehedidevx"
              target="_blank"
              className="btn btn-outline"
            >
              LinkedIn
            </a>
          </div>
        </div>

        {/* Image Section */}
        <div className="flex-1  flex justify-end">
          <img
            src="https://i.postimg.cc/YCw3pTBp/1706348062640.jpg"
            alt="mehedi"
            className="w-72 cursor-pointer lg:w-96 h-72 lg:h-96 rounded-full border-4 border-primary shadow-lg  transition duration-500"
          />
        </div>
      </div>   
    </div>
  );
};

export default Hero;
