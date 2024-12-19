import { LOCAL_AXIOS_INSTANCE } from '@/axios/axios';
import { useAuthStore } from '@/stores/useAuthStore';
import React, { ReactNode, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

type Props = {
    children: ReactNode;
};

/**
 * PrivateRouteProtector is a React functional component that serves as a route
 * guard for protected routes. It checks whether a user is authenticated based on
 * tokens stored in local storage and redirects unauthenticated users to a
 * specified login page. If the user is authenticated, it renders the child
 * components, which could be pages or components.
 *
 * The component uses Zustand to manage authentication state and performs
 * validation requests using Axios. If the user's tokens are valid, it updates
 * the authentication state; otherwise, it clears the stored tokens and
 * redirects the user to the login page.
 *
 * Props:
 * - children: ReactNode - The child components to render if the user is
 *   authenticated.
 *
 * Returns:
 * - A loading indicator if validation is in progress.
 * - A redirection to the login page if the user is unauthenticated.
 * - The child components if the user is authenticated.
 */
const PrivateRouteProtector: React.FC<Props> = ({ children }) => {
    const { setIsLoggedIn, setOrganization } = useAuthStore(); // Zustand state for auth
    const [loading, setLoading] = React.useState(false);
    const location = useLocation();
    const navigate = useNavigate();
    const validate = async (cd_id: string, cd_secret: string) => {
        try {
            setLoading(true);
            const res = await LOCAL_AXIOS_INSTANCE.post("/validation", { cd_id, cd_secret })
            if (res.data.isValid) {
                setIsLoggedIn(true);
                setOrganization("Rosterly")
            }
        } catch (error: Error | any) {
            localStorage.clear();
            setIsLoggedIn(false);
            setOrganization("");
            navigate("/login", { state: { from: location }, replace: true });
            setIsLoggedIn(false);
            console.log(error);
        } finally {
            setLoading(false);
        }
    }
    useEffect(() => {
        const cd_id = localStorage.getItem("cd_id");
        const cd_secret = localStorage.getItem("cd_secret");
        if (cd_id && cd_secret) {
            void validate(cd_id, cd_secret)
        } else {
            navigate("/login", { state: { from: location }, replace: true });
            localStorage.clear();
        }
    }, []);

    // useEffect(() => {
    //     const cd_id = localStorage.getItem("cd_id");
    //     const cd_secret = localStorage.getItem("cd_secret");
    //     if (cd_id && cd_secret) {
    //         const resp = CLOUD_AXIOS_INSTANCE.delete("/applications/6763d6ace935a4127b381eb3", {
    //             headers: {
    //                 "Content-Type": "application/json",
    //                 "CD-ID": cd_id,
    //                 "CD-Secret": cd_secret
    //             }
    //         })
    //     } else {
    //         navigate("/login", { state: { from: location }, replace: true });
    //         localStorage.clear();
    //     }
    // }, []);

    if (loading) {
        return <div className=""><p className="text-center">Loading...</p></div>;
    }
    // Otherwise, render the children (e.g., LoginPage)
    return children;
};

export default PrivateRouteProtector;
