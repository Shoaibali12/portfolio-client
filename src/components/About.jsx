import React from "react";
import aboutImg from "../images/about-me.jpg";
import {
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaGithub,
} from "react-icons/fa";

const About = () => {
  return (
    <section
      id="about"
      className="py-20 px-6 bg-gradient-to-b from-gray-900 to-black text-white"
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Left Side - Image with glow */}
        <div className="relative w-full md:w-1/2 flex justify-center">
          <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden shadow-2xl group">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full blur-2xl opacity-30 animate-pulse z-0"></div>
            <img
              src={aboutImg}
              alt="About Me"
              className="relative z-10 w-full h-full object-cover rounded-full border-4 border-cyan-400 transition-transform duration-500 group-hover:scale-105"
            />
          </div>
        </div>

        {/* Right Side - Text */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h2 className="text-5xl font-bold text-cyan-400 mb-4">About Me</h2>
          <p className="text-lg text-gray-300 leading-relaxed">
            Hello, I'm{" "}
            <span className="text-cyan-400 font-semibold">Shoaib</span> — a
            Full-Stack Developer with a passion for modern web technologies,
            especially <span className="text-blue-400">React</span> and{" "}
            <span className="text-green-400">Node.js</span>.
          </p>
          <p className="mt-4 text-gray-400">
            I enjoy creating elegant, high-performance web applications with
            beautiful UI/UX. My mission is to craft scalable and meaningful
            digital experiences.
          </p>

          {/* Skills */}
          <div className="mt-8">
            <h3 className="text-2xl font-semibold mb-4">Tech Stack</h3>
            <div className="flex flex-wrap justify-center md:justify-start gap-5 text-4xl text-cyan-400">
              <FaReact className="hover:text-blue-400 transition-transform transform hover:scale-125 duration-300" />
              <FaNodeJs className="hover:text-green-500 transition-transform transform hover:scale-125 duration-300" />
              <FaDatabase className="hover:text-yellow-400 transition-transform transform hover:scale-125 duration-300" />
              <FaHtml5 className="hover:text-orange-500 transition-transform transform hover:scale-125 duration-300" />
              <FaCss3Alt className="hover:text-blue-500 transition-transform transform hover:scale-125 duration-300" />
              <FaJs className="hover:text-yellow-500 transition-transform transform hover:scale-125 duration-300" />
              <FaGithub className="hover:text-white transition-transform transform hover:scale-125 duration-300" />
            </div>
          </div>

          {/* Download Button */}
          <div className="mt-10">
            <a
              href="/Resume.pdf"
              download
              className="inline-flex items-center gap-2 bg-cyan-500 text-black font-semibold px-6 py-3 rounded-full shadow-lg transition-transform transform hover:scale-105 hover:bg-cyan-400 duration-300"
            >
              📄 Download CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
