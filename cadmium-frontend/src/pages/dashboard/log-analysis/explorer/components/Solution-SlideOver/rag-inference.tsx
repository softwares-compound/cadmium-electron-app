import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import { Typography } from "@/components/ui/typography";
import { Copy } from "lucide-react";
import CodeBlock from "@/components/custom/global/code-block";


export interface RagInferenceProps {
    ragResponse: string | undefined;
}

export function RagInference({ ragResponse }: RagInferenceProps) {
    if (!ragResponse) {
        return (
            <Typography
                variant="sm"
                className="text-muted-foreground text-center my-8"
            >
                No inference found to resolve
            </Typography>
        );
    }

    return (
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
                                            onClick={() =>
                                                navigator.clipboard.writeText(code)
                                            }
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
                            <strong className="font-bold" {...props} />
                        ),
                        h1: ({ ...props }) => <h1 {...props} />,
                        h2: ({ ...props }) => <h2 {...props} />,
                        h3: ({ ...props }) => <h3 {...props} />,
                        p: ({ ...props }) => <p className="my-4" {...props} />,
                        blockquote: ({ ...props }) => (
                            <blockquote {...props} />
                        ),
                        ul: ({ ...props }) => <ul {...props} />,
                        ol: ({ ...props }) => <ol {...props} />,
                        a: ({ ...props }) => (
                            <a
                                target="_blank"
                                rel="noopener noreferrer"
                                {...props}
                            />
                        ),
                        img: ({ ...props }) => <img alt="" {...props} />,
                        table: ({ ...props }) => <table {...props} />,
                        th: ({ ...props }) => <th {...props} />,
                        td: ({ ...props }) => <td {...props} />,
                    }}
                >
                    {ragResponse}
                </ReactMarkdown>
            </div>
        </div>
    );
}
