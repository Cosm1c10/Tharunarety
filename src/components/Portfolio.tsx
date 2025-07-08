
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Database, Zap, Layers, Building, Atom, Linkedin, FileText } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-20 md:py-32 px-8 md:px-12 opacity-0 animate-fade-in-up">
      <div className="container mx-auto">
        <div className="text-center mb-12 opacity-0 animate-fade-in-up">
          <h2 className="text-3xl font-light mb-2 opacity-0 animate-fade-in-up">Engineering Approach</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto opacity-0 animate-fade-in-up animation-delay-200">
            My engineering approach is rooted in analytical rigor, innovative algorithm design, and a relentless pursuit of efficient, impactful solutions. I thrive on projects that demand analytical rigor and practical application, always seeking to push the boundaries of what's possible in materials science.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12 opacity-0 animate-fade-in-up animation-delay-400">
          <Card className="text-left hover:shadow-xl hover:scale-105 transition-all duration-300 group">
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <div className="bg-secondary p-3 rounded-full w-fit group-hover:bg-primary/20 transition-colors duration-300">
                  <Database className="h-6 w-6 text-primary group-hover:scale-110 transition-transform duration-300" />
                </div>
                <CardTitle className="text-xl font-medium">Data-Driven Simulations</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-primary mb-2">Predictive Modeling:</h4>
                  <CardDescription>I leverage Finite Element Method (FEM) and advanced computational tools to accurately simulate material behaviors and structural responses, transforming complex data into actionable insights for design.</CardDescription>
                </div>
                <div>
                  <h4 className="font-semibold text-primary mb-2">Performance Forecasting:</h4>
                  <CardDescription>My approach enables precise forecasting of performance under various conditions, crucial for validating structural designs and optimizing advanced material applications.</CardDescription>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="text-left hover:shadow-xl hover:scale-105 transition-all duration-300 group animation-delay-200">
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <div className="bg-secondary p-3 rounded-full w-fit group-hover:bg-primary/20 transition-colors duration-300">
                  <Zap className="h-6 w-6 text-primary group-hover:scale-110 transition-transform duration-300" />
                </div>
                <CardTitle className="text-xl font-medium">Optimization Algorithms</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-primary mb-2">Intelligent Design Search:</h4>
                  <CardDescription>I apply sophisticated Evolutionary Algorithms (e.g., Genetic Algorithms) to autonomously explore vast design spaces, identifying global optima for intricate engineering problems.</CardDescription>
                </div>
                <div>
                  <h4 className="font-semibold text-primary mb-2">Efficiency & Maximization:</h4>
                  <CardDescription>This methodology is critical for structural optimization, maximizing properties like stiffness-to-weight ratios in advanced materials, and achieving peak performance.</CardDescription>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="text-left hover:shadow-xl hover:scale-105 transition-all duration-300 group animation-delay-400">
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <div className="bg-secondary p-3 rounded-full w-fit group-hover:bg-primary/20 transition-colors duration-300">
                  <Layers className="h-6 w-6 text-primary group-hover:scale-110 transition-transform duration-300" />
                </div>
                <CardTitle className="text-xl font-medium">Advanced Composite Materials</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-primary mb-2">Carbon Reinforced Composites (CFRPs):</h4>
                  <CardDescription>Expertise in the design, analysis, and characterization of CFRPs, focusing on fiber orientation optimization and enhancing mechanical properties for high-performance applications.</CardDescription>
                </div>
                <div>
                  <h4 className="font-semibold text-primary mb-2">Ceramic Matrix Composites (CMCs):</h4>
                  <CardDescription>Knowledge in the unique properties and challenges of CMCs, understanding their high-temperature capabilities and brittle matrix behavior for specialized structural integrity.</CardDescription>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="text-left hover:shadow-xl hover:scale-105 transition-all duration-300 group animation-delay-600">
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <div className="bg-secondary p-3 rounded-full w-fit group-hover:bg-primary/20 transition-colors duration-300">
                  <Building className="h-6 w-6 text-primary group-hover:scale-110 transition-transform duration-300" />
                </div>
                <CardTitle className="text-xl font-medium">Structural Design</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-primary mb-2">Integrated Engineering Solutions:</h4>
                  <CardDescription>I translate complex material properties and simulation insights into robust and efficient structural designs. This involves applying principles of mechanics to ensure integrity, durability, and compliance with performance requirements.</CardDescription>
                </div>
                <div>
                  <h4 className="font-semibold text-primary mb-2">Performance-Driven Architecture:</h4>
                  <CardDescription>My focus is on creating structures that are not only sound but are also optimized for their intended function, particularly when utilizing advanced composite materials and informed by data-driven simulations.</CardDescription>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="text-left hover:shadow-xl hover:scale-105 transition-all duration-300 group animation-delay-800 md:col-span-2 lg:col-span-1">
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <div className="bg-secondary p-3 rounded-full w-fit group-hover:bg-primary/20 transition-colors duration-300">
                  <Atom className="h-6 w-6 text-primary group-hover:scale-110 transition-transform duration-300" />
                </div>
                <CardTitle className="text-xl font-medium">Materials Engineering</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-primary mb-2">Fundamental Understanding:</h4>
                  <CardDescription>A strong foundation in the science of materials engineering informs every design choice, from microstructural considerations to macroscopic properties and failure mechanisms.</CardDescription>
                </div>
                <div>
                  <h4 className="font-semibold text-primary mb-2">Material Characterization & Application:</h4>
                  <CardDescription>Expertise in evaluating and selecting materials based on specific application requirements, ensuring optimal performance, durability, and cost-effectiveness in diverse engineering contexts.</CardDescription>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="text-center flex flex-col sm:flex-row gap-4 justify-center opacity-0 animate-fade-in-up animation-delay-600">
          <Dialog>
            <DialogTrigger asChild>
              <Button size="lg" className="hover:scale-105 transition-all duration-300 hover:shadow-lg">
                <FileText />
                My Resume
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-4xl h-[90vh] overflow-y-auto">
              <DialogHeader>
                <DialogTitle>Tharun Arety's Resume</DialogTitle>
              </DialogHeader>
              <div className="space-y-4">
                <img src="/lovable-uploads/0fe8f441-4b05-4c68-8de4-fb6cb2ee0e48.png" alt="Resume Page 1" className="w-full h-auto rounded-md" />
                <img src="/lovable-uploads/e735b105-e6ab-4dc3-b6d4-82123a44246e.png" alt="Resume Page 2" className="w-full h-auto rounded-md" />
              </div>
            </DialogContent>
          </Dialog>
          <Button size="lg" asChild className="hover:scale-105 transition-all duration-300 hover:shadow-lg">
            <a href="https://www.linkedin.com/in/tharun-arety/" target="_blank" rel="noopener noreferrer">
              <Linkedin />
              LinkedIn Profile
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};
export default Portfolio;
