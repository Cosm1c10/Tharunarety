import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Lightbulb, Code, Rocket, Linkedin, FileText, ExternalLink, Github } from "lucide-react";
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
  { category: "Programming", items: ["Python", "Pandas", "Matplotlib", "TensorFlow", "Scikit-learn"] },
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
        <section className="py-20 md:py-32 px-8 md:px-12 bg-black">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-light mb-2">Engineering Approach</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                My engineering approach is rooted in analytical rigor, innovative algorithm design, and a relentless pursuit of efficient, impactful solutions.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="text-center">
                <CardHeader>
                  <div className="mx-auto bg-secondary p-4 rounded-full w-fit">
                    <Lightbulb className="h-8 w-8 text-primary" />
                  </div>
                </CardHeader>
                <CardContent>
                  <CardTitle className="text-xl font-medium mb-2">Problem Definition</CardTitle>
                  <CardDescription>Meticulously analyzing complex problems, translating them into clear objectives, and identifying core data and algorithmic needs.</CardDescription>
                </CardContent>
              </Card>
              
              <Card className="text-center">
                <CardHeader>
                  <div className="mx-auto bg-secondary p-4 rounded-full w-fit">
                    <Code className="h-8 w-8 text-primary" />
                  </div>
                </CardHeader>
                <CardContent>
                  <CardTitle className="text-xl font-medium mb-2">Solution Development</CardTitle>
                  <CardDescription>Designing and implementing robust software solutions and machine learning models with strategic approach to each challenge.</CardDescription>
                </CardContent>
              </Card>
              
              <Card className="text-center">
                <CardHeader>
                  <div className="mx-auto bg-secondary p-4 rounded-full w-fit">
                    <Rocket className="h-8 w-8 text-primary" />
                  </div>
                </CardHeader>
                <CardContent>
                  <CardTitle className="text-xl font-medium mb-2">Deployment & Refinement</CardTitle>
                  <CardDescription>Delivering systems that perform effectively in real-world scenarios, continuously refining for optimal results and impact.</CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section className="py-20 md:py-32 px-8 md:px-12">
          <div className="container mx-auto">
            <h2 className="text-3xl font-light text-center mb-12">Featured Projects</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <Card key={index} className="h-full">
                  <CardHeader>
                    <CardTitle className="text-xl">{project.title}</CardTitle>
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
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="text-lg">{skillGroup.category}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      {skillGroup.items.map((skill, skillIndex) => (
                        <div key={skillIndex} className="text-sm text-muted-foreground">
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