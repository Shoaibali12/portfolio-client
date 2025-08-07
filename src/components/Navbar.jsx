import React, { useState } from "react";
import {
  FaBars,
  FaTimes,
  FaHome,
  FaUser,
  FaProjectDiagram,
  FaEnvelope,
} from "react-icons/fa";
import { Link } from "react-scroll";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const menuItems = [
    { name: "Home", to: "home", icon: <FaHome /> },
    { name: "About", to: "about", icon: <FaUser /> },
    { name: "Projects", to: "projects", icon: <FaProjectDiagram /> },
    { name: "Contact", to: "contact", icon: <FaEnvelope /> },
  ];

  return (
    <nav className="bg-gray-900/90 backdrop-blur-sm text-white p-4 fixed w-full shadow-lg z-50">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-extrabold text-cyan-400">My Portfolio</h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8">
          {menuItems.map((item) => (
            <li key={item.name}>
              <Link
                to={item.to}
                spy={true}
                smooth={true}
                offset={-80}
                duration={500}
                className="cursor-pointer flex items-center gap-2 hover:text-cyan-400 transition duration-300"
                activeClass="text-cyan-400"
              >
                {item.icon} {item.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Toggle Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-3xl focus:outline-none"
          aria-label="Toggle Menu"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute w-full bg-gray-900 transition-all duration-300 ease-in-out overflow-hidden shadow-md ${
          menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="flex flex-col items-center py-4 space-y-4">
          {menuItems.map((item) => (
            <li key={item.name}>
              <Link
                to={item.to}
                spy={true}
                smooth={true}
                offset={-80}
                duration={500}
                onClick={() => setMenuOpen(false)}
                className="cursor-pointer flex items-center gap-2 text-lg hover:text-cyan-400 transition"
                activeClass="text-cyan-400"
              >
                {item.icon} {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
