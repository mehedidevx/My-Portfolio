import React, { useState } from "react";
import { Fade, Slide, Zoom } from "react-awesome-reveal";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projectList = [
    {
      id: 1,
      name: "Artifact Tracker",
      image: "https://i.postimg.cc/269jcR2b/Screenshot-2025-07-29-212328.png",
      description:
        "A historical artifact tracking system to store, update, and display valuable artifacts with secure user authentication.",
      shortFeatures: ["React", "Firebase Auth", "MongoDB", "Dashboard"],
      features: [
        "User Authentication (Firebase Email & Google Login)",
        "Add, Edit & Delete Artifacts with Image Upload",
        "Browse All Artifacts with Filtering Options",
        "My Artifacts Management Dashboard",
        "Responsive Design with Light & Dark Theme",
        "Protected Routes with Conditional Access",
      ],
      techStack: {
        frontend: "React.js, Tailwind CSS, DaisyUI, React Router DOM",
        backend: "Node.js, Express.js, MongoDB",
        auth: "Firebase Authentication",
        imageUpload: "imgbb API",
        deployment: "Vercel (Client), Render (Server)",
      },
      liveLink: "https://artifacts-tracker-9558c.web.app/",
      githubLink: "https://github.com/mehedidevx/Artifact-Tracker-Client",
    },
    {
      id: 2,
      name: "Roommate Finder Website",
      image: "https://i.postimg.cc/dtwkhvgv/Screenshot-2025-07-29-213032.png",
      description:
        "A modern roommate searching platform with listings, profile management, like system, and contact reveal features.",
      shortFeatures: [
        "React",
        "Firebase Auth",
        "Tailwind CSS",
        "Protected Routes",
      ],
      features: [
        "User Authentication (Email & Google Login)",
        "Add, Edit & Delete Roommate Listings",
        "Browse Listings with Filtering Options",
        "Like Listings to Reveal Contact Details",
        "My Listings Management Dashboard",
        "Protected Routes for Add & My Listings",
        "Dark & Light Mode Toggle",
        "Responsive Design with Smooth Animations",
      ],
      techStack: {
        frontend: "React.js, Tailwind CSS, React Router DOM",
        auth: "Firebase Authentication",
        state: "React Context API, React Hooks",
        notifications: "React Toastify, SweetAlert2",
        animations: "React Awesome Reveal, React Tooltip",
        deployment: "Netlify",
      },
      liveLink: "https://roommate-finder-e3166.web.app/",
      githubLink: "https://github.com/mehedidevx/Roommate-Finder-Client",
    },
    {
      id: 3,
      name: "JobTrack - Job Application Manager",
      image: "https://i.postimg.cc/C563pwqD/Screenshot-2025-07-29-213404.png",
      description:
        "A job tracking app to manage job applications, statuses, and details with dashboard and authentication.",
      shortFeatures: ["React", "Firebase Auth", "Tailwind CSS", "Dashboard"],
      features: [
        "User Authentication (Firebase)",
        "Add/Edit/Delete Job Applications",
        "Filter & Sort by Status, Title, or Date",
        "Dashboard with Job Statistics",
        "Protected Routes (Private Routes)",
        "Dark & Light Theme Support",
      ],
      techStack: {
        frontend: "React, Tailwind CSS, React Router",
        auth: "Firebase Authentication",
        state: "React Context API",
        deployment: "Firebase Hosting",
      },
      liveLink: "https://job-track-5aaaf.web.app/",
      githubLink: "https://github.com/mehedidevx/Job-Track",
    },
    {
      id: 4,
      name: "Biker Zone",
      image: "https://i.postimg.cc/ncSFnJJ3/Screenshot-2025-07-29-213307.png",
      description:
        "A responsive bike shop website showcasing featured bikes, client reviews, and FAQs using pure HTML and Tailwind.",
      shortFeatures: ["HTML", "Tailwind CSS", "DaisyUI"],
      features: [
        "Responsive Navbar with Dropdown",
        "Interactive Hero Section with Carousel",
        "Featured Bikes Showcase",
        "Client Reviews Section",
        "FAQ Accordion",
        "Light Theme Support",
      ],
      techStack: {
        frontend: "HTML, Tailwind CSS, DaisyUI",
        deployment: "Netlify / GitHub Pages",
      },
      liveLink: "https://mehedidevx.github.io/Biker-Zone/",
      githubLink: "https://github.com/mehedidevx/Biker-Zone",
    },
  ];

  return (
    <div id="projects" className="py-36 px-4 bg-base-100 min-h-screen">
      <Fade direction="down" >
        <h2 className="text-4xl font-bold text-center mb-12 text-[#00BBA7]">
          Projects
        </h2>
      </Fade>

      <div className="space-y-10">
        {projectList.map((project) => (
          <Slide key={project.id} direction="up" >
            <div className="flex flex-col md:flex-row items-stretch gap-6 bg-base-200 rounded-2xl shadow-md p-6">
              {/* Image Section */}
              <div className="md:w-1/2">
                <img
                  src={project.image}
                  alt={project.name}
                  className="rounded-xl w-full h-64 md:h-full object-cover "
                />
              </div>

              {/* Info Section */}
              <div className="md:w-1/2 flex flex-col justify-between ">
                <div>
                  <h2 className="text-2xl font-semibold mb-4 text-secondary">
                    {project.name}
                  </h2>
                  <p className="text-base-content mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.shortFeatures.map((item, idx) => (
                      <span
                        key={idx}
                        className="badge badge-outline badge-primary"
                      >
                        {item}
                      </span>
                    ))}
                  </div>

                  <ul className="list-disc list-inside text-sm mb-4 space-y-1">
                    {project.features.slice(0, 4).map((feature, idx) => (
                      <li key={idx}>{feature}</li>
                    ))}
                    {project.features.length > 4 && <li>and more...</li>}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-4">
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary btn-sm"
                  >
                    Live Site
                  </a>
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline btn-sm"
                  >
                    GitHub
                  </a>
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="btn btn-neutral btn-sm"
                  >
                    View Details
                  </button>
                </div>
              </div>
            </div>
          </Slide>
        ))}
      </div>

      {/* Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <Zoom >
            <div className="bg-base-100 rounded-2xl shadow-xl max-w-3xl w-full p-6 relative overflow-y-auto max-h-[90vh]">
              <button
                className="absolute top-3 right-3 btn btn-sm btn-circle"
                onClick={() => setSelectedProject(null)}
                aria-label="Close modal"
              >
                ✕
              </button>
              <img
                src={selectedProject.image}
                alt={selectedProject.name}
                className="rounded-xl mb-4"
              />
              <h2 className="text-3xl font-bold mb-2 text-[#00BBA7]">
                {selectedProject.name}
              </h2>
              <p className="mb-6 text-base-content">
                {selectedProject.description}
              </p>

              <h3 className="text-xl font-semibold mb-2 text-secondary">
                Features
              </h3>
              <ul className="list-disc list-inside space-y-1 mb-6">
                {selectedProject.features.map((feature, idx) => (
                  <li key={idx}>{feature}</li>
                ))}
              </ul>

              <h3 className="text-xl font-semibold mb-2 text-secondary">
                Tech Stack
              </h3>
              <ul className="space-y-1 mb-6">
                <li>
                  <span className="font-semibold">Frontend:</span>{" "}
                  {selectedProject.techStack.frontend}
                </li>
                {selectedProject.techStack.auth && (
                  <li>
                    <span className="font-semibold">Authentication:</span>{" "}
                    {selectedProject.techStack.auth}
                  </li>
                )}
                {selectedProject.techStack.state && (
                  <li>
                    <span className="font-semibold">State Management:</span>{" "}
                    {selectedProject.techStack.state}
                  </li>
                )}
                {selectedProject.techStack.notifications && (
                  <li>
                    <span className="font-semibold">Notifications:</span>{" "}
                    {selectedProject.techStack.notifications}
                  </li>
                )}
                {selectedProject.techStack.animations && (
                  <li>
                    <span className="font-semibold">Animations:</span>{" "}
                    {selectedProject.techStack.animations}
                  </li>
                )}
                <li>
                  <span className="font-semibold">Deployment:</span>{" "}
                  {selectedProject.techStack.deployment}
                </li>
              </ul>

              <div className="flex flex-wrap gap-4">
                <a
                  href={selectedProject.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary btn-sm"
                >
                  Live Site
                </a>
                <a
                  href={selectedProject.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline btn-sm"
                >
                  GitHub
                </a>
              </div>
            </div>
          </Zoom>
        </div>
      )}
    </div>
  );
};

export default Projects;
