import React from "react";
import { Mail, Github, Linkedin } from "lucide-react";

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="py-24 px-4 relative bg-gradient-to-b from-purple-600/10 to-pink-600/10"
    >
      <div className="max-w-4xl mx-auto text-center">
        {/* Header */}
        <h2 className="text-5xl md:text-6xl font-black mb-6">
          Let's Work{" "}
          <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Together
          </span>
        </h2>
        <p className="text-xl text-gray-400 mb-12">
          I'm always excited about discussing new projects, creative ideas, and
          opportunities to contribute to tech education and innovation.
        </p>

        {/* Contact Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {/* Email */}
          <a
            href="mailto:chukwuebukaedward20@gmail.com"
            className="group p-8 rounded-2xl border border-purple-500/20 bg-gradient-to-br from-purple-500/10 to-pink-500/10 hover:border-purple-400/50 hover:bg-purple-500/20 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/20"
          >
            <Mail
              size={40}
              className="mx-auto mb-4 text-purple-400 group-hover:text-pink-400 transition-colors"
            />
            <h3 className="font-bold text-lg mb-2">Email</h3>
            <p className="text-sm text-gray-400">
              chukwuebukaedward20@gmail.com
            </p>
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/Bukason20"
            target="_blank"
            rel="noopener noreferrer"
            className="group p-8 rounded-2xl border border-purple-500/20 bg-gradient-to-br from-purple-500/10 to-pink-500/10 hover:border-purple-400/50 hover:bg-purple-500/20 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/20"
          >
            <Github
              size={40}
              className="mx-auto mb-4 text-purple-400 group-hover:text-pink-400 transition-colors"
            />
            <h3 className="font-bold text-lg mb-2">GitHub</h3>
            <p className="text-sm text-gray-400">Bukason20</p>
          </a>

          {/* LinkedIn */}
          <a
            href="https://linkedin.com/in/chukwuebuka-edward"
            target="_blank"
            rel="noopener noreferrer"
            className="group p-8 rounded-2xl border border-purple-500/20 bg-gradient-to-br from-purple-500/10 to-pink-500/10 hover:border-purple-400/50 hover:bg-purple-500/20 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/20"
          >
            <Linkedin
              size={40}
              className="mx-auto mb-4 text-purple-400 group-hover:text-pink-400 transition-colors"
            />
            <h3 className="font-bold text-lg mb-2">LinkedIn</h3>
            <p className="text-sm text-gray-400">Chukwuebuka Edward</p>
          </a>
        </div>

        {/* CTA Button */}
        <button
          onClick={() =>
            (window.location.href = "mailto:chukwuebukaedward20@gmail.com")
          }
          className="px-10 py-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg font-bold text-lg hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 transform hover:scale-105"
        >
          Send Me a Message
        </button>
      </div>
    </section>
  );
}
