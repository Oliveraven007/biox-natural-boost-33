import { Button } from "@/components/ui/button";
import heroGifts from "@/assets/hero-natural-gifts.jpg";
import discountProducts from "@/assets/discount-health-products.jpg";
import bigDiscount from "@/assets/big-discount-wellness.jpg";
import newArrivals from "@/assets/new-arrivals-health.jpg";
import morningWellness from "@/assets/morning-wellness.jpg";

const Hero = () => {
  return (
    <section className="py-8">
      <div className="container mx-auto px-4">
        {/* Main grid layout replicating the Christmas structure */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {/* Large hero card - top left, spans 2 columns */}
          <div className="lg:col-span-2 relative rounded-3xl overflow-hidden">
            <img
              src={heroGifts}
              alt="Productos naturales"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/30 rounded-3xl"></div>
            <div className="relative p-8 lg:p-12 h-full min-h-[300px] flex items-center">
              <div className="max-w-md">
                <p className="text-lg text-purple-200 mb-4">Los Mejores Productos Naturales</p>
                <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6" style={{fontFamily: 'serif'}}>
                  De Nuestra Tienda
                  <br />
                  a Tu Hogar!
                </h1>
                <Button className="bg-purple-700 hover:bg-purple-800 text-white px-8 py-3 rounded-full">
                  Comprar Ahora
                </Button>
              </div>
            </div>
          </div>

          {/* Discount card - top right */}
          <div className="relative rounded-3xl overflow-hidden">
            <img
              src={discountProducts}
              alt="Descuentos en productos"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40 rounded-3xl"></div>
            <div className="relative p-6 lg:p-8 h-full min-h-[300px] flex flex-col justify-center">
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-2">-40%</h2>
              <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4" style={{fontFamily: 'serif'}}>
                Aprovecha Tu
                <br />
                Descuento en Salud
              </h3>
              <Button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-full self-start">
                Obtener Descuentos
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom row - 3 equal cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Big Discount - Red card */}
          <div className="relative rounded-3xl overflow-hidden">
            <img
              src={bigDiscount}
              alt="Gran descuento"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40 rounded-3xl"></div>
            <div className="relative p-6 h-full min-h-[240px] flex flex-col justify-center">
              <p className="text-purple-200 mb-2">Gran Descuento</p>
              <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4" style={{fontFamily: 'serif'}}>
                Ahorra en
                <br />
                Bienestar
              </h3>
              <Button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-full self-start font-semibold">
                Comprar Ahora
              </Button>
            </div>
          </div>

          {/* New Arrivals - Teal card */}
          <div className="relative rounded-3xl overflow-hidden">
            <img
              src={newArrivals}
              alt="Nuevos productos"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40 rounded-3xl"></div>
            <div className="relative p-6 h-full min-h-[240px] flex flex-col justify-center">
              <p className="text-purple-200 mb-2">Nuevos Productos</p>
              <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4" style={{fontFamily: 'serif'}}>
                Wellness
                <br />
                Natural
              </h3>
              <Button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-full self-start font-semibold">
                Ver Productos
              </Button>
            </div>
          </div>

          {/* Morning Wellness - Yellow card */}
          <div className="relative rounded-3xl overflow-hidden">
            <img
              src={morningWellness}
              alt="Bienestar matutino"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40 rounded-3xl"></div>
            <div className="relative p-6 h-full min-h-[240px] flex flex-col justify-center">
              <p className="text-purple-200 mb-2">Regalos Naturales</p>
              <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4" style={{fontFamily: 'serif'}}>
                Bienestar
                <br />
                Matutino
              </h3>
              <Button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-full self-start">
                Obtener Ahora
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;