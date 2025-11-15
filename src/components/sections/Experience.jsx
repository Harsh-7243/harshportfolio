import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, Calendar, MapPin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const experiences = [
    {
      title: "Social Media Lead",
      company: "Teraforum",
      period: "May 2025 - Present",
      location: "Remote",
      responsibilities: [
        "Managing the club's complete digital presence by planning content, designing posts, and executing promotional campaigns for events and initiatives."
      ]
    },
    {
      title: "Azure DevOps Initiative",
      company: "Employability.life",
      period: "Aug 2025 – Sept 2025",
      location: "Remote",
      responsibilities: [
        "Completed an applied Azure DevOps program with hands-on experience in CI/CD pipelines, Git, Docker, and Jira-based Agile project management, along with professional readiness training through expert-led sessions."
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 md:py-28 px-4 sm:px-6 bg-muted/30 relative overflow-hidden" ref={ref}>
      {/* Decorative elements */}
      <div className="absolute -top-20 -right-20 w-64 h-64 bg-primary/10 rounded-full mix-blend-multiply filter blur-3xl opacity-70"></div>
      <div className="absolute -bottom-20 -left-20 w-72 h-72 bg-secondary/10 rounded-full mix-blend-multiply filter blur-3xl opacity-70"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 text-sm font-medium text-primary bg-primary/10 rounded-full mb-4">
            My Journey
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Experience
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-10 rounded-full"></div>
        </motion.div>

        {/* Experience Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-primary/20 transform md:-translate-x-1/2"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`relative flex items-start gap-6 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline dot */}
                <div className="relative z-10 flex-shrink-0">
                  <div className="w-16 h-16 rounded-full bg-background border-4 border-primary flex items-center justify-center shadow-lg">
                    <Briefcase className="w-6 h-6 text-primary" />
                  </div>
                </div>

                {/* Content Card */}
                <div className={`flex-1 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                  <Card className="border-border/50 bg-background/80 backdrop-blur-sm hover:shadow-lg transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="space-y-4">
                        {/* Title and Company */}
                        <div>
                          <h3 className="text-xl font-bold text-foreground mb-1">
                            {exp.title}
                          </h3>
                          <p className="text-lg font-semibold text-primary mb-2">
                            {exp.company}
                          </p>
                        </div>

                        {/* Period and Location */}
                        <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                          <div className="flex items-center gap-2">
                            <Calendar className="w-4 h-4" />
                            <span>{exp.period}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <MapPin className="w-4 h-4" />
                            <span>{exp.location}</span>
                          </div>
                        </div>

                        {/* Responsibilities */}
                        <div className="pt-2">
                          <ul className="space-y-2">
                            {exp.responsibilities.map((responsibility, idx) => (
                              <li key={idx} className="flex items-start gap-3 text-muted-foreground">
                                <span className="text-primary mt-1.5">•</span>
                                <span className="leading-relaxed">{responsibility}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;

