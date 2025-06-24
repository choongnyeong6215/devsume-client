import { BASE_URL, DEFAULT_TIMEOUT } from "@/constants/axios";
import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: BASE_URL,
  timeout: DEFAULT_TIMEOUT,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});
