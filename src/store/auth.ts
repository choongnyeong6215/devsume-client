import { create } from "zustand";

interface AuthStoreState {
  oauthId: string;
  accessToken: string | null;
  setAccessToken: (token: string) => void;
  clearAccessToken: () => void;
}

export const useAuthStore = create<AuthStoreState>((set) => ({
  oauthId: "",
  accessToken: null,
  setAccessToken: (token) => set({ accessToken: token }),
  clearAccessToken: () => set({ accessToken: null }),
}));
