import { useAuthStore } from "@/store/auth";
import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  timeout: import.meta.env.VITE_DEFAULT_TIMEOUT,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

axiosInstance.interceptors.request.use((config) => {
  const accessToken = useAuthStore.getState().accessToken;

  if (accessToken) config.headers.Authorization = `Bearer ${accessToken}`;

  return config;
});

axiosInstance.interceptors.response.use(
  (response) => response,
  async (err) => {
    const originalRequest = err.config;

    if (err.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        const response = await axiosInstance.post("/users/refresh");
        const newAccessToken = response.data.accessToken;

        // 스토어 토큰 변경
        useAuthStore.getState().setAccessToken(newAccessToken);

        // 헤더 변경
        originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;

        // 재요청
        return axiosInstance(originalRequest);
      } catch (err) {
        useAuthStore.getState().clearAccessToken();

        return Promise.reject(err);
      }
    }
    return Promise.reject(err);
  }
);
