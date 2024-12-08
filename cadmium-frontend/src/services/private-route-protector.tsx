import { LOCAL_AXIOS_INSTANCE } from '@/axios/axios';
import { useAuthStore } from '@/stores/useAuthStore';
import React, { ReactNode, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

type Props = {
    children: ReactNode;
};

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


    if (loading) {
        return <div className=""><p className="text-center">Loading...</p></div>;
    }
    // Otherwise, render the children (e.g., LoginPage)
    return children;
};

export default PrivateRouteProtector;