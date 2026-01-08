import React, { useState } from "react";
import {
  Menu,
  X,
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  ChevronDown,
  Code,
  Users,
  Zap,
  Award,
} from "lucide-react";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("all");

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  const experiences = [
    {
      title: "Frontend Developer & Instructor",
      company: "SkillBoost Africa",
      date: "June 2025 – Present",
      type: "Teaching",
      highlights: [
        "Conduct frontend development classes covering HTML, CSS, JavaScript, and React.js",
        "Taught 50+ students using project-based learning approach",
        "Provided code reviews and technical support to students",
      ],
    },
    {
      title: "Computer Instructor",
      company: "Infinity Tech Academy",
      date: "July 2024 – Nov 2024",
      type: "Teaching",
      highlights: [
        "Conducted hands-on training in computer appreciation and web development",
        "Developed structured curriculum for Microsoft Office Suite and design tools",
        "Monitored learner progress and provided technical support",
      ],
    },
    {
      title: "Web Developer",
      company: "Kalmartz",
      date: "Mar 2024 – Dec 2025",
      type: "Development",
      highlights: [
        "Managed and updated company website using WordPress",
        "Improved website performance, accessibility, and load speed",
        "Collaborated with stakeholders to implement business-aligned updates",
      ],
    },
    {
      title: "Frontend Developer Intern",
      company: "Genesys Tech Hub",
      date: "Nov 2022 – July 2023",
      type: "Development",
      highlights: [
        "Led frontend team using Scrum to build Learnz LMS (React-based)",
        "Developed FeedFit diet plan application using React.js",
        "Collaborated with designers and backend developers",
      ],
    },
  ];

  const projects = [
    {
      name: "Learnz LMS",
      description:
        "A React-based Learning Management System designed for children aged 9-15. Built with responsive design and engaging user interface for seamless learning experience.",
      tech: ["React.js", "JavaScript", "Responsive Design", "UI/UX"],
      icon: "📚",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      name: "FeedFit",
      description:
        "Personalized diet plan application built with React.js, implementing smart algorithms and MoSCoW prioritization framework to deliver essential features first.",
      tech: ["React.js", "UI/UX", "MoSCoW Framework", "JavaScript"],
      icon: "🥗",
      gradient: "from-green-500 to-emerald-500",
    },
    {
      name: "Personal Portfolio",
      description:
        "Responsive portfolio website built with HTML and CSS, showcasing clean design principles, professional layouts, and optimal user experience.",
      tech: ["HTML", "CSS", "Responsive Design", "Web Design"],
      icon: "💼",
      gradient: "from-purple-500 to-pink-500",
    },
  ];

  const skills = [
    {
      category: "Frontend",
      items: ["HTML", "CSS", "JavaScript", "TypeScript", "React.js", "Next.js"],
      icon: "🎨",
    },
    {
      category: "Styling",
      items: ["Tailwind CSS", "Bootstrap", "Responsive Design"],
      icon: "✨",
    },
    {
      category: "Tools & Methods",
      items: ["Git", "GitHub", "WordPress", "Agile/Scrum", "UI/UX"],
      icon: "⚙️",
    },
  ];

  const stats = [
    { number: "3+", label: "Years Experience", icon: "📅" },
    { number: "50+", label: "Students Taught", icon: "👥" },
    { number: "4", label: "Professional Roles", icon: "💼" },
    { number: "3", label: "Projects Delivered", icon: "🎯" },
  ];

  return (
    <div className="bg-black text-white min-h-screen overflow-hidden">
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-black/80 backdrop-blur-xl border-b border-purple-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="text-3xl font-black bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
            CE
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8">
            {["home", "about", "experience", "projects", "contact"].map(
              (item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="capitalize text-sm font-semibold hover:text-purple-400 transition-all duration-300 relative group"
                >
                  {item}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 group-hover:w-full transition-all duration-300"></span>
                </button>
              )
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-black/95 border-t border-purple-500/20">
            <div className="flex flex-col p-4 gap-4">
              {["home", "about", "experience", "projects", "contact"].map(
                (item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item)}
                    className="capitalize text-sm font-semibold hover:text-purple-400 transition-colors text-left py-2 border-l-2 border-transparent hover:border-purple-400 pl-3"
                  >
                    {item}
                  </button>
                )
              )}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="min-h-screen flex items-center justify-center pt-20 px-4 relative overflow-hidden"
      >
        {/* Animated background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-pink-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-1/2 w-96 h-96 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
        </div>

        <style>{`
          @keyframes blob {
            0%, 100% { transform: translate(0, 0) scale(1); }
            33% { transform: translate(30px, -50px) scale(1.1); }
            66% { transform: translate(-20px, 20px) scale(0.9); }
          }
          .animate-blob { animation: blob 7s infinite; }
          .animation-delay-2000 { animation-delay: 2s; }
          .animation-delay-4000 { animation-delay: 4s; }
        `}</style>

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
                Building responsive web applications that users love. Teaching
                the next generation of developers. 3+ years of experience with
                React, JavaScript, and modern frontend technologies.
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

            {/* Right - Image/Profile */}
            <div className="flex justify-center items-center relative">
              <div className="relative w-full max-w-sm">
                {/* Outer glow */}
                <div className="absolute -inset-8 bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl blur-3xl opacity-20 animate-pulse"></div>

                {/* Image frame */}
                <div className="relative bg-gradient-to-br from-purple-500 to-pink-500 rounded-3xl p-1 overflow-hidden">
                  <div className="bg-black rounded-3xl overflow-hidden aspect-square flex items-center justify-center">
                    <div className="w-full h-full bg-gradient-to-br from-purple-600 via-blue-600 to-pink-600 flex items-center justify-center relative overflow-hidden">
                      <div className="text-9xl animate-bounce">👨‍💻</div>

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

      {/* About Section */}
      <section id="about" className="py-24 px-4 relative">
        <div className="max-w-6xl mx-auto">
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

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[
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
            ].map((item, idx) => (
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

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-6">
                Background & Expertise
              </h3>
              <p className="text-gray-400 mb-4 leading-relaxed">
                I'm a frontend engineer with a strong foundation in Electronics
                and Computer Engineering from Nnamdi Azikiwe University. With 3+
                years of hands-on experience, I specialize in building
                responsive, user-centric web applications that bridge the gap
                between design and functionality.
              </p>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Beyond development, I'm deeply committed to giving back to the
                tech community as a technical instructor. I've taught 50+
                students in frontend technologies, believing in the power of
                project-based learning and practical knowledge transfer.
              </p>
              <p className="text-gray-400 leading-relaxed">
                My expertise spans modern JavaScript frameworks, responsive
                design principles, and collaborative development methodologies.
                I thrive on solving complex problems and creating meaningful
                digital experiences.
              </p>
            </div>

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

      {/* Work Experience Section */}
      <section
        id="experience"
        className="py-24 px-4 relative bg-gradient-to-b from-purple-600/10 to-pink-600/10"
      >
        <div className="max-w-6xl mx-auto">
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

      {/* Projects Section */}
      <section id="projects" className="py-24 px-4 relative">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-black mb-4">
              Featured{" "}
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Projects
              </span>
            </h2>
            <p className="text-xl text-gray-400">
              Showcasing my best work and technical expertise
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {projects.map((project, idx) => (
              <div
                key={idx}
                className="group h-full rounded-2xl border border-purple-500/20 bg-gradient-to-br from-black to-purple-900/20 overflow-hidden hover:border-purple-400/50 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/20"
              >
                <div
                  className={`h-48 bg-gradient-to-br ${project.gradient} relative overflow-hidden flex items-center justify-center`}
                >
                  <p className="text-7xl group-hover:scale-125 transition-transform duration-300">
                    {project.icon}
                  </p>
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors"></div>
                </div>

                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-purple-300 transition-colors">
                    {project.name}
                  </h3>
                  <p className="text-gray-400 mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-purple-500/20 border border-purple-400/30 rounded-full text-xs font-semibold text-purple-300 group-hover:border-purple-300 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="py-24 px-4 relative bg-gradient-to-b from-purple-600/10 to-pink-600/10"
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-black mb-6">
            Let's Work{" "}
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Together
            </span>
          </h2>
          <p className="text-xl text-gray-400 mb-12">
            I'm always excited about discussing new projects, creative ideas,
            and opportunities to contribute to tech education and innovation.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
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

      {/* Footer */}
      <footer className="border-t border-purple-500/20 py-8 px-4 text-center text-gray-500">
        <p className="mb-4">© 2025 Chukwuebuka Edward. All rights reserved.</p>
        <p className="text-sm">
          Crafted with passion using React & Tailwind CSS
        </p>
      </footer>
    </div>
  );
}
