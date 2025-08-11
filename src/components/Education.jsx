import React from "react";
import { Slide } from "react-awesome-reveal";

const Education = () => {
  return (
    <section id="education" className="py-28 px-6 bg-base-100 container mx-auto">
      <h2 className="text-4xl font-extrabold text-center mb-16 text-[#00BBA7] tracking-wide uppercase">
        Education
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* HSC Card */}
        <Slide direction="up" duration={1000} triggerOnce>
          <article className="group relative rounded-3xl bg-white dark:bg-gray-900 shadow-lg border border-gray-200 dark:border-gray-700 p-8 transition-transform duration-300 hover:scale-[1.03] hover:shadow-2xl cursor-default">
            {/* Animated glowing border */}
           <span className="absolute inset-0 rounded-3xl border-2 border-transparent bg-gradient-to-r from-[#00BBA7] to-[#14b8a531] opacity-30 blur-md animate-pulse pointer-events-none"></span>

            <div className="relative z-10">
              <h3 className="text-3xl font-semibold mb-4 text-[#00BBA7] border-b border-gray-300 pb-3">
                Higher Secondary Certificate (HSC)
              </h3>
              <p className="text-lg font-medium mb-1 text-gray-700 dark:text-gray-300">
                Completed in 2024
              </p>
              <p className="text-gray-600 dark:text-gray-400 text-lg font-light">
                Debiganj Govt College, Panchagarh
              </p>
            </div>
          </article>
        </Slide>

        {/* SSC Card */}
        <Slide direction="up" duration={1000} triggerOnce>
          <article className="group relative rounded-3xl bg-white dark:bg-gray-900 shadow-lg border border-gray-200 dark:border-gray-700 p-8 transition-transform duration-300 hover:scale-[1.03] hover:shadow-2xl cursor-default">
            
            <span className="absolute inset-0 rounded-3xl border-2 border-transparent bg-gradient-to-r from-[#00BBA7] to-[#14b8a531] opacity-30 blur-md animate-pulse pointer-events-none"></span>
            <div className="relative z-10">
              <h3 className="text-3xl font-semibold mb-4 text-[#00BBA7] border-b border-gray-300 pb-3">
                Secondary School Certificate (SSC)
              </h3>
              <p className="text-lg font-medium mb-1 text-gray-700 dark:text-gray-300">
                Completed in 2020
              </p>
              <p className="text-gray-600 dark:text-gray-400 text-lg font-light">
                Tepriganj High School, Panchagarh
              </p>
            </div>
          </article>
        </Slide>
      </div>
    </section>
  );
};

export default Education;
