import React from "react";
import { motion } from "framer-motion";
import { Github, Instagram, Linkedin, Mail, Twitter } from "lucide-react";

const Hero = ({ isDark }) => {

  const socialLinks = [
    { icon: <Github className="w-4 h-4" />, url: "https://github.com/Harsh-7243" },
    { icon: <Twitter className="w-4 h-4" />, url: "https://x.com/harsh_7243" },
    { icon: <Instagram className="w-4 h-4" />, url: "https://www.instagram.com/harsh_7243" },
    { icon: <Linkedin className="w-4 h-4" />, url: "https://linkedin.com/in/harsh-kumar-9a10152b7" },
    { icon: <Mail className="w-4 h-4" />, url: "mailto:your.email@example.com" },
  ];

  // Syntax color mapping for light & dark themes
  const syntax = {
    keyword: isDark ? "#C586C0" : "#9B4DCA",
    variable: isDark ? "#9CDCFE" : "#2B6CB0",
    string: isDark ? "#CE9178" : "#B7791F",
    boolean: isDark ? "#569CD6" : "#2F855A",
    property: isDark ? "#9CDCFE" : "#2B6CB0",
    punctuation: isDark ? "#D4D4D4" : "#4A5568",
    function: isDark ? "#DCDCAA" : "#B83280",
    default: isDark ? "#D4D4D4" : "#2D3748",
  };
  return (
    <section className="min-h-[calc(100vh-4rem)] flex items-center py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
              <span>Available for opportunities</span>
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
              Hi, I'm <span className="text-primary">Harsh Kumar</span>
            </h1>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mb-2"
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 animate-gradient">
                Developer & Creator
              </h2>
            </motion.div>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="text-lg sm:text-xl text-muted-foreground mb-8"
            >
              Turning ideas into interactive experiences
            </motion.p>

            <div className="flex flex-wrap gap-6 justify-center sm:justify-start">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full border border-border hover:bg-primary/10 transition-colors"
                  whileHover={{ y: -3, scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {React.cloneElement(social.icon, { 
                    className: 'w-6 h-6' 
                  })}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Right Column - Code Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className={`rounded-2xl shadow-2xl p-6 font-mono w-full max-w-full ${
              isDark 
                ? "bg-[#1E1E1E] border border-gray-700 text-gray-200" 
                : "bg-white border border-gray-100 text-gray-800"
            }`}>
              <style dangerouslySetInnerHTML={{ __html: `
                .code-pre {
                  white-space: pre-wrap !important;
                  word-wrap: break-word !important;
                }
              `}} />
              {/* Mac-style buttons */}
              <div className="flex space-x-2 mb-4">
                <span className="w-3 h-3 bg-red-500 rounded-full"></span>
                <span className="w-3 h-3 bg-yellow-500 rounded-full"></span>
                <span className="w-3 h-3 bg-green-500 rounded-full"></span>
              </div>

              {/* Syntax-highlighted code */}
              <pre className="code-pre text-sm leading-relaxed break-words" style={{ color: syntax.default }}>
                <code>
                  <span style={{ color: syntax.keyword }}>const</span>{" "}
                  <span style={{ color: syntax.variable }}>harsh</span>{" "}
                  <span style={{ color: syntax.punctuation }}>=</span>{" "}
                  <span style={{ color: syntax.punctuation }}>{"{"}</span>
                  {"\n  "}
                  <span style={{ color: syntax.property }}>name</span>:
                  <span style={{ color: syntax.string }}> 'Harsh Kumar'</span>,
                  {"\n  "}
                  <span style={{ color: syntax.property }}>role</span>:
                  <span style={{ color: syntax.string }}> 'Developer & Creator'</span>,
                  {"\n  "}
                  <span style={{ color: syntax.property }}>skills</span>:
                  <span style={{ color: syntax.string }}>
                    {'[\'React\', \'Next.js\', \'Node.js\', \'TypeScript\', \'MongoDB\', \'PostgreSQL\', \'Docker\', \'Azure\']'}
                  </span>
                  ,{"\n  "}
                  <span style={{ color: syntax.property }}>hardWorker</span>:
                  <span style={{ color: syntax.boolean }}> true</span>,{"\n  "}
                  <span style={{ color: syntax.property }}>quickLearner</span>:
                  <span style={{ color: syntax.boolean }}> true</span>,{"\n  "}
                  <span style={{ color: syntax.property }}>problemSolver</span>:
                  <span style={{ color: syntax.boolean }}> true</span>,{"\n  "}
                  <span style={{ color: syntax.property }}>hireable</span>:
                  <span style={{ color: syntax.function }}> function</span>()
                  {" {"}
                  {"\n    return ("}
                  {"\n      this.hardWorker &&"}
                  {"\n      this.problemSolver &&"}
                  {"\n      this.skills.length >= 5"}
                  {"\n    );"}
                  {"\n  }"}
                  {"\n};"}
                </code>
              </pre>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
