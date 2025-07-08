import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Database, Zap, Layers, Building, Atom, Linkedin, FileText, ExternalLink, Github } from "lucide-react";
import { useRef, useEffect } from "react";
import Autoplay from "embla-carousel-autoplay";
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

const engineeringApproachCards = [
  {
    icon: Database,
    title: "Data-Driven Simulations",
    sections: [
      {
        subtitle: "Predictive Modeling:",
        description: "I leverage Finite Element Method (FEM) and advanced computational tools to accurately simulate material behaviors and structural responses, transforming complex data into actionable insights for design."
      },
      {
        subtitle: "Performance Forecasting:",
        description: "My approach enables precise forecasting of performance under various conditions, crucial for validating structural designs and optimizing advanced material applications."
      }
    ]
  },
  {
    icon: Zap,
    title: "Optimization Algorithms",
    sections: [
      {
        subtitle: "Intelligent Design Search:",
        description: "I apply sophisticated Evolutionary Algorithms (e.g., Genetic Algorithms) to autonomously explore vast design spaces, identifying global optima for intricate engineering problems."
      },
      {
        subtitle: "Efficiency & Maximization:",
        description: "This methodology is critical for structural optimization, maximizing properties like stiffness-to-weight ratios in advanced materials, and achieving peak performance."
      }
    ]
  },
  {
    icon: Layers,
    title: "Advanced Composite Materials",
    sections: [
      {
        subtitle: "Carbon Reinforced Composites (CFRPs):",
        description: "Expertise in the design, analysis, and characterization of CFRPs, focusing on fiber orientation optimization and enhancing mechanical properties for high-performance applications."
      },
      {
        subtitle: "Ceramic Matrix Composites (CMCs):",
        description: "Knowledge in the unique properties and challenges of CMCs, understanding their high-temperature capabilities and brittle matrix behavior for specialized structural integrity."
      }
    ]
  },
  {
    icon: Building,
    title: "Structural Design",
    sections: [
      {
        subtitle: "Integrated Engineering Solutions:",
        description: "I translate complex material properties and simulation insights into robust and efficient structural designs. This involves applying principles of mechanics to ensure integrity, durability, and compliance with performance requirements."
      },
      {
        subtitle: "Performance-Driven Architecture:",
        description: "My focus is on creating structures that are not only sound but are also optimized for their intended function, particularly when utilizing advanced composite materials and informed by data-driven simulations."
      }
    ]
  },
  {
    icon: Atom,
    title: "Materials Engineering",
    sections: [
      {
        subtitle: "Fundamental Understanding:",
        description: "A strong foundation in the science of materials engineering informs every design choice, from microstructural considerations to macroscopic properties and failure mechanisms."
      },
      {
        subtitle: "Material Characterization & Application:",
        description: "Expertise in evaluating and selecting materials based on specific application requirements, ensuring optimal performance, durability, and cost-effectiveness in diverse engineering contexts."
      }
    ]
  }
];

const Portfolio = () => {
  const autoplayPlugin = useRef(
    Autoplay({ 
      delay: 3000, 
      stopOnInteraction: false,
      stopOnMouseEnter: true,
      playOnInit: true
    })
  );

  useEffect(() => {
    const plugin = autoplayPlugin.current;
    return () => {
      plugin.destroy();
    };
  }, []);

  return (
    <div className="bg-background text-foreground font-sans min-h-screen">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 md:py-32 px-8 md:px-12 relative overflow-hidden">
          {/* Blended Background Images */}
          <div className="absolute inset-0 z-0">
            {/* Left side - Material Cross-Section */}
            <div 
              className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40"
              style={{
                backgroundImage: 'url(/WhatsApp%20Image%202025-07-09%20at%2000.44.42.jpeg)',
                backgroundPosition: 'left center',
                clipPath: 'polygon(0 0, 60% 0, 40% 100%, 0 100%)',
                transform: 'scale(1.1)',
              }}
            />
            
            {/* Right side - FEM Simulation */}
            <div 
              className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40"
              style={{
                backgroundImage: 'url(/WhatsApp%20Image%202025-07-09%20at%2000.46.38.jpeg)',
                backgroundPosition: 'right center',
                clipPath: 'polygon(40% 0, 100% 0, 100% 100%, 60% 100%)',
                transform: 'scale(1.1)',
              }}
            />
            
            {/* Blending overlay in the center */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/95 to-black/90" />
            
            {/* Additional sophisticated overlays */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/90" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-transparent to-black/70" />
            
            {/* Center blend effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-black/80 to-transparent" />
          </div>
          
          <div className="container mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-light mb-4 relative z-10 text-white drop-shadow-2xl">My Engineering Projects</h1>
            <h2 className="text-2xl font-light mb-4 text-primary relative z-10 drop-shadow-xl">Driving Innovation in Materials Science</h2>
            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto relative z-10 drop-shadow-lg leading-relaxed">
              Materials Engineering professional with expertise in FEM simulations, Python programming, 
              and advanced optimization techniques. Dedicated to pushing the boundaries of what's possible in materials science.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
              <Dialog>
                <DialogTrigger asChild>
                  <Button size="lg" className="hover:scale-105 transition-all duration-300 hover:shadow-xl drop-shadow-lg">
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
              <Button size="lg" variant="outline" asChild className="hover:scale-105 transition-all duration-300 hover:shadow-xl drop-shadow-lg border-white/30 text-white hover:bg-white hover:text-black">
                <a href="https://www.linkedin.com/in/tharun-arety/" target="_blank" rel="noopener noreferrer">
                  <Linkedin />
                  LinkedIn Profile
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* Engineering Approach Section */}
        <section className="py-20 md:py-32 px-8 md:px-12 relative overflow-hidden opacity-0 animate-fade-in-up">
          {/* Blended Background Images for Engineering Approach */}
          <div className="absolute inset-0 z-0">
            {/* Left side - FEM Simulation with different positioning */}
            <div 
              className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
              style={{
                backgroundImage: 'url(/WhatsApp%20Image%202025-07-09%20at%2000.46.38.jpeg)',
                backgroundPosition: 'left center',
                clipPath: 'polygon(0 0, 55% 0, 45% 100%, 0 100%)',
                transform: 'scale(1.15) rotate(1deg)',
              }}
            />
            
            {/* Right side - Material Cross-Section with different positioning */}
            <div 
              className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
              style={{
                backgroundImage: 'url(/WhatsApp%20Image%202025-07-09%20at%2000.44.42.jpeg)',
                backgroundPosition: 'right center',
                clipPath: 'polygon(45% 0, 100% 0, 100% 100%, 55% 100%)',
                transform: 'scale(1.15) rotate(-1deg)',
              }}
            />
            
            {/* Sophisticated layered overlays */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/90 to-black/95" />
            <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-black/75 to-black/95" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-black/80" />
            
            {/* Dynamic center blend */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-black/85 to-transparent" />
            <div className="absolute inset-0 bg-radial-gradient from-transparent via-black/60 to-black/90" />
          </div>
          
          <div className="container mx-auto">
            <div className="text-center mb-12 opacity-0 animate-fade-in-up relative z-10">
              <h2 className="text-3xl font-light mb-6 text-white drop-shadow-xl">Engineering Approach</h2>
              <p className="text-lg text-white/80 max-w-3xl mx-auto opacity-0 animate-fade-in-up animation-delay-200 drop-shadow-lg leading-relaxed">
                My engineering approach is rooted in analytical rigor, innovative algorithm design, and a relentless pursuit of efficient, impactful solutions.
              </p>
            </div>

            <div className="mb-12 opacity-0 animate-fade-in-up animation-delay-400 relative z-10">
              <Carousel
                plugins={[autoplayPlugin.current]}
                opts={{
                  align: "start",
                  loop: true,
                }}
                className="w-full max-w-7xl mx-auto"
              >
                <CarouselContent className="-ml-2 md:-ml-4">
                  {engineeringApproachCards.map((card, index) => {
                    const IconComponent = card.icon;
                    return (
                      <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                        <div className="p-1">
                          <Card className="text-left hover:shadow-xl hover:scale-105 transition-all duration-300 group h-[500px] flex flex-col bg-background/95 backdrop-blur-sm border-white/10">
                            <CardHeader>
                              <div className="flex items-center gap-3 mb-2">
                                <div className="bg-secondary/80 backdrop-blur-sm p-3 rounded-full w-fit group-hover:bg-primary/30 transition-colors duration-300">
                                  <IconComponent className="h-6 w-6 text-primary group-hover:scale-110 transition-transform duration-300" />
                                </div>
                                <CardTitle className="text-xl font-medium">{card.title}</CardTitle>
                              </div>
                            </CardHeader>
                            <CardContent className="flex-1 flex flex-col justify-start overflow-hidden">
                              <div className="space-y-4">
                                {card.sections.map((section, sectionIndex) => (
                                  <div key={sectionIndex} className="flex-shrink-0">
                                    <h4 className="font-semibold text-primary mb-2">{section.subtitle}</h4>
                                    <CardDescription className="text-sm leading-relaxed">{section.description}</CardDescription>
                                  </div>
                                ))}
                              </div>
                            </CardContent>
                          </Card>
                        </div>
                      </CarouselItem>
                    );
                  })}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
            </div>

            <div className="text-center flex flex-col sm:flex-row gap-4 justify-center opacity-0 animate-fade-in-up animation-delay-600 relative z-10">
              <Dialog>
                <DialogTrigger asChild>
                  <Button size="lg" className="hover:scale-105 transition-all duration-300 hover:shadow-xl drop-shadow-lg">
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
              <Button size="lg" asChild className="hover:scale-105 transition-all duration-300 hover:shadow-xl drop-shadow-lg">
                <a href="https://www.linkedin.com/in/tharun-arety/" target="_blank" rel="noopener noreferrer">
                  <Linkedin />
                  LinkedIn Profile
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section className="py-20 md:py-32 px-8 md:px-12 bg-background/95 backdrop-blur-sm">
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
        <section className="py-20 md:py-32 px-8 md:px-12 bg-black/95 backdrop-blur-sm">
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