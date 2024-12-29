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
    <div className="grid gap-6 bg-gray-900 text-gray-100 p-6 rounded-lg shadow-lg">
      {/* Timestamp Section */}
      <div>
        <Typography variant="small" className="font-semibold text-gray-100 mb-1">
          Timestamp
        </Typography>
        <Typography variant="sm" className="text-gray-400 text-tiny">
          {new Date(createdAt).toLocaleString()}
        </Typography>
      </div>

      {/* API Endpoint Section */}
      <div>
        <Typography variant="small" className="font-semibold text-gray-100 mb-1">
          API Endpoint
        </Typography>
        <Typography
          variant="sm"
          className="text-gray-400 text-tiny break-words"
        >
            {url ? new URL(url).pathname : "N/A"}
        </Typography>
      </div>

      {/* HTTP Method Section */}
      <div>
        <Typography variant="small" className="font-semibold text-gray-100 mb-1">
          HTTP Method
        </Typography>
        <HttpMethodBadge
          variant={method}
          className="inline-block text-sm px-3 py-1 rounded-md font-mono uppercase bg-gray-800 text-gray-300 border border-gray-700"
        >
          {method || "N/A"}
        </HttpMethodBadge>
      </div>

      {/* Error Section */}
      <div>
        <Typography variant="small" className="font-semibold text-gray-100 mb-1">
          Error
        </Typography>
        <Typography
          variant="sm"
          className="text-gray-400 text-tiny break-words"
        >
          {error || "No error information available"}
        </Typography>
      </div>
    </div>
  );
}
