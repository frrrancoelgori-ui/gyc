import { CheckCircle2, Target, Eye } from 'lucide-react';

const benefits = [
  'Más de una década de experiencia en el rubro',
  'Personal técnico certificado y capacitado',
  'Atención 24/7 para emergencias',
  'Equipos y herramientas de última generación',
  'Garantía integral en todos nuestros servicios',
  'Cobertura en toda la región del Bio Bío',
];

export function About() {
  return (
    <section id="nosotros" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Introducción */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <img
              src="https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Equipo de trabajo"
              className="rounded-lg shadow-xl w-full"
            />
          </div>

          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              ¿Por qué elegirnos?
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              GYC Mantenciones es una empresa chilena con más de una década de experiencia
              en soluciones técnicas y eficaces para procesos productivos. Nos especializamos
              en mantención industrial, ensamble mecánico, sistemas eléctricos y obras civiles
              en la región del Bio Bío.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Nuestro compromiso es garantizar la satisfacción de nuestros clientes mediante
              trabajo profesional, eficiente y seguro, priorizando la excelencia en cada proyecto.
            </p>

            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="text-green-600 flex-shrink-0 mt-1" size={24} />
                  <span className="text-gray-700 text-lg">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Misión, Visión y Especialización */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* Misión */}
          <div className="bg-white rounded-lg shadow-lg p-8 border-t-4 border-blue-600">
            <Target className="text-blue-600 mb-4" size={32} />
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Misión</h3>
            <p className="text-gray-700 leading-relaxed">
              Brindar soluciones técnicas, eficaces y de calidad en los procesos productivos,
              estableciendo confianza, compromiso con la seguridad laboral y protección ambiental.
            </p>
          </div>

          {/* Visión */}
          <div className="bg-white rounded-lg shadow-lg p-8 border-t-4 border-green-600">
            <Eye className="text-green-600 mb-4" size={32} />
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Visión</h3>
            <p className="text-gray-700 leading-relaxed">
              Posicionarnos como una empresa distinguida y confiable, ejecutando trabajo
              industrial especializado con proyección de expansión hacia sectores minería,
              forestal y otros.
            </p>
          </div>

          {/* Especialización */}
          <div className="bg-white rounded-lg shadow-lg p-8 border-t-4 border-orange-600">
            <div className="text-orange-600 mb-4 font-bold text-3xl">⚙️</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Especialización</h3>
            <p className="text-gray-700 leading-relaxed">
              Expertos en mantenimiento industrial, ensamble mecánico y sistemas eléctricos
              con experiencia comprobada en el sector hidroeléctrico y proyección hacia
              minería y sector forestal.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
