import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Hero = () => {
  const openLink = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <section
      id="home"
      className="h-screen flex flex-col justify-center items-center text-center bg-gray-950 text-white px-6 relative overflow-hidden"
    >
      {/* Glowing Animated Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br opacity-20 blur-3xl animate-pulse pointer-events-none z-0" />

      {/* Hero Content */}
      <div className="z-10">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight tracking-tight">
          Hi, I'm{" "}
          <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent animate-pulse">
            Shoaib
          </span>
        </h1>

        <p className="mt-4 text-lg md:text-xl text-gray-300 max-w-xl mx-auto">
          A Full Stack Developer focused on building sleek, fast & scalable apps
          with <span className="text-cyan-400 font-semibold">MERN</span> stack.
        </p>

        {/* Resume CTA Button */}
        <button
          onClick={() => openLink("/Resume.pdf")}
          className="mt-8 inline-flex items-center gap-2 bg-gradient-to-r from-cyan-400 to-blue-500 text-black font-bold px-8 py-3 rounded-full shadow-lg hover:scale-105 hover:shadow-cyan-500/50 transition duration-300"
        >
          📄 Download CV
        </button>

        {/* Social Icons */}
        <div className="flex justify-center mt-10 space-x-6">
          <button
            onClick={() =>
              openLink("https://www.linkedin.com/in/shoaib-ali-dev/")
            }
            className="text-cyan-400 hover:text-white text-3xl transition transform hover:scale-125"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </button>
          <button
            onClick={() =>
              openLink("https://github.com/Shoaibali12?tab=repositories")
            }
            className="text-cyan-400 hover:text-white text-3xl transition transform hover:scale-125"
            aria-label="GitHub"
          >
            <FaGithub />
          </button>
        </div>

        {/* Scroll Down Indicator */}
        <div className="mt-12 animate-bounce text-cyan-400 text-sm opacity-75">
          ↓ Scroll Down
        </div>
      </div>

      {/* Decorative Floating Circles */}
      <div className="absolute w-72 h-72 bg-cyan-400/20 rounded-full blur-3xl -top-16 -left-16 animate-pulse z-0" />
      <div className="absolute w-72 h-72 bg-blue-500/20 rounded-full blur-3xl -bottom-16 -right-16 animate-pulse z-0" />
    </section>
  );
};

export default Hero;
