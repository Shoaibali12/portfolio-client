import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Hero = () => {
  const openLink = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <section
      id="home"
      className="h-screen flex flex-col justify-center items-center text-center bg-gray-900 text-white px-6 relative"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 opacity-20 blur-2xl pointer-events-none"></div>

      <h1 className="text-5xl md:text-6xl font-extrabold">
        Hi, I'm <span className="text-cyan-400">Shoaib</span>
      </h1>
      <p className="mt-4 text-lg md:text-xl text-gray-300">
        Full Stack Developer | MERN Enthusiast
      </p>

      <button
        onClick={() => openLink("/Resume.pdf")}
        className="mt-6 bg-gradient-to-r from-cyan-500 to-blue-500 px-6 py-3 rounded-full text-black font-semibold hover:scale-105 transition transform duration-300 shadow-lg"
      >
        📄 Download CV
      </button>

      {/* Social Media Links */}
      <div className="flex mt-6 space-x-6">
        <button
          onClick={() =>
            openLink("https://www.linkedin.com/in/shoaib-ali-dev/")
          }
          className="text-cyan-400 text-3xl"
        >
          <FaLinkedin />
        </button>
        <button
          onClick={() =>
            openLink("https://github.com/Shoaibali12?tab=repositories")
          }
          className="text-cyan-400 text-3xl"
        >
          <FaGithub />
        </button>
      </div>
    </section>
  );
};

export default Hero;
