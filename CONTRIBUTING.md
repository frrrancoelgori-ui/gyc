# Guía de Contribución

Gracias por tu interés en contribuir al proyecto GYC Mantenciones.

## Proceso de Desarrollo

### 1. Fork y Clone

```bash
# Fork el repositorio en GitHub
# Luego clona tu fork
git clone https://github.com/tu-usuario/gyc-mantenciones.git
cd gyc-mantenciones
```

### 2. Instalar Dependencias

```bash
npm install
```

### 3. Crear una Rama

```bash
git checkout -b feature/nueva-funcionalidad
# o
git checkout -b fix/correccion-bug
```

### 4. Desarrollo

```bash
# Ejecuta el servidor de desarrollo
npm run dev

# En otra terminal, ejecuta el type checker
npm run typecheck

# Verifica el linter
npm run lint
```

### 5. Commits

Usa mensajes de commit descriptivos:

```bash
git commit -m "feat: agregar nueva sección de testimonios"
git commit -m "fix: corregir responsive en header"
git commit -m "docs: actualizar README con nuevas instrucciones"
```

Prefijos recomendados:
- `feat:` - Nueva funcionalidad
- `fix:` - Corrección de bug
- `docs:` - Cambios en documentación
- `style:` - Cambios de formato/estilo
- `refactor:` - Refactorización de código
- `test:` - Agregar o modificar tests
- `chore:` - Mantenimiento general

### 6. Testing

Antes de hacer push, verifica que:

```bash
# El proyecto compila sin errores
npm run build

# No hay errores de TypeScript
npm run typecheck

# El linter pasa sin errores
npm run lint
```

### 7. Push y Pull Request

```bash
git push origin feature/nueva-funcionalidad
```

Luego crea un Pull Request en GitHub con:
- Descripción clara de los cambios
- Screenshots si hay cambios visuales
- Referencias a issues relacionados

## Estándares de Código

### TypeScript

- Usa tipos explícitos cuando sea necesario
- Evita `any`, usa `unknown` si es necesario
- Documenta funciones complejas con JSDoc

### React

- Usa componentes funcionales con hooks
- Mantén componentes pequeños y reutilizables
- Usa nombres descriptivos para componentes y props

### CSS/Tailwind

- Usa clases de Tailwind primero
- Solo agrega CSS custom cuando sea necesario
- Mantén la consistencia con el diseño existente

### Estructura de Archivos

```
src/
├── components/       # Componentes de React
├── utils/           # Utilidades y helpers
├── types/           # Definiciones de tipos TypeScript
└── assets/          # Imágenes, fuentes, etc.
```

## Reportar Bugs

Usa el sistema de Issues de GitHub e incluye:

1. Descripción clara del problema
2. Pasos para reproducir
3. Comportamiento esperado vs actual
4. Screenshots si aplica
5. Información del navegador/SO

## Solicitar Funcionalidades

Para solicitar nuevas funcionalidades:

1. Verifica que no exista un issue similar
2. Describe claramente la funcionalidad
3. Explica el caso de uso
4. Incluye mockups o ejemplos si es posible

## Código de Conducta

- Sé respetuoso con otros contribuidores
- Acepta críticas constructivas
- Enfócate en el código, no en las personas
- Mantén discusiones profesionales y productivas

## Despliegue

El despliegue es automático:
- Pushes a `main` despliegan automáticamente a GitHub Pages
- Revisa los Actions en GitHub para ver el estado

## Preguntas

Si tienes preguntas, puedes:
- Abrir un issue con la etiqueta "question"
- Contactar al equipo en contacto@gycmantencion.cl

---

¡Gracias por contribuir!
