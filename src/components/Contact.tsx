import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";

export const Contact = () => {
  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold gradient-text">Get in Touch</h2>
          <p className="text-muted-foreground mt-4">Let's discuss your next project</p>
        </motion.div>

        <Card>
          <CardHeader>
            <CardTitle>Contact Information</CardTitle>
            <CardDescription>Feel free to reach out through any of these channels</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex items-center gap-4">
              <span className="text-muted-foreground">Email:</span>
              <a href="mailto:faresslimani0@gmail.com" className="hover:text-primary">faresslimani0@gmail.com</a>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-muted-foreground">Phone:</span>
              <a href="tel:+213558139901" className="hover:text-primary">+213 558 139 901</a>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-muted-foreground">LinkedIn:</span>
              <a href="https://linkedin.com/in/faresslimani01" target="_blank" rel="noopener noreferrer" className="hover:text-primary">/faresslimani01</a>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-muted-foreground">GitHub:</span>
              <a href="https://github.com/faresS69" target="_blank" rel="noopener noreferrer" className="hover:text-primary">/faresS69</a>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};