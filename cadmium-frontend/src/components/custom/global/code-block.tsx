import SyntaxHighlighter from 'react-syntax-highlighter';
import * as themes from "react-syntax-highlighter/dist/esm/styles/hljs";
const CodeBlock = ({ codeString, language }: { codeString: string, language: string }) => {
    return (
        <SyntaxHighlighter
            language={language}
            style={themes["atomOneDark"]}
            wrapLongLines
            // showLineNumbers
            // showInlineLineNumbers
            startingLineNumber={5}
            customStyle={{ margin: 0, padding: 10, background: "none", borderRadius: 5, fontSize: 11, backgroundColor: "black" }}
        >
            {codeString}
        </SyntaxHighlighter>
    );
};

export default CodeBlock