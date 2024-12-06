// import { AXIOS_INSTANCE } from '@/axios/axios';
import React, { ReactNode } from 'react'
// import { useNavigate } from 'react-router-dom';


type Props = {
    children: ReactNode
}


const ProtectedRoute: React.FC<Props> = ({ children }) => {
    // const auth = useAuth()
    // const navigate = useNavigate()
    // const { tenant } = useParams<{ tenant: string }>();
    // const [isLoading, setIsLoading] = useState(true);
    // useEffect(() => {
    //     // fetch if the user's cookies are valid then skip signin
    //     async function checkStatus() {
    //         try {
    //             setIsLoading(true);
    //             const accessToken = Cookies.get('accessToken');
    //             const res = await AXIOS_INSTANCE.get("auth/v1/validation", {
    //                 headers: {
    //                     "Authorization": `Bearer ${accessToken}`,
    //                 },
    //             });
    //             const data = await res.data.data;
    //             auth?.setIsAuthenticated(true);
    //             auth?.setUserData({ ...data });
    //             // const newPath = location.pathname.replace(`/${tenant}`, `/${localStorage.getItem("X-Request-ID")}`);
    //             // navigate(AUTH_ROUTES.SIGNIN, { replace: true });
    //         } catch (error: Error | any) {
    //             toast.error(error.response.data.message);
    //             auth?.setIsAuthenticated(false);
    //             auth?.setUserData(null);
    //             navigate("/login", { replace: true });
    //             Cookies.remove('accessToken');
    //             Cookies.remove('refreshToken');
    //         } finally {
    //             setIsLoading(false);
    //         }
    //     }
    //     checkStatus();
    // }, []);

    // if (isLoading) {
    //     return <h1>Loading</h1>;
    // }
    return (
        <>
            {/* {auth?.isAuthenticated === true ? (
                children
            ) : null} */}
            {children}
        </>
    );
}

export default ProtectedRoute