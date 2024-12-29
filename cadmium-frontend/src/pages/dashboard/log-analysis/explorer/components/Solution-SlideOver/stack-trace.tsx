import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { Typography } from "@/components/ui/typography";
import { ScrollArea } from "@/components/ui/scroll-area";
import CodeBlock from "@/components/custom/global/code-block";

export interface StackTraceProps {
    traceback: string;
}

export function StackTrace({ traceback }: StackTraceProps) {
    return (
        <div className="text-sm bg-gray-900 text-gray-100 p-4 rounded-lg shadow-lg">
            <Accordion
                type="single"
                collapsible
                className="bg-gray-800 rounded-md shadow-md border border-gray-700"
            >
                <AccordionItem value="item-1">
                    {/* Accordion Trigger */}
                    <AccordionTrigger className="text-sm bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-gray-100 rounded-md px-3 py-2 transition-all focus:outline-none focus:ring-2 focus:ring-blue-500">
                        <Typography
                            variant="small"
                            className="font-semibold tracking-wide"
                        >
                            Stack Trace
                        </Typography>
                    </AccordionTrigger>

                    {/* Accordion Content */}
                    <AccordionContent className="bg-gray-900 rounded-md p-4">
                        <ScrollArea
                            className="h-[400px] rounded-md border border-gray-700 bg-black text-gray-100 shadow-inner overflow-auto"
                        >
                            <pre className="text-xs leading-5 text-gray-300 whitespace-pre-wrap break-all">
                                <code>
                                    <CodeBlock codeString={traceback} language="python" />
                                </code>
                            </pre>
                        </ScrollArea>
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        </div>
    );
}
