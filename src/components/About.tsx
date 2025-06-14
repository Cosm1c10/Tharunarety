
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <section id="about" className="py-20 md:py-32 px-8 md:px-12">
      <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl font-light mb-4">About Me</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            I am Tharun Arety. A mechanical engineer delving into material science, I bring a unique lens to visual storytelling, capturing the essence of moments and ideas through impactful photography and videography.
          </p>
        </div>
        <div className="flex justify-center">
          <Card className="w-full max-w-sm border-none shadow-xl overflow-hidden">
            <CardContent className="p-0">
              <img 
                src="https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=1964&auto=format&fit=crop"
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
