
import { Button } from "@/components/ui/button";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { useMobile } from "@/hooks/use-mobile";

const Header = () => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { isMobile } = useMobile();
  
  const navItems = [
    { href: "/", label: "Home" },
    { href: location.pathname === "/" ? "#about" : "/#about", label: "About Me" },
    { href: "/engineering", label: "Engineering" },
    { href: "/Photography", label: "Photography" },
    { 
      href: location.pathname === "/" ? "#contact" : "/#contact", 
      label: "Contact",
      onClick: (e: React.MouseEvent) => {
        if (location.pathname === "/") {
          e.preventDefault();
          const contactSection = document.getElementById('contact');
          if (contactSection) {
            contactSection.scrollIntoView({ behavior: 'smooth' });
          }
        } else {
          window.location.href = "/#contact";
        }
      }
    }
  ];

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleNavItemClick = (item: any, e: React.MouseEvent) => {
    if (isMobile) {
      setIsMobileMenuOpen(false);
    }
    if (item.onClick) {
      item.onClick(e);
    }
  };

  return (
    <header className="relative flex items-center justify-between w-full p-4 opacity-0 animate-fade-in z-50">
      <div className="flex items-center gap-2">
        <a
          href="/"
          className="text-lg sm:text-xl font-semibold hover:opacity-70 hover:scale-105 transition-all duration-300"
        >
          Tharun Arety
        </a>
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex absolute left-1/2 -translate-x-1/2 gap-1 opacity-0 animate-fade-in animation-delay-200">
        {navItems.map((item, index) => (
          <Button 
            key={index}
            variant="ghost" 
            asChild 
            className="text-sm lg:text-base px-3 lg:px-5 py-2 lg:py-3 hover:scale-105 transition-all duration-300"
            onClick={(e) => handleNavItemClick(item, e)}
          >
            <a href={item.href}>{item.label}</a>
          </Button>
        ))}
      </nav>

      {/* Mobile Menu Button - Aligned with text */}
      <div className="md:hidden flex items-center">
        <Button
          variant="ghost"
          size="sm"
          onClick={handleMobileMenuToggle}
          className="p-2 h-auto"
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </Button>
      </div>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-background/95 backdrop-blur-sm border-b border-border md:hidden z-50">
          <nav className="flex flex-col p-4 space-y-2">
            {navItems.map((item, index) => (
              <Button
                key={index}
                variant="ghost"
                asChild
                className="justify-start text-left py-3 hover:bg-secondary/50 transition-all duration-300"
                onClick={(e) => handleNavItemClick(item, e)}
              >
                <a href={item.href}>{item.label}</a>
              </Button>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
