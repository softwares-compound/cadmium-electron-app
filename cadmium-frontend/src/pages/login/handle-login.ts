import { toast } from "@/hooks/use-toast";
import { LOCAL_AXIOS_INSTANCE } from "@/axios/axios";
import { useLoginStore } from "@/stores/useLoginStore";
import { validateForm } from "./validate-form";

/**
 * Handles the login process by validating the form data, making an API request, 
 * and managing the application state during the login flow.
 *
 * This function performs the following steps:
 * 1. Validates the form data using `validateForm` to ensure required fields are provided.
 * 2. Updates the error state if validation fails.
 * 3. Initiates an API request to the `/api/signin` endpoint with the provided client ID and client secret.
 * 4. On a successful response:
 *    - Stores the client ID and client secret in `localStorage` for persistent authentication.
 *    - Redirects the user to the "/rosterly/projects" route (or another route as needed).
 * 5. Handles various error scenarios:
 *    - 401: Displays an "Unauthorized" toast message for invalid credentials.
 *    - 400: Displays a "Client error" toast for existing credentials with additional guidance.
 *    - Other errors: Displays a generic error message with the received error details.
 * 6. Manages the loading state throughout the process to provide feedback in the UI.
 *
 * @async
 * @function handleLogin
 * @returns {Promise<void>} Resolves when the login process is complete.
 * @throws {Error} Logs the error to the console and displays an appropriate toast message.
 */


export const handleLogin = async (): Promise<void> => {
    const { formData, setErrors, setLoading } = useLoginStore.getState();
    const validationErrors = validateForm(formData);

    if (Object.keys(validationErrors).length > 0) {
        setErrors(validationErrors);
        return;
    }

    const { clientId, clientSecret } = formData;

    setLoading(true); // Start loading
    try {
        const resp = await LOCAL_AXIOS_INSTANCE.post("/api/signin", { clientId, clientSecret });
        if (resp.status === 200) {
            // Store credentials
            localStorage.setItem("clientId", clientId);
            localStorage.setItem("clientSecret", clientSecret);

            // Redirect or perform other actions
            // router.push("/rosterly/projects"); // Uncomment if using routing
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

