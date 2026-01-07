import { Award, CheckCircle, Ribbon } from 'lucide-react';

const certifications = [
  {
    title: 'Certificación de Seguridad Ocupacional',
    issuer: 'Norma NC-ISO 45001',
    description: 'Sistemas de gestión de seguridad y salud en el trabajo',
  },
  {
    title: 'Certificación de Calidad',
    issuer: 'Norma NC-ISO 9001',
    description: 'Sistemas de gestión de calidad en servicios industriales',
  },
  {
    title: 'Certificación Ambiental',
    issuer: 'Norma NC-ISO 14001',
    description: 'Gestión ambiental y sostenibilidad en operaciones',
  },
];

const qualifications = [
  'Personal técnico con certificaciones internacionales',
  'Especialistas en mantención industrial de equipos críticos',
  'Operarios calificados en trabajos en altura y espacios confinados',
  'Técnicos en instrumentación y sistemas de control',
  'Especialistas en soldadura y fabricación de acero',
];

export function Certifications() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Certificaciones y Calificaciones
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Cumplimiento de estándares internacionales de calidad, seguridad y ambiente
          </p>
        </div>

        {/* Certificaciones Principales */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-lg p-8 border-t-4 border-blue-600 hover:shadow-lg transition-shadow"
            >
              <Award className="text-blue-600 mb-4" size={32} />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {cert.title}
              </h3>
              <p className="text-blue-600 font-semibold mb-3">{cert.issuer}</p>
              <p className="text-gray-600 leading-relaxed">
                {cert.description}
              </p>
            </div>
          ))}
        </div>

        {/* Calificaciones del Personal */}
        <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg p-8 md:p-12 border border-blue-200">
          <div className="flex items-start gap-4 mb-6">
            <Ribbon className="text-blue-600 flex-shrink-0" size={32} />
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Calificaciones Profesionales
              </h3>
              <p className="text-gray-700">
                Nuestro equipo cuenta con las certificaciones y competencias necesarias
                para ejecutar proyectos complejos en conformidad con estándares internacionales
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {qualifications.map((qualification, index) => (
              <div key={index} className="flex items-start gap-3 bg-white p-4 rounded-lg">
                <CheckCircle className="text-green-600 flex-shrink-0 mt-1" size={20} />
                <span className="text-gray-700">{qualification}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Compromiso con Excelencia */}
        <div className="mt-16 grid md:grid-cols-2 gap-8">
          <div className="bg-blue-600 text-white rounded-lg p-8">
            <h3 className="text-2xl font-bold mb-4">Compromiso con la Excelencia</h3>
            <p className="leading-relaxed mb-4">
              Todos nuestros servicios están respaldados por estándares internacionales
              de calidad, seguridad y desempeño ambiental.
            </p>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <CheckCircle size={20} />
                Mejora continua de procesos
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle size={20} />
                Capacitación regular del equipo
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle size={20} />
                Auditorías de calidad permanentes
              </li>
            </ul>
          </div>

          <div className="bg-gray-50 rounded-lg p-8 border border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Garantía de Servicios</h3>
            <p className="text-gray-700 mb-4">
              Ofrecemos garantía integral en todos nuestros servicios, respaldada por
              nuestro equipo especializado y experiencia comprobada en el sector.
            </p>
            <div className="space-y-3">
              <div>
                <p className="font-semibold text-gray-900">Cobertura Total</p>
                <p className="text-gray-600 text-sm">En toda la región del Bio Bío</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900">Respuesta Rápida</p>
                <p className="text-gray-600 text-sm">Atención inmediata en emergencias</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900">Calidad Certificada</p>
                <p className="text-gray-600 text-sm">Estándares ISO internacionales</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
