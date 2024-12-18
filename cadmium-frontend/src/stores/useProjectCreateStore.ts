import { CreateProjectState } from "@/types/type";
import { create } from "zustand";

export const useProjectCreateStore = create<CreateProjectState>((set) => ({
    name: "",
    setName: (name: string) => set({ name }),
    description: "",
    setDescription: (description: string) => set({ description }),
    loading: false,
    setLoading: (loading: boolean) => set({ loading }),
    openModal: false,
    setOpenModal: (openModal: boolean) => set({ openModal }),
    errors: { name: "", description: "" },
    setErrors: (errors) => set({ errors }),
}));

