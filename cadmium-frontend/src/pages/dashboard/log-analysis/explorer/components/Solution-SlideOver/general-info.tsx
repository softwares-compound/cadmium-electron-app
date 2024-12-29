import { Typography } from "@/components/ui/typography";
import { HttpMethodBadge } from "../log-table/http-methods";

export interface GeneralInfoProps {
    createdAt: string;
    url: string;
    method: "default" | "GET" | "POST" | "PUT" | "PATCH" | "DELETE" | null | undefined;
    error: string;
}

export function GeneralInfo({ createdAt, url, method, error }: GeneralInfoProps) {
    return (
        <div className="grid gap-4">
            <div>
                <Typography variant="small" className="font-semibold">
                    Timestamp
                </Typography>
                <Typography variant="sm" className="text-muted-foreground">
                    {new Date(createdAt).toLocaleString()}
                </Typography>
            </div>
            <div>
                <Typography variant="small" className="font-semibold">
                    API Endpoint
                </Typography>
                <Typography variant="sm" className="text-muted-foreground">
                    {url}
                </Typography>
            </div>
            <div>
                <Typography variant="small" className="font-semibold">
                    HTTP Method
                </Typography>
                <HttpMethodBadge variant={method}>
                    {method}
                </HttpMethodBadge>
            </div>
            <div>
                <Typography variant="small" className="font-semibold">
                    Error
                </Typography>
                <Typography variant="sm" className="text-muted-foreground text-tiny">
                    {error}
                </Typography>
            </div>
        </div>
    );
}
