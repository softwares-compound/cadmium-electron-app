// stores/useSigninFormStore.ts
import { SigninFormState } from "@/types/type";
import { create } from "zustand";

export const useSigninFormStore = create<SigninFormState>((set) => ({
    clientId: "5c133a93-8dd4-4958-847a-ae81a5e11743",
    clientSecret: "2fb5be09-8dba-481c-aaaf-5efad1d0a59c",
    errors: { clientId: "", clientSecret: "" },
    loading: false,
    setClientId: (clientId) => set({ clientId }),
    setClientSecret: (clientSecret) => set({ clientSecret }),
    setErrors: (errors) => set({ errors }),
    setLoading: (loading) => set({ loading }),
}));
