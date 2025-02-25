import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-16 bg-gray-800 text-white text-center">
      <h2 className="text-3xl font-bold">Contact Me</h2>
      <form
        action="https://formspree.io/f/YOUR_FORMSPREE_ID"
        method="POST"
        className="mt-6 space-y-4 max-w-md mx-auto"
      >
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
          className="w-full p-3 bg-gray-700 rounded-lg text-white focus:ring-2 focus:ring-cyan-400"
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          required
          className="w-full p-3 bg-gray-700 rounded-lg text-white focus:ring-2 focus:ring-cyan-400"
          onChange={handleChange}
        />
        <textarea
          name="message"
          placeholder="Your Message"
          required
          className="w-full p-3 bg-gray-700 rounded-lg text-white focus:ring-2 focus:ring-cyan-400"
          onChange={handleChange}
        />
        <button
          type="submit"
          className="bg-cyan-400 px-6 py-3 rounded-lg text-black font-semibold hover:bg-cyan-300 transition"
        >
          Send Message
        </button>
      </form>
    </section>
  );
};

export default Contact;
