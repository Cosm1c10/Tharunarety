
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Lightbulb, Code, Rocket, Linkedin, FileText } from "lucide-react";
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
            My engineering methodology combines cutting-edge computational techniques with deep materials science expertise to deliver innovative solutions for complex engineering challenges.
          </p>
        </div>

        <div className="space-y-12 mb-12 opacity-0 animate-fade-in-up animation-delay-400">
          {/* Data-Driven Simulations */}
          <Card className="hover:shadow-xl hover:scale-105 transition-all duration-300 group">
            <CardHeader>
              <CardTitle className="text-2xl font-medium mb-4 text-primary">1. Data-Driven Simulations</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h4 className="text-lg font-semibold mb-2">• Predictive Modeling:</h4>
                  <p className="text-muted-foreground">I leverage <strong className="text-foreground">Finite Element Method (FEM)</strong> and advanced computational tools to accurately simulate material behaviors and structural responses, transforming complex data into actionable insights for design.</p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-2">• Performance Forecasting:</h4>
                  <p className="text-muted-foreground">My approach enables precise forecasting of performance under various conditions, crucial for validating <strong className="text-foreground">structural designs</strong> and optimizing advanced material applications.</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Optimization Algorithms */}
          <Card className="hover:shadow-xl hover:scale-105 transition-all duration-300 group animation-delay-200">
            <CardHeader>
              <CardTitle className="text-2xl font-medium mb-4 text-primary">2. Optimization Algorithms</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h4 className="text-lg font-semibold mb-2">• Intelligent Design Search:</h4>
                  <p className="text-muted-foreground">I apply sophisticated <strong className="text-foreground">Evolutionary Algorithms</strong> (e.g., Genetic Algorithms) to autonomously explore vast design spaces, identifying global optima for intricate engineering problems.</p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-2">• Efficiency & Maximization:</h4>
                  <p className="text-muted-foreground">This methodology is critical for <strong className="text-foreground">structural optimization</strong>, maximizing properties like stiffness-to-weight ratios in advanced materials, and achieving peak performance.</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Advanced Composite Materials */}
          <Card className="hover:shadow-xl hover:scale-105 transition-all duration-300 group animation-delay-400">
            <CardHeader>
              <CardTitle className="text-2xl font-medium mb-4 text-primary">3. Advanced Composite Materials</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h4 className="text-lg font-semibold mb-2">• Carbon Reinforced Composites (CFRPs):</h4>
                  <p className="text-muted-foreground">Expertise in the design, analysis, and characterization of <strong className="text-foreground">CFRPs</strong>, focusing on fiber orientation optimization and enhancing mechanical properties for high-performance applications.</p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-2">• Ceramic Matrix Composites (CMCs):</h4>
                  <p className="text-muted-foreground">Knowledge in the unique properties and challenges of <strong className="text-foreground">CMCs</strong>, understanding their high-temperature capabilities and brittle matrix behavior for specialized structural integrity.</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Structural Design */}
          <Card className="hover:shadow-xl hover:scale-105 transition-all duration-300 group animation-delay-600">
            <CardHeader>
              <CardTitle className="text-2xl font-medium mb-4 text-primary">4. Structural Design</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h4 className="text-lg font-semibold mb-2">• Integrated Engineering Solutions:</h4>
                  <p className="text-muted-foreground">I translate complex material properties and simulation insights into robust and efficient <strong className="text-foreground">structural designs</strong>. This involves applying principles of mechanics to ensure integrity, durability, and compliance with performance requirements.</p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-2">• Performance-Driven Architecture:</h4>
                  <p className="text-muted-foreground">My focus is on creating structures that are not only sound but are also optimized for their intended function, particularly when utilizing advanced <strong className="text-foreground">composite materials</strong> and informed by <strong className="text-foreground">data-driven simulations</strong>.</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Materials Engineering */}
          <Card className="hover:shadow-xl hover:scale-105 transition-all duration-300 group animation-delay-800">
            <CardHeader>
              <CardTitle className="text-2xl font-medium mb-4 text-primary">5. Materials Engineering</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h4 className="text-lg font-semibold mb-2">• Fundamental Understanding:</h4>
                  <p className="text-muted-foreground">A strong foundation in the science of <strong className="text-foreground">materials engineering</strong> informs every design choice, from microstructural considerations to macroscopic properties and failure mechanisms.</p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-2">• Material Characterization & Application:</h4>
                  <p className="text-muted-foreground">Expertise in evaluating and selecting materials based on specific application requirements, ensuring optimal performance, durability, and cost-effectiveness in diverse engineering contexts.</p>
                </div>
              </div>
            </CardContent>
            </CardContent>
          </Card>
        </div>

        <div className="text-center flex flex-col sm:flex-row gap-4 justify-center opacity-0 animate-fade-in-up animation-delay-1000">
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
