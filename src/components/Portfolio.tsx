
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Lightbulb, Code, Rocket } from "lucide-react";

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-20 md:py-32 px-8 md:px-12">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-light mb-2">Explore My Engineering Approach</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            My engineering approach is rooted in analytical rigor, innovative algorithm design, and a relentless pursuit of efficient, impactful solutions. I believe effective engineering transforms complex challenges into real-world value.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <Card className="text-center">
            <CardHeader>
              <div className="mx-auto bg-secondary p-4 rounded-full w-fit">
                <Lightbulb className="h-8 w-8 text-primary" />
              </div>
            </CardHeader>
            <CardContent>
              <CardTitle className="text-xl font-medium mb-2">Insightful Problem Definition</CardTitle>
              <CardDescription>I begin by meticulously analyzing complex problems, translating them into clear objectives, and identifying the core data and algorithmic needs.</CardDescription>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardHeader>
              <div className="mx-auto bg-secondary p-4 rounded-full w-fit">
                <Code className="h-8 w-8 text-primary" />
              </div>
            </CardHeader>
            <CardContent>
              <CardTitle className="text-xl font-medium mb-2">Strategic Solution Development</CardTitle>
              <CardDescription>My focus is on designing and implementing robust software solutions and machine learning models, from Pneumonia Detection with CNNs to Structural Optimization techniques, ensuring a strategic approach to each challenge.</CardDescription>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardHeader>
              <div className="mx-auto bg-secondary p-4 rounded-full w-fit">
                <Rocket className="h-8 w-8 text-primary" />
              </div>
            </CardHeader>
            <CardContent>
              <CardTitle className="text-xl font-medium mb-2">Impactful Deployment & Refinement</CardTitle>
              <CardDescription>I am committed to delivering systems that perform effectively and efficiently in real-world scenarios, continuously refining them to achieve optimal results and tangible impact, as seen in projects like Sign Language to Text Conversion.</CardDescription>
            </CardContent>
          </Card>
        </div>

        <div className="text-center">
          <Button size="lg">View My Projects</Button>
        </div>
      </div>
    </section>
  );
};
export default Portfolio;
