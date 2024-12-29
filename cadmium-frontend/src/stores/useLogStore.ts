import { LogStoreState, LogTableEntry } from "@/types/type";
import { create } from "zustand";

export const useLogStore = create<LogStoreState>((set) => ({
    // Loading state for fetch operations
    loading: false,
    setLoading: (loading: boolean) => set({ loading }),

    // Slide-over state
    openSlideOver: false,
    setOpenSlideOver: (openSlideOver: boolean) => set({ openSlideOver }),

    // Selected log for detailed view
    selectedLog: null,
    setSelectedLog: (selectedLog: LogTableEntry) => set({ selectedLog }),

    // Pagination state
    page: 1,
    setPage: (page: number) => set({ page }),
    incrementPage: () => set((state) => ({ page: state.page + 1 })),
    decrementPage: () => set((state) => ({ page: Math.max(state.page - 1, 1) })), // Prevent page < 1

    // Items per page
    limit: 15,
    setLimit: (limit: number) => set({ limit }),

    // Total logs (used to stop further fetches)
    totalLogs: null, // Nullable to check if total count is known
    setTotalLogs: (totalLogs: number) => set({ totalLogs }),

    // Table data
    tableData: [],
    setTableData: (tableData: LogTableEntry[]) => set({ tableData }),

    // Append new logs to the existing table data
    appendTableDataToBottom: (newData: LogTableEntry[]) =>
        set((state) => ({ tableData: [...state.tableData, ...newData] })),

    appendTableDataToTop: (newData: LogTableEntry[]) =>
        set((state) => ({ tableData: [...newData, ...state.tableData] })),

    // Reset table data and pagination
    resetTableData: () =>
        set({
            tableData: [],
            page: 1,
            totalLogs: null,
        }),

}));
