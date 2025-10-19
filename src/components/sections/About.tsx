import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Code2, Heart, Zap, Download, Eye, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [showResumePreview, setShowResumePreview] = useState(false);

  const features = [
    {
      icon: Code2,
      title: "Clean Code",
      description: "Writing maintainable and elegant solutions",
    },
    {
      icon: Heart,
      title: "User-Focused",
      description: "Creating meaningful digital experiences",
    },
    {
      icon: Zap,
      title: "Fast Learner",
      description: "Always exploring new technologies",
    },
  ];

  return (
    <section id="about" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 overflow-x-hidden" ref={ref}>
      <div className="w-full mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl xs:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 px-2">
            About <span className="text-gradient">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 md:gap-10 lg:gap-12 items-start">
          {/* Main Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6 sm:space-y-8 md:space-y-10 lg:space-y-12"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-2xl blur-2xl opacity-20" />
              <div className="relative glassmorphism rounded-2xl p-0.5 sm:p-1">
                <div className="bg-background rounded-xl p-5 sm:p-6 md:p-8 lg:p-10 overflow-hidden">
                  <p className="text-base md:text-lg text-muted-foreground leading-relaxed sm:leading-8 mt-4">
                    I'm always learning, building, and sharing my journey through code — 
                    turning complex problems into elegant solutions.
                  </p>
                  <div className="flex flex-col xs:flex-row gap-3 mt-8 sm:mt-10 w-full">
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex-1"
                    >
                      <Button
                        onClick={() => setShowResumePreview(true)}
                        size="lg"
                        variant="outline"
                        className="group rounded-full w-full glassmorphism hover:bg-accent/10"
                      >
                        <Eye className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                        Preview Resume
                      </Button>
                    </motion.div>
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex-1"
                    >
                      <Button
                        asChild
                        size="lg"
                        className="group rounded-full w-full"
                      >
                        <a href="/RESUME.pdf" download="Harsh_Kumar_Resume.pdf">
                          <Download className="w-5 h-5 mr-2 group-hover:animate-pulse" />
                          Download Resume
                        </a>
                      </Button>
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>

            {/* Resume Preview Modal */}
            {showResumePreview && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-[100] bg-background/95 backdrop-blur-sm flex items-center justify-center p-3 sm:p-4"
                onClick={() => setShowResumePreview(false)}
              >
                <button
                  aria-label="Close resume preview"
                  className="absolute top-4 right-4 p-2 rounded-full glassmorphism hover:bg-muted transition-colors"
                  onClick={() => setShowResumePreview(false)}
                >
                  <X className="w-5 h-5 sm:w-6 sm:h-6" />
                </button>
                <motion.div
                  initial={{ scale: 0.8 }}
                  animate={{ scale: 1 }}
                  className="w-full max-w-[calc(100%-2rem)] sm:max-w-4xl max-h-[90vh] glassmorphism rounded-2xl p-1.5 sm:p-2 overflow-hidden mx-2"
                  onClick={(e) => e.stopPropagation()}
                >
                  <div className="bg-background rounded-xl overflow-auto max-h-[85vh]">
                    <iframe
                      src="/RESUME.pdf#toolbar=0"
                      className="w-full h-[75vh] sm:h-[80vh] border-0"
                      title="Resume Preview Modal"
                    />
                  </div>
                </motion.div>
              </motion.div>
            )}

            {/* Features for mobile - shown below bio on mobile */}
            <div className="lg:hidden space-y-3 sm:space-y-4 mt-8 w-full">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  className="glassmorphism rounded-xl p-4 sm:p-5 md:p-6 hover:scale-[1.02] sm:hover:scale-105 transition-transform active:scale-95"
                >
                  <div className="flex items-start gap-3 md:gap-4">
                    <div className="p-2 md:p-3 rounded-lg bg-gradient-to-br from-primary to-secondary flex-shrink-0">
                      <feature.icon className="w-5 h-5 md:w-6 md:h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-lg md:text-xl font-semibold mb-1 md:mb-2">{feature.title}</h4>
                      <p className="text-sm md:text-base text-muted-foreground">{feature.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>

        {/* Features for desktop - shown below on desktop */}
        <div className="mt-12 md:mt-16 hidden lg:block w-full">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid md:grid-cols-3 gap-6"
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                className="glassmorphism rounded-xl p-6 hover:scale-105 transition-transform"
              >
                <div className="flex flex-col items-center text-center gap-4">
                  <div className="p-3 rounded-lg bg-gradient-to-br from-primary to-secondary">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2">{feature.title}</h4>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
