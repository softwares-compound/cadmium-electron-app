import { Button } from "@/components/ui/button";
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
} from "@/components/ui/sheet";
import { Typography } from "@/components/ui/typography";
import { DialogTitle } from "@radix-ui/react-dialog";
// import CodeBlock from "./code-block";
// import { Copy } from "lucide-react";
import { LogTableEntry } from "@/types/type";
import ReactMarkdown from "react-markdown";
import { HttpMethodBadge } from "../log-table/http-methods";

export interface SlideOverProps {
    open: boolean;
    onOpenChange: (open: boolean) => void;
    errorLog: LogTableEntry | null;
    onMarkResolved: () => void;
}

export function SolutionSlideOver({
    open,
    onOpenChange,
    errorLog,
    onMarkResolved,
}: SlideOverProps) {

    if (!errorLog) {
        return null;
    }

    return (
        <Sheet open={open} onOpenChange={onOpenChange}>
            <SheetContent className="w-full sm:w-3/4 xl:w-2/4 overflow-y-scroll">
                <SheetHeader>
                    <DialogTitle className="text-lg font-semibold">Error Details</DialogTitle>
                    <SheetDescription className="">
                        Review the error details and follow the resolution steps below.
                    </SheetDescription>
                </SheetHeader>
                <div className="grid gap-4 py-4">
                    {/* Error Details */}
                    <div>
                        <Typography variant="small" className="font-semibold">
                            Timestamp
                        </Typography>
                        <Typography variant="sm" className="text-muted-foreground">
                            {new Date(errorLog.createdAt).toLocaleString()}
                        </Typography>
                    </div>
                    <div>
                        <Typography variant="small" className="font-semibold">
                            API Endpoint
                        </Typography>
                        <Typography variant="sm" className="text-muted-foreground">
                            {errorLog.url}
                        </Typography>
                    </div>
                    <div>
                        <Typography variant="small" className="font-semibold">
                            HTTP Method
                        </Typography>
                        <HttpMethodBadge variant={errorLog.method} className="">
                            {errorLog.method}
                        </HttpMethodBadge>
                    </div>
                    <div>
                        <Typography variant="small" className="font-semibold">
                            Error Message
                        </Typography>
                        <Typography variant="sm" className="text-muted-foreground">
                            {errorLog.error}
                        </Typography>
                    </div>
                    {errorLog.ragInference ? (
                        <div>
                            <Typography variant="small" className="font-semibold">
                                Possible Resolution Steps
                            </Typography>
                            <div>
                                {/* {errorLog.ragInference.rag_response?.formatted_rag_response.map((item, index) => (
                                    <div key={index} className="mb-4">
                                        {item.type === "markdown" && (
                                            <div className="text-xs">
                                                <ReactMarkdown>{item.value}</ReactMarkdown>
                                            </div>
                                        )}
                                        {item.type === "code" && (
                                            <div>
                                                <div className="flex items-center justify-between">
                                                    <Typography
                                                        variant="sm"
                                                        className="text-muted-foreground"
                                                    >
                                                        Code Snippet
                                                    </Typography>
                                                    <Button
                                                        variant="ghost"
                                                        className="text-xs py-0"
                                                        onClick={() => navigator.clipboard.writeText(item.value)}
                                                    >
                                                        <Copy /> Copy
                                                    </Button>
                                                </div>
                                                <CodeBlock codeString={item.value} />
                                            </div>
                                        )}
                                    </div>
                                ))} */}
                                <div className="text-xs">
                                    <ReactMarkdown>{errorLog.ragInference.rag_response?.rag_response.rag_response}</ReactMarkdown>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div>
                            <Typography variant="small" className="font-semibold">
                                Possible Resolution Steps
                            </Typography>
                            <Typography
                                variant="sm"
                                className="text-muted-foreground text-center my-8"
                            >
                                No inference found to resolve
                            </Typography>
                        </div>
                    )}
                </div>
                <SheetFooter>
                    <SheetClose asChild>
                        <Button type="button" onClick={onMarkResolved}>
                            Mark as Resolved
                        </Button>
                    </SheetClose>
                </SheetFooter>
            </SheetContent>
        </Sheet>
    );
}
