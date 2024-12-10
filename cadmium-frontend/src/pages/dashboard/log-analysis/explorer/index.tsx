import React from "react";
import NumericStats from "./components/numeric-stats";
import { LogChart } from "./components/chart";
import { Typography } from "@/components/ui/typography";
import { useParams } from "react-router-dom";
// import { LogTableEntry } from "@/types/type";
import { fetchLogTableData } from "@/services/fetch-log-table-data";
import { useQuery } from "@tanstack/react-query";
import LogTable from "./components/log-table";

// {
//     'Content-Type': 'application/json',
//         'CD-ID': '5c133a93-8dd4-4958-847a-ae81a5e11743',
//             'CD-Secret': '2fb5be09-8dba-481c-aaaf-5efad1d0a59c',
//                 'Application-ID': '673d6733caa30090be5b410d',
//}
const Explorer: React.FC = () => {
    const cd_id = localStorage.getItem("cd_id") ?? "";
    const cd_secret = localStorage.getItem("cd_secret") ?? "";;
    const { project_id } = useParams<{ project_id: string }>();
    const { isLoading, error, data: tableData } = useQuery({
        queryKey: ['log-table', cd_id, cd_secret, project_id],
        queryFn: () => fetchLogTableData(cd_id, cd_secret, project_id ?? ""),
        refetchOnWindowFocus: false
    })
    return (
        <div className="">
            <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
                <div className="grid auto-rows-min gap-4 grid-cols-1 md:grid-cols-3">
                    <div className="rounded-xl bg-card text-card-foreground col-span-1 md:col-span-1">
                        <NumericStats />
                    </div>
                    <div className="rounded-xl bg-card text-card-foreground col-span-1 md:col-span-2  border-none ring-0">
                        <LogChart />
                    </div>
                </div>
                <div className="flex-1 py-2 rounded-xl bg-card text-card-foreground" >
                    <Typography variant="xl" className=" px-2 py-2 ">Error logs</Typography>

                    <LogTable tableData={tableData ?? []} />
                    {
                        isLoading
                            ? <p>Loading...</p>
                            : error
                                ? <p>Error: {error.message}</p>
                                : null
                    }
                    {
                        tableData === null &&
                        <Typography variant="sm" className="text-muted-foreground px-2 py-8 text-center">No logs found.</Typography>
                    }
                    <div className="mt-4">
                        {/* <TablePagination /> */}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Explorer