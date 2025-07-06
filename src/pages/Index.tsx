
import { useEffect } from 'react';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Photography from '@/components/Photography';
import Portfolio from '@/components/Portfolio';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  useEffect(() => {
    const htmlElement = document.documentElement;
    const originalStyle = htmlElement.style.scrollBehavior;
    htmlElement.style.scrollBehavior = 'smooth';
    
    return () => {
      htmlElement.style.scrollBehavior = originalStyle;
    };
  }, []);

  return (
    <div className="bg-background text-foreground font-sans">
      <main>
        <Hero />
        <About />
        <Portfolio />
        <Photography />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};
export default Index;
