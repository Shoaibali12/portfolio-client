import React from "react";

const Contact = () => {
  return (
    <section
      id="contact"
      className="py-20 px-6 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white text-center relative overflow-hidden"
    >
      {/* Decorative Blurred Circles */}
      <div className="absolute w-72 h-72 bg-cyan-500/20 rounded-full blur-3xl -top-20 -left-20 pointer-events-none" />
      <div className="absolute w-72 h-72 bg-blue-500/20 rounded-full blur-3xl -bottom-20 -right-20 pointer-events-none" />

      {/* Title */}
      <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 drop-shadow-lg">
        Let's Connect
      </h2>
      <p className="mt-4 text-gray-300 max-w-xl mx-auto">
        I'm always open to discussing new projects, ideas, or opportunities to
        collaborate. Drop me a message!
      </p>

      {/* Contact Form */}
      <form
        action="https://formspree.io/f/YOUR_FORMSPREE_ID"
        method="POST"
        className="mt-10 bg-gray-800/70 backdrop-blur-md p-8 rounded-2xl shadow-xl max-w-xl mx-auto space-y-5"
      >
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
          className="w-full px-4 py-3 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition duration-300"
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          required
          className="w-full px-4 py-3 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition duration-300"
        />
        <textarea
          name="message"
          placeholder="Your Message"
          rows={5}
          required
          className="w-full px-4 py-3 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition duration-300"
        />
        <button
          type="submit"
          className="w-full py-3 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 text-black font-bold hover:scale-105 hover:shadow-cyan-400/50 transition transform duration-300 shadow-lg"
        >
          🚀 Send Message
        </button>
      </form>

      {/* Optional Footer Note */}
      <p className="text-sm text-gray-500 mt-8">
        📬 I’ll try to get back to you within 24–48 hours.
      </p>
    </section>
  );
};

export default Contact;
