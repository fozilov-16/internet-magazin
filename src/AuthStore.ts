import { create } from "zustand";

export const useAuthStore = create((set) => ({
  token: localStorage.getItem("authToken"),
  isAuth: !!localStorage.getItem("authToken"),

  login: (token) => {
    localStorage.setItem("authToken", token);
    set({ token, isAuth: true });
  },
}));
