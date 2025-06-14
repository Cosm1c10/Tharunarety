
import { ArrowDown } from 'lucide-react';
import Header from '@/components/Header';

const Hero = () => {
  return (
    <section id="home" className="bg-background text-foreground min-h-screen font-sans relative overflow-hidden">
      
      {/* Decorative Side Elements */}
      <div className="hidden md:block absolute top-1/2 -left-16 transform -translate-y-1/2 -rotate-90 z-20">
          <span className="text-sm font-light tracking-[0.3em] uppercase text-gray-500 whitespace-nowrap">Product designer</span>
      </div>
      <div className="absolute bottom-8 left-8 md:left-12 flex items-center gap-12 text-sm font-light z-20">
        <span>2024</span>
        <a href="#about" className="flex items-center gap-2 hover:opacity-70 transition-opacity">
          Scroll down <ArrowDown size={16} />
        </a>
      </div>

      {/* Main content container */}
      <div className="relative min-h-screen flex flex-col p-8 md:p-12">
        <Header />

        <main className="flex-grow grid md:grid-cols-2 gap-8 items-center pt-16 md:pt-0">
          {/* Left Column: Text content */}
          <div className="relative z-10 order-2 md:order-1 mt-8 md:mt-0">
            <div className="flex gap-8 md:gap-12 mb-8 md:mb-10">
              <div>
                <p className="text-4xl md:text-5xl font-light">+200</p>
                <p className="text-xs md:text-sm text-gray-500 font-light mt-1">Project completed</p>
              </div>
              <div>
                <p className="text-4xl md:text-5xl font-light">+50</p>
                <p className="text-xs md:text-sm text-gray-500 font-light mt-1">Startup raised</p>
              </div>
            </div>
            <h1 className="text-[8rem] sm:text-[10rem] md:text-display font-extralight leading-none -ml-1 md:-ml-2">Hello</h1>
            <p className="text-lg md:text-xl font-light mt-4 ml-1">— It's Tharun arety.</p>
          </div>

          {/* Right Column: Empty for spacing */}
          <div className="relative order-1 md:order-2 h-64 md:h-auto"></div>
        </main>
      </div>

      {/* Background Image Container */}
      <div className="absolute top-0 right-0 h-full w-full md:w-1/2 z-0">
          <div className="h-full w-full relative overflow-hidden">
              <img src="/lovable-uploads/868314e2-5d2d-4b16-950d-6e89ca616144.png" alt="Portrait of Tharun arety, a product designer." className="absolute top-0 right-0 h-full w-auto max-w-none opacity-30 md:opacity-100" style={{
          transform: 'translateX(28%) scale(1.6)'
        }} />
          </div>
      </div>
    </section>
  );
};
export default Hero;
