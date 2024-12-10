import { Table } from '@/components/ui/table';
import React from 'react'
import THead from './t-head';
import { LogTableEntry } from '@/types/type';
import { useLogStore } from '@/stores/useLogStore';
import TBody from './t-body';
import { SolutionSlideOver } from '../Solution-SlideOver';
import { Typography } from '@/components/ui/typography';
import { useParams } from "react-router-dom";
// import { LogTableEntry } from "@/types/type";
import { fetchLogTableData } from "@/services/fetch-log-table-data";
import { useQuery } from "@tanstack/react-query";
import TablePagination from './t-pagination';


const LogTable: React.FC = () => {
    const { openSlideOver, setOpenSlideOver, selectedLog, setSelectedLog } = useLogStore();
    const cd_id = localStorage.getItem("cd_id") ?? "";
    const cd_secret = localStorage.getItem("cd_secret") ?? "";;
    const { project_id } = useParams<{ project_id: string }>();
    console.log(cd_id, cd_secret, project_id);
    const { isLoading, error, data: tableData } = useQuery({
        queryKey: ['log-table', cd_id, cd_secret, project_id],
        queryFn: () => fetchLogTableData(cd_id, cd_secret, project_id ?? ""),
        refetchOnWindowFocus: false
    })
    console.log(tableData);

    const handleRowClick = async (data: LogTableEntry) => {
        setOpenSlideOver(true);
        setSelectedLog(data);
    }
    return (
        <div>
            <Typography variant="xl" className=" px-2 py-2 ">Error logs</Typography>
            <Table>
                <THead />
                <TBody tableData={tableData ?? []} onRowClick={handleRowClick} />
            </Table>
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
                <TablePagination />
            </div>
            <SolutionSlideOver open={openSlideOver} onOpenChange={setOpenSlideOver} errorLog={selectedLog} onMarkResolved={() => setOpenSlideOver(false)} />
        </div>
    )
}

export default LogTable