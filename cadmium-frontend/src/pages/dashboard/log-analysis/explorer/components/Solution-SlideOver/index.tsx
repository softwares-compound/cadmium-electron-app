import { Button } from "@/components/ui/button";
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
} from "@/components/ui/sheet";

import { DialogTitle } from "@radix-ui/react-dialog";
import { LogTableEntry } from "@/types/type";
import { RagInference } from "./rag-inference";
import { StackTrace } from "./stack-trace";
import { GeneralInfo } from "./general-info";
import StreamingComponent from "./test";

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
                    <SheetDescription>
                        Review the error details and follow the resolution steps below.
                    </SheetDescription>
                </SheetHeader>
                <div className="grid gap-4 py-4">

                    {/* General Info */}
                    <GeneralInfo
                        createdAt={errorLog.createdAt}
                        url={errorLog.url}
                        method={errorLog.method}
                        error={errorLog.error}
                    />

                    <StreamingComponent />

                    {/* Stack Trace Accordion */}
                    <StackTrace traceback={errorLog.traceback} />

                    <DialogTitle className="text-lg font-semibold">Possible solution</DialogTitle>

                    {/* Rag inference */}
                    {
                        errorLog.isStreaming === true ? <StreamingComponent /> :
                            <RagInference
                                ragResponse={
                                    errorLog.ragInference?.rag_response?.rag_response?.rag_response
                                }
                            />
                    }
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
