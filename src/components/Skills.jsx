import React from "react";
import { useInView } from "react-intersection-observer";
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaDatabase,
} from "react-icons/fa";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        { name: "HTML/CSS", level: 95, icon: <FaHtml5 className="text-orange-500" /> },
        { name: "JavaScript", level: 90, icon: <FaJsSquare className="text-yellow-400" /> },
        { name: "Tailwind CSS", level: 90, icon: <FaCss3Alt className="text-blue-400" /> },
        { name: "DaisyUI", level: 85, icon: <FaCss3Alt className="text-purple-400" /> },
        { name: "React", level: 95, icon: <FaReact className="text-cyan-400" /> },
      ],
    },
    {
      title: "Backend",
      skills: [
        { name: "Node.js", level: 88, icon: <FaNodeJs className="text-green-500" /> },
        { name: "Express.js", level: 85, icon: <FaNodeJs className="text-gray-400" /> },
        { name: "MongoDB", level: 82, icon: <FaDatabase className="text-green-400" /> },
        { name: "Vercel", level: 70, icon: <FaDatabase className="text-black" /> },
      ],
    },
    {
      title: "Tools & Others",
      skills: [
        { name: "Git", level: 92, icon: <FaGitAlt className="text-orange-500" /> },
        { name: "Github", level: 70, icon: <FaGithub className="text-gray-700 dark:text-white" /> },
        { name: "Firebase", level: 85, icon: <FaDatabase className="text-yellow-500" /> },
        { name: "Netlify", level: 95, icon: <FaDatabase className="text-teal-400" /> },
      ],
    },
  ];

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <div id="skills" ref={ref} className="py-20 px-4 bg-base-100">
      <h2 className="text-4xl font-extrabold text-center mb-14 text-[#00BBA7] tracking-wide">
        Skills & Expertise
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 container mx-auto">
        {skillCategories.map((category) => (
          <div
            key={category.title}
            className="backdrop-blur-md bg-white/10 dark:bg-gray-900/30 p-6 rounded-2xl shadow-md border border-white/20 hover:shadow-[0_0_30px_rgba(0,187,167,0.7)] transition-shadow duration-500 ease-in-out fire-glow-card"
          >
            <h3 className="text-2xl font-semibold text-center mb-6 text-[#00BBA7] tracking-tight">
              {category.title}
            </h3>
            <div className="space-y-6">
              {category.skills.map((skill) => (
                <div key={skill.name} className="space-y-3">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-3 text-lg font-semibold text-white/90">
                      <span className="text-xl">{skill.icon}</span>
                      <span>{skill.name}</span>
                    </div>
                    <span className="text-sm font-semibold text-[#00BBA7]">
                      {skill.level}%
                    </span>
                  </div>
                  <div className="w-full bg-base-300 rounded-full h-4 overflow-hidden shadow-inner">
                    <div
                      className="h-4 rounded-full bg-gradient-to-r from-[#00BBA7] to-blue-500 transition-all duration-1200 ease-out shadow-[0_0_10px_rgba(0,187,167,0.7)]"
                      style={{
                        width: inView ? `${skill.level}%` : "0%",
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
