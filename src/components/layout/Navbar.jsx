import { motion, AnimatePresence } from "framer-motion";
import { Moon, Sun, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

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

  // Handle scroll effect for navbar
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
            {/* Logo */}
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

            {/* Desktop Navigation */}
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

            {/* Theme Toggle & Mobile Menu */}
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

      {/* Mobile Menu */}
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
                        // Close mobile menu after a short delay for better UX
                        setTimeout(() => {
                          try {
                            // Ensure the href is a valid selector
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

export default Navbar;
