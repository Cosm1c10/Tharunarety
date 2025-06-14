
import Hero from '@/components/Hero';
import About from '@/components/About';
import Photography from '@/components/Photography';
import Portfolio from '@/components/Portfolio';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
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
