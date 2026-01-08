import React from "react";
import { skills } from "../data/skillsData";

export default function AboutSection() {
  const features = [
    {
      icon: "💡",
      title: "Creative Problem Solving",
      desc: "Breaking down complex problems into elegant solutions",
    },
    {
      icon: "🎓",
      title: "Knowledge Sharing",
      desc: "Passionate about teaching and mentoring developers",
    },
    {
      icon: "🚀",
      title: "Continuous Learning",
      desc: "Always exploring new technologies and frameworks",
    },
  ];

  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-black mb-4">
            About{" "}
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Me
            </span>
          </h2>
          <p className="text-xl text-gray-400">
            Passionate developer. Dedicated educator. Problem solver.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {features.map((item, idx) => (
            <div
              key={idx}
              className="p-8 rounded-2xl border border-purple-500/20 bg-gradient-to-br from-purple-500/10 to-pink-500/10 hover:border-purple-400/50 transition-all duration-300 hover:transform hover:scale-105"
            >
              <p className="text-5xl mb-4">{item.icon}</p>
              <h3 className="text-xl font-bold mb-3">{item.title}</h3>
              <p className="text-gray-400">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div>
            <h3 className="text-3xl font-bold mb-6">Background & Expertise</h3>
            <p className="text-gray-400 mb-4 leading-relaxed">
              I'm a frontend engineer with a strong foundation in Electronics
              and Computer Engineering from Nnamdi Azikiwe University. With 3+
              years of hands-on experience, I specialize in building responsive,
              user-centric web applications that bridge the gap between design
              and functionality.
            </p>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Beyond development, I'm deeply committed to giving back to the
              tech community as a technical instructor. I've taught 50+ students
              in frontend technologies, believing in the power of project-based
              learning and practical knowledge transfer.
            </p>
            <p className="text-gray-400 leading-relaxed">
              My expertise spans modern JavaScript frameworks, responsive design
              principles, and collaborative development methodologies. I thrive
              on solving complex problems and creating meaningful digital
              experiences.
            </p>
          </div>

          {/* Skills */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold">Core Skills</h3>
            {skills.map((skillGroup, idx) => (
              <div
                key={idx}
                className="p-6 rounded-xl border border-purple-500/20 bg-purple-500/5 hover:bg-purple-500/10 transition-colors"
              >
                <p className="font-bold text-purple-400 mb-3 flex items-center gap-2">
                  <span className="text-2xl">{skillGroup.icon}</span>
                  {skillGroup.category}
                </p>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((skill, i) => (
                    <span
                      key={i}
                      className="px-4 py-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-400/30 rounded-full text-sm font-semibold hover:border-purple-400/60 transition-colors cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
