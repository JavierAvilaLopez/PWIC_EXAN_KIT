# Plantillas rápidas

Estas plantillas están separadas del resto del código para que puedas copiar y ajustar datos cuando necesites consumir APIs.

## Plantillas incluidas

### `api/apiService.template.js`
Servicio base para Fetch/Axios con configuración centralizada.

Modifica únicamente:
- `baseUrl` y `resource`
- `headers` si tu API lo requiere
- Los textos de error si quieres personalizarlos

### `api/ResourceCards.template.jsx`
Componente de tarjetas para mostrar datos remotos.

Modifica únicamente:
- `CARD_CONFIG` (título, máximo de ítems, mensaje vacío)
- Los campos dentro del render (`item.name`, `item.email`, etc.)

## Recomendación de uso
1. Copia la plantilla a la carpeta donde la necesites.
2. Cambia los datos indicados arriba.
3. Importa el servicio/componente en tu vista.

## Ejemplo rápido
```jsx
import ResourceCardsTemplate from "./ResourceCards.template";

const UsersPage = () => (
  <section className="container py-4">
    <ResourceCardsTemplate />
  </section>
);
```
