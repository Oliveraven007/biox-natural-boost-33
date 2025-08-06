import { Shield, Leaf, Award, Truck } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const features = [
  {
    icon: Shield,
    title: "Certificación de Calidad",
    description: "Todos nuestros productos cuentan con certificaciones internacionales de calidad y pureza."
  },
  {
    icon: Leaf,
    title: "100% Natural",
    description: "Utilizamos únicamente ingredientes naturales, sin químicos ni conservantes artificiales."
  },
  {
    icon: Award,
    title: "+10 Años de Experiencia",
    description: "Más de una década desarrollando productos naturales para mejorar tu calidad de vida."
  },
  {
    icon: Truck,
    title: "Envío Gratuito",
    description: "Envío gratuito en todo Perú para compras mayores a S/150. Entrega rápida y segura."
  }
];

const Features = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            ¿Por qué elegir <span className="text-primary">Biox</span>?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Nos comprometemos con la excelencia en cada producto que desarrollamos
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="bg-background/60 backdrop-blur-sm border-0 shadow-soft hover:shadow-glow transition-all duration-300 group">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;