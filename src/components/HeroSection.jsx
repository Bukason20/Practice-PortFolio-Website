import React from "react";
import { ChevronDown } from "lucide-react";
import { scrollToSection } from "../utils/scrollToSection";
import { stats } from "../data/statsData";
import { ProfileImg } from "../assets";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-20 px-4 relative overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-pink-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-1/2 w-96 h-96 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div>
              <p className="text-purple-400 font-semibold mb-2 tracking-widest">
                👋 WELCOME TO MY PORTFOLIO
              </p>
              <h1 className="text-6xl md:text-7xl font-black leading-tight mb-4">
                Chukwuebuka
                <span className="block bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
                  Edward
                </span>
              </h1>
              <p className="text-2xl md:text-3xl font-bold text-gray-300 mb-2">
                Frontend Developer
              </p>
              <p className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Technical Instructor
              </p>
            </div>

            <p className="text-lg text-gray-400 leading-relaxed max-w-lg">
              Building responsive web applications that users love. Teaching the
              next generation of developers. 3+ years of experience with React,
              JavaScript, and modern frontend technologies.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => scrollToSection("projects")}
                className="group px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg font-bold text-lg hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 transform hover:scale-105"
              >
                View Projects
                <span className="inline-block ml-2 group-hover:translate-x-2 transition-transform">
                  →
                </span>
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="px-8 py-4 border-2 border-purple-400 rounded-lg font-bold text-lg hover:bg-purple-400/10 transition-all duration-300"
              >
                Contact Me
              </button>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              {stats.map((stat, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-lg border border-purple-500/20 bg-purple-500/5 hover:bg-purple-500/10 transition-colors"
                >
                  <p className="text-2xl font-bold text-purple-400">
                    {stat.number}
                  </p>
                  <p className="text-sm text-gray-400">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Profile Picture */}
          <div className="flex justify-center items-center relative">
            <div className="relative w-full max-w-sm">
              {/* Outer glow */}
              <div className="absolute -inset-8 bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl blur-3xl opacity-20 animate-pulse"></div>

              {/* Image frame */}
              <div className="relative bg-gradient-to-br from-purple-500 to-pink-500 rounded-3xl p-1 overflow-hidden">
                <div className="bg-black rounded-3xl overflow-hidden aspect-square flex items-center justify-center">
                  <div className="w-full h-full bg-gradient-to-br from-purple-600 via-blue-600 to-pink-600 flex items-center justify-center relative overflow-hidden">
                    <img src={ProfileImg} alt="" />
                    {/* <div className="text-9xl animate-bounce">👨‍💻</div> */}

                    {/* Floating elements */}
                    <div
                      className="absolute top-4 right-4 w-12 h-12 bg-white rounded-full flex items-center justify-center text-2xl animate-bounce"
                      style={{ animationDelay: "0.2s" }}
                    >
                      ⚡
                    </div>
                    <div
                      className="absolute bottom-8 left-4 w-10 h-10 bg-purple-400 rounded-full flex items-center justify-center text-xl animate-bounce"
                      style={{ animationDelay: "0.4s" }}
                    >
                      💻
                    </div>
                  </div>
                </div>
              </div>

              {/* Badge */}
              <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-purple-500 to-pink-500 px-6 py-2 rounded-full text-sm font-bold whitespace-nowrap z-20">
                Available for Work ✨
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button
            onClick={() => scrollToSection("about")}
            className="flex flex-col items-center gap-2 text-purple-400 hover:text-pink-400 transition-colors"
          >
            <span className="text-sm font-semibold">Scroll to explore</span>
            <ChevronDown size={24} />
          </button>
        </div>
      </div>
    </section>
  );
}
