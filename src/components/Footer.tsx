export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <img
              src="https://gycmantencion.cl/wp-content/uploads/2024/09/Logo-e1727654075501.png"
              alt="GYC Mantenciones"
              className="h-12 w-auto mb-4 brightness-0 invert"
            />
            <p className="text-gray-400 leading-relaxed">
              Servicios profesionales de mantención en la región del Bio Bío.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <a href="#inicio" className="text-gray-400 hover:text-white transition-colors">
                  Inicio
                </a>
              </li>
              <li>
                <a href="#servicios" className="text-gray-400 hover:text-white transition-colors">
                  Servicios
                </a>
              </li>
              <li>
                <a href="#nosotros" className="text-gray-400 hover:text-white transition-colors">
                  Nosotros
                </a>
              </li>
              <li>
                <a href="#contacto" className="text-gray-400 hover:text-white transition-colors">
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contacto</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Región del Bio Bío, Chile</li>
              <li>
                <a href="tel:+56912345678" className="hover:text-white transition-colors">
                  +56 9 1234 5678
                </a>
              </li>
              <li>
                <a href="mailto:contacto@gycmantencion.cl" className="hover:text-white transition-colors">
                  contacto@gycmantencion.cl
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>&copy; {currentYear} GYC Mantenciones. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
