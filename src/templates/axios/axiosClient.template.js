import axios from "axios";

/**
 * Plantilla de cliente Axios.
 *
 * Cómo usar:
 * 1) Ajusta AXIOS_CONFIG (baseURL, timeout, headers).
 * 2) Usa `apiClient` directamente o crea helpers reutilizables.
 */
const AXIOS_CONFIG = {
  baseURL: "https://jsonplaceholder.typicode.com",
  timeout: 8000,
  headers: {
    "Content-Type": "application/json",
  },
};

const apiClient = axios.create(AXIOS_CONFIG);

apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    const message =
      error?.response?.data?.message ?? "Error al comunicar con la API.";
    return Promise.reject(new Error(message));
  }
);

export const fetchResource = async (resource, params = {}) => {
  const response = await apiClient.get(resource, { params });
  return response.data;
};

export const createResource = async (resource, payload) => {
  const response = await apiClient.post(resource, payload);
  return response.data;
};

export default apiClient;
