import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, ShoppingCart } from "lucide-react";
import vitaminsImage from "@/assets/products-vitamins.jpg";
import ingredientsImage from "@/assets/natural-ingredients.jpg";
import labImage from "@/assets/quality-laboratory.jpg";

const products = [
  {
    id: 1,
    name: "Multivitamínico Complete",
    description: "Complejo vitamínico con 25 nutrientes esenciales para energía y vitalidad diaria.",
    price: "S/ 89.90",
    originalPrice: "S/ 129.90",
    image: vitaminsImage,
    rating: 4.8,
    reviews: 324,
    badge: "Más vendido"
  },
  {
    id: 2,
    name: "Omega 3 Premium",
    description: "Aceite de pescado de alta pureza para salud cardiovascular y función cerebral.",
    price: "S/ 119.90",
    originalPrice: "S/ 159.90",
    image: ingredientsImage,
    rating: 4.9,
    reviews: 198,
    badge: "Nuevo"
  },
  {
    id: 3,
    name: "Colágeno + Vitamina C",
    description: "Fórmula avanzada para piel, cabello y articulaciones saludables.",
    price: "S/ 99.90",
    originalPrice: "S/ 139.90",
    image: labImage,
    rating: 4.7,
    reviews: 256,
    badge: "Recomendado"
  }
];

const Products = () => {
  return (
    <section id="productos" className="relative py-20 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-amber-50 via-white to-red-50"></div>
      <div className="absolute top-10 right-10 w-32 h-32 bg-gradient-to-br from-amber-200 to-red-200 rounded-full opacity-20 blur-xl"></div>
      <div className="absolute bottom-10 left-10 w-24 h-24 bg-gradient-to-br from-green-200 to-amber-200 rounded-full opacity-20 blur-xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-7xl font-serif italic text-gray-800 mb-6">
            Shop
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Descubre nuestra selección premium de productos naturales, cuidadosamente formulados con los mejores ingredientes para tu bienestar integral y salud óptima.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {products.map((product) => (
            <Card key={product.id} className="group overflow-hidden border-0 shadow-soft hover:shadow-glow transition-all duration-300">
              <div className="relative overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <Badge className="absolute top-4 left-4 bg-primary text-primary-foreground">
                  {product.badge}
                </Badge>
              </div>
              
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center space-x-1">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm font-medium">{product.rating}</span>
                    <span className="text-sm text-muted-foreground">({product.reviews})</span>
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                <p className="text-muted-foreground mb-4 line-clamp-2">{product.description}</p>
                
                <div className="flex items-center justify-between mb-4">
                  <div className="space-x-2">
                    <span className="text-2xl font-bold text-primary">{product.price}</span>
                    <span className="text-sm text-muted-foreground line-through">{product.originalPrice}</span>
                  </div>
                </div>
                
                <Button className="w-full bg-gradient-primary hover:bg-primary/90">
                  <ShoppingCart className="mr-2 h-4 w-4" />
                  Agregar al Carrito
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button variant="outline" size="lg">
            Ver Todos los Productos
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Products;