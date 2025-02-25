import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  { title: "Project 1", description: "A full-stack MERN app", link: "#" },
  { title: "Project 2", description: "A modern UI/UX web app", link: "#" },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="py-16 bg-gray-900 text-white text-center px-6"
    >
      <h2 className="text-4xl font-extrabold text-cyan-400">My Projects</h2>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-cyan-400 transition duration-300"
          >
            <h3 className="text-xl font-semibold">{project.title}</h3>
            <p className="text-gray-300">{project.description}</p>
            <a
              href={project.link}
              className="text-cyan-400 mt-3 inline-flex items-center gap-2 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Project <FaExternalLinkAlt />
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
