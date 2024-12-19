/**
 * @file create-project.ts
 * @description Contains the API call logic for creating a project.
 */

import { CLOUD_AXIOS_INSTANCE, LOCAL_AXIOS_INSTANCE } from "@/axios/axios";
import { toast } from "@/hooks/use-toast";
import { useProjectCreateStore } from "@/stores/useProjectCreateStore";
import { useProjectListStore } from "@/stores/useProjectListStore";

/**
 * Sends a request to create a new project.
 * @returns {Promise<Object>} A promise that resolves with the API response.
 * @throws {Error} Throws an error if the API call fails.
 * @example
 * const response = await createProject();
 * console.log(response);
 */
export const createProject = async (): Promise<object> => {
    const { name, description, setOpenModal, setLoading } = useProjectCreateStore.getState();
    const { projectList, setProjectList } = useProjectListStore.getState();
    const cd_id = localStorage.getItem("cd_id") ?? "";
    const cd_secret = localStorage.getItem("cd_secret") ?? "";
    const organization_id = localStorage.getItem("organization_id") ?? "";
    try {
        setLoading(true);
        const response = await CLOUD_AXIOS_INSTANCE.post("/applications", {
            application_name: name,
            description: description,
        }, {
            headers: {
                "Content-Type": "application/json",
                "CD-ID": cd_id,
                "CD-Secret": cd_secret
            }
        });

        if (response.status != 200) {
            throw new Error("Failed to create project");
        }

        const project_id = response.data.application_id;
        const body = {
            project_id: project_id,
            organization_id: organization_id,
            project_name: name,
            project_description: description,
        };
        const localResp = await LOCAL_AXIOS_INSTANCE.post(`/project`, {
            ...body,
        }, {
            headers: {
                "Content-Type": "application/json",
                "CD-ID": cd_id,
                "CD-Secret": cd_secret
            }
        })
        setProjectList([...projectList, localResp.data]);
        setOpenModal(false);
        toast({
            title: "Success",
            description: "Project created successfully. You can now connect your project to your remote repository.",
        })
        return response.data;
    } catch (error) {
        console.error("Error creating project:", error);
        throw error;
    } finally {
        setLoading(false);
    }
};
