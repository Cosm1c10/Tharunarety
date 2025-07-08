import { Card, CardContent } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const About = () => {
  return (
    <section id="about" className="py-20 md:py-32 px-8 md:px-12 opacity-0 animate-fade-in-up">
      <div className="container mx-auto">
        <div className="text-center mb-12 opacity-0 animate-fade-in-up">
          <h2 className="text-3xl font-light mb-6">About Tharun Arety</h2>
          <h3 className="text-xl font-medium text-primary">Engineering with Vision, Life with Passion</h3>
        </div>

        {/* First Section - Text Left, Image Right */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Left Column - Introduction Text */}
          <div className="opacity-0 animate-slide-in-left">
            <p className="text-muted-foreground leading-relaxed hover:text-foreground transition-colors duration-300 text-lg">
              Greetings! I'm Tharun Arety, a dedicated <strong className="text-foreground">Materials Engineering professional</strong> with a drive for innovation and a strong aptitude for leveraging digital tools to solve complex engineering challenges. My journey is defined by a robust understanding of FEM simulations (Abaqus, Ansys) and a versatile programming skillset in Python, encompassing powerful libraries like Pandas, Matplotlib, Scikit-learn, and Torch-FEM. I thrive on projects that demand analytical rigor and practical application, always seeking to push the boundaries of what's possible in materials science.
            </p>
          </div>

          {/* Right Column - New Portrait Image */}
          <div className="flex justify-center opacity-0 animate-slide-in-right animation-delay-200">
            <Card className="w-full max-w-sm border-none shadow-xl overflow-hidden hover:shadow-2xl hover:scale-105 transition-all duration-500 group">
              <CardContent className="p-0">
                <AspectRatio ratio={4 / 5} className="overflow-hidden rounded-lg">
                  <img 
                    src="/lovable-uploads/WhatsApp Image 2025-07-08 at 23.25.25.jpeg"
                    alt="Tharun Arety - Professional portrait"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </AspectRatio>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Second Section - Image Left, Text Right */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Left Column - Mountain Adventure Image */}
          <div className="flex justify-center opacity-0 animate-slide-in-left animation-delay-400 order-2 lg:order-1">
            <Card className="w-full max-w-sm border-none shadow-xl overflow-hidden hover:shadow-2xl hover:scale-105 transition-all duration-500 group">
              <CardContent className="p-0">
                <AspectRatio ratio={4 / 5} className="overflow-hidden rounded-lg">
                  <img 
                    src="/lovable-uploads/IMG_3766.JPG"
                    alt="Tharun on a mountain adventure, showcasing his love for hiking and exploration"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </AspectRatio>
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Beyond the Technical Text */}
          <div className="opacity-0 animate-slide-in-right animation-delay-600 order-1 lg:order-2">
            <h4 className="text-2xl font-semibold mb-6 text-primary">Beyond the Technical: A World of Exploration and Creation</h4>
            <p className="text-muted-foreground leading-relaxed hover:text-foreground transition-colors duration-300 text-lg">
              While my professional life is steeped in data-driven solutions and complex simulations, my personal world is vibrant with a different kind of exploration and creation. I believe true innovation comes from a diverse set of experiences. When I step away from the screen, you'll often find me on a <strong className="text-foreground">hiking trail</strong>, exploring new landscapes and finding tranquility in nature's vastness. My love for <strong className="text-foreground">traveling</strong> constantly fuels my curiosity, allowing me to immerse myself in different cultures and perspectives, which in turn enriches my approach to problem-solving, both technical and creative.
            </p>
          </div>
        </div>

        {/* Third Section - Text Left, Camera Image Right */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Creative Lens Text */}
          <div className="opacity-0 animate-slide-in-left animation-delay-800">
            <h4 className="text-2xl font-semibold mb-6 text-primary">My Creative Lens: Photography and Filmmaking</h4>
            <p className="text-muted-foreground leading-relaxed hover:text-foreground transition-colors duration-300 text-lg">
              My passion for observation extends naturally into the realm of <strong className="text-foreground">visual storytelling</strong>. Whether it's through <strong className="text-foreground">photography</strong> or <strong className="text-foreground">cinematic videos</strong>, I'm driven to capture fleeting moments, evoke emotion, and share unique perspectives. Filmmaking, in particular, allows me to weave narratives, playing with light, composition, and movement to craft compelling stories. It's a creative outlet that sharpens my eye for detail and challenges me to bring visions to life, much like engineering challenges demand a meticulous approach to design and execution. This blend of analytical rigor and artistic expression truly defines who I am.
            </p>
          </div>

          {/* Right Column - Camera Image */}
          <div className="flex justify-center opacity-0 animate-slide-in-right animation-delay-1000">
            <Card className="w-full max-w-sm border-none shadow-xl overflow-hidden hover:shadow-2xl hover:scale-105 transition-all duration-500 group">
              <CardContent className="p-0">
                <AspectRatio ratio={4 / 5} className="overflow-hidden rounded-lg">
                  <img 
                    src="/lovable-uploads/27b0d5ec-f720-416e-b010-7827e0c65c4f.png"
                    alt="Tharun holding a camera, showcasing his passion for photography and visual storytelling"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </AspectRatio>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;