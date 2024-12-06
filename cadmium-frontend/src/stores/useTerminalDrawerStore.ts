import { TerminalDrawerStoreState } from "@/types/type";
import { create } from "zustand";

export const useTerminalDrawerStore = create<TerminalDrawerStoreState>((set) => ({
    loading: false,
    setLoading: (loading: boolean) => set({ loading }),
    openDrawer: false,
    setOpenDrawer: (openDrawer: boolean) => set({ openDrawer }),
}));

