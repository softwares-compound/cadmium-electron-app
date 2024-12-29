import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Typography } from "@/components/ui/typography";
import { ScrollArea } from "@/components/ui/scroll-area";
import CodeBlock from "@/components/custom/global/code-block";


export interface StackTraceProps {
    traceback: string;
}

export function StackTrace({ traceback }: StackTraceProps) {
    return (
        <div className="text-xs">
            <Accordion type="single" collapsible>
                <AccordionItem value="item-1">
                    <AccordionTrigger className="text-xs border-0 ring-0 hover:ring-0 hover:border-0 hover:bg-muted-foreground/50">
                        <Typography variant="small" className="font-semibold px-1">
                            Stack Trace
                        </Typography>
                    </AccordionTrigger>
                    <AccordionContent>
                        <ScrollArea className="h-[400px] rounded-md border bg-black">
                            <pre>
                                <code>
                                    <CodeBlock codeString={traceback} />
                                </code>
                            </pre>
                        </ScrollArea>
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        </div>
    );
}
