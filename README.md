# Web Personal - Portfolio en Astro

Portfolio personal bilingue (ES/EN) construido con Astro, Tailwind CSS y TypeScript.

Incluye:
- presentacion profesional
- experiencia laboral y educacion
- seccion de proyectos desde `astro:content`
- SEO tecnico (Open Graph, Twitter Cards, JSON-LD, sitemap, robots)

## Descripcion

Este proyecto es el sitio personal de Jonathan Guerra para mostrar perfil profesional, tecnologias y proyectos destacados.

El contenido esta organizado para facilitar mantenimiento y escalabilidad:
- rutas por idioma (`/` y `/en`)
- proyectos gestionados con Markdown (`src/content/projects`)
- componentes reutilizables (`src/components`)

## Instalacion

### Requisitos
- Node.js 20+
- npm 10+ (o pnpm si prefieres)

### Pasos
```bash
# 1) Clonar repositorio
git clone https://github.com/jhonabruzzi278/webpersonal.git

# 2) Entrar al proyecto
cd webpersonal

# 3) Instalar dependencias
npm install
```

## Uso

### Desarrollo local
```bash
npm run dev
```
Abre `http://localhost:4321`.

### Build de produccion
```bash
npm run build
```
Genera salida estatica en `dist/`.

### Preview local del build
```bash
npm run preview
```

### Verificacion de tipos y diagnosticos
```bash
npm run astro -- check
```

## Ejemplos

### Agregar un nuevo proyecto (ES)
1. Crea un archivo `.md` en `src/content/projects/`.
2. Usa este frontmatter:

```md
---
title: "Mi Proyecto"
link: "https://mi-proyecto.com"
github: "https://github.com/usuario/mi-proyecto"
image: "/projects/mi-proyecto.webp"
tags: ["ASTRO", "TAILWIND", "TYPESCRIPT"]
dateRange: "2026"
---
Descripcion breve del proyecto.
```

### Agregar version en ingles
Duplica el proyecto en `src/content/projects/en/` con el contenido traducido.

### Cambiar textos de interfaz
Edita `src/utils/i18n.ts` para actualizar traducciones ES/EN.

## Contribucion

Las contribuciones son bienvenidas.

1. Haz fork del repositorio.
2. Crea una rama: `git checkout -b feature/mi-mejora`.
3. Realiza cambios siguiendo el estilo del proyecto.
4. Ejecuta validaciones:
   - `npm run astro -- check`
   - `npm run build`
5. Haz commit y abre un Pull Request con descripcion clara del cambio.

## Licencia

Actualmente este repositorio no incluye un archivo `LICENSE`.

Si quieres permitir uso y distribucion formal del codigo, agrega una licencia OSS (por ejemplo MIT) en un archivo `LICENSE` en la raiz del proyecto.
