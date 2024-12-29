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
                <TableHead className="w-[250px]">Timestamp</TableHead>
                <TableHead className="text-left w-[700px]">Error message</TableHead>
                <TableHead className="w-[100px]">Method</TableHead>
                <TableHead className="">API endpoint</TableHead>
                <TableHead className="text-right">Action</TableHead>
            </TableRow>
        </TableHeader>
    )
}

export default THead