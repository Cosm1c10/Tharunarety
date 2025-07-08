
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
    <section id="portfolio" className="py-20 md:py-32 px-8 md:px-12">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-light mb-2">Engineering Approach</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            My engineering approach is rooted in analytical rigor, innovative algorithm design, and a relentless pursuit of efficient, impactful solutions. I thrive on projects that demand analytical rigor and practical application, always seeking to push the boundaries of what's possible in materials science.
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
              <CardTitle className="text-xl font-medium mb-2">Problem Definition</CardTitle>
              <CardDescription>Meticulously analyzing complex problems, translating them into clear objectives, and identifying core data and algorithmic needs for materials engineering challenges.</CardDescription>
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
              <CardDescription>Designing and implementing robust FEM simulations and optimization algorithms, from fibre orientation optimization to bio-inspired nano-composite analysis, ensuring strategic approach to each challenge.</CardDescription>
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
              <CardDescription>Delivering engineering solutions that perform effectively in real-world scenarios, continuously refining methodologies to achieve optimal results and tangible impact in materials science applications.</CardDescription>
            </CardContent>
          </Card>
        </div>

        <div className="text-center flex flex-col sm:flex-row gap-4 justify-center">
          <Dialog>
            <DialogTrigger asChild>
              <Button size="lg">
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
          <Button size="lg" asChild>
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
