# Resius Abogados

Sitio estático de una sola página para el despacho "Resius Abogados" ubicado en Chilpancingo, Guerrero. Construido con Vite + React + Tailwind CSS con diseño sobrio y listo para publicarse en GitHub Pages.

## Requisitos
- Node.js 18 o superior
- npm (incluido con Node)

## Instalación
1. Instala dependencias:
   ```bash
   npm install
   ```
2. Crea el entorno de estilos de Tailwind (ya configurado en este repositorio con `tailwind.config.js`).

## Desarrollo
Ejecuta el entorno de desarrollo con recarga en caliente:
```bash
npm run dev
```

## Build de producción
Genera la versión optimizada en `dist/`:
```bash
npm run build
```

Previsualiza el build generado:
```bash
npm run preview
```

## Despliegue en GitHub Pages
El proyecto está configurado con `base: '/resiusabogados/'` en `vite.config.js` para GitHub Pages. Para publicar:
1. Asegúrate de que la rama principal esté actualizada y con el build generado:
   ```bash
   npm run build
   ```
2. Sube la carpeta `dist/` a la rama `gh-pages` (puedes usar `git subtree`):
   ```bash
   git add dist && git commit -m "deploy"
   git subtree push --prefix dist origin gh-pages
   ```

También puedes configurar una GitHub Action que construya y despliegue a `gh-pages` utilizando la carpeta `dist/`.

## Estructura
- `src/` contiene los componentes React y estilos base.
- `public/` incluye el favicon.
- `vite.config.js` define la base para GitHub Pages.

## Licencia
Uso interno del despacho.
