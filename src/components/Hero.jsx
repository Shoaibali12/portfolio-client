import React from "react";

const Hero = () => {
  return (
    <section className="h-screen flex flex-col justify-center items-center bg-gray-800 text-white text-center">
      <h1 className="text-5xl font-bold">
        Hi, I'm <span className="text-cyan-400">Your Name</span>
      </h1>
      <p className="mt-4 text-lg">Full Stack Developer | MERN Enthusiast</p>
      <a
        href="/Resume.pdf"
        download
        className="mt-6 bg-cyan-400 px-6 py-3 rounded-full text-black font-semibold hover:bg-cyan-300 transition"
      >
        📄 Download CV
      </a>
    </section>
  );
};

export default Hero;
