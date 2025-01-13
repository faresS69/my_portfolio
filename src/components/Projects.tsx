import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useState } from "react";

const projects = [
  {
    title: "BNG Optica",
    description: "Optical glasses selling app built with Flutter and Firebase",
    tech: "Flutter, Firebase",
    image: "https://images.unsplash.com/photo-1574258495973-f010dfbb5371?auto=format&fit=crop&w=500",
    details: "A comprehensive mobile application for selling optical glasses. Features include:\n- User authentication\n- Product catalog with filtering\n- Shopping cart functionality\n- Order management\n- Admin dashboard\n- Real-time inventory updates"
  },
  {
    title: "SOS Learning",
    description: "Scientific lessons platform for medicine students",
    tech: "Flutter",
    image: "https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?auto=format&fit=crop&w=500",
    details: "An educational platform designed specifically for medical students. Key features:\n- Video lessons\n- Interactive quizzes\n- Progress tracking\n- Offline content access\n- Study group formation\n- Expert consultation"
  },
  {
    title: "CRAFTY",
    description: "Mobile platform connecting service providers with customers",
    tech: "Flutter, Web",
    image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=500",
    details: "A marketplace platform connecting service providers with customers. Features include:\n- Service provider profiles\n- Booking system\n- Real-time chat\n- Payment integration\n- Rating and review system\n- Service categories"
  },
  {
    title: "Printzilla",
    description: "Mobile app for thermal printer receipt generation",
    tech: "Flutter",
    image: "https://images.unsplash.com/photo-1562240020-ce31ccb0fa7d?auto=format&fit=crop&w=500",
    details: "A specialized printing application for businesses. Features include:\n- Custom receipt templates\n- Multiple printer support\n- Offline printing\n- Cloud backup\n- Receipt history\n- Business analytics"
  },
  {
    title: "Locky",
    description: "Mobile app to control door locks",
    tech: "Flutter, Web",
    image: "https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=500",
    details: "A smart lock control system application. Features include:\n- Remote lock control\n- Access management\n- Activity logs\n- Guest access\n- Integration with smart home systems\n- Emergency protocols"
  }
];

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
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card 
                className={`overflow-hidden hover:shadow-lg transition-all cursor-pointer ${
                  expandedId === project.title ? 'col-span-2 row-span-2' : ''
                }`}
                onClick={() => setExpandedId(expandedId === project.title ? null : project.title)}
              >
                <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription>{project.tech}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{project.description}</p>
                  <AnimatePresence>
                    {expandedId === project.title && (
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
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};