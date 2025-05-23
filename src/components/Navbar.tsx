import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="py-4 backdrop-blur-sm bg-background/90 sticky top-0 z-50 border-b border-border/40">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <Logo />
        </div>

        <div className="hidden md:flex items-center space-x-8">
          <NavLinks />
        </div>

        <div className="flex items-center">
          <Button className="hidden md:inline-flex bg-primary hover:bg-primary-600 text-white">
            Download App
          </Button>
          <Button
            variant="ghost"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="h-6 w-6" />
          </Button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-background border-b border-border/40 py-4">
          <div className="container mx-auto flex flex-col space-y-4">
            <MobileNavLinks setIsMenuOpen={setIsMenuOpen} />
            <Button className="w-full bg-primary hover:bg-primary-600 text-white">
              Download App
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

const Logo: React.FC = () => (
  <a href="/" className="flex items-center">
    <div className="text-primary mr-2">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-8 h-8"
      >
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17v-6H7l10-9v6h4l-10 9z" />
      </svg>
    </div>
    <span className="font-bold text-xl">DigiPlanter</span>
  </a>
);

const NavLinks: React.FC = () => {
  const links = [
    { name: "Home", href: "/" },
    { name: "Features", href: "#features" },
    { name: "Pricing", href: "#pricing" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <>
      {links.map((link) => (
        <a
          key={link.name}
          href={link.href}
          className="text-foreground/80 hover:text-primary transition-colors font-medium"
        >
          {link.name}
        </a>
      ))}
    </>
  );
};

const MobileNavLinks: React.FC<{
  setIsMenuOpen: (isOpen: boolean) => void;
}> = ({ setIsMenuOpen }) => {
  const links = [
    { name: "Home", href: "/" },
    { name: "Features", href: "#features" },
    { name: "Pricing", href: "#pricing" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <>
      {links.map((link) => (
        <a
          key={link.name}
          href={link.href}
          onClick={() => setIsMenuOpen(false)}
          className="text-foreground/80 hover:text-primary transition-colors font-medium py-2"
        >
          {link.name}
        </a>
      ))}
    </>
  );
};

export default Navbar;
