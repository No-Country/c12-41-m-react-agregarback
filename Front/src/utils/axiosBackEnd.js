import axios from "axios";

// Crear una instancia de Axios
export const backEnd = axios.create({
  baseURL: "https://nocountrybackend.onrender.com/api/v1/",
});

export const Authorization = () => {
  const token = sessionStorage.getItem("token");
  const headers = {
    authorization: `Bearer ${token}`,
  };
  return { headers }
};
