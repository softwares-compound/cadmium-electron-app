import { create } from "zustand";

interface AuthState {
    isLoggedIn: boolean;
    setIsLoggedIn: (status: boolean) => void;
    organization: string;
    setOrganization: (org: string) => void;
}

export const useAuthStore = create<AuthState>((set) => ({
    isLoggedIn: false,
    setIsLoggedIn: (status) => set({ isLoggedIn: status }),
    organization: "",
    setOrganization: (org) => set({ organization: org }),
}));
