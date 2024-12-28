import { Button } from "@/components/ui/button";
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
} from "@/components/ui/sheet";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

import { Typography } from "@/components/ui/typography";
import { DialogTitle } from "@radix-ui/react-dialog";
import CodeBlock from "./code-block";
import { Copy } from "lucide-react";
import { LogTableEntry } from "@/types/type";
import ReactMarkdown from "react-markdown";
import { HttpMethodBadge } from "../log-table/http-methods";
import remarkGfm from 'remark-gfm'; // Enables GitHub-flavored markdown
import rehypeRaw from 'rehype-raw'; // Allows rendering raw HTML safely
import { ScrollArea } from "@/components/ui/scroll-area";

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
            <SheetContent className="w-full sm:w-3/4 xl:w-4/6 overflow-y-scroll">
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
                            Error
                        </Typography>
                        <Typography variant="sm" className="text-muted-foreground text-tiny">
                            {errorLog.error}
                        </Typography>
                    </div>
                    <div className="text-xs" >
                        <Accordion type="single" collapsible className="">
                            <AccordionItem value="item-1">
                                <AccordionTrigger className="text-xs border-0 ring-0 hover:ring-0 hover:border-0  hover:bg-muted-foreground/50">
                                    <Typography variant="small" className="font-semibold px-1">
                                        Stack Trace
                                    </Typography>
                                </AccordionTrigger>
                                <AccordionContent >
                                    <ScrollArea className="h-[400px]  rounded-md border ">
                                        <pre>
                                            <code>
                                                <CodeBlock codeString={errorLog.traceback} />
                                            </code>
                                        </pre>
                                    </ScrollArea>
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                    </div>

                    <DialogTitle className="text-lg font-semibold">Possible solution</DialogTitle>
                    {errorLog.ragInference ? (
                        <div>
                            <Typography variant="small" className="font-semibold">
                                Steps to resolve
                            </Typography>
                            <div className="text-tiny">
                                <ReactMarkdown
                                    remarkPlugins={[remarkGfm]} // Enable GFM (e.g., tables, checkboxes)
                                    rehypePlugins={[rehypeRaw]} // Allow raw HTML
                                    components={{
                                        code({ className, children, ...props }) {
                                            const match = /language-(\w+)/.exec(className || "");
                                            const code = String(children).replace(/\n$/, "");

                                            return match ? (
                                                <div className="my-4 ">
                                                    <div className="flex items-center justify-between mb-2">
                                                        <Typography
                                                            variant="sm"
                                                            className="text-muted-foreground"
                                                        >
                                                            Code Snippet
                                                        </Typography>
                                                        <p
                                                            className="flex items-center justify-between -mb-2 text-xs py-0 hover:bg-transparent border-none hover:text-muted-foreground cursor-pointer"
                                                            onClick={() => navigator.clipboard.writeText(code)}
                                                        >
                                                            <Copy width={16} /> Copy
                                                        </p>
                                                    </div>
                                                    <CodeBlock codeString={code} />
                                                </div>
                                            ) : (
                                                <code
                                                    className="inline-block text-muted-foreground px-2 py-1 rounded-md text-sm font-mono italic"
                                                    {...props}
                                                >
                                                    `{children}`
                                                </code>
                                            );
                                        },
                                        strong: ({ ...props }) => (
                                            <strong
                                                className="font-bold"
                                                {...props}
                                            />
                                        ),
                                        h1: ({ ...props }) => (
                                            <h1
                                                {...props}
                                            />
                                        ),
                                        h2: ({ ...props }) => (
                                            <h2
                                                {...props}
                                            />
                                        ),
                                        h3: ({ ...props }) => (
                                            <h3  {...props} />
                                        ),
                                        p: ({ ...props }) => (
                                            <p
                                                className="my-4"
                                                {...props}
                                            />
                                        ),
                                        blockquote: ({ ...props }) => (
                                            <blockquote
                                                {...props}
                                            />
                                        ),
                                        ul: ({ ...props }) => (
                                            <ul
                                                {...props}
                                            />
                                        ),
                                        ol: ({ ...props }) => (
                                            <ol
                                                {...props}
                                            />
                                        ),
                                        a: ({ ...props }) => (
                                            <a
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                {...props}
                                            />
                                        ),
                                        img: ({ ...props }) => (
                                            <img
                                                alt=""
                                                {...props}
                                            />
                                        ),
                                        table: ({ ...props }) => (
                                            <table
                                                {...props}
                                            />
                                        ),
                                        th: ({ ...props }) => (
                                            <th
                                                {...props}
                                            />
                                        ),
                                        td: ({ ...props }) => (
                                            <td
                                                {...props}
                                            />
                                        ),
                                    }}
                                >{errorLog.ragInference.rag_response?.rag_response.rag_response}</ReactMarkdown>
                            </div>
                        </div>
                    ) : (
                        <div>
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
