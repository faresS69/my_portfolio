import { motion } from "framer-motion";

export const About = () => {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold mb-8 gradient-text"
        >
          About Me
        </motion.h2>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-6 text-lg text-muted-foreground"
        >
          <p>
            I'm a passionate Flutter developer with a keen eye for design and a deep understanding of mobile app development. 
            I specialize in creating smooth, responsive, and beautiful applications that users love.
          </p>
          <p>
            With expertise in state management, custom animations, and clean architecture, 
            I build scalable solutions that make a difference.
          </p>
        </motion.div>
      </div>
    </section>
  );
};