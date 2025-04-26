// src/services/api.ts

import axios from 'axios';

// Base API instance
const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL, // Loaded from .env
  headers: {
    'Content-Type': 'application/json',
  },
});

// Example: export simple GET, POST methods
export const getRequest = (url: string) => api.get(url);
export const postRequest = (url: string, data: unknown) => api.post(url, data);
export const putRequest = (url: string, data: unknown) => api.put(url, data);
export const deleteRequest = (url: string) => api.delete(url);

export default api;
