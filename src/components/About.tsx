
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <section id="about" className="py-20 md:py-32 px-8 md:px-12">
      <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl font-light mb-6">About Tharun Arety</h2>
          <h3 className="text-xl font-medium mb-4 text-primary">Engineering with Vision, Life with Passion</h3>
          
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              Greetings! I'm Tharun Arety, a dedicated <strong className="text-foreground">Materials Engineering professional</strong> with a drive for innovation and a strong aptitude for leveraging digital tools to solve complex engineering challenges. My journey is defined by a robust understanding of FEM simulations (Abaqus, Ansys) and a versatile programming skillset in Python, encompassing powerful libraries like Pandas, Matplotlib, Scikit-learn, and TensorFlow.
            </p>
            
            <p>
              While my professional life is steeped in data-driven solutions and complex simulations, my personal world is vibrant with exploration and creation. When I step away from the screen, you'll find me on <strong className="text-foreground">hiking trails</strong>, exploring new landscapes, or <strong className="text-foreground">traveling</strong> to immerse myself in different cultures and perspectives.
            </p>
            
            <p>
              My passion for observation extends into <strong className="text-foreground">visual storytelling</strong>. Whether through <strong className="text-foreground">photography</strong> or <strong className="text-foreground">cinematic videos</strong>, I'm driven to capture fleeting moments and share unique perspectives. This blend of analytical rigor and artistic expression truly defines who I am.
            </p>
          </div>
        </div>
        <div className="flex justify-center">
          <Card className="w-full max-w-sm border-none shadow-xl overflow-hidden">
            <CardContent className="p-0">
              <img 
                src="/lovable-uploads/27b0d5ec-f720-416e-b010-7827e0c65c4f.png"
                alt="Tharun holding a camera"
                className="rounded-lg object-cover w-full h-auto"
              />
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
export default About;
