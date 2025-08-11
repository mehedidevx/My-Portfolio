import React from "react";
import { Fade, Slide } from "react-awesome-reveal";

const About = () => {
  return (
    <section id="about" className="py-32 px-4 bg-base-100">
      <div className="container mx-auto">
        {/* Title */}
        <Fade triggerOnce direction="up" duration={1200}>
          <h2 className="text-4xl font-extrabold text-center mb-16 text-[#00BBA7] tracking-wide uppercase">
            About Me
          </h2>
        </Fade>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left - My Journey */}
          <Slide
            triggerOnce
            direction="up"
            duration={1200}
            cascade
            damping={0.7}
          >
            <article className="fire-glow-card border border-[#00BBA7] p-8 rounded-3xl bg-white dark:bg-gray-900 cursor-default h-full flex flex-col justify-between transition-transform">
              <h3 className="text-3xl font-semibold mb-6 text-secondary tracking-tight">
                My Journey
              </h3>
              <p className="text-base text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                I am a passionate Web Developer with a strong focus on building modern and scalable web applications. My journey hasn’t been smooth — I tried learning from various YouTube tutorials but often struggled due to lack of proper guidance.
              </p>
              <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed">
                Everything changed after enrolling in Programming Hero. It gave me clear direction, developer mindset, and the confidence to work on real-world projects.
              </p>
            </article>
          </Slide>

          {/* Right - What I Do */}
          <Slide
            triggerOnce
            direction="up"
            duration={1200}
            cascade
            damping={0.3}
          >
            <article className="fire-glow-card bg-[#f0f9f7] dark:bg-[#063029] p-8 rounded-3xl cursor-default h-full transition-transform ">
              <h3 className="text-3xl font-semibold mb-8 text-secondary tracking-tight">
                What I Do
              </h3>
              <ul className="space-y-5 text-gray-800 dark:text-gray-300 text-lg leading-relaxed list-disc list-inside">
                <li>MERN Stack Development</li>
                <li>Firebase Authentication & JWT Security</li>
                <li>RESTful API with Express & MongoDB</li>
                <li>Stripe Payment Integration</li>
                <li>Responsive UI with Tailwind CSS</li>
                <li>Deploying Full-Stack Apps (Vercel, Netlify, Render)</li>
              </ul>
            </article>
          </Slide>
        </div>
      </div>
    </section>
  );
};

export default About;
