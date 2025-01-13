import { motion } from "framer-motion";
import { useState } from "react";
import { ProjectCard } from "./ProjectCard";
import { projectsData } from "@/data/projects";

export const Projects = () => {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  return (
    <section id="projects" className="py-20 px-4 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold mb-12 gradient-text text-center"
        >
          Featured Projects
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <ProjectCard
                project={project}
                isExpanded={expandedId === project.title}
                onClick={() => setExpandedId(expandedId === project.title ? null : project.title)}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};