import React from "react";
import Slider from "react-slick";
import { FaExternalLinkAlt } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Import project screenshots
import project1_img1 from "../images/admin dashboard.png";
import project1_img2 from "../images/notific.png";
import project1_img3 from "../images/post.png";
import project1_img4 from "../images/updatee profile.png";
import project1_img5 from "../images/user explore.png";

import project2_img1 from "../images/searchhompage.png";
import project2_img2 from "../images/contact.png";
import project2_img3 from "../images/profile.png";

import project3_img1 from "../images/signin.png";
import project3_img2 from "../images/buyer.png";
import project3_img3 from "../images/seller.png";
import project3_img4 from "../images/manage.png";
import project3_img5 from "../images/cart.png";
import project3_img6 from "../images/addproduct.png";

import project4_img1 from "../images/cmsadmin.png";
import project4_img2 from "../images/cmsadmin1.png";
import project4_img3 from "../images/fhompage.png";
import project4_img4 from "../images/stdgrades.jpg";
import project4_img5 from "../images/stdhompage.png";
import project4_img6 from "../images/transcript.png";
import project4_img7 from "../images/teachercourse.jpg";

// Project data
const projects = [
  {
    title: "Blog App (MERN + Redux)",
    description:
      "A full-stack Blog App with two actors: Admin & User. Users can post, edit, delete blogs, like/comment on posts, receive notifications, and update their profiles. Admins can manage users and delete user blogs.",
    images: [
      project1_img1,
      project1_img2,
      project1_img3,
      project1_img4,
      project1_img5,
    ],
    link: "https://github.com/Shoaibali12/blog-app.git", // Add your live project link if available
  },
  {
    title: "MERN Estate (Real Estate App) (MERN + Redux",
    description:
      "A MERN + Redux real estate application where users can list homes, apartments, and properties for sale or rent. Includes authentication, listing management, and search functionality.",
    images: [project2_img1, project2_img2, project2_img3],
    link: "https://github.com/Shoaibali12/mern-estate.git",
  },
  {
    title: "Shopping Cart App (MERN + Redux)",
    description:
      "A full-featured Shopping Cart app with two actors: Buyer & Seller. Buyers can browse, add products to the cart, and purchase items. Sellers can list, edit, and manage products.",
    images: [
      project3_img1,
      project3_img2,
      project3_img3,
      project3_img4,
      project3_img5,
      project3_img6,
    ],
    link: "https://github.com/Shoaibali12/shopping-cart.git",
  },
  {
    title: "CMS - Campus Management System (React + Spring Boot + PostgreSQL)",
    description:
      "A Campus Management System that automates academic tasks like attendance tracking, grading, transcript generation, and student/course management. Built with React for frontend and Spring Boot + PostgreSQL for backend.",
    images: [
      project4_img1,
      project4_img2,
      project4_img3,
      project4_img4,
      project4_img5,
      project4_img6,
      project4_img7,
    ],
    link: "https://github.com/Ali-Raza-Memon/cms-frontend.git",
  },
];

// Slick Carousel settings
const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
};

const Projects = () => {
  return (
    <section
      id="projects"
      className="py-20 px-6 bg-gradient-to-b from-gray-900 to-black text-white text-center"
    >
      <h2 className="text-5xl font-bold text-cyan-400 mb-10">My Projects</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-gray-800/80 backdrop-blur-md border border-gray-700 p-6 rounded-xl shadow-2xl transition-transform transform hover:scale-[1.03] duration-300 group"
          >
            {/* Image Slider */}
            <div className="rounded-xl overflow-hidden border border-cyan-500 shadow-lg">
              <Slider {...sliderSettings}>
                {project.images.map((img, i) => (
                  <img
                    key={i}
                    src={img}
                    alt={`Screenshot ${i + 1}`}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                ))}
              </Slider>
            </div>

            {/* Project Details */}
            <h3 className="text-2xl font-semibold mt-6 text-cyan-300 group-hover:text-white transition">
              {project.title}
            </h3>
            <p className="text-gray-400 mt-3 leading-relaxed">
              {project.description}
            </p>

            {/* View Project Button */}
            <a
              href={project.link}
              className="mt-4 inline-flex items-center gap-2 text-cyan-400 hover:text-white transition-all duration-300 hover:underline"
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
