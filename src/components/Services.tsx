import { Wrench, Zap, Building2, Hammer } from 'lucide-react';

const services = [
  {
    icon: Wrench,
    title: 'Mantención Industrial y Ensamble Mecánico',
    description: 'Instalación, reparación y mantención de equipos mecánicos en plantas industriales. Servicio especializado en maquinaria pesada y equipos de producción críticos.',
  },
  {
    icon: Zap,
    title: 'Mantención Eléctrica, Instrumentación y Control',
    description: 'Revisión y ajuste de sistemas eléctricos para asegurar operación segura y precisa. Especialización en instrumentación industrial y sistemas de control automatizado.',
  },
  {
    icon: Building2,
    title: 'Obras Civiles e Infraestructura',
    description: 'Desarrollo, reparación y mantención de infraestructura incluyendo caminos, puentes y edificios. Proyectos de construcción civil especializada.',
  },
  {
    icon: Hammer,
    title: 'Diseño y Fabricación de Estructuras Metálicas',
    description: 'Análisis estructural y manufactura de estructuras metálicas desde diseño hasta ejecución. Trabajos especializados en fabricación de acero.',
  },
];

export function Services() {
  return (
    <section id="servicios" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Nuestros Servicios
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Ofrecemos soluciones integrales de mantención adaptadas a tus necesidades
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="bg-gray-50 rounded-lg p-6 hover:shadow-xl transition-shadow border border-gray-200"
              >
                <div className="bg-blue-600 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="text-white" size={28} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
