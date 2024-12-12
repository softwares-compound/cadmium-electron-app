import React from "react";
import { TableBody, TableCell, TableRow } from "@/components/ui/table";
import { HttpMethodBadge } from "./http-methods";
import { LogTableEntry } from "@/types/type";
import addEllipsis from "@/lib/ellipsis";
import ActionButton from "./action";


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
                    <TableCell className="font-medium">{new Date(data.createdAt).toLocaleString()}</TableCell>
                    <TableCell className="text-left ">{addEllipsis(data.error, 100, 3)}</TableCell>
                    <TableCell className="">
                        <HttpMethodBadge variant={data.method}>{data.method}</HttpMethodBadge>
                    </TableCell>
                    <TableCell className="">{addEllipsis(data.url, 30, 30)}</TableCell>
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

