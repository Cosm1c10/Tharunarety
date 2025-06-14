
import { PenTool } from 'lucide-react';

const Header = () => (
  <header className="flex justify-between items-center w-full">
    <div className="flex items-center gap-2">
      <PenTool size={32} strokeWidth={1.5} />
    </div>
    <nav className="hidden md:flex items-center gap-10 text-base font-light">
      <a href="#" className="hover:opacity-70 transition-opacity">About Me</a>
      <a href="#" className="hover:opacity-70 transition-opacity">Portfolio</a>
      <a href="#" className="hover:opacity-70 transition-opacity">Services</a>
      <a href="#" className="hover:opacity-70 transition-opacity">Blog</a>
    </nav>
  </header>
);

export default Header;
