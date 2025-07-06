import { ArrowDown, Play, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { FloatingActionButton } from '@/components/ui/floating-action-button';
import Header from '@/components/Header';

const EnhancedHero = () => {
  return (
    <section id="home" className="bg-background text-foreground min-h-screen font-sans relative overflow-hidden">
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>
      
      {/* Decorative Side Elements */}
      <div className="hidden md:block absolute top-1/2 left-auto -right-16 transform -translate-y-1/2 -rotate-90 z-20">
          <span className="text-sm font-light tracking-[0.3em] uppercase text-gray-500 whitespace-nowrap"></span>
      </div>
      
      <div className="absolute bottom-8 left-8 md:left-auto md:right-12 flex items-center gap-12 text-sm font-light z-20">
        <span></span>
        <a href="#about" className="flex items-center gap-2 hover:opacity-70 transition-all duration-300 hover:translate-y-1">
          Scroll down <ArrowDown size={16} className="animate-bounce" />
        </a>
      </div>

      {/* Main content container */}
      <div className="relative min-h-screen flex flex-col px-8 pt-4 md:px-12 md:pt-6">
        
        <Header />

        <div className="flex-grow grid md:grid-cols-2 gap-8 items-end pt-16 md:pt-0">
          {/* Left Column: Image */}
          <div className="relative order-2 md:order-1 mt-8 md:mt-0 flex items-end justify-center">
            <div className="relative group">
              <img 
                src="/bnw-min.png" 
                alt="Portrait of Tharun Arety, a product designer." 
                className="max-h-[75vh] md:max-h-[90vh] w-auto object-contain transition-transform duration-500 group-hover:scale-105" 
              />
              {/* Subtle glow effect */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          </div>

          {/* Right Column: Text content */}
          <div className="relative z-10 order-1 md:order-2 self-center md:ml-12">
            <div className="flex flex-col items-center text-center md:items-start md:text-left">
              <h1 className="text-[6rem] sm:text-[8rem] md:text-[10rem] lg:text-display font-extralight leading-none text-white animate-fade-in">
                Hello
              </h1>
              <p className="text-lg md:text-xl font-light mt-4 text-primary text-center md:text-left animate-fade-in-delay">
                — It's Tharun Arety.
              </p>
              <p className="text-sm md:text-base text-muted-foreground mt-2 max-w-md animate-fade-in-delay-2">
                Mechanical Engineer & Visual Storyteller
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mt-8 animate-fade-in-delay-3">
                <Button 
                  asChild 
                  className="bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 hover:scale-105 hover:shadow-lg"
                >
                  <a href="/portfolio">
                    <Play className="mr-2 h-4 w-4" />
                    View Portfolio
                  </a>
                </Button>
                <Button 
                  variant="outline" 
                  asChild 
                  className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-105"
                >
                  <a href="/photography">
                    <Download className="mr-2 h-4 w-4" />
                    Photography
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <FloatingActionButton />
    </section>
  );
};

export default EnhancedHero;