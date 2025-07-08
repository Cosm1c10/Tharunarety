import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <section id="about" className="py-20 md:py-32 px-8 md:px-12 opacity-0 animate-fade-in-up">
      <div className="container mx-auto">
        <div className="text-center mb-12 opacity-0 animate-fade-in-up">
          <h2 className="text-3xl font-light mb-6">About Tharun Arety</h2>
          <h3 className="text-xl font-medium text-primary">Engineering with Vision, Life with Passion</h3>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Text Content */}
          <div className="space-y-8">
            {/* Introduction */}
            <div className="opacity-0 animate-slide-in-left">
              <p className="text-muted-foreground leading-relaxed hover:text-foreground transition-colors duration-300">
                Greetings! I'm Tharun Arety, a dedicated <strong className="text-foreground">Materials Engineering professional</strong> with a drive for innovation and a strong aptitude for leveraging digital tools to solve complex engineering challenges. My journey is defined by a robust understanding of FEM simulations (Abaqus, Ansys) and a versatile programming skillset in Python, encompassing powerful libraries like Pandas, Matplotlib, Scikit-learn, and TensorFlow. I thrive on projects that demand analytical rigor and practical application, always seeking to push the boundaries of what's possible in materials science.
              </p>
            </div>

            {/* Beyond the Technical */}
            <div className="opacity-0 animate-fade-in-up animation-delay-200">
              <h4 className="text-xl font-semibold mb-4 text-primary">Beyond the Technical: A World of Exploration and Creation</h4>
              <p className="text-muted-foreground leading-relaxed hover:text-foreground transition-colors duration-300">
                While my professional life is steeped in data-driven solutions and complex simulations, my personal world is vibrant with a different kind of exploration and creation. I believe true innovation comes from a diverse set of experiences. When I step away from the screen, you'll often find me on a <strong className="text-foreground">hiking trail</strong>, exploring new landscapes and finding tranquility in nature's vastness. My love for <strong className="text-foreground">traveling</strong> constantly fuels my curiosity, allowing me to immerse myself in different cultures and perspectives, which in turn enriches my approach to problem-solving, both technical and creative.
              </p>
            </div>

            {/* My Creative Lens */}
            <div className="opacity-0 animate-slide-in-left animation-delay-400">
              <h4 className="text-xl font-semibold mb-4 text-primary">My Creative Lens: Photography and Filmmaking</h4>
              <p className="text-muted-foreground leading-relaxed hover:text-foreground transition-colors duration-300">
                My passion for observation extends naturally into the realm of <strong className="text-foreground">visual storytelling</strong>. Whether it's through <strong className="text-foreground">photography</strong> or <strong className="text-foreground">cinematic videos</strong>, I'm driven to capture fleeting moments, evoke emotion, and share unique perspectives. Filmmaking, in particular, allows me to weave narratives, playing with light, composition, and movement to craft compelling stories. It's a creative outlet that sharpens my eye for detail and challenges me to bring visions to life, much like engineering challenges demand a meticulous approach to design and execution. This blend of analytical rigor and artistic expression truly defines who I am.
              </p>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="flex justify-center opacity-0 animate-slide-in-right animation-delay-600">
            <Card className="w-full max-w-sm border-none shadow-xl overflow-hidden hover:shadow-2xl hover:scale-105 transition-all duration-500 group">
              <CardContent className="p-0">
                <img 
                  src="/lovable-uploads/27b0d5ec-f720-416e-b010-7827e0c65c4f.png"
                  alt="Tharun holding a camera"
                  className="rounded-lg object-cover w-full h-auto group-hover:scale-110 transition-transform duration-700"
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