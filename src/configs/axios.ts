import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: import.meta.env.BASE_URL,
  timeout: import.meta.env.DEFAULT_TIMEOUT,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});
