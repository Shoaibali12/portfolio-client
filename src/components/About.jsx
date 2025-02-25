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
    <section id="about" className="py-16 bg-gray-900 text-white px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Left Side - Image */}
        <div className="relative w-full md:w-1/2 flex justify-center">
          <div className="relative w-72 h-72 md:w-96 md:h-96">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full blur-lg opacity-50"></div>
            <img
              src={aboutImg}
              alt="About Me"
              className="w-full h-full object-cover rounded-full border-4 border-cyan-400 shadow-lg"
            />
          </div>
        </div>

        {/* Right Side - Text */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h2 className="text-4xl font-extrabold text-cyan-400">About Me</h2>
          <p className="mt-4 text-lg text-gray-300 leading-relaxed">
            Hi, I'm{" "}
            <span className="text-cyan-400 font-semibold">Your Name</span>, a
            Full-Stack Developer passionate about React, Node.js, and modern web
            technologies.
          </p>

          <p className="mt-2 text-gray-400">
            I love building high-performance applications with amazing UI/UX. My
            goal is to create impactful and scalable web solutions.
          </p>

          {/* Skills Section with Icons */}
          <div className="mt-6">
            <h3 className="text-2xl font-semibold">Skills</h3>
            <div className="flex flex-wrap justify-center md:justify-start gap-3 mt-4 text-3xl text-cyan-400">
              <FaReact className="hover:text-blue-400 transition duration-300" />
              <FaNodeJs className="hover:text-green-500 transition duration-300" />
              <FaDatabase className="hover:text-yellow-400 transition duration-300" />
              <FaHtml5 className="hover:text-orange-500 transition duration-300" />
              <FaCss3Alt className="hover:text-blue-500 transition duration-300" />
              <FaJs className="hover:text-yellow-500 transition duration-300" />
              <FaGithub className="hover:text-white transition duration-300" />
            </div>
          </div>

          {/* Button with Animation */}
          <a
            href="/Resume.pdf"
            download
            className="mt-6 inline-block bg-gradient-to-r from-cyan-500 to-blue-500 px-6 py-3 rounded-full text-black font-semibold hover:scale-105 transform transition duration-300 shadow-lg"
          >
            📄 Download CV
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
