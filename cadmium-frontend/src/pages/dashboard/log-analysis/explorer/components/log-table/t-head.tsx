import React from 'react'
import {
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"

const THead: React.FC = () => {
    return (
        <TableHeader>
            <TableRow className=''>
                <TableHead className="w-[100px]">Timestamp</TableHead>
                <TableHead>API endpoint</TableHead>
                <TableHead>Method</TableHead>
                <TableHead className="text-left">Error message</TableHead>
                <TableHead className="text-right">Action</TableHead>
            </TableRow>
        </TableHeader>
    )
}

export default THead