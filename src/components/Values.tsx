import { Shield, Leaf, Award, TrendingUp, Heart, Lock } from 'lucide-react';

const values = [
  {
    icon: Shield,
    title: 'Seguridad y Salud Laboral',
    description: 'Priorizamos la seguridad de nuestro equipo y clientes en cada operación. Cumplimiento estricto de normas de trabajo seguro.',
  },
  {
    icon: Leaf,
    title: 'Protección Ambiental',
    description: 'Compromiso con prácticas sustentables y responsables con el medio ambiente en todas nuestras operaciones.',
  },
  {
    icon: Award,
    title: 'Calidad y Excelencia',
    description: 'Estándares internacionales en cada proyecto. Búsqueda constante de la mejora continua en nuestros servicios.',
  },
  {
    icon: TrendingUp,
    title: 'Mejora Continua',
    description: 'Innovación constante en procesos y métodos. Capacitación permanente de nuestro equipo profesional.',
  },
  {
    icon: Heart,
    title: 'Confianza y Compromiso',
    description: 'Relaciones sólidas con nuestros clientes basadas en transparencia y cumplimiento de compromisos.',
  },
  {
    icon: Lock,
    title: 'Integridad Profesional',
    description: 'Máximos estándares éticos en todas nuestras actividades y relaciones comerciales.',
  },
];

export function Values() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Nuestros Valores Corporativos
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Principios fundamentales que guían todas nuestras acciones y decisiones
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-50 to-white rounded-lg p-8 border border-gray-200 hover:shadow-lg transition-shadow"
              >
                <div className="bg-blue-100 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="text-blue-600" size={28} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-16 bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg p-8 md:p-12 text-white">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Compromiso con la Excelencia
          </h3>
          <p className="text-blue-100 mb-6 text-lg leading-relaxed">
            Estos valores no son solo palabras, sino principios que guían cada decisión,
            cada proyecto y cada interacción. Nos esforzamos por vivir estos valores
            en todas nuestras actividades, estableciendo estándares altos de desempeño
            y responsabilidad.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white bg-opacity-10 rounded-lg p-6">
              <p className="text-blue-100 text-sm font-semibold mb-2">Nuestro Foco</p>
              <p className="text-white font-semibold">Satisfacción del Cliente</p>
            </div>
            <div className="bg-white bg-opacity-10 rounded-lg p-6">
              <p className="text-blue-100 text-sm font-semibold mb-2">Metodología</p>
              <p className="text-white font-semibold">Procesos Estandarizados</p>
            </div>
            <div className="bg-white bg-opacity-10 rounded-lg p-6">
              <p className="text-blue-100 text-sm font-semibold mb-2">Objetivo</p>
              <p className="text-white font-semibold">Excelencia Operacional</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
