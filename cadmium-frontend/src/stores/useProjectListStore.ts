import { ProjectList, ProjectState } from "@/types/type";
import { create } from "zustand";

export const useProjectListStore = create<ProjectState>((set) => ({
    loading: false,
    setLoading: (loading: boolean) => set({ loading }),
    projectList: [],
    setProjectList: (projectList: ProjectList) => set({ projectList }),
}));

