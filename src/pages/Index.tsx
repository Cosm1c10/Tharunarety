
import { useEffect } from 'react';
import EnhancedHero from '@/components/enhanced-hero';
import EnhancedAbout from '@/components/enhanced-about';
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
        <EnhancedHero />
        <EnhancedAbout />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};
export default Index;
