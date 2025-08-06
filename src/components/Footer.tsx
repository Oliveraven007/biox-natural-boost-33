import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <img 
              src="/lovable-uploads/ea225413-91a7-4da2-85f8-3c0624fac04e.png" 
              alt="Biox Salud y Bienestar" 
              className="h-10 w-auto brightness-0 invert"
            />
            <p className="text-background/80 leading-relaxed">
              Productos 100% naturales para mejorar tu calidad de vida. 
              Más de 10 años ofreciendo salud y bienestar.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-background/60 hover:text-background transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-background/60 hover:text-background transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-background/60 hover:text-background transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-background/60 hover:text-background transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Products */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Productos</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-background/80 hover:text-background transition-colors">Multivitamínicos</a></li>
              <li><a href="#" className="text-background/80 hover:text-background transition-colors">Omega 3</a></li>
              <li><a href="#" className="text-background/80 hover:text-background transition-colors">Colágeno</a></li>
              <li><a href="#" className="text-background/80 hover:text-background transition-colors">Antioxidantes</a></li>
              <li><a href="#" className="text-background/80 hover:text-background transition-colors">Probióticos</a></li>
            </ul>
          </div>

          {/* Support */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Soporte</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-background/80 hover:text-background transition-colors">Centro de Ayuda</a></li>
              <li><a href="#" className="text-background/80 hover:text-background transition-colors">Política de Envío</a></li>
              <li><a href="#" className="text-background/80 hover:text-background transition-colors">Devoluciones</a></li>
              <li><a href="#" className="text-background/80 hover:text-background transition-colors">Términos y Condiciones</a></li>
              <li><a href="#" className="text-background/80 hover:text-background transition-colors">Política de Privacidad</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Newsletter</h3>
            <p className="text-background/80">
              Suscríbete para recibir ofertas exclusivas y consejos de salud.
            </p>
            <div className="space-y-2">
              <input
                type="email"
                placeholder="Tu email"
                className="w-full px-4 py-2 rounded-lg bg-background/10 border border-background/20 text-background placeholder:text-background/60 focus:outline-none focus:border-background/40"
              />
              <button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground px-4 py-2 rounded-lg font-medium transition-colors">
                Suscribirse
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-background/20 mt-12 pt-8 text-center">
          <p className="text-background/60">
            © 2024 Biox Salud y Bienestar. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;