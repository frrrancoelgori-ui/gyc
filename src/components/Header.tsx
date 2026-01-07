import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <img
              src="https://gycmantencion.cl/wp-content/uploads/2024/09/Logo-e1727654075501.png"
              alt="GYC Mantenciones"
              className="h-12 w-auto"
            />
          </div>

          <nav className="hidden md:flex space-x-8">
            <button
              onClick={() => scrollToSection('inicio')}
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
            >
              Inicio
            </button>
            <button
              onClick={() => scrollToSection('servicios')}
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
            >
              Servicios
            </button>
            <button
              onClick={() => scrollToSection('nosotros')}
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
            >
              Nosotros
            </button>
            <button
              onClick={() => scrollToSection('contacto')}
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
            >
              Contacto
            </button>
          </nav>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-gray-700"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <nav className="px-4 py-4 space-y-3">
            <button
              onClick={() => scrollToSection('inicio')}
              className="block w-full text-left text-gray-700 hover:text-blue-600 font-medium transition-colors py-2"
            >
              Inicio
            </button>
            <button
              onClick={() => scrollToSection('servicios')}
              className="block w-full text-left text-gray-700 hover:text-blue-600 font-medium transition-colors py-2"
            >
              Servicios
            </button>
            <button
              onClick={() => scrollToSection('nosotros')}
              className="block w-full text-left text-gray-700 hover:text-blue-600 font-medium transition-colors py-2"
            >
              Nosotros
            </button>
            <button
              onClick={() => scrollToSection('contacto')}
              className="block w-full text-left text-gray-700 hover:text-blue-600 font-medium transition-colors py-2"
            >
              Contacto
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
