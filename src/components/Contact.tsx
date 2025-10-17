import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Github, Linkedin, Mail, Send, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent! 🚀 I'll get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
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
      label: "Email",
      href: "mailto:harsh@example.com",
      gradient: "from-orange-500 to-red-500",
    },
  ];

  return (
    <section id="contact" className="py-20 px-4 bg-muted/30" ref={ref}>
      <div className="container mx-auto max-w-6xl">
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
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Let's Build Together 💫
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-6" />
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind? Let's create something amazing together.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="glassmorphism rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="relative">
                  <Input
                    placeholder=" "
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
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
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
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
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
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
                  >
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-accent"
                      initial={{ x: "-100%" }}
                      whileHover={{ x: "100%" }}
                      transition={{ duration: 0.5 }}
                    />
                    <span className="relative z-10 flex items-center justify-center">
                      Send Message
                      <Send className="ml-2 w-4 h-4 group-hover:translate-x-1 group-hover:rotate-45 transition-all" />
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
            className="space-y-8"
          >
            <div className="glassmorphism rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6">Connect With Me</h3>
              <div className="space-y-4">
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
                    className="flex items-center gap-4 p-4 rounded-xl bg-background/50 hover:bg-background transition-all group relative overflow-hidden"
                  >
                    <motion.div
                      className={`absolute inset-0 bg-gradient-to-r ${link.gradient} opacity-0 group-hover:opacity-10 transition-opacity`}
                      initial={false}
                    />
                    <div className={`relative p-3 rounded-lg bg-gradient-to-br ${link.gradient}`}>
                      <link.icon className="w-5 h-5 text-white" />
                    </div>
                    <span className="relative font-medium group-hover:text-primary transition-colors">
                      {link.label}
                    </span>
                    <motion.div
                      className="absolute right-4 opacity-0 group-hover:opacity-100"
                      initial={{ x: -10 }}
                      whileHover={{ x: 0 }}
                    >
                      <Send className="w-4 h-4" />
                    </motion.div>
                  </motion.a>
                ))}
              </div>
            </div>

            <div className="glassmorphism rounded-2xl p-8">
              <h3 className="text-xl font-bold mb-4">Quick Info</h3>
              <div className="space-y-3 text-muted-foreground">
                <p className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
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

export default Contact;
