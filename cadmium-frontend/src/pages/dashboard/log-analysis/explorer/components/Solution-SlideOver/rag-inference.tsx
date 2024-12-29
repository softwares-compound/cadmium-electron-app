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
        className="text-center text-gray-400 my-8"
      >
        No inference found to resolve
      </Typography>
    );
  }

  return (
    <div className="bg-gray-900 text-gray-100 p-6 rounded-lg">
      <Typography
        variant="small"
        className="font-semibold text-lg text-gray-100 mb-4"
      >
        Steps to resolve
      </Typography>
      <div className="text-sm leading-6 text-gray-300">
        <ReactMarkdown
          remarkPlugins={[remarkGfm]} // Enable GFM (e.g., tables, checkboxes)
          rehypePlugins={[rehypeRaw]} // Allow raw HTML
          components={{
            code({ className, children, ...props }) {
              const match = /language-(\w+)/.exec(className || "");
              const code = String(children).replace(/\n$/, "");

              return match ? (
                <div className="my-4 bg-gray-800 border border-gray-700 rounded-md p-4">
                  <div className="flex items-center justify-between mb-2">
                    <Typography
                      variant="sm"
                      className="text-gray-400"
                    >
                      Code Snippet
                    </Typography>
                    <p
                      className="flex items-center text-xs cursor-pointer text-gray-400 hover:text-gray-300"
                      onClick={() => navigator.clipboard.writeText(code)}
                    >
                      <Copy width={16} className="mr-1" /> Copy
                    </p>
                  </div>
                  <CodeBlock codeString={code} />
                </div>
              ) : (
                <code
                  className="inline-block bg-gray-800 text-gray-100 px-2 py-1 rounded-md text-sm font-mono italic"
                  {...props}
                >
                  {children}
                </code>
              );
            },
            strong: ({ ...props }) => (
              <strong
                className="font-bold text-gray-100"
                {...props}
              />
            ),
            h1: ({ ...props }) => (
              <h1
                className="text-2xl font-bold text-gray-100 border-b border-gray-700 mb-4 pb-2"
                {...props}
              />
            ),
            h2: ({ ...props }) => (
              <h2
                className="text-xl font-semibold text-gray-200 my-4"
                {...props}
              />
            ),
            h3: ({ ...props }) => (
              <h3
                className="text-lg font-semibold text-gray-300 my-3"
                {...props}
              />
            ),
            p: ({ ...props }) => (
              <p
                className="my-4 text-gray-300"
                {...props}
              />
            ),
            blockquote: ({ ...props }) => (
              <blockquote
                className="border-l-4 border-blue-600 bg-gray-800 text-blue-400 italic p-4 my-6 rounded"
                {...props}
              />
            ),
            ul: ({ ...props }) => (
              <ul
                className="list-disc list-inside my-4 text-gray-300"
                {...props}
              />
            ),
            ol: ({ ...props }) => (
              <ol
                className="list-decimal list-inside my-4 text-gray-300"
                {...props}
              />
            ),
            a: ({ ...props }) => (
              <a
                className="text-blue-400 underline hover:text-blue-300"
                target="_blank"
                rel="noopener noreferrer"
                {...props}
              />
            ),
            img: ({ ...props }) => (
              <img
                className="my-4 rounded-md shadow-lg border border-gray-700"
                alt=""
                {...props}
              />
            ),
            table: ({ ...props }) => (
              <table
                className="table-auto w-full border-collapse border border-gray-700 my-4 bg-gray-800 text-gray-300"
                {...props}
              />
            ),
            th: ({ ...props }) => (
              <th
                className="border border-gray-700 bg-gray-700 p-2 text-left font-semibold text-gray-200"
                {...props}
              />
            ),
            td: ({ ...props }) => (
              <td
                className="border border-gray-700 p-2 text-gray-300"
                {...props}
              />
            ),
          }}
        >
          {ragResponse}
        </ReactMarkdown>
      </div>
    </div>
  );
}
