import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { User, Briefcase, Zap, Mail, Code2, Sparkles, Youtube, Building2 } from 'lucide-react';

const ModernSetup3D = ({ isDark }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [hoveredFolder, setHoveredFolder] = useState(null);
  const [time, setTime] = useState(new Date());
  const [isMobile, setIsMobile] = useState(false);

  const folders = [
    { id: 1, label: 'About', section: 'about', icon: User, color: 'from-blue-500 to-cyan-500' },
    { id: 2, label: 'Projects', section: 'projects', icon: Briefcase, color: 'from-purple-500 to-pink-500' },
    { id: 3, label: 'Experience', section: 'experience', icon: Building2, color: 'from-indigo-500 to-blue-500' },
    { id: 4, label: 'Skills', section: 'skills', icon: Zap, color: 'from-yellow-500 to-orange-500' },
    { id: 5, label: 'Contact', section: 'contact', icon: Mail, color: 'from-red-500 to-rose-500' },
    { id: 6, label: 'YouTube', section: 'youtube', icon: Youtube, color: 'from-red-600 to-red-500', url: 'https://www.youtube.com/@alostpick' },
  ];

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const rect = e.currentTarget?.getBoundingClientRect();
      if (rect) {
        const x = (e.clientX - rect.left - rect.width / 2) / rect.width;
        const y = (e.clientY - rect.top - rect.height / 2) / rect.height;
        setMousePosition({ x: x * 15, y: y * 8 });
      }
    };

    const container = document.getElementById('modern-setup-container');
    if (container) {
      container.addEventListener('mousemove', handleMouseMove);
      return () => container.removeEventListener('mousemove', handleMouseMove);
    }
  }, []);

  const handleFolderClick = (folder) => {
    if (folder.url) {
      window.open(folder.url, '_blank', 'noopener,noreferrer');
    } else {
      const element = document.getElementById(folder.section);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <div 
      id="modern-setup-container"
      className={`w-full ${isMobile ? 'h-[200px]' : 'h-[600px]'} flex items-start justify-center ${isMobile ? 'pt-0' : 'pt-8'}`}
      style={{ 
        perspective: '1500px',
        perspectiveOrigin: 'center center'
      }}
    >
      <motion.div
        className="relative"  
        style={{
          transformStyle: 'preserve-3d',
          transform: isMobile 
            ? 'rotateX(-12deg) rotateY(5deg) scale(0.18)' 
            : 'rotateX(-12deg) rotateY(5deg)',
          marginTop: isMobile ? '5px' : '130px',
          marginLeft: isMobile ? '-120px' : '20px',
          position: 'relative',
        }}
        animate={{
          rotateY: 5 + mousePosition.x * 0.2,
          rotateX: -12 + mousePosition.y * 0.15,
        }}
        transition={{ type: 'spring', stiffness: 200, damping: 30 }}
      >
        {/* Desk Surface */}
        <motion.div
          className="absolute"
          style={{
            width: '600px',
            height: '400px',
            background: 'var(--gradient-hero)',
            borderRadius: '20px',
            boxShadow: isDark 
              ? '0 20px 60px rgba(0, 0, 0, 0.8), inset 5px 5px 15px #1e293b, inset -5px -5px 15px #0f172a' 
              : '0 20px 60px rgba(0, 0, 0, 0.3), inset 5px 5px 15px #d1d5db, inset -5px -5px 15px #9ca3af',
            transform: 'translateX(-300px) translateY(180px) translateZ(-150px) rotateX(85deg)',
            border: '2px solid hsl(var(--border))',
          }}
        />

        {/* RGB Speaker - Left */}
        <motion.div
          className="absolute"
          style={{
            width: '80px',
            height: '160px',
            background: 'linear-gradient(145deg, hsl(var(--card)), hsl(var(--background)))',
            borderRadius: '12px',
            boxShadow: isDark 
              ? '0 10px 30px rgba(0, 0, 0, 0.6), inset 3px 3px 6px rgba(0,0,0,0.25), inset -3px -3px 6px rgba(255,255,255,0.02)'
              : '0 10px 30px rgba(0, 0, 0, 0.2), inset 3px 3px 6px rgba(255,255,255,0.6), inset -3px -3px 6px rgba(0,0,0,0.06)',
            transform: 'translateX(-335px) translateY(80px) translateZ(-80px)',
            border: '2px solid hsl(var(--border))',
            overflow: 'hidden',
          }}
        >
          {/* Speaker Cone */}
          <motion.div
            className="absolute"
            style={{
              width: '60px',
              height: '60px',
              top: '20px',
              left: '10px',
              background: isDark ? '#1a1a1a' : '#2a2a2a',
              borderRadius: '50%',
              boxShadow: 'inset 0 0 20px rgba(0,0,0,0.5)',
              border: '2px solid hsl(var(--border))',
            }}
          >
            {/* Center Dome */}
            <div
              style={{
                position: 'absolute',
                width: '20px',
                height: '20px',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                background: isDark ? '#333' : '#444',
                borderRadius: '50%',
                boxShadow: '0 0 10px rgba(0,0,0,0.3)',
              }}
            />
          </motion.div>
          
          {/* RGB Ring */}
          <motion.div
            className="absolute"
            style={{
              width: '70px',
              height: '70px',
              top: '15px',
              left: '5px',
              borderRadius: '50%',
              background: 'transparent',
              border: '2px solid transparent',
            }}
            animate={{
              boxShadow: [
                '0 0 20px hsl(var(--primary))',
                '0 0 20px hsl(var(--accent))',
                '0 0 20px hsl(var(--secondary))',
                '0 0 20px hsl(var(--primary))',
              ],
            }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          />
          
          {/* Bass Port */}
          <div
            style={{
              position: 'absolute',
              bottom: '20px',
              left: '50%',
              transform: 'translateX(-50%)',
              width: '40px',
              height: '10px',
              background: isDark ? '#1a1a1a' : '#2a2a2a',
              borderRadius: '5px',
              boxShadow: 'inset 0 0 10px rgba(0,0,0,0.5)',
            }}
          />
        </motion.div>

        {/* RGB Speaker - Right */}
        <motion.div
          className="absolute"
          style={{
            width: '80px',
            height: '160px',
            background: 'linear-gradient(145deg, hsl(var(--card)), hsl(var(--background)))',
            borderRadius: '12px',
            boxShadow: isDark 
              ? '0 10px 30px rgba(0, 0, 0, 0.6), inset 3px 3px 6px rgba(0,0,0,0.25), inset -3px -3px 6px rgba(255,255,255,0.02)'
              : '0 10px 30px rgba(0, 0, 0, 0.2), inset 3px 3px 6px rgba(255,255,255,0.6), inset -3px -3px 6px rgba(0,0,0,0.06)',
            transform: 'translateX(270px) translateY(80px) translateZ(-80px)',
            border: '2px solid hsl(var(--border))',
            overflow: 'hidden',
          }}
        >
          {/* Speaker Cone */}
          <motion.div
            className="absolute"
            style={{
              width: '60px',
              height: '60px',
              top: '20px',
              left: '10px',
              background: isDark ? '#1a1a1a' : '#2a2a2a',
              borderRadius: '50%',
              boxShadow: 'inset 0 0 20px rgba(0,0,0,0.5)',
              border: '2px solid hsl(var(--border))',
            }}
          >
            {/* Center Dome */}
            <div
              style={{
                position: 'absolute',
                width: '20px',
                height: '20px',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                background: isDark ? '#333' : '#444',
                borderRadius: '50%',
                boxShadow: '0 0 10px rgba(0,0,0,0.3)',
              }}
            />
          </motion.div>
          
          {/* RGB Ring */}
          <motion.div
            className="absolute"
            style={{
              width: '70px',
              height: '70px',
              top: '15px',
              left: '5px',
              borderRadius: '50%',
              background: 'transparent',
              border: '2px solid transparent',
            }}
            animate={{
              boxShadow: [
                '0 0 20px hsl(var(--secondary))',
                '0 0 20px hsl(var(--primary))',
                '0 0 20px hsl(var(--accent))',
                '0 0 20px hsl(var(--secondary))',
              ],
            }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear", delay: 1 }}
          />
          
          {/* Bass Port */}
          <div
            style={{
              position: 'absolute',
              bottom: '20px',
              left: '50%',
              transform: 'translateX(-50%)',
              width: '40px',
              height: '10px',
              background: isDark ? '#1a1a1a' : '#2a2a2a',
              borderRadius: '5px',
              boxShadow: 'inset 0 0 10px rgba(0,0,0,0.5)',
            }}
          />
        </motion.div>

        {/* Main Monitor */}
        <motion.div
          className="absolute"
          style={{
            width: '450px',
            height: '320px',
            background: 'var(--gradient-primary)',
            borderRadius: '15px',
            boxShadow: isDark 
              ? '0 15px 40px rgba(0, 0, 0, 0.7), inset 3px 3px 8px rgba(0,0,0,0.25), inset -3px -3px 8px rgba(255,255,255,0.02)'
              : '0 15px 40px rgba(0, 0, 0, 0.2), inset 3px 3px 8px rgba(255,255,255,0.6), inset -3px -3px 8px rgba(0,0,0,0.06)',
            transform: 'translateX(-225px) translateY(-40px) translateZ(0px)',
            border: '3px solid hsl(var(--border))',
          }}
        >
          {/* Monitor Bezel */}
          <div
            style={{
              position: 'absolute',
              inset: '15px',
              background: 'hsl(var(--card))',
              borderRadius: '12px',
              boxShadow: 'inset 0 0 40px rgba(0,0,0,0.35)',
              border: '2px solid hsl(var(--border))',
              overflow: 'hidden',
            }}
          >
            {/* Modern OS Interface */}
            <div className="absolute inset-0">
              {/* Top Bar */}
              <motion.div 
                className="h-8 flex items-center justify-between px-4"
                style={{
                  background: 'transparent',
                  borderBottom: `1px solid hsl(var(--border))`,
                  backdropFilter: 'blur(10px)',
                }}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex items-center space-x-4">
                  <div className="flex space-x-1.5">
                    <motion.div 
                      className="w-3 h-3 rounded-full bg-red-500 cursor-pointer"
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.9 }}
                    />
                    <motion.div 
                      className="w-3 h-3 rounded-full bg-yellow-500 cursor-pointer"
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.9 }}
                    />
                    <motion.div 
                      className="w-3 h-3 rounded-full bg-green-500 cursor-pointer"
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.9 }}
                    />
                  </div>
                  <motion.div
                    className="text-xs font-semibold"
                    style={{ color: 'hsl(var(--foreground))' }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                  >
                    
                  </motion.div>
                </div>
                <motion.div 
                  className="flex items-center space-x-3"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  <div className="flex items-center space-x-1">
                    <div 
                      className="w-2 h-2 rounded-full"
                      style={{ 
                        background: 'hsl(var(--primary))',
                        boxShadow: '0 0 8px rgba(56,189,248,0.12)'
                      }} 
                    />
                    <span 
                      className="text-xs"
                      style={{ color: 'hsl(var(--muted-foreground))' }}
                    >
                      Online
                    </span>
                  </div>
                  <span 
                    className="text-xs font-medium"
                    style={{ color: 'hsl(var(--foreground))' }}
                  >
                    {time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </span>
                </motion.div>
              </motion.div>

              {/* Main Content */}
              <div className="p-2 relative h-[calc(100%-32px)] overflow-hidden">
                {/* Subtle Background Pattern */}
                <div 
                  className="absolute inset-0 opacity-[0.03]"
                  style={{
                    backgroundImage: `radial-gradient(circle at 2px 2px, hsl(var(--foreground)) 1px, transparent 0)`,
                    backgroundSize: '20px 20px',
                  }}
                />

                {/* Welcome Section */}
                <motion.div
                  className="text-center mb-2 relative z-10"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  <motion.div
                    className="inline-flex items-center gap-1 mb-1.5"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.5, type: 'spring', stiffness: 200 }}
                  >
                    <Code2 className="w-3 h-3" style={{ color: 'hsl(var(--primary))' }} />
                    <Sparkles className="w-2.5 h-2.5" style={{ color: 'hsl(var(--secondary))' }} />
                  </motion.div>
                  <motion.h1 
                    className="text-sm font-bold mb-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                  >
                    Welcome to My Portfolio
                  </motion.h1>
                  <motion.p
                    className="text-[9px] mb-1.5"
                    style={{ color: 'hsl(var(--muted-foreground))' }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.7 }}
                  >
                    Explore my work & skills
                  </motion.p>
                  <div className="relative h-0.5 w-16 mx-auto">
                    <motion.div
                      className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-primary to-transparent"
                      animate={{
                        opacity: [0.5, 1, 0.5],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    />
                  </div>
                </motion.div>

                {/* Navigation Grid */}
                <div className="grid grid-cols-3 gap-1.5 px-0.5 relative z-10">
                  {folders.map((folder, index) => {
                    const IconComponent = folder.icon;
                    return (
                    <motion.div
                      key={folder.id}
                      className="relative"
                      initial={{ opacity: 0, scale: 0.8, y: 20 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      transition={{ 
                        duration: 0.4,
                          delay: 0.8 + index * 0.1,
                        type: 'spring',
                        stiffness: 100
                      }}
                    >
                        <motion.button
                          className="w-full group"
                          onClick={() => handleFolderClick(folder)}
                          onMouseEnter={() => setHoveredFolder(folder.id)}
                          onMouseLeave={() => setHoveredFolder(null)}
                          whileHover={{ scale: 1.05, y: -1 }}
                          whileTap={{ scale: 0.95 }}
                        >
                        <motion.div
                            className="relative p-1.5 rounded-md overflow-hidden"
                          style={{
                            background: hoveredFolder === folder.id
                                ? (isDark 
                                    ? 'linear-gradient(135deg, rgba(59, 130, 246, 0.2), rgba(147, 51, 234, 0.2))'
                                    : 'linear-gradient(135deg, rgba(59, 130, 246, 0.15), rgba(147, 51, 234, 0.15))')
                                : (isDark ? 'rgba(255,255,255,0.04)' : 'rgba(255, 255, 255, 0.5)'),
                              backdropFilter: 'blur(10px)',
                            border: `1px solid ${
                              hoveredFolder === folder.id
                                  ? (isDark ? 'rgba(59, 130, 246, 0.4)' : 'rgba(59, 130, 246, 0.3)')
                                  : (isDark ? 'rgba(75, 85, 99, 0.2)' : 'rgba(209, 213, 219, 0.4)')
                              }`,
                              boxShadow: hoveredFolder === folder.id
                                ? (isDark 
                                    ? '0 2px 8px rgba(59, 130, 246, 0.2), inset 0 1px 0 rgba(255,255,255,0.1)'
                                    : '0 2px 8px rgba(59, 130, 246, 0.15), inset 0 1px 0 rgba(255,255,255,0.5)')
                                : 'none',
                            }}
                          >
                            {/* Gradient overlay on hover */}
                            {hoveredFolder === folder.id && (
                              <motion.div
                                className={`absolute inset-0 bg-gradient-to-br ${folder.color} opacity-20`}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 0.2 }}
                                transition={{ duration: 0.3 }}
                              />
                            )}

                            <div className="flex flex-col items-center space-y-1 relative z-10">
                            <motion.div
                                className="relative p-1 rounded-md"
                                style={{
                                  background: hoveredFolder === folder.id
                                    ? (isDark ? 'rgba(255,255,255,0.1)' : 'rgba(255,255,255,0.6)')
                                    : 'transparent',
                                }}
                              animate={hoveredFolder === folder.id ? {
                                  rotate: [0, -5, 5, 0],
                              } : {}}
                              transition={{
                                  duration: 0.5,
                                  repeat: hoveredFolder === folder.id ? Infinity : 0,
                                  repeatDelay: 1,
                                }}
                              >
                                <IconComponent 
                                  className="w-3 h-3"
                                  style={{
                                    color: hoveredFolder === folder.id
                                      ? (isDark ? 'hsl(var(--primary))' : 'hsl(var(--primary))')
                                      : (isDark ? 'hsl(var(--muted-foreground))' : 'hsl(var(--foreground))'),
                                  }}
                                />
                              {hoveredFolder === folder.id && (
                                <motion.div
                                    className="absolute -inset-0.5 rounded-md"
                                  style={{
                                      background: `radial-gradient(circle, hsl(var(--primary)) 0%, transparent 70%)`,
                                      opacity: 0.3,
                                  }}
                                  initial={{ opacity: 0, scale: 0 }}
                                    animate={{ opacity: 0.3, scale: 1 }}
                                    transition={{ duration: 0.3 }}
                                />
                              )}
                            </motion.div>
                            <span 
                                className="text-[8px] font-semibold leading-tight"
                              style={{
                                  color: hoveredFolder === folder.id
                                    ? (isDark ? 'hsl(var(--primary))' : 'hsl(var(--primary))')
                                    : (isDark ? 'hsl(var(--card-foreground))' : 'hsl(var(--foreground))'),
                                }}
                            >
                              {folder.label}
                            </span>
                          </div>

                            {/* Shine effect on hover */}
                            {hoveredFolder === folder.id && (
                              <motion.div
                                className="absolute inset-0 rounded-md overflow-hidden"
                                initial={{ x: '-100%' }}
                                animate={{ x: '100%' }}
                                transition={{
                                  duration: 0.6,
                                  repeat: Infinity,
                                  repeatDelay: 1.5,
                                }}
                              >
                                <div 
                                  className="w-full h-full"
                                  style={{
                                    background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)',
                                  }}
                                />
                              </motion.div>
                            )}
                        </motion.div>
                      </motion.button>
                    </motion.div>
                    );
                  })}
                </div>

                {/* Bottom decorative element */}
                <motion.div
                  className="absolute bottom-1 left-1/2 transform -translate-x-1/2 flex items-center gap-0.5"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.3 }}
                >
                  <div className="w-0.5 h-0.5 rounded-full bg-primary/50" />
                  <div className="w-0.5 h-0.5 rounded-full bg-secondary/50" />
                  <div className="w-0.5 h-0.5 rounded-full bg-primary/50" />
                </motion.div>
              </div>


            </div>
          </div>
        </motion.div>

        {/* Monitor Stand */}
        <motion.div
          className="absolute"
          style={{
            width: '20px',
            height: '80px',
            background: isDark ? 'linear-gradient(180deg, hsl(var(--card)), hsl(var(--background)))' : 'linear-gradient(180deg, hsl(var(--card)), hsl(var(--background)))',
            borderRadius: '10px',
            boxShadow: isDark 
              ? 'inset 3px 0 6px rgba(0,0,0,0.3), inset -3px 0 6px rgba(255,255,255,0.02)' 
              : 'inset 3px 0 6px rgba(0,0,0,0.08), inset -3px 0 6px rgba(255,255,255,0.6)',
            transform: 'translateX(-10px) translateY(250px) translateZ(-100px)',
          }}
        />

        {/* Monitor Base */}
        <motion.div
          className="absolute"
          style={{
            width: '140px',
            height: '25px',
            background: 'linear-gradient(145deg, hsl(var(--card)), hsl(var(--background)))',
            borderRadius: '50%',
            boxShadow: isDark 
              ? '0 10px 30px rgba(0, 0, 0, 0.6), inset 3px 3px 6px rgba(0,0,0,0.25), inset -3px -3px 6px rgba(255,255,255,0.02)' 
              : '0 10px 30px rgba(0, 0, 0, 0.2), inset 3px 3px 6px rgba(255,255,255,0.6), inset -3px -3px 6px rgba(0,0,0,0.06)',
            transform: 'translateX(-60px) translateY(330px) translateZ(-110px) rotateX(85deg)',
            border: '2px solid hsl(var(--border))',
          }}
        />

        {/* Keyboard */}
        <motion.div
          className="absolute"
          style={{
            width: '300px',
            height: '100px',
            background: isDark ? 'linear-gradient(145deg, hsl(var(--card)), hsl(var(--background)))' : 'linear-gradient(145deg, hsl(var(--card)), hsl(var(--background)))',
            borderRadius: '10px',
            boxShadow: isDark 
              ? '0 8px 25px rgba(0, 0, 0, 0.5), inset 2px 2px 5px rgba(0,0,0,0.25), inset -2px -2px 5px rgba(255,255,255,0.02)'
              : '0 8px 25px rgba(0, 0, 0, 0.2), inset 2px 2px 5px rgba(255,255,255,0.6), inset -2px -2px 5px rgba(0,0,0,0.06)',
            transform: 'translateX(-160px) translateY(300px) translateZ(-50px) rotateX(80deg)',
            border: '1px solid hsl(var(--border))',
          }}
        >
          {/* RGB Keyboard Glow */}
          <motion.div
            className="absolute inset-0 rounded-10px"
            style={{
              background: 'linear-gradient(90deg, hsl(var(--primary) / 0.14), hsl(var(--accent) / 0.10), hsl(var(--secondary) / 0.10))',
              filter: 'blur(2px)',
            }}
            animate={{
              background: [
                'linear-gradient(90deg, hsl(var(--primary) / 0.14), hsl(var(--accent) / 0.10), hsl(var(--secondary) / 0.10))',
                'linear-gradient(90deg, hsl(var(--accent) / 0.10), hsl(var(--secondary) / 0.10), hsl(var(--primary) / 0.14))',
                'linear-gradient(90deg, hsl(var(--secondary) / 0.10), hsl(var(--primary) / 0.14), hsl(var(--accent) / 0.10))',
              ]
            }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          />
        </motion.div>

        {/* Mouse */}
        <motion.div
          className="absolute"
          style={{
            width: '40px',
            height: '60px',
            background: 'linear-gradient(145deg, hsl(var(--card)), hsl(var(--background)))',
            borderRadius: '20px',
            boxShadow: isDark 
              ? '0 5px 15px rgba(0, 0, 0, 0.4), inset 2px 2px 4px rgba(0,0,0,0.25), inset -2px -2px 4px rgba(255,255,255,0.02)'
              : '0 5px 15px rgba(0, 0, 0, 0.2), inset 2px 2px 4px rgba(255,255,255,0.6), inset -2px -2px 4px rgba(0,0,0,0.06)',
            transform: 'translateX(90px) translateY(310px) translateZ(-40px) rotateX(80deg)',
            border: '1px solid hsl(var(--border))',
          }}
        >
          {/* Mouse Scroll Wheel Glow */}
          <div
            style={{
              position: 'absolute',
              top: '15px',
              left: '50%',
              transform: 'translateX(-50%)',
              width: '8px',
              height: '15px',
              background: 'linear-gradient(180deg, hsl(var(--primary)), hsl(var(--secondary)))',
              borderRadius: '4px',
              boxShadow: '0 0 10px rgba(56,189,248,0.14)',
            }}
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ModernSetup3D;
