import React from "react";
import { TableBody, TableCell, TableRow } from "@/components/ui/table";
import { HttpMethodBadge } from "./http-methods";
import { LogTableEntry } from "@/types/type";
import addEllipsis from "@/lib/ellipsis";
import ActionButton from "./action";
import { getApiEndpoint } from "@/lib/getApiEndpoint";


type Props = {
    tableData: LogTableEntry[] | null;
    onRowClick?: (data: LogTableEntry) => void;
};

const TBody: React.FC<Props> = ({ tableData, onRowClick }) => {
    const handleRowClick = (data: LogTableEntry) => {
        if (onRowClick) {
            onRowClick(data);
        }
    };

    return (
        <TableBody>
            {tableData && tableData.map((data, index) => (
                <TableRow
                    key={index}
                    className="cursor-pointer dark:hover:bg-muted-foreground hover:bg-accent"
                    onClick={() => handleRowClick(data)}
                >
                    <TableCell className="font-medium w-[250px]">{new Date(data.createdAt).toLocaleString()}</TableCell>
                    <TableCell className="text-left w-[700px]">{addEllipsis(data.error, 100, 3)}</TableCell>
                    <TableCell className="w-[100px]">
                        <HttpMethodBadge variant={data.method}>{data.method}</HttpMethodBadge>
                    </TableCell>
                    <TableCell className="">{getApiEndpoint(data.url)}</TableCell>
                    <TableCell
                        className="text-right "
                        onClick={(e) => e.stopPropagation()}
                    >
                        <ActionButton />
                    </TableCell>
                </TableRow>
            ))}
        </TableBody>
    );
};

export default TBody;

