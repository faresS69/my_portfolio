import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";

export const About = () => {
  return (
    <section id="about" className="py-20 px-4 bg-background">
      <div className="max-w-4xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold mb-12 gradient-text text-center"
        >
          About Me
        </motion.h2>
        
        <Tabs defaultValue="profile" className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="profile">Profile</TabsTrigger>
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
          </TabsList>
          
          <TabsContent value="profile">
            <Card>
              <CardContent className="pt-6">
                <p className="text-lg text-muted-foreground">
                  I am a Flutter Developer with over two years of experience building mobile applications. 
                  With a strong foundation in system engineering and programming languages like Flutter/Dart, 
                  Java, and Python, I have developed and deployed a variety of projects.
                </p>
                <div className="mt-6">
                  <h3 className="font-semibold mb-2">Languages</h3>
                  <ul className="list-disc list-inside text-muted-foreground">
                    <li>English: Fluent</li>
                    <li>German: B1 (Goethe-Zertifikat B1, 2022)</li>
                    <li>Arabic: Native</li>
                    <li>French: Advanced</li>
                    <li>Turkish: Beginner</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="experience">
            <Card>
              <CardContent className="pt-6 space-y-6">
                <div>
                  <h3 className="font-semibold text-lg">Flutter Developer (Freelancer)</h3>
                  <p className="text-sm text-muted-foreground">Feb 2022–Present</p>
                  <p className="mt-2">Developed and deployed multiple mobile applications using Flutter/Dart for Android and iOS. Integrated APIs, managed state with GetX, and handled real-time databases with Firebase.</p>
                </div>
                
                <div>
                  <h3 className="font-semibold text-lg">CEO & Co-Founder – CRAFTY</h3>
                  <p className="text-sm text-muted-foreground">Nov 2022–Present</p>
                  <p className="mt-2">Managed a service-providing platform using Flutter and Firebase. Handled technical aspects and user engagement.</p>
                </div>
                
                <div>
                  <h3 className="font-semibold text-lg">Programming Teacher - Private Schools</h3>
                  <p className="text-sm text-muted-foreground">Feb 2022–Present</p>
                  <p className="mt-2">Volunteer programming teacher for orphan children - Sadeem Scientific Club. Also taught at Benyan Tech and CTL School.</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="education">
            <Card>
              <CardContent className="pt-6 space-y-6">
                <div>
                  <h3 className="font-semibold text-lg">Master's Degree in System Engineering & Web Technologies</h3>
                  <p className="text-sm text-muted-foreground">University of Medea | Sep 2022–Jul 2024</p>
                </div>
                
                <div>
                  <h3 className="font-semibold text-lg">Bachelor's Degree in Computer Science (Information Systems)</h3>
                  <p className="text-sm text-muted-foreground">University of Medea | Jul 2019–Jul 2022</p>
                </div>
                
                <div>
                  <h3 className="font-semibold">Certifications</h3>
                  <ul className="list-disc list-inside mt-2 text-muted-foreground">
                    <li>Fundamentals of Deep Learning, Nvidia (2022)</li>
                    <li>Implementing QOS for IPv6, Network Automation (2018)</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="skills">
            <Card>
              <CardContent className="pt-6">
                <ul className="space-y-4 text-muted-foreground">
                  <li>
                    <span className="font-semibold text-foreground">Mobile Development:</span> Flutter, Dart
                  </li>
                  <li>
                    <span className="font-semibold text-foreground">Backend & Database:</span> Firebase for real-time databases, authentication, and storage
                  </li>
                  <li>
                    <span className="font-semibold text-foreground">AI & Machine Learning:</span> AI algorithms, machine learning, and deep learning
                  </li>
                  <li>
                    <span className="font-semibold text-foreground">Computer Vision:</span> OpenCV, Mediapipe, OpenPose, and YOLO
                  </li>
                  <li>
                    <span className="font-semibold text-foreground">Programming Languages:</span> Python, C++, Java, JavaScript
                  </li>
                  <li>
                    <span className="font-semibold text-foreground">Other Skills:</span> Linux, PC repair, IT support, infographic design
                  </li>
                </ul>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};