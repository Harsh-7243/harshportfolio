import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, Award, GraduationCap } from "lucide-react";

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const timeline = [
    {
      icon: GraduationCap,
      title: "Learning & Growth",
      period: "2022 - Present",
      description: "Continuously expanding knowledge in web development, mobile apps, and modern frameworks.",
      type: "education",
    },
    {
      icon: Briefcase,
      title: "Open Source Contributions",
      period: "2023 - Present",
      description: "Contributing to various open-source projects on GitHub, collaborating with developers worldwide.",
      type: "work",
    },
    {
      icon: Award,
      title: "Personal Projects",
      period: "2022 - Present",
      description: "Built multiple full-stack applications using React, Flutter, and Node.js, gaining hands-on experience.",
      type: "achievement",
    },
  ];

  return (
    <section id="experience" className="py-20 px-4 bg-muted/30" ref={ref}>
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Experience & <span className="text-gradient">Journey</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto" />
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-accent" />

          <div className="space-y-12">
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="relative pl-20"
              >
                {/* Icon */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : { scale: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.2 + 0.2 }}
                  className="absolute left-0 top-0 w-16 h-16 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-lg"
                >
                  <item.icon className="w-8 h-8 text-white" />
                </motion.div>

                {/* Content */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="glassmorphism rounded-xl p-6 hover:shadow-xl hover:shadow-primary/20 transition-all"
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                    <h3 className="text-xl font-bold">{item.title}</h3>
                    <span className="text-sm text-primary font-medium">{item.period}</span>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
