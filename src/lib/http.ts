import axios from "axios";
import { auth } from "./auth";

export const http = axios.create({
  baseURL: import.meta.env.VITE_API_BASE,
});

http.interceptors.request.use((cfg) => {
  const t = auth.token();
  if (t) cfg.headers.Authorization = `Bearer ${t}`;
  return cfg;
});

http.interceptors.response.use(
  (res) => res,
  (err) => {
    if (err.response?.status === 401) {
      auth.logout();
    }
    return Promise.reject(err);
  }
);
