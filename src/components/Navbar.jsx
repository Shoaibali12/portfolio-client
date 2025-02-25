import React, { useState } from "react";

import {
  FaBars,
  FaTimes,
  FaHome,
  FaUser,
  FaProjectDiagram,
  FaEnvelope,
} from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  // Menu items with icons
  const menuItems = [
    { name: "Home", href: "#home", icon: <FaHome /> },
    { name: "About", href: "#about", icon: <FaUser /> },
    { name: "Projects", href: "#projects", icon: <FaProjectDiagram /> },
    { name: "Contact", href: "#contact", icon: <FaEnvelope /> },
  ];

  return (
    <nav className="bg-gray-900 text-white p-4 fixed w-full shadow-lg z-50">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-extrabold text-cyan-400">My Portfolio</h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6">
          {menuItems.map((item) => (
            <li key={item.name}>
              <a
                href={item.href}
                className="flex items-center gap-2 hover:text-cyan-400 transition duration-300"
              >
                {item.icon} {item.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-2xl"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      <ul
        className={`md:hidden flex flex-col items-center bg-gray-800 absolute w-full left-0 transition-transform ${
          menuOpen ? "top-16" : "-top-[300px]"
        }`}
      >
        {menuItems.map((item) => (
          <li key={item.name} className="py-4">
            <a
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className="flex items-center gap-2"
            >
              {item.icon} {item.name}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
