import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-gray-900 text-white p-4 fixed w-full shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">My Portfolio</h1>
        <ul className="flex space-x-6">
          <li>
            <a href="#about" className="hover:text-cyan-400">
              About
            </a>
          </li>
          <li>
            <a href="#projects" className="hover:text-cyan-400">
              Projects
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-cyan-400">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
