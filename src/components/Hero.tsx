
import { ArrowDown } from 'lucide-react';
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
          Scroll down <ArrowDown size={16} />
        </a>
      </div>

      {/* Main content container */}
      <div className="relative min-h-screen flex flex-col px-8 pt-4 md:px-12 md:pt-6">
        
        <Header />

        <div className="flex-grow grid md:grid-cols-2 gap-8 items-end pt-16 md:pt-0">
          {/* Left Column: Image */}
          <div className="relative order-2 md:order-1 mt-8 md:mt-0 flex items-end justify-center">
            <img src="/lovable-uploads/b7f37931-496e-4f02-a738-38e53d80a6e8.png" alt="Portrait of Tharun arety, a product designer." className="max-h-[75vh] md:max-h-[90vh] w-auto object-contain" />
          </div>

          {/* Right Column: Text content */}
          <div className="relative z-10 order-1 md:order-2 self-center md:ml-12">
            <div className="flex flex-col items-center text-center md:items-start md:text-left">
              <h1 className="text-[6rem] sm:text-[8rem] md:text-[10rem] lg:text-display font-extralight leading-none text-white">Hello</h1>
              <p className="text-lg md:text-xl font-light mt-4 md:pl-24 text-white">— It's Tharun Arety.</p>
            </div>
          </div>
        </div>
      </div>

    </section>;
};
export default Hero;
