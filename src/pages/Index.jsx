import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Heart } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Projects from "@/components/sections/Projects";
import Certifications from "@/components/Certifications";
import Gallery from "@/components/sections/Gallery";
import Contact from "@/components/sections/Contact";

const Index = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Check system preference
    const isDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;
    setIsDark(isDarkMode);
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <div className="min-h-screen">
      <Navbar isDark={isDark} toggleTheme={toggleTheme} />
      <Hero isDark={isDark} />
      <About />
      <Projects />
      <Certifications />
      <Gallery />
      <Contact />
    </div>
  );
};

export default Index;
