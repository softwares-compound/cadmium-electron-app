/**
 * @file create-project.ts
 * @description Contains the API call logic for creating a project.
 */

import { CLOUD_AXIOS_INSTANCE, LOCAL_AXIOS_INSTANCE } from "@/axios/axios";
import { useProjectCreateStore } from "@/stores/useProjectCreateStore";

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
    const cd_id = localStorage.getItem("cd_id") ?? "";
    const cd_secret = localStorage.getItem("cd_secret") ?? "";
    try {
        setLoading(true);
        const response = await CLOUD_AXIOS_INSTANCE.post("/applications", {
            body: JSON.stringify({ application_name: name, organization_id: cd_id, application_description: description }),
            headers: {
                "Content-Type": "application/json",
                "CD-ID": cd_id,
                "CD-Secret": cd_secret
            },
        });

        if (response.status != 200) {
            throw new Error("Failed to create project");
        }

        const application_id = response.data.application_id;
        const body = {
            project_id: application_id,
            organization_id: cd_id,
            application_name: name,
            application_description: description,
        };
        const localResp = await LOCAL_AXIOS_INSTANCE.post(`/project`, {
            body: JSON.stringify(body),
            headers: {
                "Content-Type": "application/json",
                "CD-ID": cd_id,
                "CD-Secret": cd_secret
            },
        })
        console.log("localResp -=-=-=-=-", localResp);
        setOpenModal(false);
        console.log("Project created successfully:", application_id);
        return response.data;
    } catch (error) {
        console.error("Error creating project:", error);
        throw error;
    } finally {
        setLoading(false);
    }
};
