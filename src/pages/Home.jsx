import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useAnimation } from 'framer-motion';
import { useInView } from 'framer-motion';
import { 
  Moon, Sun, Menu, X, Github, Instagram, Linkedin, Mail, Twitter, 
  GraduationCap, Award, Code2, Lightbulb, FileText, Download,
  ArrowRight, Calendar, Heart, ExternalLink, Star, ChevronLeft, 
  ChevronRight, Maximize2, Send, Sparkles, Loader2
} from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import '../components/ui/flip-card.css';

// Navbar Component
const Navbar = ({ isDark, toggleTheme }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navItems = [
    { name: "Home", href: "#" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Certifications", href: "#certifications" },
    { name: "Gallery", href: "#gallery" },
    { name: "Contact", href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border/40 shadow-sm supports-[backdrop-filter]:bg-background/60 transition-all duration-300 overflow-x-hidden ${
          isScrolled ? 'py-0' : 'py-1'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 w-full">
          <div className="flex items-center h-14 sm:h-16 relative px-2 sm:px-0">
            <motion.div className="flex items-center">
              <motion.a
                href="#"
                className="text-2xl font-bold bg-gradient-to-r from-primary via-purple-500 to-secondary bg-clip-text text-transparent"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                HK
              </motion.a>
            </motion.div>

            <div className="hidden md:flex items-center justify-center flex-1 space-x-1.5">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="px-3 py-2.5 text-sm sm:text-base font-medium text-foreground/90 hover:text-foreground hover:bg-accent/50 rounded-lg transition-colors active:bg-accent/70"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </a>
              ))}
            </div>

            <div className="flex items-center gap-2 sm:gap-3 ml-auto">
              <motion.button
                onClick={toggleTheme}
                className="p-2.5 sm:p-2 rounded-full hover:bg-accent transition-colors flex-shrink-0"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                aria-label="Toggle theme"
              >
                <AnimatePresence mode="wait">
                  {isDark ? (
                    <motion.div
                      key="sun"
                      initial={{ rotate: -90, scale: 0, opacity: 0 }}
                      animate={{ rotate: 0, scale: 1, opacity: 1 }}
                      exit={{ rotate: 90, scale: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <Sun className="h-5 w-5 text-yellow-500" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="moon"
                      initial={{ rotate: 90, scale: 0, opacity: 0 }}
                      animate={{ rotate: 0, scale: 1, opacity: 1 }}
                      exit={{ rotate: -90, scale: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <Moon className="h-5 w-5 text-blue-600" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>

              <motion.button
                onClick={() => setIsOpen(!isOpen)}
                className="md:hidden p-2.5 -mr-1.5 rounded-lg hover:bg-accent/50 transition-colors flex items-center justify-center relative z-50"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                aria-label={isOpen ? 'Close menu' : 'Open menu'}
                style={{ width: '3rem', height: '3rem' }}
              >
                <AnimatePresence mode="wait">
                  {isOpen ? (
                    <motion.div
                      key="close"
                      initial={{ rotate: -90, scale: 0 }}
                      animate={{ rotate: 0, scale: 1 }}
                      exit={{ rotate: 90, scale: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <X className="h-5 w-5 text-foreground/90" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="menu"
                      initial={{ rotate: 90, scale: 0 }}
                      animate={{ rotate: 0, scale: 1 }}
                      exit={{ rotate: -90, scale: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Menu className="h-5 w-5 text-foreground/90" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>
            </div>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, height: 0 }}
            animate={{ opacity: 1, y: 0, height: "auto" }}
            exit={{ opacity: 0, y: -10, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="fixed top-14 left-0 right-0 z-[60] md:hidden bg-background/95 backdrop-blur-lg border-b border-border/40 shadow-lg supports-[backdrop-filter]:bg-background/80"
            style={{
              WebkitBackdropFilter: 'blur(12px)',
              backdropFilter: 'blur(12px)'
            }}
          >
            <div className="w-full px-4 py-2">
              <div className="flex flex-col space-y-0.5 w-full">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05, duration: 0.2 }}
                    className="w-full border-b border-border/20 last:border-0"
                  >
                    <a
                      href={item.href}
                      className="block w-full px-4 py-3.5 text-base font-medium text-foreground/90 hover:text-foreground hover:bg-accent/50 transition-colors active:bg-accent/30 text-left"
                      onClick={() => {
                        setIsOpen(false);
                        setTimeout(() => {
                          try {
                            const selector = item.href.startsWith('#') ? item.href : `#${item.href.replace(/^#/, '')}`;
                            const element = document.querySelector(selector);
                            if (element) {
                              element.scrollIntoView({ behavior: 'smooth' });
                            }
                          } catch (error) {
                            console.error('Error scrolling to element:', error);
                          }
                        }, 100);
                      }}
                    >
                      {item.name}
                    </a>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

// Hero Component
const Hero = ({ isDark }) => {
  const socialLinks = [
    { icon: <Github className="w-4 h-4" />, url: "https://github.com/Harsh-7243" },
    { icon: <Twitter className="w-4 h-4" />, url: "https://x.com/harsh_7243" },
    { icon: <Instagram className="w-4 h-4" />, url: "https://www.instagram.com/harsh_7243" },
    { icon: <Linkedin className="w-4 h-4" />, url: "https://linkedin.com/in/harsh-kumar-9a10152b7" },
    { icon: <Mail className="w-4 h-4" />, url: "mailto:your.email@example.com" },
  ];

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
              <div className="flex space-x-2 mb-4">
                <span className="w-3 h-3 bg-red-500 rounded-full"></span>
                <span className="w-3 h-3 bg-yellow-500 rounded-full"></span>
                <span className="w-3 h-3 bg-green-500 rounded-full"></span>
              </div>

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

// About Component
const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeTab, setActiveTab] = useState('about');
  const [isHovered, setIsHovered] = useState(false);

  const education = [
    {
      icon: GraduationCap,
      period: "2023 - 2027",
      degree: "B.E in Computer Science",
      institution: "P.E.S College of Engineering, Mandya"
    },
    {
      icon: Award,
      period: "2023",
      degree: "12th (Senior-secondary)",
      institution: "CBSE Board - 77%"
    },
    {
      icon: Award,
      period: "2021",
      degree: "10th (Secondary)",
      institution: "CBSE Board - 94%"
    }
  ];

  const skills = ["Java", "Python", "Agentic AI", "Leadership", "Problem Solving"];

  return (
    <section id="about" className="py-20 md:py-28 px-4 sm:px-6 bg-background/50 relative overflow-hidden" ref={ref}>
      <div className="absolute -top-20 -right-20 w-64 h-64 bg-primary/10 rounded-full mix-blend-multiply filter blur-3xl opacity-70"></div>
      <div className="absolute -bottom-20 -left-20 w-72 h-72 bg-secondary/10 rounded-full mix-blend-multiply filter blur-3xl opacity-70"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 text-sm font-medium text-primary bg-primary/10 rounded-full mb-4">
            Get To Know Me
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-10 rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <motion.div 
            className="lg:col-span-2 space-y-8"
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card className="border-border/50 bg-background/80 backdrop-blur-sm hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-2xl font-bold flex items-center gap-2">
                  <Lightbulb className="w-6 h-6 text-primary" />
                  <span>Who Am I?</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex space-x-4 mb-4">
                    <button
                      onClick={() => setActiveTab('about')}
                      className={`px-4 py-2 text-sm font-medium rounded-full transition-all ${
                        activeTab === 'about' 
                          ? 'bg-primary text-white' 
                          : 'text-muted-foreground hover:bg-accent/50'
                      }`}
                    >
                      About
                    </button>
                    <button
                      onClick={() => setActiveTab('education')}
                      className={`px-4 py-2 text-sm font-medium rounded-full transition-all ${
                        activeTab === 'education' 
                          ? 'bg-primary text-white' 
                          : 'text-muted-foreground hover:bg-accent/50'
                      }`}
                    >
                      Education
                    </button>
                  </div>
                  
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeTab}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.3 }}
                      className="min-h-[200px]"
                    >
                      {activeTab === 'about' ? (
                        <div className="space-y-4">
                          <p className="text-muted-foreground leading-relaxed">
                            I'm a passionate <span className="text-primary font-medium">Computer Science Engineering</span> student at PES College of Engineering, Mandya, with expertise in Java, Python, and web development. I love transforming complex problems into elegant solutions through code.
                          </p>
                          <p className="text-muted-foreground leading-relaxed">
                            Beyond coding, I'm an avid photographer and creative storyteller, always looking to capture the world through my lens. I believe in the power of technology to create meaningful impact while maintaining a keen eye for aesthetics.
                          </p>
                        </div>
                      ) : (
                        <div className="space-y-6">
                          {education.map((edu, index) => (
                            <div key={index} className="flex gap-4">
                              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                                <GraduationCap className="w-6 h-6 text-primary" />
                              </div>
                              <div>
                                <h4 className="font-semibold text-foreground">{edu.degree}</h4>
                                <p className="text-sm text-muted-foreground">{edu.institution}</p>
                                <span className="inline-block mt-1 text-xs text-primary bg-primary/10 px-2 py-1 rounded-full">
                                  {edu.period}
                                </span>
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
                    </motion.div>
                  </AnimatePresence>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border/50 bg-background/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-2xl font-bold flex items-center gap-2">
                  <Code2 className="w-6 h-6 text-primary" />
                  <span>Skills & Expertise</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill, index) => (
                    <span 
                      key={index}
                      className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div 
            className="relative h-full"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="sticky top-24">
              <div className="relative group h-full rounded-2xl overflow-hidden border-2 border-border/50 shadow-xl hover:shadow-primary/20 transition-all duration-500">
                <img
                  src="/images/me.jpeg"
                  alt="Harsh Kumar - Developer & Creator"
                  width={400}
                  height={600}
                  className="w-full h-full object-cover object-center"
                  loading="eager"
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                />
                <div className={`absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent ${isHovered ? 'opacity-100' : 'opacity-0'} transition-opacity duration-500 flex flex-col justify-end p-6`}>
                  <motion.div 
                    className="transform translate-y-6 group-hover:translate-y-0 transition-all duration-500 text-center"
                    initial={{ y: 20 }}
                  >
                    <h3 className="text-2xl font-bold text-foreground mb-1">Harsh Kumar</h3>
                    <p className="text-primary font-medium">Developer & Creator</p>
                    <div className="flex justify-center gap-4 mt-4">
                      <a href="#" className="p-2 rounded-full bg-background/80 hover:bg-background text-foreground transition-colors">
                        <Github className="w-5 h-5" />
                      </a>
                      <a href="#" className="p-2 rounded-full bg-background/80 hover:bg-background text-foreground transition-colors">
                        <Linkedin className="w-5 h-5" />
                      </a>
                      <a href="#" className="p-2 rounded-full bg-background/80 hover:bg-background text-foreground transition-colors">
                        <Mail className="w-5 h-5" />
                      </a>
                    </div>
                  </motion.div>
                </div>
              </div>

              <div className="mt-8 space-y-4">
                <h3 className="text-lg font-semibold text-foreground">My Resume</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full"
                  >
                    <Button 
                      variant="outline" 
                      className="w-full h-16 border-2 border-primary/20 hover:border-primary/40 hover:bg-accent/10 transition-colors"
                      onClick={() => window.open('/Harsh_Kumar_Resume.pdf', '_blank')}
                    >
                      <FileText className="w-5 h-5 mr-2" />
                      Preview Resume
                    </Button>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full"
                  >
                    <Button 
                      className="w-full h-16 bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-600/90 text-white"
                      onClick={() => {
                        const link = document.createElement('a');
                        link.href = '/Harsh_Kumar_Resume.pdf';
                        link.download = 'Harsh_Kumar_Resume.pdf';
                        link.click();
                      }}
                    >
                      <Download className="w-5 h-5 mr-2" />
                      Download CV
                    </Button>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// Certification Card Component
const CertificationCard = ({ title, issuer, date, skills, link, image, alt }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleViewCertificate = (e) => {
    e.stopPropagation();
    window.open(link, '_blank');
  };

  return (
    <div
      className="flip-card aspect-[3/2] w-full h-full cursor-pointer"
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <div className={`flip-card-inner ${isFlipped ? 'flipped' : ''}`}>
        <div className="flip-card-front">
          <img 
            src={image} 
            alt={alt} 
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
        
        <div className="flip-card-back">
          <div className="flex flex-col h-full p-6">
            <h3 className="text-xl font-bold mb-2">{title}</h3>
            <p className="text-sm mb-4 opacity-80">{issuer}</p>
            <div className="flex items-center text-sm mb-6 opacity-80">
              <Calendar className="w-4 h-4 mr-2" />
              <span>{date}</span>
            </div>
            <div className="flex-1">
              <h4 className="text-sm font-medium mb-3 opacity-80">Skills Gained:</h4>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                  <span 
                    key={index}
                    className="px-3 py-1 text-xs font-medium rounded-full 
                      bg-blue-100 text-blue-800 dark:bg-blue-900/50 dark:text-blue-200
                      border border-blue-200 dark:border-blue-800/50"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <button
              onClick={handleViewCertificate}
              className="flex items-center justify-center gap-2 mt-4 px-4 py-2 
                bg-blue-600 hover:bg-blue-700 text-white rounded-lg 
                transition-colors duration-200 font-medium"
            >
              View Certificate
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// Certifications Component
const Certifications = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const certifications = [
    {
      title: "Cybersecurity Specialization",
      issuer: "Coursera",
      date: "2025",
      skills: ["Malware Protection", "Cloud Security", "Mobile Security", "Incident Management", "Security Strategy"],
      link: "/images/certifications/Coursera_me.jpeg",
      image: "/images/certifications/Coursera_me.jpeg",
      alt: "Coursera Cybersecurity Certification",
      description: "Specialization covering comprehensive cybersecurity topics including mobile security (Android & iOS), cloud security, malware protection, and security incident management."
    },
    {
      title: "Web Development Bootcamp",
      issuer: "ExcelR Solutions",
      date: "April - May 2025",
      skills: ["HTML5", "CSS3", "JavaScript", "ReactJS", "Responsive Design", "REST APIs"],
      link: "/images/certifications/EXCELR_me.jpg",
      image: "/images/certifications/EXCELR_me.jpg",
      alt: "ExcelR Web Development Certification",
      description: "10-day intensive program covering responsive design, CSS Flexbox/Grid, JavaScript fundamentals, DOM manipulation, ReactJS components, state management, and API integration with Axios."
    },
    {
      title: "Advanced Technology Foundation",
      issuer: "ALGO University",
      date: "2025",
      skills: ["Data Structures", "Algorithms"],
      link: "/images/certifications/ATF_me.png",
      image: "/images/certifications/ATF_me.png",
      alt: "ALGO University Advanced Technology Foundation Certification",
      description: "Prestigious program recognizing top talent in advanced technologies. Selected among top candidates nationwide, demonstrating strong potential in emerging tech fields."
    },
    {
      title: "Python Programming",
      issuer: "Infosys Springboard",
      date: "2024",
      skills: ["Python", "Programming Fundamentals", "Data Structures", "Algorithms"],
      link: "/images/certifications/Infosys springboard_me.jpg",
      image: "/images/certifications/Infosys springboard_me.jpg",
      alt: "Infosys Springboard Python Programming Certification",
      description: "Comprehensive Python programming course covering from basic to advanced concepts, focusing on practical implementation and problem-solving skills."
    },
    {
      title: "Cybersecurity Professional",
      issuer: "Palo Alto Networks",
      date: "2023",
      skills: ["Network Security", "Threat Prevention", "Cloud Security", "Endpoint Protection"],
      link: "/images/certifications/palo_alto_me.jpg",
      image: "/images/certifications/palo_alto_me.jpg",
      alt: "Palo Alto Networks Cybersecurity Certification",
      description: "Professional certification in enterprise-grade cybersecurity practices and threat prevention strategies."
    },
  ];

  return (
    <section id="certifications" className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 text-sm font-medium text-primary bg-primary/10 rounded-full mb-4">
            My Achievements
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Certifications
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-10 rounded-full"></div>
        </motion.div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="h-full w-full"
              style={{ minHeight: '400px' }}
            >
              <div className="h-full w-full">
                <CertificationCard {...cert} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Projects Component
const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await fetch('https://api.github.com/users/Harsh-7243/repos?sort=updated&per_page=6');
        const data = await response.json();
        setRepos(data);
      } catch (error) {
        console.error('Error fetching repos:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchRepos();
  }, []);

  return (
    <section id="projects" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-muted/30" ref={ref}>
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 px-2">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <div className="w-16 sm:w-20 h-0.5 sm:h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-4 sm:mb-6" />
          <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl mx-auto px-2 sm:px-4">
            A showcase of my recent work from GitHub
          </p>
        </motion.div>

        {loading ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="animate-pulse">
                <div className="glassmorphism rounded-xl h-64" />
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6 px-2 sm:px-0">
            {repos.map((repo, index) => (
              <motion.div
                key={repo.id}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ 
                  duration: 0.4, 
                  delay: Math.min(index * 0.1, 0.4),
                  ease: [0.16, 1, 0.3, 1]
                }}
                whileHover={{ 
                  y: -8,
                  scale: 1.02,
                  transition: { 
                    duration: 0.3,
                    ease: [0.4, 0, 0.2, 1]
                  }
                }}
              >
                <Card className="h-full glassmorphism border-border/50 hover:border-primary/40 transition-all hover:shadow-lg hover:shadow-primary/20">
                  <CardHeader className="pb-3 px-4 sm:px-6 pt-4 sm:pt-5">
                    <CardTitle className="flex items-center justify-between gap-3">
                      <span className="truncate text-[15px] sm:text-base font-medium">{repo.name}</span>
                      <div className="flex items-center gap-1 text-xs text-muted-foreground flex-shrink-0 bg-muted/50 rounded-full px-2 py-1">
                        <Star className="w-3 h-3" />
                        <span className="text-xs">{repo.stargazers_count}</span>
                      </div>
                    </CardTitle>
                    <CardDescription className="line-clamp-2 text-[13px] sm:text-sm text-muted-foreground mt-1">
                      {repo.description || "No description available"}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pb-3 px-4 sm:px-6">
                    <div className="flex flex-wrap gap-1.5">
                      {repo.language && (
                        <Badge variant="secondary" className="text-[11px] px-1.5 py-0.5">{repo.language}</Badge>
                      )}
                      {repo.topics.slice(0, 2).map((topic) => (
                        <Badge key={topic} variant="outline" className="text-[11px] px-1.5 py-0.5">
                          {topic.length > 10 ? `${topic.substring(0, 10)}...` : topic}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter className="gap-2 flex sm:flex-row pt-2 pb-4 sm:pb-5 px-4 sm:px-6">
                    <Button 
                      variant="outline" 
                      size="sm" 
                      asChild 
                      className="flex-1 w-full text-xs h-9 sm:h-9"
                    >
                      <a href={repo.html_url} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
                        <Github className="w-3.5 h-3.5 mr-1.5" />
                        <span>Code</span>
                      </a>
                    </Button>
                    {repo.homepage && (
                      <Button 
                        size="sm" 
                        asChild 
                        className="flex-1 w-full text-xs h-9 sm:h-9"
                      >
                        <a 
                          href={repo.homepage} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="flex items-center justify-center"
                        >
                          <ExternalLink className="w-3.5 h-3.5 mr-1.5" />
                          <span>Demo</span>
                        </a>
                      </Button>
                    )}
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>
        )}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="text-center mt-10 sm:mt-12 px-2"
        >
          <Button 
            size="lg" 
            variant="outline" 
            asChild 
            className="rounded-full w-full sm:w-auto h-11 sm:h-12 text-sm sm:text-base"
          >
            <a 
              href="https://github.com/Harsh-7243" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-center px-6"
            >
              <Github className="w-4 h-4 mr-2" />
              View All Projects
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

// Gallery Component
const Gallery = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedImage, setSelectedImage] = useState(null);
  const [showAll, setShowAll] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const controls = useAnimation();
  const [swipeX, setSwipeX] = useState(0);

  const galleryItems = [
    {
      id: 1,
      title: "Modern Dashboard",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=800&fit=crop",
      category: "Web Design",
    },
    {
      id: 2,
      title: "Mobile App UI",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1200&h=800&fit=crop",
      category: "Mobile",
    },
    {
      id: 3,
      title: "E-commerce Platform",
      image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=1200&h=800&fit=crop",
      category: "Web Design",
    },
    {
      id: 4,
      title: "Creative Portfolio",
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=1200&h=800&fit=crop",
      category: "Design",
    },
    {
      id: 5,
      title: "Data Visualization",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=800&fit=crop",
      category: "Web Design",
    },
    {
      id: 6,
      title: "Tech Conference",
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1200&h=800&fit=crop",
      category: "Event",
    },
    {
      id: 7,
      title: "UI Components",
      image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=1200&h=800&fit=crop",
      category: "UI Kit",
    },
    {
      id: 8,
      title: "Brand Identity",
      image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=1200&h=800&fit=crop",
      category: "Branding",
    },
    {
      id: 9,
      title: "Mobile App Design",
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=1200&h=800&fit=crop",
      category: "Mobile",
    },
  ];

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const visibleItems = showAll ? galleryItems : galleryItems.slice(0, 6);

  const handleSwipeStart = () => {
    setSwipeX(0);
  };

  const handleSwipe = (event, info) => {
    setSwipeX(info.offset.x);
  };

  const handleSwipeEnd = (event, info) => {
    if (selectedImage === null) return;
    
    if (Math.abs(info.offset.x) > 50) {
      const currentIndex = galleryItems.findIndex(item => item.id === selectedImage);
      if (info.offset.x > 0) {
        const prevIndex = (currentIndex - 1 + galleryItems.length) % galleryItems.length;
        setSelectedImage(galleryItems[prevIndex].id);
      } else {
        const nextIndex = (currentIndex + 1) % galleryItems.length;
        setSelectedImage(galleryItems[nextIndex].id);
      }
    }
    setSwipeX(0);
  };

  return (
    <section id="gallery" className="py-20 px-4" ref={ref}>
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Gallery
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-6" />
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A visual journey through my creative work and hackathon moments
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {visibleItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.3, delay: Math.min(index * 0.05, 0.5) }}
              whileHover={{ y: -5, boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)' }}
              className="relative group cursor-pointer overflow-hidden rounded-xl sm:rounded-2xl bg-card border border-border/50 hover:border-primary/30 transition-all duration-300"
              onClick={() => setSelectedImage(item.id)}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading={index > 3 ? 'lazy' : 'eager'}
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4 sm:p-6">
                <div>
                  <span className="inline-block px-2.5 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary mb-2">
                    {item.category}
                  </span>
                  <h3 className="text-base sm:text-lg font-semibold text-foreground">{item.title}</h3>
                </div>
              </div>
              <div className="absolute top-3 right-3 p-1.5 rounded-full bg-background/80 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Maximize2 className="w-4 h-4 text-foreground/70" />
              </div>
            </motion.div>
          ))}
        </div>

        {!showAll && galleryItems.length > 6 && (
          <motion.div 
            className="mt-10 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.3 }}
          >
            <Button 
              variant="outline"
              size="lg"
              className="px-8 py-6 text-base font-medium group"
              onClick={() => setShowAll(true)}
            >
              View All Images
              <span className="ml-2 opacity-70 group-hover:translate-x-1 transition-transform">
                ↓
              </span>
            </Button>
          </motion.div>
        )}

        <AnimatePresence>
          {selectedImage !== null && (
            <motion.div
              key="lightbox"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-background/95 backdrop-blur-sm flex items-center justify-center p-4"
              onClick={(e) => {
                if (e.target === e.currentTarget) setSelectedImage(null);
              }}
            >
              <button
                className="relative max-w-6xl w-full max-h-[90vh] overflow-hidden rounded-xl bg-background shadow-2xl border border-border/50"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="absolute top-0 left-0 right-0 p-4 bg-gradient-to-b from-background/80 to-transparent z-10 flex justify-between items-center">
                  <div>
                    <h3 className="text-lg font-semibold text-foreground">
                      {galleryItems.find((item) => item.id === selectedImage)?.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {galleryItems.find((item) => item.id === selectedImage)?.category}
                    </p>
                  </div>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedImage(null);
                    }}
                    className="p-2 rounded-full hover:bg-muted transition-colors text-foreground/70 hover:text-foreground"
                    aria-label="Close lightbox"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
                
                <div className="h-full w-full flex items-center justify-center p-4 pt-16 pb-16 sm:pt-20 sm:pb-20 overflow-hidden">
                  <motion.div
                    className="w-full h-full flex items-center justify-center"
                    drag={isMobile ? "x" : false}
                    dragConstraints={{ left: 0, right: 0 }}
                    onDragStart={handleSwipeStart}
                    onDrag={handleSwipe}
                    onDragEnd={handleSwipeEnd}
                    style={{
                      x: swipeX,
                      cursor: isMobile ? (swipeX !== 0 ? 'grabbing' : 'grab') : 'default'
                    }}
                    animate={controls}
                  >
                    <motion.img
                      key={selectedImage}
                      src={galleryItems.find((item) => item.id === selectedImage)?.image}
                      alt={galleryItems.find((item) => item.id === selectedImage)?.title || ''}
                      className="max-w-full max-h-full object-contain touch-none"
                      initial={{ opacity: 0, scale: 0.98 }}
                      animate={{ 
                        opacity: 1, 
                        scale: 1,
                        x: 0
                      }}
                      exit={{ opacity: 0, scale: 0.98 }}
                      transition={{ duration: 0.2 }}
                      onClick={(e) => e.stopPropagation()}
                    />
                  </motion.div>
                </div>

                {!isMobile && (
                  <div className="absolute inset-0 flex items-center justify-between p-4 z-10 pointer-events-none">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        const currentIndex = galleryItems.findIndex(item => item.id === selectedImage);
                        const prevIndex = (currentIndex - 1 + galleryItems.length) % galleryItems.length;
                        setSelectedImage(galleryItems[prevIndex].id);
                      }}
                      className="p-2 rounded-full bg-background/80 backdrop-blur-sm hover:bg-muted transition-colors text-foreground/70 hover:text-foreground pointer-events-auto"
                      aria-label="Previous image"
                    >
                      <ChevronLeft className="w-6 h-6" />
                    </button>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        const currentIndex = galleryItems.findIndex(item => item.id === selectedImage);
                        const nextIndex = (currentIndex + 1) % galleryItems.length;
                        setSelectedImage(galleryItems[nextIndex].id);
                      }}
                      className="p-2 rounded-full bg-background/80 backdrop-blur-sm hover:bg-muted transition-colors text-foreground/70 hover:text-foreground pointer-events-auto"
                      aria-label="Next image"
                    >
                      <ChevronRight className="w-6 h-6" />
                    </button>
                  </div>
                )}
                
                {isMobile && (
                  <div className="absolute bottom-4 left-0 right-0 text-center">
                    <p className="inline-block px-3 py-1 text-xs text-muted-foreground bg-background/80 backdrop-blur-sm rounded-full border border-border">
                      Swipe to navigate • Tap to close
                    </p>
                  </div>
                )}
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

// Contact Component
const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [focusedField, setFocusedField] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    setIsSubmitting(true);
    
    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 2000));
      console.log('Form submitted:', formData);
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/Harsh-7243",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://linkedin.com/in/harsh-kumar-9a10152b7",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      icon: Mail,
      label: "srivastavaharsh1108@gmail.com",
      href: "mailto:srivastavaharsh1108@gmail.com",
      gradient: "from-orange-500 to-red-500",
    },
  ];

  return (
    <section id="contact" className="py-12 sm:py-16 px-3 sm:px-4 md:px-6 bg-muted/30 w-full" ref={ref}>
      <div className="container mx-auto max-w-6xl w-full px-2 sm:px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : { scale: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glassmorphism mb-6"
          >
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium">Let's Connect</span>
          </motion.div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 px-4">
            Let's Build Together 💫
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto px-4">
            Have a project in mind? Let's create something amazing together.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-10 w-full">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8 sm:space-y-12"
          >
            <div className="glassmorphism rounded-2xl p-4 sm:p-6 w-full">
              <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Get in Touch</h3>
              <form onSubmit={handleSubmit} className="space-y-6 sm:space-y-8">
                <div className="relative">
                  <Input
                    placeholder=" "
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    onFocus={() => setFocusedField("name")}
                    onBlur={() => setFocusedField(null)}
                    className="bg-background/50 peer pt-6"
                    required
                  />
                  <label className="absolute left-3 top-4 text-muted-foreground pointer-events-none transition-all duration-200 peer-focus:text-xs peer-focus:top-2 peer-focus:text-primary peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:top-2">
                    Your Name
                  </label>
                </div>
                <div className="relative">
                  <Input
                    type="email"
                    placeholder=" "
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    onFocus={() => setFocusedField("email")}
                    onBlur={() => setFocusedField(null)}
                    className="bg-background/50 peer pt-6"
                    required
                  />
                  <label className="absolute left-3 top-4 text-muted-foreground pointer-events-none transition-all duration-200 peer-focus:text-xs peer-focus:top-2 peer-focus:text-primary peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:top-2">
                    Your Email
                  </label>
                </div>
                <div className="relative">
                  <Textarea
                    placeholder=" "
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    onFocus={() => setFocusedField("message")}
                    onBlur={() => setFocusedField(null)}
                    className="bg-background/50 min-h-[150px] peer pt-6"
                    required
                  />
                  <label className="absolute left-3 top-4 text-muted-foreground pointer-events-none transition-all duration-200 peer-focus:text-xs peer-focus:top-2 peer-focus:text-primary peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:top-2">
                    Your Message
                  </label>
                </div>
                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Button
                    type="submit"
                    className="w-full group relative overflow-hidden"
                    size="lg"
                    disabled={isSubmitting}
                  >
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-accent"
                      initial={{ x: isSubmitting ? "0%" : "-100%" }}
                      animate={{ x: isSubmitting ? "100%" : "-100%" }}
                      transition={{ duration: 2, repeat: isSubmitting ? Infinity : 0, ease: "linear" }}
                    />
                    <span className="relative z-10 flex items-center justify-center">
                      {isSubmitting ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Message
                          <Send className="ml-2 w-4 h-4 group-hover:translate-x-1 group-hover:rotate-45 transition-all" />
                        </>
                      )}
                    </span>
                  </Button>
                </motion.div>
              </form>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8 sm:space-y-12"
          >
            <div className="glassmorphism rounded-2xl p-4 sm:p-6 w-full">
              <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Connect With Me</h3>
              <div className="space-y-4 sm:space-y-6">
                {socialLinks.map((link, index) => (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, x: 20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                    transition={{ delay: 0.6 + index * 0.1 }}
                    whileHover={{ scale: 1.05, x: 10 }}
                    className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl bg-background/50 hover:bg-background transition-all group relative overflow-hidden"
                  >
                    <motion.div
                      className={`absolute inset-0 bg-gradient-to-r ${link.gradient} opacity-0 group-hover:opacity-10 transition-opacity`}
                      initial={false}
                    />
                    <div className={`relative p-2 sm:p-3 rounded-lg bg-gradient-to-br ${link.gradient} flex-shrink-0`}>
                      <link.icon className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                    </div>
                    <span className="relative text-sm sm:text-base font-medium group-hover:text-primary transition-colors truncate">
                      {link.label}
                    </span>
                    <motion.div
                      className="absolute right-3 sm:right-4 opacity-0 group-hover:opacity-100 hidden sm:block"
                      initial={{ x: -10 }}
                      whileHover={{ x: 0 }}
                    >
                      <Send className="w-3 h-3 sm:w-4 sm:h-4" />
                    </motion.div>
                  </motion.a>
                ))}
              </div>
            </div>

            <div className="glassmorphism rounded-2xl p-4 sm:p-6 md:p-8">
              <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">Quick Info</h3>
              <div className="space-y-2 sm:space-y-3 text-sm sm:text-base text-muted-foreground">
                <p className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse flex-shrink-0" />
                  Available for freelance work
                </p>
                <p>⚡ Fast response time</p>
                <p>🌍 Based in India</p>
                <p>💼 Open to opportunities</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// Main Home Component
const Home = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
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

export default Home;
