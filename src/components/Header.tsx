
const Header = () => {
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const targetId = e.currentTarget.getAttribute('href')?.substring(1);
    if (!targetId) return;

    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <header className="flex justify-between items-center w-full">
      <div className="flex items-center gap-2">
        <a href="#home" onClick={handleNavClick} className="text-xl font-semibold hover:opacity-70 transition-opacity">
          Tharun Arety
        </a>
      </div>
      <nav className="hidden md:flex items-center gap-10 text-base font-light">
        <a href="#about" onClick={handleNavClick} className="hover:opacity-70 transition-opacity">About Me</a>
        <a href="#portfolio" onClick={handleNavClick} className="hover:opacity-70 transition-opacity">Portfolio</a>
        <a href="#photography" onClick={handleNavClick} className="hover:opacity-70 transition-opacity">Photography</a>
        <a href="#contact" onClick={handleNavClick} className="hover:opacity-70 transition-opacity">Contact</a>
      </nav>
    </header>
  );
};

export default Header;
