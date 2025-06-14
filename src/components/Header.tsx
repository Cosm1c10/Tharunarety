
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

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
      <nav className="hidden md:block">
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
      <div className="md:hidden">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Open navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <nav className="grid gap-4 text-lg font-medium mt-8">
              {navItems.map((item) => (
                <SheetClose asChild key={item.label}>
                  <a
                    href={item.href}
                    className="block px-2 py-1 text-muted-foreground hover:text-foreground"
                  >
                    {item.label}
                  </a>
                </SheetClose>
              ))}
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default Header;
