import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Project } from "@/types/project";

interface ProjectCardProps {
  project: Project;
  isExpanded: boolean;
  onClick: () => void;
}

export const ProjectCard = ({ project, isExpanded, onClick }: ProjectCardProps) => {
  return (
    <Card 
      className={`overflow-hidden hover:shadow-lg transition-all cursor-pointer ${
        isExpanded ? 'col-span-2 row-span-2' : ''
      }`}
      onClick={onClick}
    >
      <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
      <CardHeader>
        <CardTitle>{project.title}</CardTitle>
        <CardDescription>{project.tech}</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground">{project.description}</p>
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="mt-4 text-sm whitespace-pre-line"
            >
              {project.details}
            </motion.div>
          )}
        </AnimatePresence>
      </CardContent>
    </Card>
  );
};