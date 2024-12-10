import { Table } from '@/components/ui/table';
import React from 'react'
import THead from './t-head';
import { LogTableEntry } from '@/types/type';
import { useLogStore } from '@/stores/useLogStore';
import TBody from './t-body';
import { SolutionSlideOver } from '../Solution-SlideOver';


type Props = {
    tableData: LogTableEntry[] | null
}

const LogTable: React.FC<Props> = ({ tableData }) => {
    const { openSlideOver, setOpenSlideOver, selectedLog, setSelectedLog } = useLogStore();


    const handleRowClick = async (data: LogTableEntry) => {
        setOpenSlideOver(true);
        setSelectedLog(data);
    }
    return (
        <div>
            <Table>
                <THead />
                <TBody tableData={tableData} onRowClick={handleRowClick} />
            </Table>
            <SolutionSlideOver open={openSlideOver} onOpenChange={setOpenSlideOver} errorLog={selectedLog} onMarkResolved={() => setOpenSlideOver(false)} />
        </div>
    )
}

export default LogTable