import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Database, Zap, Layers, Building, Atom, Linkedin, FileText, ExternalLink, Github } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const projects = [
  {
    title: "Fibre Orientation Optimization in Laminated Composites",
    description: "Significantly enhanced material performance by applying advanced optimization techniques using adaptive evolutionary algorithms.",
    technologies: ["Python", "Ansys", "FEM", "Optimization Algorithms"],
    status: "Completed"
  },
  {
    title: "Bio-inspired Nano-composite Analysis",
    description: "Analyzed strain concentration factor around holes in bio-inspired nano-composites using discrete FE simulations and Python parameterization.",
    technologies: ["Python", "FEM Simulation", "Material Science", "Parameterization"],
    status: "Completed"
  },
  {
    title: "CNT-infused Rubber Nano-Composites",
    description: "Research and development of carbon nanotube-infused rubber nano-composites with comprehensive mechanical, thermal, and tribological testing.",
    technologies: ["Material Testing", "CNT Technology", "Mechanical Engineering", "Research"],
    status: "Research"
  }
];

const skills = [
  { category: "FEM Simulation", items: ["Abaqus", "Ansys", "Nastran", "MSC Apex"] },
  { category: "Programming", items: ["Python", "Pandas", "Matplotlib", "Torch-FEM", "Scikit-learn"] },
  { category: "CAD & Design", items: ["CATIA", "Solidworks", "Rapid Prototyping"] },
  { category: "Languages", items: ["Telugu (Native)", "English (C1)", "German (B2)", "Hindi (C1)"] }
];

const Portfolio = () => {
  return (
    <div className="bg-background text-foreground font-sans min-h-screen">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 md:py-32 px-8 md:px-12">
          <div className="container mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-light mb-4">My Engineering Portfolio</h1>
            <h2 className="text-2xl font-light mb-4 text-primary">Driving Innovation in Materials Science</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Materials Engineering professional with expertise in FEM simulations, Python programming, 
              and advanced optimization techniques. Dedicated to pushing the boundaries of what's possible in materials science.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Dialog>
                <DialogTrigger asChild>
                  <Button size="lg">
                    <FileText />
                    View Resume
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
              <Button size="lg" variant="outline" asChild>
                <a href="https://www.linkedin.com/in/tharun-arety/" target="_blank" rel="noopener noreferrer">
                  <Linkedin />
                  LinkedIn Profile
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* Engineering Approach Section */}
        <section className="py-20 md:py-32 px-8 md:px-12 bg-black opacity-0 animate-fade-in-up">
          <div className="container mx-auto">
            <div className="text-center mb-12 opacity-0 animate-fade-in-up">
              <h2 className="text-3xl font-light mb-6">Engineering Approach</h2>
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

        {/* Projects Section */}
        <section className="py-20 md:py-32 px-8 md:px-12">
          <div className="container mx-auto">
            <h2 className="text-3xl font-light text-center mb-12">Featured Projects</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <Card key={index} className="h-full hover:shadow-xl hover:scale-105 transition-all duration-300 group opacity-0 animate-fade-in-up" style={{animationDelay: `${index * 0.2}s`}}>
                  <CardHeader>
                    <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300">{project.title}</CardTitle>
                    <div className="flex items-center gap-2">
                      <span className={`px-2 py-1 rounded-full text-xs ${
                        project.status === 'Completed' ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'
                      }`}>
                        {project.status}
                      </span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="mb-4">{project.description}</CardDescription>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech, techIndex) => (
                        <span key={techIndex} className="px-2 py-1 bg-secondary text-secondary-foreground rounded text-xs">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="py-20 md:py-32 px-8 md:px-12 bg-black">
          <div className="container mx-auto">
            <h2 className="text-3xl font-light text-center mb-12">Technical Skills</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {skills.map((skillGroup, index) => (
                <Card key={index} className="hover:shadow-xl hover:scale-105 transition-all duration-300 group opacity-0 animate-fade-in-up" style={{animationDelay: `${index * 0.15}s`}}>
                  <CardHeader>
                    <CardTitle className="text-lg group-hover:text-primary transition-colors duration-300">{skillGroup.category}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      {skillGroup.items.map((skill, skillIndex) => (
                        <div key={skillIndex} className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300">
                          {skill}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Portfolio;