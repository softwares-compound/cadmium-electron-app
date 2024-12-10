import { useAuthStore } from "@/stores/useAuthStore";
import { NavigateFunction } from "react-router-dom";

/**
 * Logs the user out of the application by clearing the local storage
 * and setting the authentication state to false. Then redirects
 * the user to the login page.
 *
 * @param navigate - The navigate function from react-router-dom.
 */
export const handleLogout = (navigate: NavigateFunction) => {
    const { setIsLoggedIn, setOrganization } = useAuthStore.getState(); // Zustand state for auth

    // Clear the local storage
    localStorage.clear();

    // Set the authentication state to false
    setIsLoggedIn(false);

    // Set the organization to an empty string
    setOrganization("");

    // Redirect the user to the login page
    navigate("/login", { replace: true });
}
