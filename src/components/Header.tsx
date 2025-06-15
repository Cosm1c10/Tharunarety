
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="relative flex items-center justify-start w-full p-4">
      <div className="flex items-center gap-2">
        <a
          href="#home"
          className="text-xl font-semibold hover:opacity-70 transition-opacity"
        >
          Tharun Arety
        </a>
      </div>

      <nav className="hidden md:flex absolute left-1/2 -translate-x-1/2 gap-1">
        <Button variant="ghost" asChild>
          <a href="#home">Home</a>
        </Button>
        <Button variant="ghost" asChild>
          <a href="#about">About Me</a>
        </Button>
        <Button variant="ghost" asChild>
          <a href="#portfolio">Portfolio</a>
        </Button>
        <Button variant="ghost" asChild>
          <a href="#photography">Photography</a>
        </Button>
        <Button variant="ghost" asChild>
          <a href="#contact">Contact</a>
        </Button>
      </nav>
    </header>
  );
};

export default Header;
