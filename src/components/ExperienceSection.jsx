import React from "react";
import { experiences } from "../data/experienceData";

export default function ExperienceSection() {
  return (
    <section
      id="experience"
      className="py-24 px-4 relative bg-gradient-to-b from-purple-600/10 to-pink-600/10"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-black mb-4">
            Work{" "}
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Experience
            </span>
          </h2>
          <p className="text-xl text-gray-400">
            Journey through my professional growth
          </p>
        </div>

        {/* Experience Cards */}
        <div className="space-y-6">
          {experiences.map((exp, idx) => (
            <div
              key={idx}
              className="group p-8 rounded-2xl border border-purple-500/20 bg-gradient-to-r from-purple-500/5 to-pink-500/5 hover:from-purple-500/10 hover:to-pink-500/10 transition-all duration-300 hover:border-purple-400/50 hover:shadow-xl hover:shadow-purple-500/20"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                <div>
                  <h3 className="text-2xl font-bold group-hover:text-purple-300 transition-colors">
                    {exp.title}
                  </h3>
                  <p className="text-purple-400 font-semibold text-lg">
                    {exp.company}
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <span className="px-4 py-1 bg-purple-500/20 border border-purple-400/30 rounded-full text-sm font-semibold text-purple-300">
                    {exp.type}
                  </span>
                  <span className="text-gray-400 font-semibold whitespace-nowrap">
                    {exp.date}
                  </span>
                </div>
              </div>
              <ul className="space-y-2">
                {exp.highlights.map((highlight, i) => (
                  <li key={i} className="flex gap-3 text-gray-300">
                    <span className="text-pink-400 mt-1 font-bold">▪</span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
