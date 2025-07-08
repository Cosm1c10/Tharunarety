import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Lightbulb, Code, Rocket, Linkedin, FileText, GraduationCap, Briefcase, Award, Users } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const workExperience = [
  {
    title: "Research Associate",
    company: "University of Augsburg",
    period: "Feb 2023 – Oct 2024",
    location: "Augsburg, Germany",
    achievements: [
      "Optimized Fibre Orientation in Laminated Composites (10 hours/week), enhancing material performance",
      "Implemented Adaptive Evolutionary Algorithms for Optimization using Python, significantly improving efficiency",
      "Utilized Ansys for Finite Element Method (FEM) analysis"
    ]
  },
  {
    title: "Graduate Engineer",
    company: "Larsen & Toubro Pvt. Ltd.",
    period: "Aug 2020 – Apr 2021",
    location: "India",
    achievements: [
      "Monitored project progress and ensured adherence to design specifications and safety standards",
      "Controlled engineering activities to maintain work standards, adhering to timelines and quality assurance targets",
      "Verified parts and materials through audit inspections and independent checks",
      "Achieved monthly targets with well-implemented and standardized engineering solutions"
    ]
  },
  {
    title: "Project Intern",
    company: "Advanced System Laboratories, DRDO",
    period: "Dec 2018 – Jan 2019",
    location: "Hyderabad, India",
    achievements: [
      "Studied various manufacturing processes of Carbon Fiber Composites",
      "Contributed to the fabrication of outer shell structures of AGNI series missiles"
    ]
  },
  {
    title: "Research Intern",
    company: "Indian Institute of Space Science and Technology",
    period: "May 2018 – Jul 2018",
    location: "Thiruvananthapuram, India",
    achievements: [
      "Analyzed strain concentration factor around a hole in bio-inspired Nano-composite using discrete FE simulations",
      "Modelled a 2D isotropic bio-inspired Nano-composite plate with a circular hole at random positions",
      "Generated a large number of simulations and created different samples with parameterization using Python"
    ]
  }
];

const education = [
  {
    degree: "M.Sc Material Science and Engineering",
    institution: "University of Augsburg, Germany",
    period: "Oct 2022 – Current",
    details: []
  },
  {
    degree: "Bachelor of Technology in Mechanical Engineering",
    institution: "National Institute of Technology Agartala, India",
    period: "Jul 2015 – Jul 2019",
    details: [
      "Thesis: Research and development of CNT-infused Rubber Nano-Composites",
      "Conducted comprehensive testing to evaluate mechanical, thermal, and tribological characteristics",
      "Analyzed and documented the impact of CNT infusion on the properties"
    ]
  }
];

const skills = [
  {
    category: "FEM Simulation Software",
    items: ["Nastran", "Abaqus", "Deform", "ANSYS", "MSC Apex"]
  },
  {
    category: "CAD Software",
    items: ["CATIA", "Solidworks", "Rapid Prototyping"]
  },
  {
    category: "Programming",
    items: ["Python", "PyCharm", "Git", "Linux Command"]
  },
  {
    category: "Python Libraries",
    items: ["Pandas", "Matplotlib", "Seaborn", "PyTorch", "TensorFlow", "OpenCV", "Scikit-learn", "NumPy", "SciPy"]
  }
];

const leadership = [
  {
    role: "Spokesperson",
    organization: "University of Augsburg's Jung-Deutsche Gesellschaft für Materialkunde e.V.(J-DGM)",
    description: "Coordinated DGM's local events and networking gatherings, actively engaging in the Young-DGM local group spokespersons' committee. Addressed pertinent topics for young talents in materials science and engineering."
  },
  {
    role: "Event Organizer",
    organization: "International Students Office, University of Augsburg",
    description: "Organised 'Cultural Night - India' in November 2022"
  }
];

const Portfolio = () => {
  return (
    <div className="bg-background text-foreground font-sans min-h-screen">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 md:py-32 px-8 md:px-12">
          <div className="container mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-light mb-4">Professional Portfolio</h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-4xl mx-auto">
              Materials Engineering professional with expertise in FEM simulations, Python programming, 
              and a passion for optimizing complex systems. Bridging the gap between materials science 
              and cutting-edge digital solutions.
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
                Leveraging advanced simulation techniques and programming skills to solve intricate challenges 
                in materials science, with a focus on composite optimization and data analysis.
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
                  <CardTitle className="text-xl font-medium mb-2">Problem Analysis</CardTitle>
                  <CardDescription>Meticulously analyzing complex materials engineering problems, translating them into clear objectives for FEM simulations and optimization algorithms.</CardDescription>
                </CardContent>
              </Card>
              
              <Card className="text-center">
                <CardHeader>
                  <div className="mx-auto bg-secondary p-4 rounded-full w-fit">
                    <Code className="h-8 w-8 text-primary" />
                  </div>
                </CardHeader>
                <CardContent>
                  <CardTitle className="text-xl font-medium mb-2">Simulation & Development</CardTitle>
                  <CardDescription>Implementing robust FEM simulations using Abaqus and Ansys, combined with Python programming for data analysis and optimization algorithms.</CardDescription>
                </CardContent>
              </Card>
              
              <Card className="text-center">
                <CardHeader>
                  <div className="mx-auto bg-secondary p-4 rounded-full w-fit">
                    <Rocket className="h-8 w-8 text-primary" />
                  </div>
                </CardHeader>
                <CardContent>
                  <CardTitle className="text-xl font-medium mb-2">Optimization & Results</CardTitle>
                  <CardDescription>Delivering optimized material solutions that perform effectively in real-world applications, continuously refining for enhanced performance.</CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Work Experience Section */}
        <section className="py-20 md:py-32 px-8 md:px-12">
          <div className="container mx-auto">
            <h2 className="text-3xl font-light text-center mb-12 flex items-center justify-center gap-3">
              <Briefcase className="h-8 w-8 text-primary" />
              Work Experience
            </h2>
            <div className="space-y-8">
              {workExperience.map((job, index) => (
                <Card key={index}>
                  <CardHeader>
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                      <div>
                        <CardTitle className="text-xl">{job.title}</CardTitle>
                        <p className="text-lg text-primary font-medium">{job.company}</p>
                      </div>
                      <div className="text-right text-muted-foreground">
                        <p>{job.period}</p>
                        <p>{job.location}</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {job.achievements.map((achievement, achIndex) => (
                        <li key={achIndex} className="flex items-start gap-2">
                          <span className="text-primary mt-1">•</span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section className="py-20 md:py-32 px-8 md:px-12 bg-black">
          <div className="container mx-auto">
            <h2 className="text-3xl font-light text-center mb-12 flex items-center justify-center gap-3">
              <GraduationCap className="h-8 w-8 text-primary" />
              Education
            </h2>
            <div className="space-y-8">
              {education.map((edu, index) => (
                <Card key={index}>
                  <CardHeader>
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                      <div>
                        <CardTitle className="text-xl">{edu.degree}</CardTitle>
                        <p className="text-lg text-primary font-medium">{edu.institution}</p>
                      </div>
                      <div className="text-right text-muted-foreground">
                        <p>{edu.period}</p>
                      </div>
                    </div>
                  </CardHeader>
                  {edu.details.length > 0 && (
                    <CardContent>
                      <ul className="space-y-2">
                        {edu.details.map((detail, detIndex) => (
                          <li key={detIndex} className="flex items-start gap-2">
                            <span className="text-primary mt-1">•</span>
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  )}
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="py-20 md:py-32 px-8 md:px-12">
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

        {/* Leadership Section */}
        <section className="py-20 md:py-32 px-8 md:px-12 bg-black">
          <div className="container mx-auto">
            <h2 className="text-3xl font-light text-center mb-12 flex items-center justify-center gap-3">
              <Users className="h-8 w-8 text-primary" />
              Leadership & Volunteering
            </h2>
            <div className="space-y-8">
              {leadership.map((item, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="text-xl">{item.role}</CardTitle>
                    <p className="text-lg text-primary font-medium">{item.organization}</p>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Conferences Section */}
        <section className="py-20 md:py-32 px-8 md:px-12">
          <div className="container mx-auto">
            <h2 className="text-3xl font-light text-center mb-12 flex items-center justify-center gap-3">
              <Award className="h-8 w-8 text-primary" />
              Conferences & Seminars
            </h2>
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">EUROMAT 2023</CardTitle>
                <p className="text-lg text-primary font-medium">3 SEP 2023 – 7 SEP 2023 | Frankfurt</p>
              </CardHeader>
            </Card>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Portfolio;