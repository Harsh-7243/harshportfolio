import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-[calc(100vh-56px)] sm:min-h-screen flex items-center justify-center overflow-hidden px-3 sm:px-4 md:px-6 py-12 sm:py-16 md:py-20">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-[var(--gradient-hero)] opacity-20 pointer-events-none" />
      
      {/* Floating orbs - Responsive positioning and sizing */}
      <motion.div
        className="absolute top-10 left-10 w-40 h-40 sm:top-20 sm:left-20 sm:w-64 sm:h-64 bg-primary/30 rounded-full blur-xl sm:blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute -bottom-10 -right-10 w-48 h-48 sm:bottom-20 sm:right-20 sm:w-72 sm:h-72 md:w-96 md:h-96 bg-secondary/30 rounded-full blur-xl sm:blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.5, 0.3, 0.5],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="w-full max-w-6xl mx-auto relative z-10 px-3 sm:px-4 overflow-hidden">
        <div className="text-center space-y-6 sm:space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full glassmorphism mb-4 sm:mb-5 mx-auto flex-wrap sm:flex-nowrap"
            >
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium">Available for opportunities</span>
            </motion.div>

            <h1 className="text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-7xl xl:text-8xl font-bold tracking-tight px-1 leading-[1.1] mt-4">
              <span className="block">Harsh Kumar</span>
              <motion.span 
                className="block text-gradient mt-2 text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
              >
                Developer & Creator
              </motion.span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
            className="text-sm xs:text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto px-2 sm:px-4 leading-relaxed sm:leading-8"
          >
            Turning ideas into interactive experiences
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center w-full"
          >
            <Button
              size="lg"
              className="group text-sm sm:text-base px-5 py-3 sm:py-4 rounded-full w-full sm:w-auto"
              asChild
            >
              <a href="#projects">
                <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                View Projects
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
            <Button
              size="lg"
variant="outline"
              className="text-sm sm:text-base px-5 py-3 sm:py-4 rounded-full glassmorphism hover:scale-105 transition-transform w-full sm:w-auto"
              asChild
            >
              <a href="https://linkedin.com/in/harsh-kumar-9a10152b7" target="_blank" rel="noopener noreferrer">
                💼 Connect on LinkedIn
              </a>
            </Button>
          </motion.div>

          {/* Animated code snippet */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="mt-12 sm:mt-16"
          >
            <div className="inline-block glassmorphism rounded-lg p-3 sm:p-4 text-left w-full max-w-xs xs:max-w-sm sm:max-w-md mx-auto overflow-hidden">
              <pre className="text-[10px] xs:text-xs sm:text-sm text-primary font-mono overflow-x-auto leading-tight w-full">
                <code>{`const developer = {
  name: "Harsh Kumar",
  passion: "Building magic",
  status: "Learning 🚀"
};`}</code>
              </pre>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator - Only show on larger screens */}
      <motion.div
        className="hidden sm:block absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <motion.div
            className="w-1.5 h-2 bg-primary rounded-full mt-2"
            animate={{
              y: [0, 12, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
