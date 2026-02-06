import axios from "axios";

/**
 * Plantilla de servicio API.
 *
 * Objetivo:
 * - Centralizar la configuración del endpoint.
 * - Ofrecer funciones reutilizables con Fetch y Axios.
 *
 * Cómo usar:
 * 1) Ajusta API_CONFIG (baseUrl, resource, headers).
 * 2) Importa las funciones y pásales `query` o `payload` según corresponda.
 */
const API_CONFIG = {
  baseUrl: "https://jsonplaceholder.typicode.com",
  resource: "/users",
  headers: {
    "Content-Type": "application/json",
  },
};

/**
 * Construye la URL final con query params opcionales.
 */
const buildUrl = ({ baseUrl, resource }, query = {}) => {
  const url = new URL(`${baseUrl}${resource}`);
  Object.entries(query).forEach(([key, value]) => {
    if (value !== undefined && value !== null) {
      url.searchParams.append(key, value);
    }
  });
  return url.toString();
};

/**
 * Obtiene recursos con Fetch.
 */
export const getResourceWithFetch = async (query) => {
  const response = await fetch(buildUrl(API_CONFIG, query), {
    headers: API_CONFIG.headers,
  });

  if (!response.ok) {
    throw new Error("Error al cargar datos con fetch");
  }

  return response.json();
};

/**
 * Obtiene recursos con Axios.
 */
export const getResourceWithAxios = async (query) => {
  const response = await axios.get(buildUrl(API_CONFIG, query), {
    headers: API_CONFIG.headers,
  });
  return response.data;
};

/**
 * Crea un recurso con Fetch.
 */
export const createResourceWithFetch = async (payload) => {
  const response = await fetch(buildUrl(API_CONFIG), {
    method: "POST",
    headers: API_CONFIG.headers,
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    throw new Error("Error al crear datos con fetch");
  }

  return response.json();
};

/**
 * Crea un recurso con Axios.
 */
export const createResourceWithAxios = async (payload) => {
  const response = await axios.post(buildUrl(API_CONFIG), payload, {
    headers: API_CONFIG.headers,
  });
  return response.data;
};
