import React from "react";
import { Slide } from "react-awesome-reveal";

const Education = () => {
  return (
    <div id="education" className="p-8 py-24 bg-base-100">
      <h2 className="text-4xl font-bold text-center mb-10 text-primary">
        Education
      </h2>

      <div className=" mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* HSC Card */}
        <Slide direction="up" duration={1000} triggerOnce={false}>
          <div className="group rounded-xl bg-base-200 p-6 shadow-lg hover:shadow-xl transition">
            <div className="relative border-4 border-transparent rounded-xl">
              <div className="absolute inset-0 rounded-xl  animate-border"></div>
              <div className="relative z-10">
                <h3 className="text-2xl font-semibold mb-4 text-secondary border-b border-base-300 pb-2">
                  Higher Secondary Certificate (HSC)
                </h3>
                <p className="text-base-content mb-1">Completed in 2024</p>
                <p className="text-base-content">
                  Debiganj Govt College, Panchagarh
                </p>
              </div>
            </div>
          </div>
        </Slide>

        {/* SSC Card */}
        <Slide direction="up" duration={1000} triggerOnce={false}>
          <div className="group rounded-xl bg-base-200 p-6 shadow-lg hover:shadow-xl transition">
            <div className="relative border-4 border-transparent rounded-xl">
              <div className="absolute inset-0 rounded-xl b animate-border"></div>
              <div className="relative z-10">
                <h3 className="text-2xl font-semibold mb-4 text-secondary border-b border-base-300 pb-2">
                  Secondary School Certificate (SSC)
                </h3>
                <p className="text-base-content mb-1">Completed in 2020</p>
                <p className="text-base-content">
                  Tepriganj High School, Panchagarh
                </p>
              </div>
            </div>
          </div>
        </Slide>
      </div>
    </div>
  );
};

export default Education;
