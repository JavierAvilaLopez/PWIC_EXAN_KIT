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

### `axios/axiosClient.template.js`
Cliente base de Axios con interceptores y helpers.

Modifica únicamente:
- `AXIOS_CONFIG` (baseURL, headers, timeout)
- Los helpers `fetchResource`/`createResource` según tus endpoints

### `bootstrap/BootstrapCard.template.jsx`
Componente Bootstrap card reutilizable.

Modifica únicamente:
- `BOOTSTRAP_CARD_CONFIG` (título, subtítulo, texto, botón)
- Clases de Bootstrap si necesitas otra disposición

### `react/FunctionalComponent.template.jsx`
Componente funcional base con estado y acción.

Modifica únicamente:
- `COMPONENT_CONFIG` (títulos y valores iniciales)
- `handleAction` con la lógica real

## Recomendación de uso
1. Copia la plantilla a la carpeta donde la necesites.
2. Cambia los datos indicados arriba.
3. Importa el servicio/componente en tu vista.

## ¿Cómo usar archivos `.js` en componentes `.jsx`?
Los servicios en `.js` se importan igual que cualquier módulo desde tus componentes `.jsx`.
Ejemplo con Axios:

```jsx
import React, { useEffect, useState } from "react";
import { fetchResource } from "./axiosClient.template";

const UsersList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const loadUsers = async () => {
      const data = await fetchResource("/users");
      setUsers(data);
    };

    loadUsers();
  }, []);

  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
};

export default UsersList;
```

## Ejemplo rápido
```jsx
import ResourceCardsTemplate from "./ResourceCards.template";

const UsersPage = () => (
  <section className="container py-4">
    <ResourceCardsTemplate />
  </section>
);
```
