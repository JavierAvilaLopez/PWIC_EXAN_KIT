import React from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./pages/Home";
import FormFeed from "./pages/FormFeed.jsx";
import Feed from "./pages/Feed.jsx";

// Configuración de rutas principales para React Router.
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "contact",
        element: <FormFeed />,
      },
      {
        path: "products/:id",
        element: <Feed />,
      },
    ],
  },
]);

export default router;
