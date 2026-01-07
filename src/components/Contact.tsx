import { Phone, Mail, MapPin, Briefcase } from 'lucide-react';
import { rateLimiter } from '../utils/rateLimit';
import { logger } from '../utils/logger';

export function Contact() {
  const googleFormsUrl = import.meta.env.VITE_GOOGLE_FORMS_URL || 'https://forms.gle/TU_LINK_DE_GOOGLE_FORMS';

  const handleJobApplication = () => {
    if (!rateLimiter.check('job-application')) {
      alert('Por favor espera un momento antes de intentar nuevamente');
      return;
    }

    logger.info('Job application link clicked');
    window.open(googleFormsUrl, '_blank');
  };

  const handleContactClick = (type: string) => {
    if (!rateLimiter.check(`contact-${type}`)) {
      logger.warn('Rate limit reached for contact', { type });
      return;
    }
    logger.info('Contact method used', { type });
  };

  return (
    <section id="contacto" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Contáctanos
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Estamos disponibles para atender tus consultas y cotizaciones
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="bg-blue-600 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                <Phone className="text-white" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Teléfono</h3>
                <a
                  href="tel:+56996919657"
                  onClick={() => handleContactClick('phone')}
                  className="text-blue-600 hover:underline text-lg"
                >
                  +56 9 9691 9657
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-blue-600 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                <Mail className="text-white" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Email</h3>
                <a
                  href="mailto:contacto@gycmantencion.cl"
                  onClick={() => handleContactClick('email')}
                  className="text-blue-600 hover:underline text-lg"
                >
                  contacto@gycmantencion.cl
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-blue-600 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                <MapPin className="text-white" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Ubicación</h3>
                <p className="text-gray-700 text-lg">
                  Baquedano 847, Santa Barbara<br />
                  Región del Bio Bío, Chile
                </p>
              </div>
            </div>

            <div className="bg-blue-50 border-2 border-blue-600 rounded-lg p-6">
              <div className="flex items-start gap-4">
                <div className="bg-blue-600 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Briefcase className="text-white" size={24} />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    ¿Quieres trabajar con nosotros?
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Únete a nuestro equipo de profesionales
                  </p>
                  <button
                    onClick={handleJobApplication}
                    className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                  >
                    Postular Aquí
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Horario de Atención
            </h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center py-3 border-b border-gray-200">
                <span className="text-gray-700 font-medium">Lunes - Viernes</span>
                <span className="text-gray-900 font-semibold">08:00 - 18:00</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-gray-200">
                <span className="text-gray-700 font-medium">Sábado</span>
                <span className="text-gray-900 font-semibold">09:00 - 14:00</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-gray-200">
                <span className="text-gray-700 font-medium">Domingo</span>
                <span className="text-gray-900 font-semibold">Cerrado</span>
              </div>
              <div className="bg-green-100 border border-green-600 rounded-lg p-4 mt-6">
                <p className="text-green-800 font-semibold">
                  Emergencias 24/7
                </p>
                <p className="text-green-700 text-sm mt-1">
                  Atención disponible para emergencias todos los días
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
