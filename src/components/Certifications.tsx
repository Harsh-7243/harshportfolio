import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Award, ExternalLink, ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";

const Certifications = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const certifications = [
    {
      title: "Full Stack Web Development",
      issuer: "Coursera",
      date: "2024",
      skills: ["React", "Node.js", "MongoDB", "Express", "REST APIs"],
      link: "#",
    },
    {
      title: "Advanced React & TypeScript",
      issuer: "Udemy",
      date: "2024",
      skills: ["React", "TypeScript", "Redux", "Context API", "Hooks"],
      link: "#",
    },
    {
      title: "UI/UX Design Fundamentals",
      issuer: "Design+Code",
      date: "2024",
      skills: ["Figma", "User Research", "Prototyping", "Design Systems"],
      link: "#",
    },
    {
      title: "Modern JavaScript & ES6+",
      issuer: "Frontend Masters",
      date: "2023",
      skills: ["JavaScript", "ES6+", "Async/Await", "Functional Programming"],
      link: "#",
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section 
      id="certifications" 
      ref={ref}
      className="py-16 md:py-24 px-4 sm:px-6 bg-background relative overflow-hidden"
    >
      {/* Background pattern */}
      <div className="absolute inset-0 -z-10 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]" />
      </div>

      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/80">
            Certifications & Learning
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            My journey of continuous learning and professional development
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8"
        >
          {certifications.map((cert, index) => (
            <motion.div key={index} variants={item} className="h-full">
              <Card className="h-full flex flex-col group hover:shadow-lg transition-shadow duration-300 border-border/50 hover:border-primary/30">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <div className="p-2 rounded-lg bg-primary/10 text-primary">
                      <Award className="w-5 h-5" />
                    </div>
                    <span className="text-sm text-muted-foreground">{cert.date}</span>
                  </div>
                  <CardTitle className="text-xl mt-4 group-hover:text-primary transition-colors">
                    {cert.title}
                  </CardTitle>
                  <p className="text-muted-foreground">{cert.issuer}</p>
                </CardHeader>
                <CardContent className="flex-1">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {cert.skills.map((skill, i) => (
                      <Badge 
                        key={i} 
                        variant="secondary" 
                        className="text-xs font-medium bg-secondary/50 hover:bg-secondary/70 transition-colors"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="pt-0">
                  <a 
                    href={cert.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-sm font-medium text-primary hover:underline group-hover:translate-x-1 transition-transform"
                  >
                    View Certificate <ArrowRight className="ml-1 w-4 h-4" />
                  </a>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-12 text-center"
        >
          <a
            href="#"
            className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium transition-colors rounded-md bg-primary text-primary-foreground hover:bg-primary/90 shadow-sm hover:shadow-md"
          >
            View All Certifications
            <ExternalLink className="ml-2 w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;
