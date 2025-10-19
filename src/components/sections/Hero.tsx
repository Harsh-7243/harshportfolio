import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Twitter, Youtube, Instagram, Github, Linkedin } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-[calc(100vh-56px)] sm:min-h-screen flex items-center justify-center overflow-hidden px-4 sm:px-6 md:px-8 py-16 sm:py-20 md:py-24">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-[var(--gradient-hero)] opacity-20 pointer-events-none" />
      
      {/* Floating orbs - Responsive positioning and sizing */}
      <motion.div
        className="absolute top-10 left-5 w-32 h-32 sm:top-20 sm:left-10 sm:w-64 sm:h-64 bg-primary/30 rounded-full blur-xl sm:blur-3xl"
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
        className="absolute -bottom-16 -right-16 w-48 h-48 sm:bottom-20 sm:right-20 sm:w-72 sm:h-72 md:w-96 md:h-96 bg-secondary/30 rounded-full blur-xl sm:blur-3xl"
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

      <div className="w-full max-w-6xl mx-auto relative z-10 px-4 sm:px-6 overflow-hidden">
        <div className="text-center space-y-8 sm:space-y-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="inline-flex items-center gap-2 px-4 py-2 sm:py-2.5 rounded-full glassmorphism mb-6 sm:mb-8 mx-auto flex-nowrap"
            >
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium">Available for opportunities</span>
            </motion.div>

            <h1 className="text-4xl xs:text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight leading-[1.1] mt-4 px-2">
              <span className="block">Harsh Kumar</span>
              <motion.span 
                className="block text-gradient mt-2 text-2xl xs:text-3xl sm:text-4xl md:text-5xl"
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
            className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto px-2 sm:px-4 leading-relaxed sm:leading-8"
          >
            Turning ideas into interactive experiences
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 sm:gap-5 justify-center items-stretch sm:items-center w-full max-w-md mx-auto px-4 sm:px-0"
          >
            <div className="flex gap-4 flex-wrap justify-center">
              <motion.a 
                href="https://x.com/harsh_7243" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-background/80 hover:bg-primary/20 transition-all duration-300"
                aria-label="Twitter"
                whileHover={{ scale: 1.1, y: -5, boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)' }}
                whileTap={{ scale: 0.95 }}
              >
                <Twitter className="w-6 h-6" />
              </motion.a>
              <motion.a 
                href="https://www.youtube.com/@alostpick" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-background/80 hover:bg-primary/20 transition-all duration-300"
                aria-label="YouTube"
                whileHover={{ scale: 1.1, y: -5, boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)' }}
                whileTap={{ scale: 0.95 }}
              >
                <Youtube className="w-6 h-6" />
              </motion.a>
              <motion.a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-background/80 hover:bg-primary/20 transition-all duration-300"
                aria-label="Instagram"
                whileHover={{ scale: 1.1, y: -5, boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)' }}
                whileTap={{ scale: 0.95 }}
              >
                <Instagram className="w-6 h-6" />
              </motion.a>
              <motion.a 
                href="https://github.com/Harsh-7243" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-background/80 hover:bg-primary/20 transition-all duration-300"
                aria-label="GitHub"
                whileHover={{ scale: 1.1, y: -5, boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)' }}
                whileTap={{ scale: 0.95 }}
              >
                <Github className="w-6 h-6" />
              </motion.a>
              <motion.a 
                href="https://linkedin.com/in/harsh-kumar-9a10152b7" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-background/80 hover:bg-primary/20 transition-all duration-300"
                aria-label="LinkedIn"
                whileHover={{ scale: 1.1, y: -5, boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)' }}
                whileTap={{ scale: 0.95 }}
              >
                <Linkedin className="w-6 h-6" />
              </motion.a>
            </div>
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
