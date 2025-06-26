import { axiosInstance } from "@/configs/axios";
import { UserInfo } from "@/features/auth/types/index.ts";
import { useAuthStore } from "@/store/auth";

export const login = async (
  credentials: UserInfo
): Promise<{ email: string; accessToken: string }> => {
  const response = await axiosInstance.post("/users/local/login", credentials);

  useAuthStore.getState().setAccessToken(response.data.accessToken);

  return response.data;
};
