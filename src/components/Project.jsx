import React from "react";

const projects = [
  { title: "Project 1", description: "This is my first project.", link: "#" },
  { title: "Project 2", description: "This is my second project.", link: "#" },
];

const Projects = () => {
  return (
    <section id="projects" className="py-16 bg-gray-900 text-white text-center">
      <h2 className="text-3xl font-bold">My Projects</h2>
      <div className="mt-8 flex flex-wrap justify-center gap-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-gray-700 p-6 rounded-lg shadow-lg w-80"
          >
            <h3 className="text-xl font-semibold">{project.title}</h3>
            <p className="text-gray-300">{project.description}</p>
            <a
              href={project.link}
              className="text-cyan-400 mt-3 inline-block hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Project
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
