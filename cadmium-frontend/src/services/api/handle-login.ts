import { toast } from "@/hooks/use-toast";
import { LOCAL_AXIOS_INSTANCE } from "@/axios/axios";
import { useLoginStore } from "@/stores/useLoginStore";
import { validateLoginForm } from "../validation/login-form";
import { useAuthStore } from "@/stores/useAuthStore";
import { NavigateFunction } from "react-router-dom";

/**
 * Handles the login process by sending a POST request to the local server
 * and handles the response.
 *
 * @param navigate - The navigate function from react-router-dom.
 * @returns A promise that resolves when the login process is complete.
 */
export const handleLogin = async (navigate: NavigateFunction): Promise<void> => {
    const { setIsLoggedIn, setOrganization } = useAuthStore.getState(); // Zustand state for auth
    const { formData, setErrors, setLoading } = useLoginStore.getState();
    const validationErrors = validateLoginForm(formData);

    if (Object.keys(validationErrors).length > 0) {
        setErrors(validationErrors);
        return;
    }

    const { clientId, clientSecret } = formData;

    setLoading(true); // Start loading
    try {
        const resp = await LOCAL_AXIOS_INSTANCE.post("/login", { clientId, clientSecret });
        if (resp.status === 200) {
            // Store credentials
            localStorage.setItem("clientId", clientId);
            localStorage.setItem("clientSecret", clientSecret);
            setIsLoggedIn(true);
            setOrganization("Rosterly");
            navigate("/rosterly/projects", { replace: true }); // Use the passed navigate function
        }
    } catch (error: any) {
        console.error("[Error] ==>>", error);
        localStorage.clear();

        // Display appropriate error messages
        if (error.response?.status === 401) {
            toast({ title: "Unauthorized", description: "Invalid client ID or secret." });
        } else if (error.response?.status === 400) {
            toast({
                title: "Client error",
                description: "Credentials already exist. Select an organization from the list.",
            });
        } else {
            toast({ title: "Error", description: error.message || "Unknown error occurred." });
        }
    } finally {
        setLoading(false); // End loading
    }
};

