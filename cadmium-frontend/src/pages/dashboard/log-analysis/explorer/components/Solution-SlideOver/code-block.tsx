import SyntaxHighlighter from 'react-syntax-highlighter';
import atelierDuneDark from "react-syntax-highlighter/dist/esm/styles/hljs/atelier-cave-dark";
const CodeBlock = ({ codeString }: { codeString: string }) => {
    return (
        <SyntaxHighlighter
            language="javascript"
            style={atelierDuneDark}
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