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

const skills = [
  { name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
  { name: "CSS", icon: <FaCss3Alt className="text-blue-500" /> },
  { name: "JavaScript", icon: <FaJsSquare className="text-yellow-400" /> },
  { name: "React", icon: <FaReact className="text-cyan-400" /> },
  { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
  { name: "MongoDB", icon: <FaDatabase className="text-green-400" /> },
  { name: "Git", icon: <FaGitAlt className="text-orange-500" /> },
  { name: "GitHub", icon: <FaGithub className="text-gray-700 dark:text-white" /> },
];

const MyToolkit = () => {
  return (
    <div className="py-20 px-4 bg-base-100">
      <h2 className="text-4xl font-bold text-center mb-14 text-[#00BBA7]">
        My Toolkit
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 container mx-auto">
        {skills.map((skill, idx) => (
          <SkillIconCard key={idx} icon={skill.icon} name={skill.name} delay={idx * 0.1} />
        ))}
      </div>
    </div>
  );
};

const SkillIconCard = ({ icon, name, delay }) => {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: false,
  });

  return (
    <div
      ref={ref}
      className="flex flex-col items-center justify-center p-6 rounded-xl border border-white/20 backdrop-blur-md text-center transition-all duration-700 ease-out"
      style={{
        background: "rgba(255, 255, 255, 0.1)",
        boxShadow: inView
          ? "0 0 20px rgba(0, 187, 167, 0.6), 0 0 40px rgba(0, 187, 167, 0.3)"
          : "0 0 10px rgba(0, 0, 0, 0.1)",
        transform: inView ? "translateX(0) scale(1)" : "translateX(50px) scale(0.5)",
        opacity: inView ? 1 : 0,
        transitionDelay: `${delay}s`,
      }}
    >
      <div className="text-5xl mb-3 animate-pulse">{icon}</div>
      <p className="text-lg font-medium">{name}</p>
    </div>
  );
};

export default MyToolkit;
