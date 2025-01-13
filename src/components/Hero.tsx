import { motion } from "framer-motion";
import { Button } from "./ui/button";

export const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-background to-secondary/30 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <img
            src="/lovable-uploads/c667d4a9-a91b-47fa-92da-769c99a37440.png"
            alt="Profile"
            className="w-40 h-40 rounded-full mx-auto mb-6 object-cover"
          />
          <h1 className="text-4xl font-bold mb-4 gradient-text">Mohamed Fares Slimani</h1>
          <p className="text-xl text-muted-foreground mb-6">Flutter Developer & System Engineer</p>
          <div className="flex gap-4 justify-center mb-6">
            <Button variant="outline" asChild>
              <a href="mailto:faresslimani0@gmail.com">Contact Me</a>
            </Button>
            <Button asChild>
              <a href="#projects">View Projects</a>
            </Button>
          </div>
          <div className="flex gap-4 justify-center text-muted-foreground">
            <a href="https://linkedin.com/in/faresslimani01" target="_blank" rel="noopener noreferrer" className="hover:text-primary">LinkedIn</a>
            <a href="https://github.com/faresS69" target="_blank" rel="noopener noreferrer" className="hover:text-primary">GitHub</a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};