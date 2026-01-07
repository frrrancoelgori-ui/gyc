import { ArrowRight } from 'lucide-react';

export function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById('contacto');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="inicio" className="pt-24 pb-16 bg-gradient-to-br from-blue-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Mantenciones Profesionales en Bio Bío
            </h1>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              Servicios especializados de mantención industrial, comercial y residencial.
              Calidad y confianza garantizada.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={scrollToContact}
                className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center gap-2 shadow-lg"
              >
                Solicitar Cotización
                <ArrowRight size={20} />
              </button>
              <a
                href="tel:+56996919657"
                className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-50 transition-colors flex items-center justify-center border-2 border-blue-600"
              >
                Llamar Ahora
              </a>
            </div>
          </div>

          <div className="relative">
            <img
              src="https://images.pexels.com/photos/585419/pexels-photo-585419.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Mantención profesional"
              className="rounded-lg shadow-2xl w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
