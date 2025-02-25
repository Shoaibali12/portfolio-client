import React from "react";

const Contact = () => {
  return (
    <section
      id="contact"
      className="py-16 bg-gray-900 text-white text-center px-6"
    >
      <h2 className="text-4xl font-bold text-cyan-400">Get In Touch</h2>
      <p className="mt-2 text-gray-300">
        Feel free to reach out for collaborations or inquiries!
      </p>

      <form
        action="https://formspree.io/f/YOUR_FORMSPREE_ID"
        method="POST"
        className="mt-6 bg-gray-800 bg-opacity-50 backdrop-blur-lg p-6 rounded-lg shadow-lg max-w-md mx-auto"
      >
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
          className="w-full p-3 bg-gray-700 rounded-lg text-white focus:ring-2 focus:ring-cyan-400"
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          required
          className="w-full p-3 bg-gray-700 rounded-lg text-white focus:ring-2 focus:ring-cyan-400 mt-4"
        />
        <textarea
          name="message"
          placeholder="Your Message"
          required
          className="w-full p-3 bg-gray-700 rounded-lg text-white focus:ring-2 focus:ring-cyan-400 mt-4"
        />
        <button
          type="submit"
          className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 px-6 py-3 rounded-lg text-black font-semibold hover:scale-105 transition duration-300 mt-4 shadow-lg"
        >
          Send Message
        </button>
      </form>
    </section>
  );
};

export default Contact;
