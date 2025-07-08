
import { ArrowDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
const Hero = () => {
  return <section id="home" className="bg-background text-foreground min-h-screen font-sans relative">
      
      {/* Decorative Side Elements */}
      <div className="hidden md:block absolute top-1/2 left-auto -right-16 transform -translate-y-1/2 -rotate-90 z-20">
          <span className="text-sm font-light tracking-[0.3em] uppercase text-gray-500 whitespace-nowrap"></span>
      </div>
      <div className="absolute bottom-8 left-8 md:left-auto md:right-12 flex items-center gap-12 text-sm font-light z-20">
        <span>
      </span>
        <a href="#about" className="flex items-center gap-2 hover:opacity-70 transition-opacity">
          <span onClick={() => {
            const aboutSection = document.getElementById('about');
            if (aboutSection) {
              aboutSection.scrollIntoView({ behavior: 'smooth' });
            }
          }} className="cursor-pointer flex items-center gap-2">
            Scroll down <ArrowDown size={16} />
          </span>
        </a>
      </div>

      {/* Main content container */}
      <div className="relative min-h-screen flex flex-col px-8 pt-4 md:px-12 md:pt-6">
        
        <Header />

        <div className="flex-grow grid md:grid-cols-2 gap-8 items-end pt-16 md:pt-0">
          {/* Left Column: Image */}
          <div className="relative order-2 md:order-1 mt-8 md:mt-0 flex items-end justify-center">
            <img src="/bnw-min.png" alt="Portrait of Tharun Arety, a product designer." className="max-h-[75vh] md:max-h-[90vh] w-auto object-contain" />
          </div>

          {/* Right Column: Text content */}
          <div className="relative z-10 order-1 md:order-2 self-center md:ml-12">
            <div className="flex flex-col items-center text-center md:items-start md:text-left">
              <h1 className="text-[6rem] sm:text-[8rem] md:text-[10rem] lg:text-display font-extralight leading-none text-white">Hello</h1>
              <p className="text-lg md:text-xl font-light mt-4 text-primary text-center md:text-left">— Shaping the Future with Materials Science, Framing the Present Through Photography.</p>
              <p className="text-sm md:text-base font-light mt-2 text-muted-foreground text-center md:text-left max-w-md">
                Materials Engineering professional driven by innovation in FEM simulations and Python programming, passionate visual storyteller through photography and cinematic videos.
              </p>
              <div className="flex gap-4 mt-8">
                <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90">
                  <a href="/portfolio">Explore Engineering Portfolio</a>
                </Button>
                <Button variant="outline" asChild className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                  <a href="/photography">Discover My Visual Stories</a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>;
};
export default Hero;
