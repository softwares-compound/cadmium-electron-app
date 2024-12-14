import { ProjectList, ProjectState } from "@/types/type";
import { create } from "zustand";



export const useProjectStore = create<ProjectState>((set) => ({
    loading: false,
    projects: [],
    setLoading: (loading: boolean) => set({ loading }),
    setProjects: (projects: ProjectList) => set({ projects }),
}));
