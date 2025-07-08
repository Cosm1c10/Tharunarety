
import { Button } from "@/components/ui/button";
import { useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  
  return (
    <header className="relative flex items-center justify-start w-full p-4 opacity-0 animate-fade-in">
      <div className="flex items-center gap-2">
        <a
          href="/"
          className="text-xl font-semibold hover:opacity-70 hover:scale-105 transition-all duration-300"
        >
          Tharun Arety
        </a>
      </div>

      <nav className="hidden md:flex absolute left-1/2 -translate-x-1/2 gap-1 opacity-0 animate-fade-in animation-delay-200">
        <Button variant="ghost" asChild className="text-base px-5 py-3 hover:scale-105 transition-all duration-300">
          <a href="/">Home</a>
        </Button>
        <Button variant="ghost" asChild className="text-base px-5 py-3 hover:scale-105 transition-all duration-300">
          <a href={location.pathname === "/" ? "#about" : "/#about"}>About Me</a>
        </Button>
        <Button variant="ghost" asChild className="text-base px-5 py-3 hover:scale-105 transition-all duration-300">
          <a href="/portfolio">Portfolio</a>
        </Button>
        <Button variant="ghost" asChild className="text-base px-5 py-3 hover:scale-105 transition-all duration-300">
          <a href="/photography">Photography</a>
        </Button>
        <Button variant="ghost" asChild className="text-base px-5 py-3 hover:scale-105 transition-all duration-300">
          <a 
            href={location.pathname === "/" ? "#contact" : "/#contact"} 
            onClick={(e) => {
              if (location.pathname === "/") {
                e.preventDefault();
                const contactSection = document.getElementById('contact');
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: 'smooth' });
                }
              } else {
                // For other pages, navigate to home page with contact hash
                // The browser will automatically scroll to the contact section
                window.location.href = "/#contact";
              }
            }}
          >
            Contact
          </a>
        </Button>
      </nav>
    </header>
  );
};

export default Header;
