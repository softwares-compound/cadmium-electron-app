import { LOCAL_AXIOS_INSTANCE } from '@/axios/axios';
import { useAuthStore } from '@/stores/useAuthStore';
import React, { ReactNode, useEffect } from 'react';
import { useLocation, Navigate } from 'react-router-dom';

type Props = {
    children: ReactNode;
};

/**
 * PublicRouteProtector is a React functional component that serves as a route
 * guard for public routes. It checks whether a user is authenticated based on
 * tokens stored in local storage and redirects authenticated users to a
 * specified projects page. If the user is not authenticated, it renders the
 * child components, which could be login-related components.
 *
 * The component uses Zustand to manage authentication state and performs
 * validation requests using Axios. If the user's tokens are valid, it updates
 * the authentication state; otherwise, it clears the stored tokens.
 *
 * Props:
 * - children: ReactNode - The child components to render if the user is not
 *   authenticated.
 *
 * Returns:
 * - A loading indicator if validation is in progress.
 * - A redirection to the projects page if the user is authenticated.
 * - The child components if the user is not authenticated.
 */
const PublicRouteProtector: React.FC<Props> = ({ children }) => {
    const { isLoggedIn, setIsLoggedIn } = useAuthStore(); // Zustand state for auth
    const [loading, setLoading] = React.useState(false);
    const location = useLocation();
    const validate = async (cd_id: string, cd_secret: string) => {
        try {
            setLoading(true);
            const res = await LOCAL_AXIOS_INSTANCE.post("/validation", { cd_id, cd_secret })
            if (res.data.isValid) {
                setIsLoggedIn(true);
            }
        } catch (error: Error | any) {
            localStorage.removeItem("cd_id");
            localStorage.removeItem("cd_secret");
            setIsLoggedIn(false);
            console.log(error);
        } finally {
            setLoading(false);
        }
    }
    useEffect(() => {
        if (!isLoggedIn) {
            const cd_id = localStorage.getItem("cd_id");
            const cd_secret = localStorage.getItem("cd_secret");
            if (cd_id && cd_secret) {
                void validate(cd_id, cd_secret)
            }
        }
    }, [isLoggedIn, setIsLoggedIn]);

    // If the user is logged in, redirect to the /${org_name}/projects page
    if (isLoggedIn) {
        return <Navigate to="/rosterly/projects" state={{ from: location }} replace />;
    }

    if (loading) {
        return <div className=""><p className="text-center">Loading...</p></div>;
    }
    // Otherwise, render the children (e.g., LoginPage)
    return children;
};

export default PublicRouteProtector;
