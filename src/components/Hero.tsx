import { ArrowDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
const Hero = () => {
  return <section id="home" className="bg-background text-foreground min-h-screen font-sans relative">
      
      {/* Decorative Side Elements */}
      <div className="hidden md:block absolute top-1/2 left-auto -right-16 transform -translate-y-1/2 -rotate-90 z-20">
          <span className="text-sm font-light tracking-[0.3em] uppercase text-gray-500 whitespace-nowrap"></span>
      </div>
      <div className="absolute bottom-4 sm:bottom-8 left-4 sm:left-8 md:left-auto md:right-12 flex items-center gap-8 sm:gap-12 text-xs sm:text-sm font-light z-20">
        <span>
      </span>
        <a href="#about" className="flex items-center gap-1 sm:gap-2 hover:opacity-70 transition-opacity">
          <span onClick={() => {
            const aboutSection = document.getElementById('about');
            if (aboutSection) {
              aboutSection.scrollIntoView({ behavior: 'smooth' });
            }
          }} className="cursor-pointer flex items-center gap-1 sm:gap-2">
            Scroll down <ArrowDown size={14} className="sm:w-4 sm:h-4" />
          </span>
        </a>
      </div>

      {/* Main content container */}
      <div className="relative min-h-screen flex flex-col px-4 sm:px-6 md:px-8 lg:px-12 pt-4 sm:pt-6">
        
        <Header />

        <div className="flex-grow grid md:grid-cols-2 gap-6 sm:gap-8 items-end pt-12 sm:pt-16 md:pt-0">
          {/* Left Column: Image */}
          <div className="relative order-2 md:order-1 mt-6 sm:mt-8 md:mt-0 flex items-end justify-center opacity-0 animate-slide-in-left animation-delay-200">
            <img src="/bnw-min.png" alt="Portrait of Tharun Arety, a product designer." className="max-h-[60vh] sm:max-h-[75vh] md:max-h-[90vh] w-auto object-contain hover:scale-105 transition-transform duration-500" />
          </div>

          {/* Right Column: Text content */}
          <div className="relative z-10 order-1 md:order-2 self-center opacity-0 animate-slide-in-right">
            <div className="flex flex-col items-center text-center">
              <div className="opacity-0 animate-fade-in-up">
                <div className="text-center">
                  <h1 className="text-[3rem] sm:text-[4rem] md:text-[5rem] lg:text-[6rem] xl:text-[7rem] font-extralight leading-none text-white">Hello!</h1>
                </div>
                <div className="flex flex-col md:flex-row items-center md:items-baseline gap-1 sm:gap-2 md:gap-4 mt-1 sm:mt-2 justify-center">
                  <span className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-light text-muted-foreground">I'm</span>
                  <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light text-primary">Tharun Arety</span>
                </div>
              </div>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl font-light mt-3 sm:mt-4 text-white text-center max-w-lg sm:max-w-2xl opacity-0 animate-fade-in-up animation-delay-200 px-4">
                Shaping the Future with Materials Science, Framing the Present Through Photography.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-6 sm:mt-8 justify-center opacity-0 animate-fade-in-up animation-delay-600 px-4">
                <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90 hover:scale-105 transition-all duration-300 hover:shadow-lg text-sm sm:text-base">
                  <a href="/engineering">Explore Engineering Projects</a>
                </Button>
                <Button variant="outline" asChild className="border-primary text-primary hover:bg-primary hover:text-primary-foreground hover:scale-105 transition-all duration-300 hover:shadow-lg text-sm sm:text-base">
                  <a href="/Photography">Discover My Visual Stories</a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>;
};
export default Hero;
