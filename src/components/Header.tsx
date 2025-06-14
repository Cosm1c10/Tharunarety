
import { PenTool } from 'lucide-react';

const Header = () => (
  <header className="flex justify-between items-center w-full">
    <div className="flex items-center gap-2">
      <PenTool size={32} strokeWidth={1.5} />
    </div>
    <nav className="hidden md:flex items-center gap-10 text-base font-light">
      <a href="#about" className="hover:opacity-70 transition-opacity">About Me</a>
      <a href="#portfolio" className="hover:opacity-70 transition-opacity">Portfolio</a>
      <a href="#photography" className="hover:opacity-70 transition-opacity">Photography</a>
      <a href="#contact" className="hover:opacity-70 transition-opacity">Contact</a>
    </nav>
  </header>
);

export default Header;
