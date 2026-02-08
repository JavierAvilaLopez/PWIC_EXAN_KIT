import axios from "axios";

const API_URL = "https://jsonplaceholder.typicode.com/posts";

export const getUsersWithFetch = async () => {
  const response = await fetch(API_URL);
  if (!response.ok) {
    throw new Error("Error al cargar usuarios con fetch");
  }
  return response.json();
};

export const getPostsWithAxios = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};
