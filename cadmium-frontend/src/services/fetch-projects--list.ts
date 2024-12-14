import { CLOUD_AXIOS_INSTANCE } from "@/axios/axios";
import { useProjectStore } from "@/stores/useProjectStore";
import { ProjectList } from "@/types/type";

export const fetchProjectList = async () => {
    const { setLoading, setProjects } = useProjectStore.getState();
    const cd_id = localStorage.getItem("cd_id") ?? "";
    const cd_secret = localStorage.getItem("cd_secret") ?? "";
    try {
        setLoading(true);
        const response = await CLOUD_AXIOS_INSTANCE.get(
            '/applications',
            {
                headers: {
                    "Content-Type": "application/json",
                    "CD-ID": cd_id,
                    "CD-Secret": cd_secret
                }
            }
        )
        const projects = response.data;
        const projectList: ProjectList = projects.map((project: any) => ({
            id: project._id.$oid,
            name: project.application_name,
            description: project.description ?? "AI-Powered Workforce & Financial Management for IT and Professional Firms",
            errorCount: project.error_count ?? 0,
            codeSuggestionCount: project.code_suggestion_count ?? 0,
            totalErrorResolved: project.total_error_resolved ?? 0,
        }))
        setProjects(projectList);
        return projectList
    } catch (error) {
        console.error('Error fetching projects:', error);
    } finally {
        setLoading(false);
    }
}