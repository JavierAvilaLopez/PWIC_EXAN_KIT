# react-exam-kit

> Base de estudio práctica para el examen de React, Bootstrap y peticiones AJAX/Fetch/Axios.

## Requisitos
- Node.js 18+
- npm o pnpm

## Instalación desde cero
1. Clona el repositorio:
```bash
git clone <URL_DEL_REPOSITORIO>
cd react-exam-kit
```

2. Instala dependencias:
```bash
npm install
```

3. (Opcional) Si quieres recrear el proyecto desde cero, instala las dependencias base:
```bash
npm install react react-dom
npm install bootstrap react-bootstrap
npm install axios
```

## Modo desarrollo
```bash
npm run dev
```

## Otros scripts útiles
```bash
npm run build
npm run preview
```

## Estructura del proyecto
La carpeta `src/` está organizada por unidades clave del examen:

- `basics/`: props, listas y estado.
- `effects/`: `useEffect` y peticiones fetch.
- `forms/`: formularios con validación.
- `conditionals/`: renderizado condicional y temas.
- `api/`: servicios con Fetch/Axios.
- `bootstrap/`: componentes con Bootstrap.
- `pages/`: rutas con React Router.
- `templates/`: plantillas copiables para APIs y componentes.

## Notas clave
- Todas las peticiones apuntan a `https://jsonplaceholder.typicode.com`.
- Se usa React 18 con Vite.
- Bootstrap y Axios están incluidos como dependencias.

¡Éxito en el examen!
