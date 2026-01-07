# Estructura del Proyecto

```
gyc-mantenciones/
│
├── .github/
│   └── workflows/
│       └── deploy.yml              # GitHub Actions para despliegue automático
│
├── public/
│   └── 404.html                    # Página de error para GitHub Pages
│
├── src/
│   ├── components/                 # Componentes de React
│   │   ├── Header.tsx             # Navegación principal con menú responsive
│   │   ├── Hero.tsx               # Sección hero con call-to-action
│   │   ├── Services.tsx           # Grid de servicios ofrecidos
│   │   ├── About.tsx              # Información sobre la empresa
│   │   ├── Contact.tsx            # Información de contacto y postulaciones
│   │   └── Footer.tsx             # Pie de página
│   │
│   ├── utils/                     # Utilidades y helpers
│   │   ├── logger.ts              # Sistema de logs con localStorage
│   │   ├── rateLimit.ts           # Rate limiting para acciones
│   │   ├── cache.ts               # Sistema de caché con localStorage
│   │   └── cookies.ts             # Manejo de cookies
│   │
│   ├── App.tsx                    # Componente principal de la aplicación
│   ├── main.tsx                   # Punto de entrada de React
│   ├── index.css                  # Estilos globales con Tailwind
│   └── vite-env.d.ts              # Tipos de Vite para TypeScript
│
├── .env.example                   # Ejemplo de variables de entorno
├── .gitignore                     # Archivos ignorados por Git
├── CONTRIBUTING.md                # Guía de contribución
├── LICENSE                        # Licencia MIT
├── README.md                      # Documentación principal
├── SETUP.md                       # Guía de configuración rápida
├── PROJECT_STRUCTURE.md           # Este archivo
│
├── eslint.config.js               # Configuración de ESLint
├── index.html                     # HTML principal
├── package.json                   # Dependencias y scripts
├── postcss.config.js              # Configuración de PostCSS
├── tailwind.config.js             # Configuración de Tailwind CSS
├── tsconfig.json                  # Configuración principal de TypeScript
├── tsconfig.app.json              # Configuración de TS para la app
├── tsconfig.node.json             # Configuración de TS para Node
└── vite.config.ts                 # Configuración de Vite
```

## Descripción de Archivos Clave

### Componentes (`src/components/`)

| Archivo | Descripción | Características |
|---------|-------------|-----------------|
| `Header.tsx` | Navegación principal | Menú responsive, scroll suave, logo |
| `Hero.tsx` | Sección hero | CTA, imágenes de Pexels, botones |
| `Services.tsx` | Servicios | Grid de 4 servicios con iconos |
| `About.tsx` | Sobre nosotros | Lista de beneficios, imagen |
| `Contact.tsx` | Contacto | Info contacto, Google Forms, horarios |
| `Footer.tsx` | Pie de página | Enlaces, información, copyright |

### Utilidades (`src/utils/`)

| Archivo | Descripción | Funciones Principales |
|---------|-------------|----------------------|
| `logger.ts` | Sistema de logs | `info()`, `warn()`, `error()`, `debug()`, `getLogs()`, `clearLogs()` |
| `rateLimit.ts` | Rate limiting | `check()`, `reset()`, `getRemainingRequests()`, `getResetTime()` |
| `cache.ts` | Caché localStorage | `set()`, `get()`, `delete()`, `clear()`, `has()` |
| `cookies.ts` | Manejo de cookies | `set()`, `get()`, `delete()`, `has()`, `getAll()` |

### Configuración

| Archivo | Propósito |
|---------|-----------|
| `vite.config.ts` | Configuración de Vite (build tool) |
| `tailwind.config.js` | Personalización de Tailwind CSS |
| `tsconfig.json` | Configuración de TypeScript |
| `eslint.config.js` | Reglas de linting |
| `postcss.config.js` | Procesamiento de CSS |

### Documentación

| Archivo | Contenido |
|---------|-----------|
| `README.md` | Documentación completa del proyecto |
| `SETUP.md` | Guía paso a paso de configuración |
| `CONTRIBUTING.md` | Guía para contribuidores |
| `PROJECT_STRUCTURE.md` | Este archivo - estructura del proyecto |
| `LICENSE` | Licencia MIT |

## Flujo de Datos

```
Usuario → Header (navegación)
       ↓
    Hero (landing)
       ↓
  Services (explorar)
       ↓
   About (conocer)
       ↓
  Contact (contactar/postular)
       ↓
    Footer
```

## Sistemas de Soporte

### 1. Logging
```
Acción del usuario → Logger → localStorage → Análisis
```

### 2. Rate Limiting
```
Acción → RateLimiter → Verificar límite → Permitir/Bloquear
```

### 3. Cache
```
Solicitud → Cache check → Hit: Retornar | Miss: Fetch + Store
```

### 4. Cookies
```
Visita → Cookie check → Primera vez: Set cookie | Retorno: Read cookie
```

## Archivos Generados (No en Git)

```
├── node_modules/          # Dependencias (ignorado)
├── dist/                  # Build de producción (ignorado, generado por CI)
├── .env                   # Variables de entorno (ignorado)
└── package-lock.json      # Lock de dependencias (ignorado)
```

## Scripts NPM

```bash
npm run dev        # Servidor de desarrollo
npm run build      # Compilar para producción
npm run preview    # Vista previa del build
npm run lint       # Ejecutar linter
npm run typecheck  # Verificar tipos TypeScript
```

## Tamaño del Bundle (Aproximado)

- CSS: ~13 KB (gzipped: ~3 KB)
- JavaScript: ~164 KB (gzipped: ~51 KB)
- HTML: <1 KB

Total: ~178 KB (gzipped: ~55 KB)

## Dependencias Principales

| Paquete | Versión | Propósito |
|---------|---------|-----------|
| react | ^18.3.1 | Framework UI |
| react-dom | ^18.3.1 | React DOM |
| lucide-react | ^0.344.0 | Iconos |
| tailwindcss | ^3.4.1 | Estilos |
| vite | ^5.4.2 | Build tool |
| typescript | ^5.5.3 | Tipado estático |

## Navegación del Código

### Para agregar un nuevo servicio:
1. Edita `src/components/Services.tsx`
2. Agrega un objeto al array `services`

### Para cambiar estilos:
1. Colores principales: `tailwind.config.js`
2. Estilos globales: `src/index.css`
3. Componente específico: Dentro de cada `.tsx`

### Para agregar una nueva sección:
1. Crea componente en `src/components/`
2. Importa en `src/App.tsx`
3. Agrega al return de `App()`
4. Actualiza navegación en `Header.tsx`

### Para modificar logs/cache/cookies:
1. Los sistemas están en `src/utils/`
2. Son singletons (una instancia)
3. Importa y usa donde necesites

---

Última actualización: 2025
