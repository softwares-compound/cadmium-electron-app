import { LOCAL_AXIOS_INSTANCE } from '@/axios/axios';
import { Card, CardContent, CardDescription, CardHeader } from '@/components/ui/card'
import Loader from '@/components/ui/loader';
import { toast } from '@/hooks/use-toast';
import { useAuthStore } from '@/stores/useAuthStore';
import { Organization } from '@/types/type';
import { useQuery } from '@tanstack/react-query';
import React from 'react'

const ChooseOrg: React.FC = () => {
    const { setIsLoggedIn, setOrganization } = useAuthStore();
    const getOrgList = async () => {
        try {
            const { data } = await LOCAL_AXIOS_INSTANCE.get('/org-list');
            return data.clients as Organization[]
        } catch (error: Error | any) {
            console.log(error);
            toast({ title: "Server Error", description: "Could'nt fetch organization list." });
        }
    }

    const { isLoading, data } = useQuery({
        queryKey: ['org-list'],
        queryFn: () => getOrgList() as Promise<Organization[] | any>,
        refetchOnWindowFocus: false
    });

    const handleChooseOrg = (org: Organization) => {
        localStorage.setItem("cd_id", org.cd_id);
        localStorage.setItem("cd_secret", org.cd_secret);
        localStorage.setItem("organizationId", org.organization_id);
        localStorage.setItem("organizationName", org.organization_name);
        setIsLoggedIn(true);
        setOrganization(org.organization_name);
    }

    return (
        <Card className="mx-auto max-w-sm w-full">
            <CardHeader className="py-3">
                <CardDescription>
                    Choose saved organization.
                </CardDescription>
            </CardHeader>
            {
                isLoading
                    ?
                    <Loader size="6" color="accent" speed="slow" />
                    :
                    <CardContent className="">
                        {
                            data && data?.map((org: Organization) => (
                                <div className="mb-2" key={org.id}>
                                    <p className="text-xl inline no-underline hover:underline cursor-pointer" onClick={() => handleChooseOrg(org)}>{org.organization_name}</p>
                                </div>
                            ))
                        }
                    </CardContent>
            }
        </Card>
    )
}

export default ChooseOrg