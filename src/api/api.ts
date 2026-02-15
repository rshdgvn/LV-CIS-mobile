import axios from "axios";
import * as SecureStore from "expo-secure-store";
import { API_URL } from "../utils/constant";

export const api = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

api.interceptors.request.use(async (config) => {
  const token = await SecureStore.getItemAsync("sanctum_token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});
