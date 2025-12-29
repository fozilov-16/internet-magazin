import { create } from "zustand";

type AuthStore = {
  token: string | null;
  isAuth: boolean;
  login: (token: string) => void;
};

export const useAuthStore = create<AuthStore>((set) => ({
  token: localStorage.getItem("authToken"),
  isAuth: !!localStorage.getItem("authToken"),

  login: (token: string) => {
    localStorage.setItem("authToken", token);
    set({ token, isAuth: true });
  },
}));
