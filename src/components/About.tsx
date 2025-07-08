import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <section id="about" className="py-20 md:py-32 px-8 md:px-12">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-3xl font-light mb-6">About Me</h2>
            <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
              <p>
                Greetings! I'm Tharun Arety, a dedicated Materials Engineering professional with a drive for innovation and a strong aptitude for leveraging digital tools to solve complex engineering challenges.
              </p>
              <p>
                My academic and professional journey has equipped me with a robust understanding of FEM simulations (Abaqus, Ansys) and a versatile programming skillset in Python, encompassing libraries like Pandas, Matplotlib, Scikit-learn, and TensorFlow.
              </p>
              <p>
                From optimizing fiber orientation in composite materials to developing data-driven solutions for material characterization, I thrive on projects that demand analytical rigor and practical application. My experience spans across various sectors, including advanced system laboratories and defense research.
              </p>
              <p>
                Beyond my technical skills, I'm a proactive individual who believes in continuous learning and community engagement, as demonstrated by my leadership roles in student organizations and participation in international conferences. I'm passionate about contributing to advancements in materials science through data-driven approaches and collaborative efforts.
              </p>
            </div>
          </div>
          <div className="flex justify-center">
            <Card className="w-full max-w-sm border-none shadow-xl overflow-hidden">
              <CardContent className="p-0">
                <img 
                  src="/lovable-uploads/27b0d5ec-f720-416e-b010-7827e0c65c4f.png"
                  alt="Tharun Arety - Materials Engineering Professional"
                  className="rounded-lg object-cover w-full h-auto"
                />
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;