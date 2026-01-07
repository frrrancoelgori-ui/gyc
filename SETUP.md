# Guía de Configuración Rápida

Esta guía te ayudará a configurar y desplegar tu sitio web de GYC Mantenciones en GitHub Pages.

## Paso 1: Configurar Google Forms

1. Ve a [Google Forms](https://forms.google.com)
2. Crea un nuevo formulario con los campos que necesites:
   - Nombre completo
   - Email
   - Teléfono
   - Cargo de interés
   - CV (archivo adjunto)
   - Experiencia laboral
   - etc.
3. Haz clic en "Enviar" y copia el enlace compartible
4. Crea un archivo `.env` en la raíz del proyecto:

```bash
cp .env.example .env
```

5. Edita `.env` y pega tu enlace de Google Forms:

```env
VITE_GOOGLE_FORMS_URL=https://forms.gle/TU_ENLACE_REAL_AQUI
```

## Paso 2: Personalizar Contenido

### Información de Contacto

Edita `src/components/Contact.tsx` y actualiza:
- Número de teléfono
- Email
- Dirección/ubicación

### Logo y Marca

Reemplaza el logo en:
- `src/components/Header.tsx` (línea 17-21)
- `src/components/Footer.tsx` (línea 7-11)

Con la URL de tu logo o guarda tu logo en `public/logo.png` y usa:
```tsx
<img src="/logo.png" alt="GYC Mantenciones" />
```

### Servicios

Edita `src/components/Services.tsx` para modificar los servicios que ofreces.

### Sobre Nosotros

Edita `src/components/About.tsx` para cambiar la descripción de la empresa.

## Paso 3: Configurar Repositorio GitHub

1. Crea un nuevo repositorio en GitHub (puede ser público o privado)

2. Inicializa git y haz tu primer commit:

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/tu-usuario/tu-repositorio.git
git push -u origin main
```

## Paso 4: Habilitar GitHub Pages

1. Ve a tu repositorio en GitHub
2. Click en **Settings** (Configuración)
3. En el menú lateral, click en **Pages**
4. En "Build and deployment":
   - Source: **GitHub Actions**
5. Guarda los cambios

## Paso 5: Desplegar

El despliegue es automático. Cada vez que hagas push a la rama `main`, GitHub Actions:
1. Instalará las dependencias
2. Compilará el proyecto
3. Desplegará a GitHub Pages

### Ver el Estado del Despliegue

1. Ve a la pestaña **Actions** en tu repositorio
2. Verás el workflow "Deploy to GitHub Pages"
3. Espera a que termine (toma ~2-3 minutos)
4. Tu sitio estará en: `https://tu-usuario.github.io/tu-repositorio/`

## Paso 6: Dominio Personalizado (Opcional)

Si tienes un dominio propio (ej: gycmantencion.cl):

1. Crea un archivo `public/CNAME` con tu dominio:

```bash
echo "gycmantencion.cl" > public/CNAME
```

2. En tu proveedor de DNS, configura estos registros:

```
Type    Name    Value
A       @       185.199.108.153
A       @       185.199.109.153
A       @       185.199.110.153
A       @       185.199.111.153
CNAME   www     tu-usuario.github.io
```

3. En GitHub Settings > Pages, ingresa tu dominio en "Custom domain"

4. Espera a que la verificación DNS complete (puede tomar hasta 24 horas)

## Verificación Local

Antes de desplegar, prueba localmente:

```bash
# Desarrollo
npm run dev

# Build de producción local
npm run build
npm run preview
```

## Solución de Problemas

### El sitio no carga

- Verifica que GitHub Actions haya completado exitosamente
- Revisa la pestaña Actions para ver errores
- Asegúrate de que GitHub Pages esté habilitado

### Los cambios no se reflejan

- Haz un hard refresh: `Ctrl + Shift + R` (Windows) o `Cmd + Shift + R` (Mac)
- GitHub Pages puede tomar 1-2 minutos en actualizar

### Error 404

- Asegúrate de que `base: '/'` esté en `vite.config.ts`
- Si usas un repositorio que no es tu página de usuario, cambia a `base: '/nombre-repo/'`

### El formulario de Google no abre

- Verifica que hayas configurado `VITE_GOOGLE_FORMS_URL` en `.env`
- Asegúrate de que el enlace de Google Forms sea público

## Actualizar el Sitio

Para hacer cambios:

```bash
# 1. Haz tus cambios en los archivos
# 2. Prueba localmente
npm run dev

# 3. Commit y push
git add .
git commit -m "Descripción de tus cambios"
git push
```

El sitio se actualizará automáticamente en 2-3 minutos.

## Recursos Adicionales

- [Documentación de GitHub Pages](https://docs.github.com/pages)
- [Documentación de Vite](https://vitejs.dev)
- [Documentación de React](https://react.dev)
- [Documentación de Tailwind CSS](https://tailwindcss.com)

## Soporte

Si tienes problemas, revisa:
1. README.md - Documentación completa
2. CONTRIBUTING.md - Guía de desarrollo
3. Issues en GitHub - Reportar problemas

---

¡Éxito con tu sitio web!
