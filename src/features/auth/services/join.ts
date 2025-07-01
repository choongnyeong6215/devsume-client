import { axiosInstance } from "@/configs/axios";
import { UserInfo } from "@/features/auth/types/index.ts";

interface JoinResponse {
  oauthId: string;
  email: string;
  provider: string;
}

export const join = async (credentials: UserInfo): Promise<JoinResponse> => {
  const response = await axiosInstance.post("/users/local/join", credentials);

  return response.data;
};
