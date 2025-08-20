import React, { useState } from "react";
import { Fade, Slide, Zoom } from "react-awesome-reveal";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projectList = [
    {
      id: 1,
      name: "Micro-Task & Earning Platform",
      image: "https://i.postimg.cc/ZYFPztkH/Screenshot-2025-08-20-115558.png",
      description:
        "A micro-task marketplace platform where buyers can post tasks, manage them via dashboard, and workers can complete tasks to earn coins with secure payments.",
      shortFeatures: ["React", "Firebase", "MongoDB", "Stripe", "Dashboard"],
      features: [
        "Role-based Authentication (Buyer, Worker, Admin)",
        "Post, Update & Delete Tasks with Image Upload",
        "Coin-based Payment System with Refund Policy",
        "Dashboard for Task Management & Earnings",
        "Admin Role for User & Task Management",
        "Pagination & Search for Tasks",
        "Responsive Design with Dark/Light Theme",
        "Notification & Alert System",
      ],
      techStack: {
        frontend: "React.js, Tailwind CSS, DaisyUI, React Router DOM",
        backend: "Node.js, Express.js, MongoDB",
        auth: "Firebase Authentication",
        imageUpload: "imgbb API",
        payment: "Stripe",
        state: "TanStack Query, Axios",
        deployment: "Vercel (Client), Render (Server)",
      },
      liveLink: "https://micro-task-30fbe.web.app/",
      githubLink: "https://github.com/mehedidevx/Micro-Task-Client",
    },
    {
      id: 2,
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
      id: 3,
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
      id: 4,
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
      id: 5,
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
    <section
      id="projects"
      className="py-36 px-4 bg-base-100 min-h-screen container mx-auto"
    >
      <Fade triggerOnce direction="down" duration={1200}>
        <h2 className="text-4xl font-extrabold text-center mb-16 text-[#00BBA7] tracking-wide uppercase">
          Projects
        </h2>
      </Fade>

      <div className="space-y-14">
        {projectList.map((project) => (
          <Slide triggerOnce key={project.id} direction="up" duration={1000}>
            <div
              className="flex flex-col md:flex-row items-stretch gap-8 bg-white dark:bg-gray-900 rounded-3xl shadow-xl border border-gray-200 dark:border-gray-700 p-6
              hover:shadow-2xl hover:scale-[1.02] transition-transform duration-300 ease-in-out cursor-pointer"
              onClick={() => setSelectedProject(project)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) =>
                e.key === "Enter" && setSelectedProject(project)
              }
            >
              {/* Image Section */}
              <div className="md:w-1/2 rounded-xl overflow-hidden shadow-lg">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-64 md:h-full object-cover transition-transform duration-500 hover:scale-105"
                  loading="lazy"
                />
              </div>

              {/* Info Section */}
              <div className="md:w-1/2 flex flex-col justify-between">
                <div>
                  <h3 className="text-3xl font-semibold mb-4 text-[#00BBA7] tracking-tight">
                    {project.name}
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-5 line-clamp-3 text-lg">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-3 mb-6">
                    {project.shortFeatures.map((item, idx) => (
                      <span
                        key={idx}
                        className="badge badge-outline badge-primary text-sm px-4 py-1 rounded-full font-medium"
                      >
                        {item}
                      </span>
                    ))}
                  </div>

                  <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 text-sm space-y-1 max-h-32 overflow-y-auto pr-2">
                    {project.features.slice(0, 4).map((feature, idx) => (
                      <li key={idx}>{feature}</li>
                    ))}
                    {project.features.length > 4 && <li>and more...</li>}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-5 mt-6">
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn bg-[#00BBA7] btn-sm text-white shadow-md hover:shadow-lg transition-shadow"
                    onClick={(e) => e.stopPropagation()}
                  >
                    Live Site
                  </a>
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline btn-sm hover:bg-[#00BBA7] hover:text-white transition-colors"
                    onClick={(e) => e.stopPropagation()}
                  >
                    GitHub
                  </a>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedProject(project);
                    }}
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
        <div
          className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedProject(null)}
        >
          <Zoom triggerOnce>
            <div
              className="bg-base-100 dark:bg-gray-900 rounded-3xl shadow-2xl max-w-4xl w-full p-8 overflow-y-auto max-h-[90vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute top-5 right-5 btn btn-sm btn-circle"
                onClick={() => setSelectedProject(null)}
                aria-label="Close modal"
              >
                ✕
              </button>

              <img
                src={selectedProject.image}
                alt={selectedProject.name}
                className="rounded-xl mb-6 shadow-lg object-cover max-h-80 w-full"
                loading="lazy"
              />
              <h2 className="text-4xl font-bold mb-4 text-[#00BBA7]">
                {selectedProject.name}
              </h2>
              <p className="mb-8 text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
                {selectedProject.description}
              </p>

              <h3 className="text-2xl font-semibold mb-4 text-secondary">
                Features
              </h3>
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 mb-8 max-h-40 overflow-y-auto space-y-2 pr-2">
                {selectedProject.features.map((feature, idx) => (
                  <li key={idx}>{feature}</li>
                ))}
              </ul>

              <h3 className="text-2xl font-semibold mb-4 text-secondary">
                Tech Stack
              </h3>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300 mb-6">
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
                  className="btn bg-[#00BBA7] text-white btn-sm shadow-md hover:shadow-lg transition-shadow"
                >
                  Live Site
                </a>
                <a
                  href={selectedProject.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline btn-sm hover:bg-[#00BBA7] hover:text-white transition-colors"
                >
                  GitHub
                </a>
              </div>
            </div>
          </Zoom>
        </div>
      )}
    </section>
  );
};

export default Projects;
