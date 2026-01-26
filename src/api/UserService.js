import axios from "axios";

// Servicio centralizado para consumir usuarios con fetch o Axios.
const API_URL = "https://jsonplaceholder.typicode.com/users";

export const getUsersWithFetch = async () => {
  const response = await fetch(API_URL);
  if (!response.ok) {
    throw new Error("Error al cargar usuarios con fetch");
  }
  return response.json();
};

export const getUsersWithAxios = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};
