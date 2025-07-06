
import { Button } from "@/components/ui/button";
import { useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  
  return (
    <header className="relative flex items-center justify-start w-full p-4">
      <div className="flex items-center gap-2">
        <a
          href="/"
          className="text-xl font-semibold hover:opacity-70 transition-opacity"
        >
          Tharun Arety
        </a>
      </div>

      <nav className="hidden md:flex absolute left-1/2 -translate-x-1/2 gap-1">
        <Button variant="ghost" asChild className="text-base px-5 py-3">
          <a href="/">Home</a>
        </Button>
        <Button variant="ghost" asChild className="text-base px-5 py-3">
          <a href={location.pathname === "/" ? "#about" : "/#about"}>About Me</a>
        </Button>
        <Button variant="ghost" asChild className="text-base px-5 py-3">
          <a href="/portfolio">Portfolio</a>
        </Button>
        <Button variant="ghost" asChild className="text-base px-5 py-3">
          <a href="/photography">Photography</a>
        </Button>
        <Button variant="ghost" asChild className="text-base px-5 py-3">
          <a href={location.pathname === "/" ? "#contact" : "/#contact"}>Contact</a>
        </Button>
      </nav>
    </header>
  );
};

export default Header;
