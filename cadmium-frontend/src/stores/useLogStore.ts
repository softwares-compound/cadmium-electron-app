import { LogStoreState, LogTableEntry } from "@/types/type";
import { create } from "zustand";


export const useLogStore = create<LogStoreState>((set) => ({
    loading: false,
    setLoading: (loading: boolean) => set({ loading }),
    openSlideOver: false,
    setOpenSlideOver: (openSlideOver: boolean) => set({ openSlideOver }),
    selectedLog: null,
    setSelectedLog: (selectedLog: LogTableEntry) => set({ selectedLog }),
    page: 1,
    setPage: (page: number) => set({ page }),
    limit: 10,
    setLimit: (limit: number) => set({ limit }),
    tableData: [],
    setTableData: (tableData: LogTableEntry[]) => set({ tableData }),
}));
