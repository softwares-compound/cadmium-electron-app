import { LoginState } from "@/types/type";
import { create } from "zustand";

export const useLoginStore = create<LoginState>((set) => ({
    formData: {
        clientId: "5c133a93-8dd4-4958-847a-ae81a5e11743",
        clientSecret: "2fb5be09-8dba-481c-aaaf-5efad1d0a59c",
    },
    errors: {},
    loading: false,
    setFormData: (field, value) =>
        set((state) => ({
            formData: {
                ...state.formData,
                [field]: value,
            },
        })),
    setErrors: (errors) =>
        set(() => ({
            errors,
        })),
    setLoading: (loading) =>
        set(() => ({
            loading,
        })),
    clearErrors: (field) =>
        set((state) => ({
            errors: {
                ...state.errors,
                [field]: undefined,
            },
        })),
}));
