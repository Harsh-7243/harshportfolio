import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const ProfileCard = ({ 
  image = "/images/me.jpeg",
  name = "Harsh Kumar",
  title = "Developer & Creator",
  location = "Mandya, India",
  resumePath = "/Harsh_Kumar_Resume.pdf"
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="relative"
    >
      <Card className="group relative overflow-hidden border-border/50 bg-background/80 backdrop-blur-sm hover:shadow-2xl transition-all duration-500">
        {/* Background gradient effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        <div className="relative p-6">
          {/* Profile Image */}
          <div className="relative mx-auto mb-6 w-32 h-32 sm:w-40 sm:h-40">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary via-purple-500 to-secondary opacity-75 blur-xl group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-background shadow-xl">
              <motion.img
                src={image}
                alt={name}
                className="w-full h-full object-cover"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              />
            </div>
            {/* Status indicator */}
            <div className="absolute bottom-2 right-2 w-4 h-4 bg-green-500 rounded-full border-2 border-background shadow-lg" />
          </div>

          {/* Name and Title */}
          <div className="text-center mb-4">
            <motion.h3 
              className="text-2xl font-bold text-foreground mb-1"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              {name}
            </motion.h3>
            <motion.p 
              className="text-primary font-medium mb-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              {title}
            </motion.p>
            <motion.div 
              className="flex items-center justify-center gap-1 text-sm text-muted-foreground"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <MapPin className="w-4 h-4" />
              <span>{location}</span>
            </motion.div>
          </div>

          {/* Divider */}
          <div className="w-20 h-px bg-gradient-to-r from-transparent via-border to-transparent mx-auto mb-6" />

          {/* Resume Actions */}
          <motion.div 
            className="space-y-4"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <h3 className="text-lg font-semibold text-foreground text-center">My Resume</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full"
              >
                <Button 
                  variant="outline" 
                  className="w-full h-16 border-2 border-primary/20 hover:border-primary/40 hover:bg-accent/10 transition-colors flex items-center justify-center"
                  onClick={() => window.open(resumePath, '_blank')}
                >
                  <span>Preview Resume</span>
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full"
              >
                <Button 
                  className="w-full h-16 bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-600/90 text-white flex items-center justify-center"
                  onClick={() => {
                    const link = document.createElement('a');
                    link.href = resumePath;
                    link.download = 'Harsh_Kumar_Resume.pdf';
                    link.click();
                  }}
                >
                  <span>Download CV</span>
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Decorative corner elements */}
        <div className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-primary/20 rounded-tl-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <div className="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 border-secondary/20 rounded-br-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </Card>
    </motion.div>
  );
};

export default ProfileCard;

