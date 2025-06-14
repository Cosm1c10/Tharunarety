
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

const navItems = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About Me" },
  { href: "#portfolio", label: "Portfolio" },
  { href: "#photography", label: "Photography" },
  { href: "#contact", label: "Contact" },
];

const Header = () => {
  return (
    <header className="flex items-center justify-between w-full">
      <div className="flex items-center gap-2">
        <a href="#home" className="text-xl font-semibold hover:opacity-70 transition-opacity">
          Tharun Arety
        </a>
      </div>
      <nav>
        <NavigationMenu>
          <NavigationMenuList>
            {navItems.map((item) => (
              <NavigationMenuItem key={item.label}>
                <NavigationMenuLink href={item.href} className={navigationMenuTriggerStyle()}>
                  {item.label}
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
      </nav>
    </header>
  );
};

export default Header;
