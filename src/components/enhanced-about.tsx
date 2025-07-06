import { Card, CardContent } from "@/components/ui/card";
import { StatsCard } from "@/components/ui/stats-card";
import { ProgressBar } from "@/components/ui/progress-bar";
import { Camera, Code, Award, Users } from "lucide-react";

const EnhancedAbout = () => {
  const skills = [
    { name: "Machine Learning", level: 90 },
    { name: "Photography", level: 85 },
    { name: "Material Science", level: 95 },
    { name: "Computer Vision", level: 80 }
  ];

  const stats = [
    {
      title: "Projects Completed",
      value: 25,
      suffix: "+",
      icon: <Code className="h-4 w-4" />,
      description: "Successful engineering projects"
    },
    {
      title: "Photos Captured",
      value: 1000,
      suffix: "+",
      icon: <Camera className="h-4 w-4" />,
      description: "Professional photographs"
    },
    {
      title: "Years Experience",
      value: 3,
      suffix: "+",
      icon: <Award className="h-4 w-4" />,
      description: "In engineering & design"
    },
    {
      title: "Collaborations",
      value: 15,
      suffix: "+",
      icon: <Users className="h-4 w-4" />,
      description: "Professional partnerships"
    }
  ];

  return (
    <section id="about" className="py-20 md:py-32 px-8 md:px-12">
      <div className="container mx-auto">
        
        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {stats.map((stat, index) => (
            <StatsCard
              key={index}
              title={stat.title}
              value={stat.value}
              suffix={stat.suffix}
              description={stat.description}
              icon={stat.icon}
              className="text-center"
            />
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-light mb-6">About Me</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              I am Tharun Arety. A mechanical engineer delving into material science, I bring a unique lens to visual storytelling, capturing the essence of moments and ideas through impactful photography and videography.
            </p>
            
            <div className="space-y-4">
              <h3 className="text-xl font-medium mb-4">Core Skills</h3>
              {skills.map((skill, index) => (
                <ProgressBar
                  key={index}
                  value={skill.level}
                  label={skill.name}
                  showLabel={true}
                  className="mb-4"
                />
              ))}
            </div>
          </div>
          
          <div className="flex justify-center">
            <Card className="w-full max-w-sm border-none shadow-xl overflow-hidden group">
              <CardContent className="p-0 relative">
                <img 
                  src="/lovable-uploads/27b0d5ec-f720-416e-b010-7827e0c65c4f.png"
                  alt="Tharun holding a camera"
                  className="rounded-lg object-cover w-full h-auto transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EnhancedAbout;