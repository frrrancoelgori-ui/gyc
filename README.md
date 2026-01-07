# GYC Mantenciones - Sitio Web Corporativo

Sitio web profesional para GYC Mantenciones, empresa chilena especializada en mantención industrial, ensamble mecánico, sistemas eléctricos, obras civiles y fabricación de estructuras metálicas. Con más de una década de experiencia en la región del Bio Bío, ofrecemos soluciones técnicas integrales con estándares internacionales.

## Características

### Funcionalidades Principales

- **Diseño Responsive**: Completamente adaptado para dispositivos móviles, tablets y escritorio
- **Navegación Suave**: Scroll suave entre secciones con menú hamburguesa en móvil
- **Formulario Externo**: Integración con Google Forms para postulaciones laborales
- **Optimizado para SEO**: Meta tags y estructura optimizada para buscadores
- **Información Completa**: Misión, visión, valores corporativos y certificaciones
- **Detalles de Servicios**: 4 servicios principales con descripciones especializadas
- **Calificaciones**: Equipo certificado con competencias internacionales

### Sistemas Implementados

#### 1. Sistema de Logs (`src/utils/logger.ts`)

Sistema completo de registro de eventos con persistencia en localStorage:

```typescript
import { logger } from './utils/logger';

logger.info('Mensaje informativo');
logger.warn('Advertencia');
logger.error('Error', { detalles: 'información adicional' });
logger.debug('Mensaje de depuración');

const logs = logger.getLogs();
logger.clearLogs();
```

**Características:**
- Almacena últimos 100 eventos
- Persiste en localStorage
- Incluye timestamp y metadata
- Modo debug en desarrollo

#### 2. Rate Limiting (`src/utils/rateLimit.ts`)

Protección contra uso excesivo de funcionalidades:

```typescript
import { rateLimiter } from './utils/rateLimit';

if (rateLimiter.check('action-key')) {
  // Acción permitida
} else {
  // Límite alcanzado
}

const remaining = rateLimiter.getRemainingRequests('action-key');
```

**Configuración por defecto:**
- 10 solicitudes por minuto
- Ventana de 60 segundos
- Reseteo automático

#### 3. Cache con localStorage (`src/utils/cache.ts`)

Sistema de caché inteligente con expiración automática:

```typescript
import { cache } from './utils/cache';

cache.set('key', data, 3600000); // TTL: 1 hora
const data = cache.get('key');
cache.delete('key');
cache.clear();
```

**Características:**
- TTL configurable (default: 1 hora)
- Expiración automática
- Limpieza de datos obsoletos

#### 4. Manejo de Cookies (`src/utils/cookies.ts`)

Gestión completa de cookies con configuración avanzada:

```typescript
import { cookies } from './utils/cookies';

cookies.set('name', 'value', {
  days: 7,
  path: '/',
  secure: true,
  sameSite: 'Lax'
});

const value = cookies.get('name');
cookies.delete('name');
const all = cookies.getAll();
```

**Características:**
- Configuración de expiración
- Soporte para secure y SameSite
- Encoding/decoding automático

## Estructura del Proyecto

```
gyc-mantenciones/
├── src/
│   ├── components/
│   │   ├── Header.tsx            # Navegación principal
│   │   ├── Hero.tsx              # Sección hero con CTA
│   │   ├── Services.tsx          # Servicios ofrecidos (4 servicios principales)
│   │   ├── About.tsx             # Sobre la empresa, misión y visión
│   │   ├── Values.tsx            # Valores corporativos (6 valores)
│   │   ├── Certifications.tsx    # Certificaciones y calificaciones
│   │   ├── Contact.tsx           # Información de contacto y postulaciones
│   │   └── Footer.tsx            # Pie de página
│   ├── utils/
│   │   ├── logger.ts         # Sistema de logs
│   │   ├── rateLimit.ts      # Rate limiting
│   │   ├── cache.ts          # Caché localStorage
│   │   └── cookies.ts        # Manejo de cookies
│   ├── App.tsx               # Componente principal
│   ├── main.tsx              # Punto de entrada
│   └── index.css             # Estilos globales
├── public/
│   └── 404.html              # Página de error para GitHub Pages
├── .github/
│   └── workflows/
│       └── deploy.yml        # CI/CD para GitHub Pages
└── package.json
```

## Instalación y Desarrollo

### Requisitos Previos

- Node.js 18 o superior
- npm o yarn

### Instalación

```bash
# Clonar el repositorio
git clone https://github.com/tu-usuario/gyc-mantenciones.git
cd gyc-mantenciones

# Instalar dependencias
npm install
```

### Comandos Disponibles

```bash
# Desarrollo local
npm run dev

# Compilar para producción
npm run build

# Vista previa de producción
npm run preview

# Linter
npm run lint

# Verificación de tipos TypeScript
npm run typecheck
```

## Configuración para Google Forms

Para conectar el formulario de postulación laboral:

1. Crea un Google Form en [forms.google.com](https://forms.google.com)
2. Configura los campos necesarios (nombre, email, teléfono, CV, etc.)
3. Obtén el enlace compartible del formulario
4. Reemplaza el URL en `src/components/Contact.tsx`:

```typescript
window.open('https://forms.gle/TU_LINK_DE_GOOGLE_FORMS', '_blank');
```

## Despliegue en GitHub Pages

### Configuración Inicial

1. Crea un repositorio en GitHub
2. Habilita GitHub Pages en Settings > Pages
3. Selecciona "GitHub Actions" como fuente

### Despliegue Automático

El proyecto incluye GitHub Actions configurado. Cada push a `main` desplegará automáticamente:

```yaml
# .github/workflows/deploy.yml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]
```

### Despliegue Manual

```bash
# Compilar el proyecto
npm run build

# El contenido de la carpeta 'dist' está listo para desplegar
```

## Tecnologías Utilizadas

- **React 18** - Biblioteca de UI
- **TypeScript** - Tipado estático
- **Vite** - Build tool y dev server
- **Tailwind CSS** - Framework de estilos
- **Lucide React** - Iconos
- **React Router DOM** - Enrutamiento

## Optimizaciones Implementadas

### Performance

- Lazy loading de imágenes
- Componentes optimizados con React
- Build minificado y optimizado
- Tree shaking automático

### SEO

- Meta tags Open Graph
- Twitter Cards
- Sitemap automático
- URLs amigables

### Seguridad

- Rate limiting en acciones críticas
- Cookies con flags secure y SameSite
- Sanitización de inputs
- HTTPS obligatorio en producción

## Secciones del Sitio

### Servicios (Services.tsx)
1. **Mantención Industrial y Ensamble Mecánico** - Instalación, reparación y mantenimiento de equipos mecánicos en plantas industriales
2. **Mantención Eléctrica, Instrumentación y Control** - Sistemas eléctricos, instrumentación industrial y control automatizado
3. **Obras Civiles e Infraestructura** - Caminos, puentes, edificios y proyectos de construcción civil
4. **Diseño y Fabricación de Estructuras Metálicas** - Análisis estructural y manufactura de acero

### Valores Corporativos (Values.tsx)
- Seguridad y salud laboral
- Protección ambiental
- Calidad y excelencia
- Mejora continua
- Confianza y compromiso
- Integridad profesional

### Certificaciones (Certifications.tsx)
- ISO 45001 - Seguridad ocupacional
- ISO 9001 - Gestión de calidad
- ISO 14001 - Gestión ambiental

## Personalización

### Colores y Estilos

Los colores principales se pueden modificar en `tailwind.config.js`:

```javascript
theme: {
  extend: {
    colors: {
      primary: '#2563eb', // Azul principal
    }
  }
}
```

### Contenido

Edita los archivos en `src/components/` para modificar:
- Servicios ofrecidos (Services.tsx)
- Información de contacto y horarios (Contact.tsx)
- Valores corporativos (Values.tsx)
- Certificaciones (Certifications.tsx)
- Información de la empresa (About.tsx)
- Textos y descripciones globales

## Monitoreo y Analytics

### Logs del Sistema

Accede a los logs almacenados:

```javascript
// En la consola del navegador
import { logger } from './utils/logger';
console.table(logger.getLogs());
```

### Cookies y Cache

Inspecciona el estado actual:

```javascript
// Cookies
import { cookies } from './utils/cookies';
console.log(cookies.getAll());

// Cache
localStorage.getItem('cache_*');
```

## Soporte y Mantenimiento

### Actualizar Dependencias

```bash
npm update
npm audit fix
```

### Limpiar Cache

```bash
rm -rf node_modules
rm package-lock.json
npm install
```

## Licencia

© 2025 GYC Mantenciones. Todos los derechos reservados.

## Contacto

- **Email**: contacto@gycmantencion.cl
- **Teléfono**: +56 9 1234 5678
- **Ubicación**: Región del Bio Bío, Chile

---

Desarrollado con React, TypeScript y Tailwind CSS
