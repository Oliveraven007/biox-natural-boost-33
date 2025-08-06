import { Button } from "@/components/ui/button";
import { Menu, Search, ShoppingCart, User } from "lucide-react";

const Header = () => {
  return (
    <header className="bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 w-full border-b border-border/40">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-4">
          <img 
            src="/lovable-uploads/ea225413-91a7-4da2-85f8-3c0624fac04e.png" 
            alt="Biox Salud y Bienestar" 
            className="h-10 w-auto"
          />
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#inicio" className="text-sm font-medium hover:text-primary transition-colors">
            Inicio
          </a>
          <a href="#productos" className="text-sm font-medium hover:text-primary transition-colors">
            Productos
          </a>
          <a href="#nosotros" className="text-sm font-medium hover:text-primary transition-colors">
            Nosotros
          </a>
          <a href="#blog" className="text-sm font-medium hover:text-primary transition-colors">
            Blog
          </a>
          <a href="#contacto" className="text-sm font-medium hover:text-primary transition-colors">
            Contacto
          </a>
        </nav>

        {/* Actions */}
        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="sm" className="hidden sm:flex">
            <Search className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="sm">
            <User className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="sm">
            <ShoppingCart className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="sm" className="md:hidden">
            <Menu className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;