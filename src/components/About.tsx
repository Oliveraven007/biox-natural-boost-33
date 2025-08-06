import { Card, CardContent } from "@/components/ui/card";
import { Users, Target, Heart } from "lucide-react";
import labImage from "@/assets/quality-laboratory.jpg";

const About = () => {
  return (
    <section id="nosotros" className="py-20 bg-gradient-wellness">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold">
                ¿Quiénes <span className="text-primary">somos</span>?
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                En <strong>Biox Salud y Bienestar</strong>, nos dedicamos a ofrecer productos 100% naturales 
                que contribuyen a mejorar la calidad de vida de las personas. Con más de 10 años de experiencia, 
                nuestra empresa se distingue por ofrecer suplementos y productos naturales de la más alta calidad.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Nos aseguramos de que cada producto esté cuidadosamente formulado para proporcionar los mejores 
                beneficios para tu salud y bienestar integral.
              </p>
            </div>

            <div className="grid sm:grid-cols-3 gap-6">
              <Card className="bg-background/60 backdrop-blur-sm border-0 shadow-soft">
                <CardContent className="p-6 text-center">
                  <Users className="h-8 w-8 text-primary mx-auto mb-3" />
                  <div className="text-2xl font-bold text-primary">+5K</div>
                  <div className="text-sm text-muted-foreground">Clientes Satisfechos</div>
                </CardContent>
              </Card>
              
              <Card className="bg-background/60 backdrop-blur-sm border-0 shadow-soft">
                <CardContent className="p-6 text-center">
                  <Target className="h-8 w-8 text-secondary mx-auto mb-3" />
                  <div className="text-2xl font-bold text-secondary">10+</div>
                  <div className="text-sm text-muted-foreground">Años de Experiencia</div>
                </CardContent>
              </Card>
              
              <Card className="bg-background/60 backdrop-blur-sm border-0 shadow-soft">
                <CardContent className="p-6 text-center">
                  <Heart className="h-8 w-8 text-accent mx-auto mb-3" />
                  <div className="text-2xl font-bold text-accent">100%</div>
                  <div className="text-sm text-muted-foreground">Productos Naturales</div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-nature rounded-3xl blur-2xl opacity-20"></div>
            <img
              src={labImage}
              alt="Laboratorio Biox"
              className="relative rounded-3xl shadow-2xl w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;