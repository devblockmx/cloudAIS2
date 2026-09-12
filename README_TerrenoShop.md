# Terreno — Landing page de e-commerce

Landing page de e-commerce (solo frontend, sin backend ni base de datos) construida con **React 18 + Vite**. Incluye: navbar, hero, colecciones, productos destacados, proceso de envío y newsletter — todo en componentes React con datos de ejemplo en `src/data/products.js`.

## Requisitos

- Node.js 18 o superior (recomendado 20+)
- npm (viene incluido con Node.js)

Verifica tu versión con:

```bash
node -v
npm -v
```

## Cómo ejecutarlo en tu máquina

1. Descomprime el proyecto y entra a la carpeta:

   ```bash
   cd terreno-shop
   ```

2. Instala las dependencias:

   ```bash
   npm install
   ```

3. Levanta el servidor de desarrollo:

   ```bash
   npm run dev
   ```

4. Abre el navegador en la URL que muestra la terminal (por defecto `http://localhost:5173`). El servidor se abre automáticamente.

## Otros comandos

- `npm run build` — genera la versión de producción en la carpeta `dist/`.
- `npm run preview` — sirve localmente el build de producción para probarlo antes de desplegar.

## Estructura del proyecto

```
terreno-shop/
├── index.html
├── package.json
├── vite.config.js
├── src/
│   ├── main.jsx
│   ├── App.jsx
│   ├── index.css
│   ├── data/
│   │   └── products.js
│   └── components/
│       ├── Navbar.jsx
│       ├── Hero.jsx
│       ├── Collections.jsx
│       ├── Bestsellers.jsx
│       ├── HowItWorks.jsx
│       ├── Newsletter.jsx
│       └── Footer.jsx
```

## Notas

- Es solo frontend: el botón "Añadir al carrito" y el formulario de newsletter no llaman a ningún backend; son puntos donde puedes conectar tu propia API más adelante.
- Los productos son datos de ejemplo en `src/data/products.js` — reemplázalos por los tuyos.
- Las imágenes de producto son ilustraciones SVG generadas en CSS/SVG para que el proyecto funcione sin depender de archivos externos; puedes sustituirlas por fotos reales dentro de `src/components/Bestsellers.jsx`.
