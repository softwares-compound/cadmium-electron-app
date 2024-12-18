import React from 'react'
import {
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"

const THead: React.FC = () => {
    return (
        <TableHeader>
            <TableRow>
                <TableHead className="w-[100px]">Timestamp</TableHead>
                <TableHead className="text-left ">Error message</TableHead>
                <TableHead className="w-[50px] ">Method</TableHead>
                <TableHead className="w-[50px] ">API endpoint</TableHead>
                <TableHead className="text-right w-[50px] ">Action</TableHead>
            </TableRow>
        </TableHeader>
    )
}

export default THead