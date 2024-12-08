import { LOCAL_AXIOS_INSTANCE } from '@/axios/axios';
import { Card, CardContent, CardDescription, CardHeader } from '@/components/ui/card'
import CustomLink from '@/components/ui/link'
import Loader from '@/components/ui/loader';
import { toast } from '@/hooks/use-toast';
import { Organization } from '@/types/type';
import { useQuery } from '@tanstack/react-query';
import React from 'react'

const ChooseOrg: React.FC = () => {

    const getOrgList = async () => {
        try {
            const { data } = await LOCAL_AXIOS_INSTANCE.get('/org-list');
            return data.clients
        } catch (error: Error | any) {
            console.log(error);
            toast({ title: "Server Error", description: "Could'nt fetch organization list." });
        }
    }

    const { isLoading, isError, data } = useQuery({
        queryKey: ['org-list'],
        queryFn: () => getOrgList() as Promise<Organization[] | any>,
        refetchOnWindowFocus: false
    });
    console.log(isLoading, isError);
    console.log(data);

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
                            // eslint-disable-next-line @typescript-eslint/no-unused-vars
                            data && data?.map((_org: Organization) => (
                                <div className="mb-2">
                                    <CustomLink to={`/rosterly/projects`} className="text-xl no-underline hover:underline">Rosterly</CustomLink>
                                </div>
                            ))
                        }
                    </CardContent>
            }
        </Card>
    )
}

export default ChooseOrg