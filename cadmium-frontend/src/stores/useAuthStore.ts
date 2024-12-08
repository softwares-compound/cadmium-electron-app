import { create } from "zustand";

interface AuthState {
    isLoggedIn: boolean;
    setIsLoggedIn: (status: boolean) => void;

}

export const useAuthStore = create<AuthState>((set) => ({
    isLoggedIn: false,
    setIsLoggedIn: (status) => set({ isLoggedIn: status }),
}));
